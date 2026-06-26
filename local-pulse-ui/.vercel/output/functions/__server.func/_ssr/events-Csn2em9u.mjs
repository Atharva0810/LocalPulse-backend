import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as useApp } from "./AppContext-BT3qM9c6.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { Y as LoaderCircle, z as CalendarX } from "../_libs/lucide-react.mjs";
import { a as useRouteGuard, t as AppShell } from "./useRouteGuard-CYgdOl03.mjs";
import { t as eventService } from "./event.service-CJDs_W6U.mjs";
import { t as RadiusSelector } from "./RadiusSelector-Bk2h06iy.mjs";
import { t as SkeletonCard } from "./SkeletonCard-BMRq53tJ.mjs";
import { t as EventCard } from "./EventCard-v8sOWLjH.mjs";
import { t as SearchBar } from "./SearchBar-D81lfiAz.mjs";
import { t as EmptyState } from "./EmptyState-B0joMvPI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-Csn2em9u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EventsPage() {
	const { isLoading: guardLoading } = useRouteGuard(["citizen", "admin"]);
	const [q, setQ] = (0, import_react.useState)("");
	const { radiusKm } = useApp();
	const queryClient = useQueryClient();
	const { data, isLoading, isError } = useQuery({
		queryKey: ["events", {
			radiusKm,
			q
		}],
		queryFn: () => eventService.list({
			radiusKm,
			q: q || void 0
		}).then((res) => res.data.data),
		enabled: !guardLoading
	});
	const interestedMutation = useMutation({
		mutationFn: (id) => eventService.markInterested(id),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["events"] })
	});
	if (guardLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" })
	});
	const events = data ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl md:text-3xl font-extrabold",
					children: "Local Events"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm mt-1",
					children: "What's happening in your neighborhood"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadiusSelector, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
				value: q,
				onChange: setQ,
				placeholder: "Search events..."
			}),
			isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: CalendarX,
				title: "Couldn't load events",
				description: "Please check your connection and try again."
			}) : isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 xl:grid-cols-3 gap-5",
				children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {}, i))
			}) : events.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: CalendarX,
				title: "No events found",
				description: "Try a different radius or search term."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 xl:grid-cols-3 gap-5",
				children: events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
					event: e,
					onInterested: (id) => interestedMutation.mutate(id)
				}, e.id))
			})
		]
	}) });
}
//#endregion
export { EventsPage as component };
