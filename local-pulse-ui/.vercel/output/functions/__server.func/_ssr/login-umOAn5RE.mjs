import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as Link, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-umOAn5RE.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./login-CSZntq_2.mjs");
var Route = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Log in — LocalPulse" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
function AuthShell({ title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen grid lg:grid-cols-2 bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden lg:flex flex-col justify-between p-10 bg-gradient-to-br from-[color:var(--civic-orange-soft)] to-[color:var(--civic-blue-soft)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.jpg",
						alt: "LocalPulse",
						className: "h-9 w-9 rounded-xl object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-lg",
						children: "LocalPulse"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold leading-tight max-w-md",
					children: "\"Reported a streetlight outage at 9 PM. Fixed by next morning.\""
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: "— Priya, Indore"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "© LocalPulse — for India's cities"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center p-6 md:p-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "lg:hidden flex items-center gap-2 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.jpg",
							alt: "LocalPulse",
							className: "h-9 w-9 rounded-xl object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-lg",
							children: "LocalPulse"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl md:text-3xl font-extrabold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-1",
						children: subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children
					})
				]
			})
		})]
	});
}
//#endregion
export { Route as n, AuthShell as t };
