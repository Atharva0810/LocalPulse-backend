import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as cn } from "./input-wipxj9S9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SkeletonCard-BMRq53tJ.js
var import_jsx_runtime = require_jsx_runtime();
function timeAgo(iso) {
	const diff = Date.now() - new Date(iso).getTime();
	const m = Math.round(diff / 6e4);
	if (m < 1) return "just now";
	if (m < 60) return `${m}m ago`;
	const h = Math.round(m / 60);
	if (h < 24) return `${h}h ago`;
	const d = Math.round(h / 24);
	if (d < 30) return `${d}d ago`;
	return `${Math.round(d / 30)}mo ago`;
}
function km(distanceKm) {
	return distanceKm < 1 ? `${Math.round(distanceKm * 1e3)} m` : `${distanceKm.toFixed(1)} km`;
}
function SkeletonCard({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("bg-card border rounded-2xl overflow-hidden animate-pulse", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-[16/9] bg-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 bg-muted rounded w-3/4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 bg-muted rounded w-full" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 bg-muted rounded w-1/2" })
			]
		})]
	});
}
//#endregion
export { km as n, timeAgo as r, SkeletonCard as t };
