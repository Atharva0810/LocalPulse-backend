import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as useApp, n as api } from "./AppContext-BT3qM9c6.mjs";
import { g as Link, v as useParams } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./input-wipxj9S9.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { C as MapPin, J as Sparkles, K as ArrowLeft, M as Clock, W as ArrowUp, Y as LoaderCircle, b as MessageCircle, c as Trash2, f as Share2, j as EyeOff, y as MessageSquarePlus } from "../_libs/lucide-react.mjs";
import { a as useRouteGuard, t as AppShell } from "./useRouteGuard-CYgdOl03.mjs";
import { t as issueService } from "./issue.service-BZA5ilcn.mjs";
import { a as STATUS_LABEL, n as ISSUE_CATEGORIES } from "./constants-CyPHHQ4y.mjs";
import { t as StatusBadge } from "./StatusBadge-P0Wocr5E.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as km, r as timeAgo, t as SkeletonCard } from "./SkeletonCard-BMRq53tJ.mjs";
import { t as IssueImage } from "./IssueImage-DeHR_eWW.mjs";
import { t as Textarea } from "./textarea-DClw33Hu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/issues._id-Zhm66Kjx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Lightweight Leaflet wrapper. Loads CSS + JS from CDN at runtime so the
* component is SSR-safe and avoids bundler import issues.
*/
function MapView({ center, zoom = 13, markers = [], radiusKm, className, height = 320 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let map;
		let cancelled = false;
		async function init() {
			if (!ref.current) return;
			if (!document.querySelector("link[data-leaflet]")) {
				const link = document.createElement("link");
				link.rel = "stylesheet";
				link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
				link.setAttribute("data-leaflet", "true");
				document.head.appendChild(link);
			}
			const L = await import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
			if (cancelled || !ref.current) return;
			map = L.map(ref.current, {
				zoomControl: true,
				scrollWheelZoom: false
			}).setView([center.latitude, center.longitude], zoom);
			L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				attribution: "&copy; OpenStreetMap contributors",
				maxZoom: 19
			}).addTo(map);
			markers.forEach((m) => {
				L.circleMarker([m.position.latitude, m.position.longitude], {
					radius: 8,
					fillColor: m.color ?? "#ea7c30",
					color: "#fff",
					weight: 2,
					fillOpacity: .95
				}).addTo(map).bindPopup(m.title ?? "");
			});
			if (radiusKm) L.circle([center.latitude, center.longitude], {
				radius: radiusKm * 1e3,
				color: "#2563eb",
				fillColor: "#2563eb",
				fillOpacity: .08,
				weight: 1
			}).addTo(map);
		}
		init();
		return () => {
			cancelled = true;
			if (map) map.remove();
		};
	}, [
		center.latitude,
		center.longitude,
		zoom,
		radiusKm,
		JSON.stringify(markers)
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "rounded-2xl overflow-hidden border bg-muted " + (className ?? ""),
		style: { height }
	});
}
/**
* Map backend CommentResponse → frontend Comment
*
* Backend fields (from comment.py CommentResponse):
*   id          : int
*   issue_id    : int
*   author_id   : int
*   author_name : str
*   content     : str        ← NOT "text"
*   created_at  : datetime
*   updated_at  : datetime
*/
var mapBackendCommentToFrontend = (backendComment) => {
	return {
		id: String(backendComment.id ?? backendComment.comment_id ?? ""),
		issueId: String(backendComment.issue_id ?? ""),
		author: {
			id: String(backendComment.author_id ?? ""),
			name: backendComment.author_name || backendComment.author?.name || "Citizen",
			avatarUrl: `https://api.dicebear.com/7.x/adventurer/svg?seed=${backendComment.author_id ?? "anon"}`
		},
		text: backendComment.content ?? backendComment.text ?? "",
		createdAt: backendComment.created_at || (/* @__PURE__ */ new Date()).toISOString(),
		isOwn: backendComment.is_own ?? false
	};
};
var commentService = {
	/**
	* GET /comments/{issue_id}
	* Lists all comments for an issue.
	*/
	list: (issueId) => api.get(`/comments/${issueId}`).then((res) => {
		const mapped = (res.data.data || []).map(mapBackendCommentToFrontend);
		return {
			...res,
			data: {
				...res.data,
				data: mapped
			}
		};
	}),
	/**
	* POST /comments/{issue_id}
	* Body: { content: string }   ← "content" is the required field name
	*/
	create: (issueId, text) => api.post(`/comments/${issueId}`, { content: text }).then((res) => {
		const mapped = mapBackendCommentToFrontend(res.data.data);
		return {
			...res,
			data: {
				...res.data,
				data: mapped
			}
		};
	}),
	/**
	* DELETE /comments/{comment_id}
	* Note: endpoint is /comments/{comment_id} — NOT /comments/single/{comment_id}
	*/
	delete: (commentId) => api.delete(`/comments/${commentId}`)
};
function IssueDetailsPage() {
	const { isLoading: guardLoading } = useRouteGuard(["citizen", "admin"]);
	const { id } = useParams({ from: "/issues/$id" });
	const { user } = useApp();
	const queryClient = useQueryClient();
	const [commentText, setCommentText] = (0, import_react.useState)("");
	const isAdmin = user?.role === "admin";
	const { data: issue, isLoading: issueLoading, isError: issueError } = useQuery({
		queryKey: ["issue", id],
		queryFn: () => issueService.get(id).then((res) => res.data.data),
		enabled: !guardLoading
	});
	const { data: comments = [], isLoading: commentsLoading } = useQuery({
		queryKey: ["comments", id],
		queryFn: () => commentService.list(id).then((res) => res.data.data),
		enabled: !guardLoading,
		refetchOnWindowFocus: true
	});
	const upvoteMutation = useMutation({
		mutationFn: () => issueService.upvote(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["issue", id] });
		},
		onError: () => toast.error("Failed to upvote. Please try again.")
	});
	const commentMutation = useMutation({
		mutationFn: (text) => commentService.create(id, text),
		onSuccess: () => {
			setCommentText("");
			queryClient.invalidateQueries({ queryKey: ["comments", id] });
			queryClient.invalidateQueries({ queryKey: ["issue", id] });
			toast.success("Comment posted!");
		},
		onError: (err) => {
			const msg = err?.response?.data?.message || err?.response?.data?.detail?.[0]?.msg || err?.response?.data?.detail || "Failed to post comment. Please try again.";
			toast.error(String(msg));
		}
	});
	const deleteCommentMutation = useMutation({
		mutationFn: (commentId) => commentService.delete(commentId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["comments", id] });
			queryClient.invalidateQueries({ queryKey: ["issue", id] });
			toast.success("Comment deleted.");
		},
		onError: (err) => {
			const msg = err?.response?.data?.message || "Failed to delete comment. You may not be authorized.";
			toast.error(String(msg));
		}
	});
	const handlePostComment = () => {
		const trimmed = commentText.trim();
		if (!trimmed) {
			toast.error("Comment cannot be empty.");
			return;
		}
		if (trimmed.length > 500) {
			toast.error("Comment must be 500 characters or fewer.");
			return;
		}
		commentMutation.mutate(trimmed);
	};
	if (guardLoading || issueLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4 max-w-5xl mx-auto pt-6 text-center",
		children: guardLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary mx-auto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Checking permissions..."
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {})] })
	}) });
	if (issueError || !issue) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-5xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/feed",
			className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to feed"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-destructive text-sm",
			children: "Couldn't load this issue. It may have been removed."
		})]
	}) });
	const cat = ISSUE_CATEGORIES.find((c) => c.value === issue.category);
	const timeline = [
		{
			status: "open",
			label: STATUS_LABEL.open
		},
		{
			status: "under_review",
			label: STATUS_LABEL.under_review
		},
		{
			status: "in_progress",
			label: STATUS_LABEL.in_progress
		},
		{
			status: "resolved",
			label: STATUS_LABEL.resolved
		}
	];
	const currentIdx = [
		"open",
		"under_review",
		"in_progress",
		"resolved"
	].indexOf(issue.status);
	const canDeleteComment = (c) => isAdmin || c.isOwn || c.author?.id === user?.id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 max-w-5xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/feed",
			className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to feed"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-[1fr_360px] gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl overflow-hidden border bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IssueImage, {
							src: issue.imageUrl,
							alt: issue.title,
							category: issue.category,
							className: "w-full aspect-[16/9] object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold",
											children: [
												cat?.emoji,
												" ",
												cat?.label
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: issue.status }),
										issue.anonymous && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-3 w-3" }), " Anonymous"]
										}),
										issue.aiSeverity && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }),
												" AI severity:",
												" ",
												issue.aiSeverity
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-2xl md:text-3xl font-extrabold",
									children: issue.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: issue.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: issue.address }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: km(issue.distanceKm) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: timeAgo(issue.createdAt) })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 pt-3 border-t flex-wrap",
									children: [
										!isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											className: "gap-1.5",
											disabled: upvoteMutation.isPending,
											onClick: () => upvoteMutation.mutate(),
											children: [
												upvoteMutation.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-4 w-4" }),
												"Upvote · ",
												issue.upvotes
											]
										}),
										isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm font-semibold text-muted-foreground",
											children: [
												"↑ ",
												issue.upvotes,
												" upvotes"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											className: "gap-1.5",
											onClick: () => document.getElementById("comment-box")?.focus(),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }),
												"Comments (",
												comments.length,
												")"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											size: "icon",
											onClick: () => navigator.share?.({
												url: window.location.href,
												title: issue.title
											}),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" })
										})
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "bg-card border rounded-2xl p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-bold text-lg",
							children: "Status Timeline"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-5 space-y-5",
							children: timeline.map((t, i) => {
								const done = i <= currentIdx;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-8 w-8 rounded-full grid place-items-center text-xs font-bold " + (done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"),
											children: i + 1
										}), i < timeline.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-0.5 flex-1 mt-1 " + (done ? "bg-primary" : "bg-border"),
											style: { minHeight: 24 }
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold " + (done ? "" : "text-muted-foreground"),
											children: t.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: done && i === currentIdx ? "Current status" : done ? "Completed" : "Pending"
										})]
									})]
								}, t.status);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "bg-card border rounded-2xl p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-bold text-lg mb-4",
								children: [
									"Comments (",
									comments.length,
									")"
								]
							}),
							commentsLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4 mb-5",
								children: [1, 2].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3 animate-pulse",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-8 rounded-full bg-muted shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 space-y-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 bg-muted rounded w-24" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 bg-muted rounded w-full" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 bg-muted rounded w-3/4" })
										]
									})]
								}, i))
							}) : comments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center gap-2 py-8 text-center border border-dashed rounded-xl mb-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquarePlus, { className: "h-8 w-8 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium text-muted-foreground",
										children: "Be the first to comment."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Share your thoughts on this issue."
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4 mb-5",
								children: comments.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3 group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: c.author.avatarUrl,
										alt: c.author.name,
										className: "h-8 w-8 rounded-full object-cover border shrink-0"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 flex-wrap",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-semibold",
													children: c.author.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs text-muted-foreground inline-flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }), timeAgo(c.createdAt)]
												})]
											}), canDeleteComment(c) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												className: "h-6 w-6 p-0 text-destructive opacity-0 group-hover:opacity-100 transition-opacity shrink-0",
												disabled: deleteCommentMutation.isPending,
												onClick: () => {
													if (confirm("Delete this comment? This can't be undone.")) deleteCommentMutation.mutate(c.id);
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3 w-3" })
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-foreground mt-1 leading-relaxed",
											children: c.text
										})]
									})]
								}, c.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 border-t space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "comment-box",
									placeholder: "Add a comment... (max 500 characters)",
									rows: 2,
									value: commentText,
									onChange: (e) => setCommentText(e.target.value),
									maxLength: 500,
									disabled: commentMutation.isPending
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-muted-foreground",
										children: [commentText.length, "/500"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										disabled: commentMutation.isPending || !commentText.trim(),
										onClick: handlePostComment,
										children: commentMutation.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin mr-1" }), "Posting..."] }) : "Post comment"
									})]
								})]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card border rounded-2xl p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold",
								children: "Location"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapView, {
									center: issue.location,
									markers: [{
										position: issue.location,
										title: issue.title
									}],
									height: 220
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-3",
								children: issue.address
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card border rounded-2xl p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold",
							children: "Reporter"
						}), issue.reporter && !issue.anonymous ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mt-3",
							children: [issue.reporter.avatarUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: issue.reporter.avatarUrl,
								className: "h-10 w-10 rounded-full",
								alt: ""
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-sm",
								children: issue.reporter.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: "Citizen Reporter"
							})] })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 text-sm text-muted-foreground inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }), " Reported anonymously"]
						})]
					}),
					isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-amber-900 dark:text-amber-200",
								children: "Admin Actions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-amber-700 dark:text-amber-400 mt-1 mb-3",
								children: "Manage this report from the admin panel."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin",
								search: { tab: "reports" },
								className: "inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 hover:underline",
								children: "Go to Reports Management →"
							})
						]
					})
				]
			})]
		})]
	}) });
}
//#endregion
export { IssueDetailsPage as component };
