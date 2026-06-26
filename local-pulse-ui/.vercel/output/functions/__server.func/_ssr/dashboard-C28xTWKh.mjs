import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as useApp } from "./AppContext-BT3qM9c6.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./input-wipxj9S9.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { $ as ChartColumn, A as FileText, C as MapPin, G as ArrowRight, M as Clock, Q as CircleCheck, R as Calendar, Y as LoaderCircle, n as Wrench, q as TriangleAlert, r as Users, s as TrendingUp, v as Navigation } from "../_libs/lucide-react.mjs";
import { a as useRouteGuard, n as LocationPicker, t as AppShell } from "./useRouteGuard-CYgdOl03.mjs";
import { t as dashboardService } from "./dashboard.service-C1qw7JWA.mjs";
import { t as RadiusSelector } from "./RadiusSelector-Bk2h06iy.mjs";
import { t as SkeletonCard } from "./SkeletonCard-BMRq53tJ.mjs";
import { t as IssueCard } from "./IssueCard-vZBbwusK.mjs";
import { t as EventCard } from "./EventCard-v8sOWLjH.mjs";
import { t as ProviderCard } from "./ProviderCard-D3j6Tsur.mjs";
import { t as FloatingActionButton } from "./FloatingActionButton-CdLpKTDQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-C28xTWKh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	const { isLoading: guardLoading, user } = useRouteGuard(["citizen", "admin"]);
	const { radiusKm, userLocation, setUserLocation, detectLocation, isDetectingLocation } = useApp();
	const [showPicker, setShowPicker] = (0, import_react.useState)(false);
	if (guardLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center min-h-[400px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" })
	}) });
	if (user?.role === "admin") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDashboard, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CitizenDashboard, {});
}
function AdminDashboard() {
	const { user } = useApp();
	const { data: stats, isLoading: statsLoading } = useQuery({
		queryKey: ["admin", "stats"],
		queryFn: () => dashboardService.adminStats().then((res) => res.data.data)
	});
	const statCards = stats ? [
		{
			label: "Total Users",
			value: stats.users ?? 0,
			icon: Users,
			color: "text-blue-600 bg-blue-50 dark:bg-blue-950/30",
			change: "+12 today"
		},
		{
			label: "Total Reports",
			value: stats.totalReports ?? 0,
			icon: FileText,
			color: "text-secondary bg-secondary/10",
			change: "All time"
		},
		{
			label: "Open Issues",
			value: stats.openIssues ?? 0,
			icon: TriangleAlert,
			color: "text-amber-600 bg-amber-50 dark:bg-amber-950/30",
			change: "Needs attention"
		},
		{
			label: "Resolved",
			value: stats.resolvedIssues ?? 0,
			icon: CircleCheck,
			color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30",
			change: "All time"
		},
		{
			label: "Events",
			value: stats.events ?? 0,
			icon: Calendar,
			color: "text-primary bg-primary/10",
			change: "Active"
		}
	] : [];
	const resolutionRate = stats && stats.totalReports > 0 ? Math.round((stats.resolvedIssues ?? 0) / stats.totalReports * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 text-white p-6 md:p-8 shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm opacity-80",
							children: "Admin Operations Center"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-2xl md:text-3xl font-extrabold mt-1",
							children: [
								"Welcome back, ",
								user?.name?.split(" ")[0],
								" 👋"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm opacity-70 mt-2",
							children: stats ? `${stats.openIssues ?? 0} issues need your attention · ${resolutionRate}% resolution rate` : "Loading platform statistics..."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin",
							search: { tab: "reports" },
							className: "inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2.5 font-semibold shadow hover:bg-white/90 text-sm",
							children: ["Manage Reports ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-5 gap-4",
				children: statsLoading ? Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-card border rounded-2xl p-4 animate-pulse h-28" }, i)) : statCards.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border rounded-2xl p-4 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `h-10 w-10 rounded-xl grid place-items-center ${s.color}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-2xl font-extrabold",
							children: (s.value ?? 0).toLocaleString()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-medium text-foreground",
							children: s.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-muted-foreground mt-0.5",
							children: s.change
						})
					]
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-3 gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 bg-card border rounded-2xl p-5",
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
								total: stats.totalReports ?? 1,
								color: "bg-amber-500"
							},
							{
								label: "Resolved",
								value: stats.resolvedIssues ?? 0,
								total: stats.totalReports ?? 1,
								color: "bg-emerald-500"
							},
							{
								label: "In Progress",
								value: Math.max(0, (stats.totalReports ?? 0) - (stats.openIssues ?? 0) - (stats.resolvedIssues ?? 0)),
								total: stats.totalReports ?? 1,
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
									style: { width: `${item.total > 0 ? Math.round(item.value / item.total * 100) : 0}%` }
								})
							})]
						}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 text-xs text-muted-foreground text-right",
							children: ["Resolution rate: ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-bold text-emerald-600",
								children: [resolutionRate, "%"]
							})]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-44 rounded-xl bg-muted/40 animate-pulse" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border rounded-2xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold mb-4",
						children: "Quick Actions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: [
							{
								label: "Manage Reports",
								to: "/admin",
								search: { tab: "reports" },
								icon: FileText,
								color: "text-amber-600 bg-amber-50 dark:bg-amber-950/30"
							},
							{
								label: "Manage Users",
								to: "/admin",
								search: { tab: "users" },
								icon: Users,
								color: "text-blue-600 bg-blue-50 dark:bg-blue-950/30"
							},
							{
								label: "Providers",
								to: "/admin",
								search: { tab: "providers" },
								icon: Wrench,
								color: "text-purple-600 bg-purple-50 dark:bg-purple-950/30"
							},
							{
								label: "Events",
								to: "/admin",
								search: { tab: "events" },
								icon: Calendar,
								color: "text-primary bg-primary/10"
							},
							{
								label: "Analytics",
								to: "/admin",
								search: { tab: "stats" },
								icon: TrendingUp,
								color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30"
							}
						].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: a.to,
							search: a.search,
							className: "flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `h-8 w-8 rounded-lg grid place-items-center ${a.color}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: a.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" })
							]
						}, a.label))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border rounded-2xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold",
							children: "Platform Overview"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: [
							{
								label: "Database",
								value: "MongoDB Atlas"
							},
							{
								label: "Total Issues",
								value: (stats?.totalReports ?? 0).toLocaleString()
							},
							{
								label: "Active Users",
								value: (stats?.users ?? 0).toLocaleString()
							},
							{
								label: "Events",
								value: (stats?.events ?? 0).toLocaleString()
							},
							{
								label: "Resolution Rate",
								value: `${resolutionRate}%`
							}
						].map(({ label, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between border-b pb-2 text-sm last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: value
							})]
						}, label))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border rounded-2xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold",
							children: "API Health"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: [
							{
								label: "Backend Status",
								value: "✅ Online",
								green: true
							},
							{
								label: "Avg Response",
								value: "~200ms"
							},
							{
								label: "Auth Service",
								value: "✅ Active",
								green: true
							},
							{
								label: "Storage",
								value: "MongoDB"
							},
							{
								label: "API Version",
								value: "v1"
							}
						].map(({ label, value, green }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between border-b pb-2 text-sm last:border-0",
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
			})
		]
	}) });
}
function CitizenDashboard() {
	const { radiusKm, userLocation, setUserLocation, detectLocation, isDetectingLocation, user } = useApp();
	const [showPicker, setShowPicker] = (0, import_react.useState)(false);
	const { data, isLoading, isError } = useQuery({
		queryKey: [
			"dashboard",
			radiusKm,
			userLocation.latitude,
			userLocation.longitude
		],
		queryFn: () => dashboardService.overview({
			radiusKm,
			...userLocation.isSet ? {
				latitude: userLocation.latitude,
				longitude: userLocation.longitude
			} : {}
		}).then((res) => res.data.data)
	});
	const stats = data?.stats;
	const nearbyIssues = data?.nearbyIssues ?? [];
	const nearbyEvents = data?.nearbyEvents ?? [];
	const nearbyProviders = data?.nearbyProviders ?? [];
	const statCards = stats ? [
		{
			label: "Total Reports",
			value: stats.totalReports ?? 0,
			icon: FileText,
			color: "text-secondary bg-secondary/10"
		},
		{
			label: "Open",
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
			label: "Citizens",
			value: stats.users ?? 0,
			icon: Users,
			color: "text-primary bg-primary/10"
		}
	] : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl bg-gradient-to-br from-primary to-[color:var(--civic-orange)] text-primary-foreground p-6 md:p-8 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm opacity-90",
								children: [
									"Namaste",
									user?.name ? `, ${user.name}` : "",
									" 👋"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-2xl md:text-3xl font-extrabold mt-1",
								children: "Your neighborhood, in one view"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm opacity-90 mt-2 max-w-lg",
								children: stats ? `${stats.openIssues ?? 0} issues need attention near you.` : "Loading your neighborhood updates..."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setShowPicker(true),
								className: "mt-3 inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), userLocation.isSet ? userLocation.city : "Set your location"]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/report",
							className: "self-start md:self-end inline-flex items-center gap-2 rounded-xl bg-background text-foreground px-4 py-2.5 font-semibold shadow hover:bg-background/90",
							children: ["Report Issue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					})
				}),
				!userLocation.isSet && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-5 w-5 text-amber-600 shrink-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold text-amber-900 dark:text-amber-200",
								children: "Location not set"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-amber-700 dark:text-amber-400 mt-0.5",
								children: "Set your location to see nearby issues, events and providers"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								className: "h-8 text-xs border-amber-300",
								onClick: async () => {
									await detectLocation();
								},
								disabled: isDetectingLocation,
								children: isDetectingLocation ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-3.5 w-3.5 mr-1" }), "Auto-detect"] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								className: "h-8 text-xs",
								onClick: () => setShowPicker(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 mr-1" }), "Pick on map"]
							})]
						})
					]
				}),
				isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-destructive",
					children: "Couldn't load dashboard data. Please try again."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
					children: isLoading ? Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-card border rounded-2xl p-4 animate-pulse h-24" }, i)) : statCards.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card border rounded-2xl p-4 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-10 w-10 rounded-xl grid place-items-center ${s.color}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-2xl font-extrabold",
								children: (s.value ?? 0).toLocaleString()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: s.label
							})
						]
					}, s.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold",
						children: "Nearby"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadiusSelector, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					title: "Nearby Issues",
					to: "/feed"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 xl:grid-cols-3 gap-5",
					children: isLoading ? Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {}, i)) : nearbyIssues.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground col-span-full py-6 text-center",
						children: ["No issues found nearby. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/report",
							className: "text-primary font-semibold",
							children: "Be the first to report one!"
						})]
					}) : nearbyIssues.slice(0, 3).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IssueCard, { issue: i }, i.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					title: "Nearby Events",
					to: "/events"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 xl:grid-cols-3 gap-5",
					children: isLoading ? Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {}, i)) : nearbyEvents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground col-span-full py-6 text-center",
						children: "No events in your area right now."
					}) : nearbyEvents.slice(0, 3).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, { event: e }, e.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					title: "Trusted Service Providers",
					to: "/providers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 xl:grid-cols-3 gap-5",
					children: isLoading ? Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {}, i)) : nearbyProviders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground col-span-full py-6 text-center",
						children: "No providers found in this radius."
					}) : nearbyProviders.slice(0, 3).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProviderCard, { provider: p }, p.id))
				})] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActionButton, {}),
		showPicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationPicker, {
			value: userLocation.isSet ? userLocation : null,
			onChange: (loc) => {
				setUserLocation({
					...loc,
					isSet: true
				});
				setShowPicker(false);
			},
			onClose: () => setShowPicker(false)
		})
	] });
}
function SectionHeader({ title, to }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between mb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-bold text-lg",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to,
			className: "text-sm font-semibold text-primary inline-flex items-center gap-1 hover:underline",
			children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
		})]
	});
}
//#endregion
export { Dashboard as component };
