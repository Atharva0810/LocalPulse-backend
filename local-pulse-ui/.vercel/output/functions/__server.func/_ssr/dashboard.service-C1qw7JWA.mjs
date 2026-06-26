import { n as api } from "./AppContext-BT3qM9c6.mjs";
import { t as issueService } from "./issue.service-BZA5ilcn.mjs";
import { t as eventService } from "./event.service-CJDs_W6U.mjs";
import { t as providerService } from "./provider.service-Bqo-MFyi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.service-C1qw7JWA.js
var dashboardService = {
	overview: async (params) => {
		const [issuesRes, eventsRes, providersRes] = await Promise.all([
			issueService.list(params),
			eventService.list(params),
			providerService.list(params)
		]);
		const nearbyIssues = issuesRes.data.data || [];
		const nearbyEvents = eventsRes.data.data || [];
		const nearbyProviders = providersRes.data.data || [];
		let stats = null;
		try {
			const backendStats = (await api.get("/dashboard/citizen-summary", { params: {
				latitude: params?.latitude ?? 0,
				longitude: params?.longitude ?? 0,
				radius_km: params?.radiusKm ?? 5
			} })).data.data;
			if (backendStats) stats = {
				totalReports: backendStats.recent_issues_count ?? 0,
				openIssues: Math.max(0, (backendStats.recent_issues_count ?? 0) - (backendStats.resolved_issues_count ?? 0)),
				resolvedIssues: backendStats.resolved_issues_count ?? 0,
				events: backendStats.upcoming_events_count ?? 0,
				users: 0,
				providers: backendStats.nearby_providers_count ?? 0
			};
		} catch {
			stats = {
				totalReports: nearbyIssues.length,
				openIssues: nearbyIssues.filter((i) => i.status === "open").length,
				resolvedIssues: nearbyIssues.filter((i) => i.status === "resolved").length,
				events: nearbyEvents.length,
				users: 1
			};
		}
		return { data: {
			success: true,
			data: {
				stats,
				nearbyIssues,
				nearbyEvents,
				nearbyProviders
			}
		} };
	},
	adminStats: () => api.get("/admin/stats").then((res) => {
		const backendStats = res.data.data;
		const stats = {
			totalReports: backendStats.total_issues ?? 0,
			openIssues: backendStats.open_issues ?? 0,
			resolvedIssues: backendStats.resolved_issues ?? 0,
			events: backendStats.total_events ?? 0,
			users: backendStats.total_users ?? 0
		};
		return {
			...res,
			data: {
				...res.data,
				data: stats
			}
		};
	})
};
//#endregion
export { dashboardService as t };
