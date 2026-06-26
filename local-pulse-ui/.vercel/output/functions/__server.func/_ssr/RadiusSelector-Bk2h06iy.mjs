import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as useApp } from "./AppContext-BT3qM9c6.mjs";
import { r as cn } from "./input-wipxj9S9.mjs";
import { C as MapPin } from "../_libs/lucide-react.mjs";
import { i as RADIUS_OPTIONS } from "./constants-CyPHHQ4y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RadiusSelector-Bk2h06iy.js
var import_jsx_runtime = require_jsx_runtime();
function RadiusSelector({ className }) {
	const { radiusKm, setRadiusKm } = useApp();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex items-center gap-1 p-1 rounded-xl bg-muted", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "px-2 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), " Radius"]
		}), RADIUS_OPTIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setRadiusKm(r),
			className: cn("px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors", radiusKm === r ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
			children: [r, " km"]
		}, r))]
	});
}
//#endregion
export { RadiusSelector as t };
