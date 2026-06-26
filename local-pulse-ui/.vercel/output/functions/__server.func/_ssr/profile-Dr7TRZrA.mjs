import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as useApp, r as authService } from "./AppContext-BT3qM9c6.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./input-wipxj9S9.mjs";
import { A as FileText, B as Building, C as MapPin, H as Award, T as LogOut, W as ArrowUp, Y as LoaderCircle, p as Settings, u as ShieldCheck, w as Mail } from "../_libs/lucide-react.mjs";
import { a as useRouteGuard, t as AppShell } from "./useRouteGuard-CYgdOl03.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-Dr7TRZrA.js
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage() {
	const { isLoading: guardLoading, user } = useRouteGuard([
		"citizen",
		"provider",
		"authority",
		"admin"
	]);
	const { logout } = useApp();
	const navigate = useNavigate();
	if (guardLoading || !user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" })
	});
	const handleLogout = async () => {
		try {
			await authService.logout();
		} catch {} finally {
			logout();
			navigate({ to: "/" });
		}
	};
	const isAdmin = user.role === "admin";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `rounded-3xl p-6 md:p-8 text-white ${isAdmin ? "bg-gradient-to-br from-slate-700 to-slate-900" : "bg-gradient-to-br from-primary to-[color:var(--civic-orange)]"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [user.avatarUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: user.avatarUrl,
						alt: user.name,
						className: "h-20 w-20 rounded-2xl border-4 border-white/30 object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-2xl md:text-3xl font-extrabold truncate",
									children: user.name
								}), isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }), " Admin"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm opacity-90 inline-flex items-center gap-1.5 mt-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5" }),
									" ",
									user.email
								]
							}),
							user.city && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm opacity-80 inline-flex items-center gap-1.5 mt-0.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
									" ",
									user.city
								]
							})
						]
					})]
				})
			}),
			!isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-4",
				children: [
					{
						label: "Reports",
						value: user.reportsCount,
						icon: FileText
					},
					{
						label: "Upvotes Given",
						value: user.upvotesGiven,
						icon: ArrowUp
					},
					{
						label: "Score",
						value: user.contributionScore,
						icon: Award
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border rounded-2xl p-4 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5 mx-auto text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-xl font-extrabold",
							children: s.value ?? 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: s.label
						})
					]
				}, s.label))
			}),
			isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-4",
				children: [
					{
						label: "Role",
						value: "Administrator",
						icon: ShieldCheck
					},
					{
						label: "City",
						value: user.city || "N/A",
						icon: MapPin
					},
					{
						label: "Department",
						value: "Ops",
						icon: Building
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border rounded-2xl p-4 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5 mx-auto text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm font-bold truncate",
							children: s.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: s.label
						})
					]
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border rounded-2xl divide-y",
				children: [
					!isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/my-reports",
						className: "flex items-center justify-between p-4 hover:bg-muted/50 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "My Reports"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4 text-muted-foreground" })]
					}),
					isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin",
						search: { tab: "summary" },
						className: "flex items-center justify-between p-4 hover:bg-muted/50 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Admin Panel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-muted-foreground" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/settings",
						className: "flex items-center justify-between p-4 hover:bg-muted/50 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Settings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-4 w-4 text-muted-foreground" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				className: "w-full h-11 gap-2 text-destructive border-destructive/30 hover:bg-destructive/5",
				onClick: handleLogout,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Log out"]
			})
		]
	}) });
}
//#endregion
export { ProfilePage as component };
