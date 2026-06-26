import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as Input, r as cn } from "./input-wipxj9S9.mjs";
import { m as Search } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SearchBar-D81lfiAz.js
var import_jsx_runtime = require_jsx_runtime();
function SearchBar({ placeholder = "Search...", value, onChange, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			value,
			onChange: (e) => onChange?.(e.target.value),
			placeholder,
			className: "pl-9 h-11 rounded-xl"
		})]
	});
}
//#endregion
export { SearchBar as t };
