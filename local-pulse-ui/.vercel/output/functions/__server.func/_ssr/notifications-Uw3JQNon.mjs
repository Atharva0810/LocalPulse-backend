import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as cn, t as Button } from "./input-wipxj9S9.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { Q as CircleCheck, R as Calendar, U as AtSign, V as Bell, W as ArrowUp, Y as LoaderCircle, b as MessageCircle, d as ShieldAlert } from "../_libs/lucide-react.mjs";
import { a as useRouteGuard, r as notificationService, t as AppShell } from "./useRouteGuard-CYgdOl03.mjs";
import { r as timeAgo, t as SkeletonCard } from "./SkeletonCard-BMRq53tJ.mjs";
import { t as EmptyState } from "./EmptyState-B0joMvPI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notifications-Uw3JQNon.js
var import_jsx_runtime = require_jsx_runtime();
var iconMap = {
	status_updated: Bell,
	comment_added: MessageCircle,
	new_event: Calendar,
	issue_resolved: CircleCheck,
	new_upvotes: ArrowUp,
	admin_alert: ShieldAlert,
	mention: AtSign
};
function NotificationCard({ notif, onClick }) {
	const Icon = iconMap[notif.type];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onClick,
		className: cn("flex gap-3 p-4 rounded-2xl border transition-colors", onClick && "cursor-pointer hover:border-primary/30", notif.read ? "bg-card" : "bg-accent/40 border-primary/20"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-semibold text-sm",
						children: notif.title
					}), !notif.read && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary shrink-0" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: notif.message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: timeAgo(notif.createdAt)
				})
			]
		})]
	});
}
function NotificationsPage() {
	const { isLoading: guardLoading } = useRouteGuard(["citizen", "admin"]);
	const queryClient = useQueryClient();
	const { data, isLoading, isError } = useQuery({
		queryKey: ["notifications"],
		queryFn: () => notificationService.list().then((res) => res.data.data),
		enabled: !guardLoading
	});
	const markReadMutation = useMutation({
		mutationFn: (id) => notificationService.markRead(id),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notifications"] })
	});
	if (guardLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" })
	});
	const notifications = data ?? [];
	const unread = notifications.filter((n) => !n.read);
	const markAllRead = async () => {
		await Promise.all(unread.map((n) => markReadMutation.mutateAsync(n.id)));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl mx-auto space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl md:text-3xl font-extrabold",
				children: "Notifications"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm mt-1",
				children: "Stay updated on your reports and your neighborhood"
			})] }), unread.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "sm",
				onClick: markAllRead,
				disabled: markReadMutation.isPending,
				children: "Mark all read"
			})]
		}), isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: Bell,
			title: "Couldn't load notifications",
			description: "Please check your connection and try again."
		}) : isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {}, i))
		}) : notifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: Bell,
			title: "No notifications yet",
			description: "You'll see updates on your reports and neighborhood activity here."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: notifications.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onClick: () => !n.read && markReadMutation.mutate(n.id),
				className: "cursor-pointer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationCard, { notif: n })
			}, n.id))
		})]
	}) });
}
//#endregion
export { NotificationsPage as component };
