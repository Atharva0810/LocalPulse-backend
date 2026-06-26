import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as useApp } from "./AppContext-BT3qM9c6.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { Y as LoaderCircle, n as Wrench } from "../_libs/lucide-react.mjs";
import { a as useRouteGuard, t as AppShell } from "./useRouteGuard-CYgdOl03.mjs";
import { t as providerService } from "./provider.service-Bqo-MFyi.mjs";
import { r as PROVIDER_CATEGORIES } from "./constants-CyPHHQ4y.mjs";
import { t as RadiusSelector } from "./RadiusSelector-Bk2h06iy.mjs";
import { t as SkeletonCard } from "./SkeletonCard-BMRq53tJ.mjs";
import { t as ProviderCard } from "./ProviderCard-D3j6Tsur.mjs";
import { t as SearchBar } from "./SearchBar-D81lfiAz.mjs";
import { t as EmptyState } from "./EmptyState-B0joMvPI.mjs";
import { t as CategoryChips } from "./CategoryChips-VefDcMrY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/providers-Dq3V7hvD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProvidersPage() {
	const { isLoading: guardLoading } = useRouteGuard([
		"citizen",
		"provider",
		"admin"
	]);
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)(null);
	const { radiusKm } = useApp();
	const { data, isLoading, isError } = useQuery({
		queryKey: ["providers", {
			radiusKm,
			cat,
			q
		}],
		queryFn: () => providerService.list({
			radiusKm,
			category: cat ?? void 0,
			q: q || void 0
		}).then((res) => res.data.data),
		enabled: !guardLoading
	});
	if (guardLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" })
	});
	const list = data ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl md:text-3xl font-extrabold",
					children: "Service Providers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm mt-1",
					children: "Trusted local help, rated by your neighbors"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadiusSelector, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
				value: q,
				onChange: setQ,
				placeholder: "Search providers..."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryChips, {
				chips: PROVIDER_CATEGORIES,
				value: cat,
				onChange: setCat
			}),
			isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: Wrench,
				title: "Couldn't load providers",
				description: "Please check your connection and try again."
			}) : isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 xl:grid-cols-3 gap-5",
				children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {}, i))
			}) : list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: Wrench,
				title: "No providers found",
				description: "Try a different category or radius."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 xl:grid-cols-3 gap-5",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProviderCard, { provider: p }, p.id))
			})
		]
	}) });
}
//#endregion
export { ProvidersPage as component };
