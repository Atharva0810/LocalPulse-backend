import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as cn } from "./input-wipxj9S9.mjs";
import { a as STATUS_LABEL } from "./constants-CyPHHQ4y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StatusBadge-P0Wocr5E.js
var import_jsx_runtime = require_jsx_runtime();
var styles = {
	open: "bg-[color:var(--status-open)]/10 text-[color:var(--status-open)] border-[color:var(--status-open)]/20",
	under_review: "bg-[color:var(--status-review)]/15 text-[color:var(--status-review)] border-[color:var(--status-review)]/20",
	in_progress: "bg-[color:var(--status-progress)]/10 text-[color:var(--status-progress)] border-[color:var(--status-progress)]/20",
	resolved: "bg-[color:var(--status-resolved)]/10 text-[color:var(--status-resolved)] border-[color:var(--status-resolved)]/20",
	closed: "bg-muted text-muted-foreground border-muted-foreground/20"
};
function StatusBadge({ status, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold", styles[status], className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-current" }), STATUS_LABEL[status]]
	});
}
//#endregion
export { StatusBadge as t };
