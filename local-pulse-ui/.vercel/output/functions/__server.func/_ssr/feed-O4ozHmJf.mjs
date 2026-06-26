import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as useApp } from "./AppContext-BT3qM9c6.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { Y as LoaderCircle, _ as Newspaper } from "../_libs/lucide-react.mjs";
import { a as useRouteGuard, t as AppShell } from "./useRouteGuard-CYgdOl03.mjs";
import { t as issueService } from "./issue.service-BZA5ilcn.mjs";
import { n as ISSUE_CATEGORIES } from "./constants-CyPHHQ4y.mjs";
import { t as RadiusSelector } from "./RadiusSelector-Bk2h06iy.mjs";
import { t as SkeletonCard } from "./SkeletonCard-BMRq53tJ.mjs";
import { t as IssueCard } from "./IssueCard-vZBbwusK.mjs";
import { t as FloatingActionButton } from "./FloatingActionButton-CdLpKTDQ.mjs";
import { t as SearchBar } from "./SearchBar-D81lfiAz.mjs";
import { t as EmptyState } from "./EmptyState-B0joMvPI.mjs";
import { t as CategoryChips } from "./CategoryChips-VefDcMrY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/feed-O4ozHmJf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FeedPage() {
	const { isLoading: guardLoading } = useRouteGuard(["citizen", "admin"]);
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)(null);
	const { radiusKm } = useApp();
	const { data, isLoading, isError } = useQuery({
		queryKey: ["issues", {
			radiusKm,
			cat,
			q
		}],
		queryFn: () => issueService.list({
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
	const issues = data ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl md:text-3xl font-extrabold",
					children: "Community Issue Feed"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm mt-1",
					children: "See what your neighbors are reporting"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadiusSelector, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
				value: q,
				onChange: setQ,
				placeholder: "Search issues by title or area..."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryChips, {
				chips: ISSUE_CATEGORIES,
				value: cat,
				onChange: setCat
			}),
			isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: Newspaper,
				title: "Couldn't load issues",
				description: "Please check your connection and try again."
			}) : isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 xl:grid-cols-3 gap-5",
				children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {}, i))
			}) : issues.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: Newspaper,
				title: "No issues found",
				description: "Try a different category or radius."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 xl:grid-cols-3 gap-5",
				children: issues.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IssueCard, { issue: i }, i.id))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActionButton, {})] });
}
//#endregion
export { FeedPage as component };
