import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as cn } from "./input-wipxj9S9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CategoryChips-VefDcMrY.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryChips({ chips, value, onChange, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-wrap gap-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => onChange(null),
			className: cn("px-3 py-1.5 rounded-full text-sm font-medium border transition-colors", value === null ? "bg-primary text-primary-foreground border-primary" : "bg-card hover:bg-muted"),
			children: "All"
		}), chips.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => onChange(c.value),
			className: cn("px-3 py-1.5 rounded-full text-sm font-medium border transition-colors inline-flex items-center gap-1.5", value === c.value ? "bg-primary text-primary-foreground border-primary" : "bg-card hover:bg-muted"),
			children: [
				c.emoji && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.emoji }),
				" ",
				c.label
			]
		}, c.value))]
	});
}
//#endregion
export { CategoryChips as t };
