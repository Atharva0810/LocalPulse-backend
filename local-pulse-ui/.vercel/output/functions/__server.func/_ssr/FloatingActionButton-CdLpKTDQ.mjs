import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as useApp } from "./AppContext-BT3qM9c6.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Plus } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FloatingActionButton-CdLpKTDQ.js
var import_jsx_runtime = require_jsx_runtime();
function FloatingActionButton() {
	const { user } = useApp();
	if (user?.role === "admin") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/report",
		className: "fixed bottom-24 right-5 lg:bottom-8 lg:right-8 z-30 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 grid place-items-center hover:bg-primary/90 hover:scale-105 transition-all",
		"aria-label": "Report an issue",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-7 w-7" })
	});
}
//#endregion
export { FloatingActionButton as t };
