import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as AppProvider } from "./AppContext-BT3qM9c6.mjs";
import { F as useRouter, c as HeadContent, d as createRouter, f as Outlet, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as string, i as object, n as boolean, r as number, t as _enum } from "../_libs/zod.mjs";
import { t as Route$13 } from "./admin-Dsv4QOu0.mjs";
import { n as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as Route$14 } from "./login-umOAn5RE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CbDE_-tv.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BVjXD2WL.css";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
					children: "Back to LocalPulse"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Try again or go home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border px-4 py-2 text-sm font-medium",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "LocalPulse — Your city, your voice" },
			{
				name: "description",
				content: "Report civic issues, discover local events, and connect with service providers in your neighborhood."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})] })
	});
}
var $$splitComponentImporter$11 = () => import("./signup-DtoAK_YB.mjs");
var Route$11 = createFileRoute("/signup")({
	head: () => ({ meta: [{ title: "Sign up — LocalPulse" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./settings-Cow-nEJA.mjs");
var Route$10 = createFileRoute("/settings")({
	head: () => ({ meta: [{ title: "Settings — LocalPulse" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./report-DZDxi9q4.mjs");
object({
	title: string().min(5, "Title is too short"),
	description: string().min(10, "Add a bit more detail"),
	category: _enum([
		"road",
		"water",
		"electricity",
		"safety",
		"sanitation",
		"other"
	]),
	latitude: number(),
	longitude: number(),
	anonymous: boolean()
});
var Route$9 = createFileRoute("/report")({
	head: () => ({ meta: [{ title: "Report Issue — LocalPulse" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./providers-Dq3V7hvD.mjs");
var Route$8 = createFileRoute("/providers")({
	head: () => ({ meta: [{ title: "Service Providers — LocalPulse" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./profile-Dr7TRZrA.mjs");
var Route$7 = createFileRoute("/profile")({
	head: () => ({ meta: [{ title: "Profile — LocalPulse" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./notifications-Uw3JQNon.mjs");
var Route$6 = createFileRoute("/notifications")({
	head: () => ({ meta: [{ title: "Notifications — LocalPulse" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./my-reports-Kg2hUCXn.mjs");
var Route$5 = createFileRoute("/my-reports")({
	head: () => ({ meta: [{ title: "My Reports — LocalPulse" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./feed-O4ozHmJf.mjs");
var Route$4 = createFileRoute("/feed")({
	head: () => ({ meta: [{ title: "Issue Feed — LocalPulse" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./events-Csn2em9u.mjs");
var Route$3 = createFileRoute("/events")({
	head: () => ({ meta: [{ title: "Local Events — LocalPulse" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./dashboard-C28xTWKh.mjs");
var Route$2 = createFileRoute("/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard — LocalPulse" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-BMgvMQgh.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "LocalPulse — Hyperlocal civic platform for India" }, {
		name: "description",
		content: "Report civic issues, find local events, and connect with trusted service providers in your city."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./issues._id-Zhm66Kjx.mjs");
var Route = createFileRoute("/issues/$id")({
	head: () => ({ meta: [{ title: "Issue Details — LocalPulse" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SignupRoute = Route$11.update({
	id: "/signup",
	path: "/signup",
	getParentRoute: () => Route$12
});
var SettingsRoute = Route$10.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => Route$12
});
var ReportRoute = Route$9.update({
	id: "/report",
	path: "/report",
	getParentRoute: () => Route$12
});
var ProvidersRoute = Route$8.update({
	id: "/providers",
	path: "/providers",
	getParentRoute: () => Route$12
});
var ProfileRoute = Route$7.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$12
});
var NotificationsRoute = Route$6.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => Route$12
});
var MyReportsRoute = Route$5.update({
	id: "/my-reports",
	path: "/my-reports",
	getParentRoute: () => Route$12
});
var LoginRoute = Route$14.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$12
});
var FeedRoute = Route$4.update({
	id: "/feed",
	path: "/feed",
	getParentRoute: () => Route$12
});
var EventsRoute = Route$3.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$12
});
var DashboardRoute = Route$2.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$12
});
var AdminRoute = Route$13.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$12
});
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	AdminRoute,
	DashboardRoute,
	EventsRoute,
	FeedRoute,
	LoginRoute,
	MyReportsRoute,
	NotificationsRoute,
	ProfileRoute,
	ProvidersRoute,
	ReportRoute,
	SettingsRoute,
	SignupRoute,
	IssuesIdRoute: Route.update({
		id: "/issues/$id",
		path: "/issues/$id",
		getParentRoute: () => Route$12
	})
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
