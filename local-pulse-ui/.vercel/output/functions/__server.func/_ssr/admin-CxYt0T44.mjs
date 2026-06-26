import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as api } from "./AppContext-BT3qM9c6.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./admin-Dsv4QOu0.mjs";
import { n as Input, r as cn, t as Button } from "./input-wipxj9S9.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { $ as ChartColumn, A as FileText, F as ChevronDown, I as Check, N as ClipboardList, P as ChevronUp, Q as CircleCheck, R as Calendar, S as Map, Y as LoaderCircle, Z as CircleCheckBig, a as UserX, c as Trash2, d as ShieldAlert, h as Plus, l as Star, m as Search, o as UserCheck, q as TriangleAlert, r as Users, t as X } from "../_libs/lucide-react.mjs";
import { a as useRouteGuard, t as AppShell } from "./useRouteGuard-CYgdOl03.mjs";
import { t as issueService } from "./issue.service-BZA5ilcn.mjs";
import { t as eventService } from "./event.service-CJDs_W6U.mjs";
import { t as providerService } from "./provider.service-Bqo-MFyi.mjs";
import { t as dashboardService } from "./dashboard.service-C1qw7JWA.mjs";
import { a as STATUS_LABEL, r as PROVIDER_CATEGORIES, t as ADMIN_TABS } from "./constants-CyPHHQ4y.mjs";
import { t as Label } from "./label-CXxqgUVc.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose$1, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { t as Switch } from "./switch-BkH24Mxn.mjs";
import { t as StatusBadge } from "./StatusBadge-P0Wocr5E.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CxYt0T44.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var adminService = {
	getStats: () => api.get("/admin/stats"),
	getConfig: () => api.get("/admin/system-config"),
	updateConfig: (payload) => api.put("/admin/system-config", payload),
	deleteProvider: (id) => api.delete(`/providers/${id}`),
	registerProvider: (payload) => api.post("/providers/register", payload),
	getUsers: (params) => api.get("/admin/users", { params }).then((res) => ({
		...res,
		data: {
			...res.data,
			data: (res.data.data || []).map((u) => ({
				id: String(u.id),
				name: u.full_name || u.name || "User",
				email: u.email,
				role: u.role || "citizen",
				city: u.city || "",
				avatarUrl: `https://api.dicebear.com/7.x/adventurer/svg?seed=${u.email}`,
				createdAt: u.created_at || (/* @__PURE__ */ new Date()).toISOString(),
				is_active: u.is_active ?? true,
				contributionScore: u.contributionScore ?? 0,
				reportsCount: u.reportsCount ?? 0
			}))
		}
	})),
	suspendUser: (userId) => api.patch(`/admin/users/${userId}/suspend`),
	activateUser: (userId) => api.patch(`/admin/users/${userId}/activate`),
	deleteUser: (userId) => api.delete(`/admin/users/${userId}`),
	getEvents: (params) => api.get("/events", { params }).then((res) => ({
		...res,
		data: {
			...res.data,
			data: res.data.data || []
		}
	})),
	approveEvent: (eventId) => api.patch(`/events/${eventId}/approve`),
	rejectEvent: (eventId) => api.patch(`/events/${eventId}/reject`),
	deleteEvent: (eventId) => api.delete(`/events/${eventId}`),
	deleteComment: (commentId) => api.delete(`/comments/${commentId}`),
	moderateComment: (commentId, action) => api.post(`/admin/moderate/comments/${commentId}`, null, { params: { action } })
};
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogClose = DialogClose$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose$1, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function AdminPage() {
	const { isLoading: guardLoading } = useRouteGuard(["admin"]);
	const { tab = "summary" } = Route.useSearch();
	const navigate = useNavigate();
	if (guardLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary mx-auto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Authenticating admin session..."
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-start justify-between border-b pb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-2xl md:text-3xl font-extrabold flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-7 w-7 text-primary" }), " Admin Operations"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm mt-1",
					children: "Manage the LocalPulse civic platform"
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 overflow-x-auto pb-1 -mb-2 scrollbar-none",
				children: ADMIN_TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => navigate({
						to: "/admin",
						search: { tab: t.value }
					}),
					className: cn("px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors", tab === t.value ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted"),
					children: t.label
				}, t.value))
			}),
			tab === "summary" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryTab, {}),
			tab === "reports" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportsTab, {}),
			tab === "users" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersTab, {}),
			tab === "providers" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProvidersTab, {}),
			tab === "events" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsTab, {}),
			tab === "config" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfigTab, {}),
			tab === "stats" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsTab, {})
		]
	}) });
}
function SummaryTab() {
	const { data: stats, isLoading: statsLoading } = useQuery({
		queryKey: ["admin", "stats"],
		queryFn: () => dashboardService.adminStats().then((res) => res.data.data)
	});
	const resolutionRate = stats && stats.totalReports > 0 ? Math.round((stats.resolvedIssues ?? 0) / stats.totalReports * 100) : 0;
	const cards = stats ? [
		{
			label: "Total Reports",
			value: stats.totalReports ?? 0,
			icon: FileText,
			color: "text-secondary bg-secondary/10"
		},
		{
			label: "Open Issues",
			value: stats.openIssues ?? 0,
			icon: TriangleAlert,
			color: "text-amber-600 bg-amber-50 dark:bg-amber-950/30"
		},
		{
			label: "Resolved",
			value: stats.resolvedIssues ?? 0,
			icon: CircleCheck,
			color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30"
		},
		{
			label: "Events",
			value: stats.events ?? 0,
			icon: Calendar,
			color: "text-primary bg-primary/10"
		},
		{
			label: "Users",
			value: stats.users ?? 0,
			icon: Users,
			color: "text-blue-600 bg-blue-50 dark:bg-blue-950/30"
		}
	] : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 md:grid-cols-5 gap-4",
			children: statsLoading ? Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-card border rounded-2xl p-4 animate-pulse h-24" }, i)) : cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border rounded-2xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `h-10 w-10 rounded-xl grid place-items-center ${c.color}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 text-2xl font-extrabold",
						children: (c.value ?? 0).toLocaleString()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: c.label
					})
				]
			}, c.label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-2 gap-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border rounded-2xl p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold",
						children: "Issue Status Distribution"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-4 w-4 text-muted-foreground" })]
				}), stats ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [[
						{
							label: "Open",
							value: stats.openIssues ?? 0,
							color: "bg-amber-500"
						},
						{
							label: "Resolved",
							value: stats.resolvedIssues ?? 0,
							color: "bg-emerald-500"
						},
						{
							label: "Other",
							value: Math.max(0, (stats.totalReports ?? 0) - (stats.openIssues ?? 0) - (stats.resolvedIssues ?? 0)),
							color: "bg-blue-500"
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: item.value
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 bg-muted rounded-full overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-full rounded-full ${item.color}`,
								style: { width: `${stats.totalReports > 0 ? Math.round(item.value / stats.totalReports * 100) : 0}%` }
							})
						})]
					}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground pt-1",
						children: ["Resolution rate: ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-bold text-emerald-600",
							children: [resolutionRate, "%"]
						})]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-44 rounded-xl bg-muted/40 animate-pulse" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border rounded-2xl p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold",
						children: "Issue Heatmap"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map, { className: "h-4 w-4 text-muted-foreground" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 h-44 rounded-xl bg-gradient-to-br from-[color:var(--civic-orange-soft)] to-[color:var(--civic-blue-soft)] grid place-items-center text-sm text-muted-foreground",
					children: "Geospatial heatmap (AI — coming soon)"
				})]
			})]
		})]
	});
}
function ReportsTab() {
	const queryClient = useQueryClient();
	const [search, setSearch] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [pendingStatus, setPendingStatus] = (0, import_react.useState)({});
	const { data: issuesData, isLoading: issuesLoading } = useQuery({
		queryKey: [
			"issues",
			"admin",
			{
				search,
				statusFilter
			}
		],
		queryFn: () => issueService.list({
			q: search || void 0,
			status: statusFilter !== "all" ? statusFilter : void 0
		}).then((res) => res.data.data)
	});
	const updateStatusMutation = useMutation({
		mutationFn: ({ id, status }) => issueService.updateStatus(id, status),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["issues", "admin"] });
			toast.success("Issue status updated successfully!");
		},
		onError: () => toast.error("Failed to update status.")
	});
	const deleteMutation = useMutation({
		mutationFn: (id) => issueService.delete(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["issues", "admin"] });
			queryClient.invalidateQueries({ queryKey: ["admin", "stats"] });
			toast.success("Issue report deleted.");
		},
		onError: () => toast.error("Failed to delete issue.")
	});
	const issues = issuesData ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-card border rounded-2xl overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "font-bold flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "h-4 w-4" }),
					" All Reports",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-normal text-muted-foreground ml-1",
						children: [
							"(",
							issues.length,
							")"
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Search...",
						className: "pl-9 h-10 w-56",
						value: search,
						onChange: (e) => setSearch(e.target.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: statusFilter,
					onValueChange: setStatusFilter,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-10 w-36",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "all",
							children: "All statuses"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "open",
							children: "Open"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "under_review",
							children: "Under Review"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "in_progress",
							children: "In Progress"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "resolved",
							children: "Resolved"
						})
					] })]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-muted/40 text-left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Issue"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Category"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Location"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Actions"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: issuesLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 5,
					className: "px-5 py-8 text-center text-muted-foreground",
					children: "Loading issues..."
				}) }) : issues.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 5,
					className: "px-5 py-8 text-center text-muted-foreground",
					children: "No issues found."
				}) }) : issues.map((i) => {
					const selected = pendingStatus[i.id] ?? i.status;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t hover:bg-muted/30 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-3 font-medium max-w-[240px] truncate",
								children: i.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-3 capitalize",
								children: i.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-3 text-muted-foreground max-w-[160px] truncate",
								children: i.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: i.status })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: selected,
											onValueChange: (v) => setPendingStatus((prev) => ({
												...prev,
												[i.id]: v
											})),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "h-8 w-36 text-xs",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [
												"open",
												"under_review",
												"in_progress",
												"resolved"
											].map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: st,
												children: STATUS_LABEL[st]
											}, st)) })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "outline",
											className: "h-8",
											disabled: updateStatusMutation.isPending || selected === i.status,
											onClick: () => updateStatusMutation.mutate({
												id: i.id,
												status: selected
											}),
											children: "Update"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "ghost",
											className: "h-8 w-8 p-0 text-destructive",
											disabled: deleteMutation.isPending,
											onClick: () => {
												if (confirm(`Delete "${i.title}"? This can't be undone.`)) deleteMutation.mutate(i.id);
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
										})
									]
								})
							})
						]
					}, i.id);
				}) })]
			})
		})]
	});
}
function UsersTab() {
	const queryClient = useQueryClient();
	const [search, setSearch] = (0, import_react.useState)("");
	const { data: usersData, isLoading, isError } = useQuery({
		queryKey: [
			"admin",
			"users",
			search
		],
		queryFn: () => adminService.getUsers({ q: search || void 0 }).then((res) => res.data.data)
	});
	const suspendMutation = useMutation({
		mutationFn: (id) => adminService.suspendUser(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["admin", "users"] });
			toast.success("User suspended.");
		},
		onError: () => toast.error("Action failed. Check if endpoint is available.")
	});
	const activateMutation = useMutation({
		mutationFn: (id) => adminService.activateUser(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["admin", "users"] });
			toast.success("User activated.");
		},
		onError: () => toast.error("Action failed.")
	});
	const deleteMutation = useMutation({
		mutationFn: (id) => adminService.deleteUser(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["admin", "users"] });
			toast.success("User deleted.");
		},
		onError: () => toast.error("Action failed.")
	});
	const users = usersData ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-card border rounded-2xl overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "font-bold flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" }),
					" All Users",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-normal text-muted-foreground ml-1",
						children: [
							"(",
							users.length,
							")"
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Search users...",
					className: "pl-9 h-10 w-64",
					value: search,
					onChange: (e) => setSearch(e.target.value)
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-muted/40 text-left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "User"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Role"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "City"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Actions"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 6,
					className: "px-5 py-8 text-center text-muted-foreground",
					children: "Loading users..."
				}) }) : isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 6,
					className: "px-5 py-8 text-center text-destructive",
					children: "Failed to load users. The /admin/users endpoint may not be implemented yet."
				}) }) : users.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 6,
					className: "px-5 py-8 text-center text-muted-foreground",
					children: "No users found."
				}) }) : users.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t hover:bg-muted/30 transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: u.avatarUrl,
									alt: u.name,
									className: "h-8 w-8 rounded-full object-cover border"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: u.name
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3 text-muted-foreground",
							children: u.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("px-2 py-0.5 rounded-full text-[11px] font-semibold", u.role === "admin" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"),
								children: u.role
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3 text-muted-foreground",
							children: u.city || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("px-2 py-0.5 rounded-full text-[11px] font-semibold", u.is_active !== false ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400" : "bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400"),
								children: u.is_active !== false ? "Active" : "Suspended"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [u.is_active !== false ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "outline",
									className: "h-8 text-xs text-amber-600 border-amber-300 hover:bg-amber-50",
									disabled: suspendMutation.isPending,
									onClick: () => {
										if (confirm(`Suspend ${u.name}?`)) suspendMutation.mutate(u.id);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserX, { className: "h-3.5 w-3.5 mr-1" }), " Suspend"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "outline",
									className: "h-8 text-xs text-emerald-600 border-emerald-300 hover:bg-emerald-50",
									disabled: activateMutation.isPending,
									onClick: () => activateMutation.mutate(u.id),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "h-3.5 w-3.5 mr-1" }), " Activate"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									className: "h-8 w-8 p-0 text-destructive",
									disabled: deleteMutation.isPending,
									onClick: () => {
										if (confirm(`Permanently delete ${u.name}? This can't be undone.`)) deleteMutation.mutate(u.id);
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
								})]
							})
						})
					]
				}, u.id)) })]
			})
		})]
	});
}
function ProvidersTab() {
	const queryClient = useQueryClient();
	const [showAddModal, setShowAddModal] = (0, import_react.useState)(false);
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		category: "plumber",
		contact_email: "",
		contact_phone: "",
		service_radius_km: 10,
		latitude: 22.7196,
		longitude: 75.8577
	});
	const { data: providers, isLoading, isError } = useQuery({
		queryKey: ["admin", "providers"],
		queryFn: () => providerService.list({ radiusKm: 100 }).then((res) => res.data.data)
	});
	const deleteProviderMutation = useMutation({
		mutationFn: (id) => adminService.deleteProvider(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["admin", "providers"] });
			toast.success("Provider deleted successfully.");
		},
		onError: () => toast.error("Failed to delete provider.")
	});
	const registerProviderMutation = useMutation({
		mutationFn: (payload) => adminService.registerProvider(payload),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["admin", "providers"] });
			setShowAddModal(false);
			toast.success("Provider registered successfully!");
			setFormData({
				name: "",
				category: "plumber",
				contact_email: "",
				contact_phone: "",
				service_radius_km: 10,
				latitude: 22.7196,
				longitude: 75.8577
			});
		},
		onError: (err) => toast.error(err?.response?.data?.message ?? "Failed to register provider.")
	});
	const handleRegister = (e) => {
		e.preventDefault();
		if (!formData.name || !formData.contact_email || !formData.contact_phone) {
			toast.error("Please fill in all required fields.");
			return;
		}
		registerProviderMutation.mutate({
			...formData,
			service_radius_km: parseFloat(formData.service_radius_km.toString()),
			latitude: parseFloat(formData.latitude.toString()),
			longitude: parseFloat(formData.longitude.toString())
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-bold text-lg",
					children: "Local Service Providers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setShowAddModal(true),
					className: "flex items-center gap-1.5 rounded-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Register Provider"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-card border rounded-2xl overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-muted/40 text-left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Category"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Phone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Radius"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Actions"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: 6,
							className: "px-5 py-8 text-center text-muted-foreground",
							children: "Loading providers..."
						}) }) : isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: 6,
							className: "px-5 py-8 text-center text-destructive",
							children: "Failed to load service providers."
						}) }) : providers?.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: 6,
							className: "px-5 py-8 text-center text-muted-foreground",
							children: "No service providers registered."
						}) }) : providers?.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t hover:bg-muted/30 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3 font-medium",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "capitalize",
											children: p.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-semibold",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-amber-500 stroke-amber-500" }),
												" ",
												p.rating
											]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3 capitalize",
									children: p.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3 text-muted-foreground",
									children: p.contact_email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3 text-muted-foreground",
									children: p.contact_phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-5 py-3 text-muted-foreground",
									children: [p.service_radius_km, " km"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										className: "h-8 w-8 p-0 text-destructive",
										disabled: deleteProviderMutation.isPending,
										onClick: () => {
											if (confirm(`Remove provider "${p.name}"?`)) deleteProviderMutation.mutate(p.id);
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
									})
								})
							]
						}, p.id)) })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: showAddModal,
				onOpenChange: setShowAddModal,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Register Service Provider" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Add a new verified service provider profile to LocalPulse." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleRegister,
						className: "space-y-4 my-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "pname",
								children: "Provider / Business Name *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "pname",
								placeholder: "e.g. Ramesh Plumbing Services",
								value: formData.name,
								onChange: (e) => setFormData((p) => ({
									...p,
									name: e.target.value
								})),
								className: "mt-1",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Category *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: formData.category,
									onValueChange: (v) => setFormData((p) => ({
										...p,
										category: v
									})),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "mt-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PROVIDER_CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
										value: cat.value,
										children: [
											cat.emoji,
											" ",
											cat.label
										]
									}, cat.value)) })]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "pradius",
									children: "Service Radius (km)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "pradius",
									type: "number",
									min: "0.5",
									max: "100",
									step: "0.5",
									value: formData.service_radius_km,
									onChange: (e) => setFormData((p) => ({
										...p,
										service_radius_km: parseFloat(e.target.value)
									})),
									className: "mt-1"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "pemail",
								children: "Contact Email *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "pemail",
								type: "email",
								placeholder: "ramesh@example.com",
								value: formData.contact_email,
								onChange: (e) => setFormData((p) => ({
									...p,
									contact_email: e.target.value
								})),
								className: "mt-1",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "pphone",
								children: "Contact Phone *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "pphone",
								type: "tel",
								placeholder: "+91 9876543210",
								value: formData.contact_phone,
								onChange: (e) => setFormData((p) => ({
									...p,
									contact_phone: e.target.value
								})),
								className: "mt-1",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "plat",
									children: "Latitude"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "plat",
									type: "number",
									step: "0.0001",
									value: formData.latitude,
									onChange: (e) => setFormData((p) => ({
										...p,
										latitude: parseFloat(e.target.value)
									})),
									className: "mt-1"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "plng",
									children: "Longitude"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "plng",
									type: "number",
									step: "0.0001",
									value: formData.longitude,
									onChange: (e) => setFormData((p) => ({
										...p,
										longitude: parseFloat(e.target.value)
									})),
									className: "mt-1"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "outline",
										children: "Cancel"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: registerProviderMutation.isPending,
									children: registerProviderMutation.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Register"
								})]
							})
						]
					})]
				})
			})
		]
	});
}
function EventsTab() {
	const queryClient = useQueryClient();
	const [search, setSearch] = (0, import_react.useState)("");
	const { data: eventsData, isLoading, isError } = useQuery({
		queryKey: [
			"admin",
			"events",
			search
		],
		queryFn: () => eventService.list({ q: search || void 0 }).then((res) => res.data.data)
	});
	const approveMutation = useMutation({
		mutationFn: (id) => eventService.approve(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["admin", "events"] });
			toast.success("Event approved.");
		},
		onError: () => toast.error("Failed to approve event. Endpoint may not be available.")
	});
	const rejectMutation = useMutation({
		mutationFn: (id) => eventService.reject(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["admin", "events"] });
			toast.success("Event rejected.");
		},
		onError: () => toast.error("Failed to reject event.")
	});
	const deleteMutation = useMutation({
		mutationFn: (id) => eventService.delete(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["admin", "events"] });
			toast.success("Event deleted.");
		},
		onError: () => toast.error("Failed to delete event.")
	});
	const events = eventsData ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-card border rounded-2xl overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "font-bold flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }),
					" All Events",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-normal text-muted-foreground ml-1",
						children: [
							"(",
							events.length,
							")"
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Search events...",
					className: "pl-9 h-10 w-64",
					value: search,
					onChange: (e) => setSearch(e.target.value)
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-muted/40 text-left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Event"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Organizer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Date"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Location"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Interested"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-semibold",
							children: "Actions"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 6,
					className: "px-5 py-8 text-center text-muted-foreground",
					children: "Loading events..."
				}) }) : isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 6,
					className: "px-5 py-8 text-center text-destructive",
					children: "Failed to load events."
				}) }) : events.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 6,
					className: "px-5 py-8 text-center text-muted-foreground",
					children: "No events found."
				}) }) : events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t hover:bg-muted/30 transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3 font-medium max-w-[200px] truncate",
							children: e.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3 text-muted-foreground",
							children: e.organizer
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3 text-muted-foreground",
							children: e.date
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3 text-muted-foreground max-w-[160px] truncate",
							children: e.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3",
							children: e.interestedCount
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "outline",
										className: "h-8 text-xs text-emerald-600 border-emerald-300 hover:bg-emerald-50",
										disabled: approveMutation.isPending,
										onClick: () => approveMutation.mutate(e.id),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-3.5 w-3.5 mr-1" }), " Approve"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "outline",
										className: "h-8 text-xs text-amber-600 border-amber-300 hover:bg-amber-50",
										disabled: rejectMutation.isPending,
										onClick: () => rejectMutation.mutate(e.id),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5 mr-1" }), " Reject"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										className: "h-8 w-8 p-0 text-destructive",
										disabled: deleteMutation.isPending,
										onClick: () => {
											if (confirm(`Delete "${e.title}"?`)) deleteMutation.mutate(e.id);
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
									})
								]
							})
						})
					]
				}, e.id)) })]
			})
		})]
	});
}
function ConfigTab() {
	const queryClient = useQueryClient();
	const [config, setConfig] = (0, import_react.useState)({
		maintenance_mode: false,
		allow_registration: true,
		issue_auto_assignment: false,
		max_upload_size_mb: 10,
		default_search_radius_km: 5,
		notifications_enabled: true,
		provider_auto_approval: false,
		event_creation_enabled: true
	});
	const { isLoading, isError } = useQuery({
		queryKey: ["admin", "config"],
		queryFn: () => adminService.getConfig().then((res) => {
			if (res.data.data) setConfig(res.data.data);
			return res.data.data;
		})
	});
	const saveMutation = useMutation({
		mutationFn: (payload) => adminService.updateConfig(payload),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["admin", "config"] });
			toast.success("System configurations updated.");
		},
		onError: () => toast.error("Failed to save configurations.")
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		saveMutation.mutate({
			...config,
			max_upload_size_mb: parseInt(config.max_upload_size_mb.toString()),
			default_search_radius_km: parseInt(config.default_search_radius_km.toString())
		});
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex py-12 items-center justify-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ml-2 text-sm text-muted-foreground",
			children: "Loading system settings..."
		})]
	});
	if (isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-destructive/10 text-destructive text-sm p-4 rounded-xl text-center",
		children: "Failed to fetch system configurations. Please reload the page."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl bg-card border rounded-2xl p-6 space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-bold text-lg",
			children: "System Configuration"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground text-sm",
			children: "Control global application behaviors"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [[
					{
						key: "maintenance_mode",
						label: "Maintenance Mode",
						desc: "Force application into read-only mode"
					},
					{
						key: "allow_registration",
						label: "Allow New Registrations",
						desc: "Permit new user registrations"
					},
					{
						key: "issue_auto_assignment",
						label: "Automated Issue Assignment",
						desc: "Automatically assign issues to matching providers"
					},
					{
						key: "notifications_enabled",
						label: "Notifications Dispatcher",
						desc: "Enable system emails and push alerts"
					},
					{
						key: "provider_auto_approval",
						label: "Provider Auto-Approval",
						desc: "Automatically approve new service providers"
					},
					{
						key: "event_creation_enabled",
						label: "Allow Event Creation",
						desc: "Enable citizens to schedule civic meetups"
					}
				].map(({ key, label, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "font-semibold text-sm",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: desc
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: config[key],
						onCheckedChange: (checked) => setConfig((prev) => ({
							...prev,
							[key]: checked
						}))
					})]
				}, key)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "max_upload",
						children: "Max Attachment Size (MB)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "max_upload",
						type: "number",
						min: "1",
						max: "100",
						value: config.max_upload_size_mb,
						onChange: (e) => setConfig((p) => ({
							...p,
							max_upload_size_mb: parseInt(e.target.value)
						})),
						className: "mt-1"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "search_radius",
						children: "Default Search Radius (km)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "search_radius",
						type: "number",
						min: "1",
						max: "50",
						value: config.default_search_radius_km,
						onChange: (e) => setConfig((p) => ({
							...p,
							default_search_radius_km: parseInt(e.target.value)
						})),
						className: "mt-1"
					})] })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "w-full rounded-xl",
				disabled: saveMutation.isPending,
				children: saveMutation.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Save Configurations"
			})]
		})]
	});
}
function StatsTab() {
	const { data: stats, isLoading } = useQuery({
		queryKey: ["admin", "stats"],
		queryFn: () => dashboardService.adminStats().then((res) => res.data.data)
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex py-12 items-center justify-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ml-2 text-sm text-muted-foreground",
			children: "Gathering statistics..."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid md:grid-cols-2 gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card border rounded-2xl p-6 space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-bold text-lg",
				children: "System Utilization"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "Platform database size and usage metrics"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: [
					{
						label: "Database Engine",
						value: "MongoDB Atlas"
					},
					{
						label: "Total Users",
						value: stats?.users ?? 0
					},
					{
						label: "Issues Logged",
						value: stats?.totalReports ?? 0
					},
					{
						label: "Events Active",
						value: stats?.events ?? 0
					},
					{
						label: "Resolution Rate",
						value: `${stats?.totalReports ? Math.round((stats.resolvedIssues ?? 0) / stats.totalReports * 100) : 0}%`
					}
				].map(({ label, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between border-b pb-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: String(value)
					})]
				}, label))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card border rounded-2xl p-6 space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-bold text-lg",
				children: "API Performance"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "Average service response times"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: [
					{
						label: "Avg Response Time",
						value: "~200 ms",
						green: true
					},
					{
						label: "Success Rate (2xx)",
						value: "99.8%",
						green: true
					},
					{
						label: "Backend Status",
						value: "Online ✅",
						green: true
					},
					{
						label: "Uptime",
						value: "99.99%",
						green: true
					}
				].map(({ label, value, green }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between border-b pb-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `font-semibold ${green ? "text-emerald-600" : ""}`,
						children: value
					})]
				}, label))
			})]
		})]
	});
}
//#endregion
export { AdminPage as component };
