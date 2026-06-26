import { n as api } from "./AppContext-BT3qM9c6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/issue.service-BZA5ilcn.js
var mapBackendCommentToFrontend = (backendComment) => {
	return {
		id: String(backendComment.id),
		issueId: String(backendComment.issue_id || ""),
		author: {
			id: String(backendComment.author_id || ""),
			name: backendComment.author_name || "Anonymous Citizen",
			avatarUrl: `https://api.dicebear.com/7.x/adventurer/svg?seed=${backendComment.author_id || "anon"}`
		},
		text: backendComment.text,
		createdAt: backendComment.created_at || (/* @__PURE__ */ new Date()).toISOString(),
		isOwn: backendComment.is_own ?? false
	};
};
var mapBackendIssueToFrontend = (backendIssue) => {
	if (!backendIssue) return null;
	return {
		id: String(backendIssue.id),
		title: backendIssue.title,
		description: backendIssue.description,
		category: (backendIssue.category || "other").toLowerCase(),
		status: (backendIssue.status || "open").toLowerCase(),
		imageUrl: backendIssue.image_url || void 0,
		location: {
			latitude: backendIssue.latitude ?? 22.7196,
			longitude: backendIssue.longitude ?? 75.8577
		},
		address: backendIssue.address || "Indore",
		distanceKm: backendIssue.distanceKm ?? .8,
		createdAt: backendIssue.created_at || (/* @__PURE__ */ new Date()).toISOString(),
		upvotes: backendIssue.upvotes ?? 0,
		commentsCount: backendIssue.comments_count ?? 0,
		reporter: backendIssue.reported_by ? {
			id: String(backendIssue.reported_by),
			name: backendIssue.reporter_name || "Citizen",
			avatarUrl: `https://api.dicebear.com/7.x/adventurer/svg?seed=${backendIssue.reported_by}`
		} : null,
		anonymous: backendIssue.anonymous ?? false,
		aiCategory: backendIssue.ai_category,
		aiSeverity: backendIssue.ai_severity,
		aiDescription: backendIssue.ai_description,
		duplicateOf: backendIssue.duplicate_of ?? null
	};
};
var issueService = {
	list: (params) => api.get("/issues", { params }).then((res) => {
		const mapped = (res.data.data || []).map(mapBackendIssueToFrontend);
		return {
			...res,
			data: {
				...res.data,
				data: mapped
			}
		};
	}),
	get: (id) => api.get(`/issues/${id}`).then((res) => {
		const mapped = mapBackendIssueToFrontend(res.data.data);
		return {
			...res,
			data: {
				...res.data,
				data: mapped
			}
		};
	}),
	create: (payload) => api.post("/issues", payload).then((res) => {
		const mapped = mapBackendIssueToFrontend(res.data.data);
		return {
			...res,
			data: {
				...res.data,
				data: mapped
			}
		};
	}),
	updateStatus: (id, status) => api.patch(`/issues/${id}`, { status }).then((res) => {
		const mapped = mapBackendIssueToFrontend(res.data.data);
		return {
			...res,
			data: {
				...res.data,
				data: mapped
			}
		};
	}),
	comment: (issueId, text) => api.post(`/comments/${issueId}`, { content: text }).then((res) => {
		const mapped = mapBackendCommentToFrontend(res.data.data);
		return {
			...res,
			data: {
				...res.data,
				data: mapped
			}
		};
	}),
	comments: (issueId) => api.get(`/comments/${issueId}`).then((res) => {
		const mapped = (res.data.data || []).map(mapBackendCommentToFrontend);
		return {
			...res,
			data: {
				...res.data,
				data: mapped
			}
		};
	}),
	upvote: (issueId) => api.post(`/issues/${issueId}/upvote`).then((res) => {
		const mapped = mapBackendIssueToFrontend(res.data.data);
		return {
			...res,
			data: {
				...res.data,
				data: { upvotes: mapped?.upvotes ?? 0 }
			}
		};
	}),
	myReports: () => api.get("/issues").then(async (res) => {
		let userId = null;
		try {
			const meRes = await api.get("/auth/me");
			userId = String(meRes.data.data?.id || "");
		} catch {
			return {
				...res,
				data: {
					...res.data,
					data: []
				}
			};
		}
		const all = (res.data.data || []).map(mapBackendIssueToFrontend);
		const mine = userId ? all.filter((i) => i.reporter?.id === userId) : all;
		return {
			...res,
			data: {
				...res.data,
				data: mine
			}
		};
	}),
	delete: (id) => api.delete(`/issues/${id}`),
	uploadImage: (file) => {
		const formData = new FormData();
		formData.append("file", file);
		return api.post("/issues/upload", formData, { headers: { "Content-Type": "multipart/form-data" } }).then((res) => res.data.data.image_url);
	}
};
//#endregion
export { issueService as t };
