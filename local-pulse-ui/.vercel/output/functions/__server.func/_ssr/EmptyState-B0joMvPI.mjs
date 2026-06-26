import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./input-wipxj9S9.mjs";
import { O as Inbox } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/EmptyState-B0joMvPI.js
var import_jsx_runtime = require_jsx_runtime();
function EmptyState({ icon: Icon = Inbox, title, description, actionLabel, onAction, actionTo }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center py-16 px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto h-16 w-16 rounded-2xl bg-muted grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-7 w-7 text-muted-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-semibold",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground max-w-sm mx-auto",
				children: description
			}),
			actionLabel && actionTo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: actionTo,
				className: "mt-5 inline-block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: actionLabel })
			}),
			actionLabel && onAction && !actionTo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: onAction,
				className: "mt-5",
				children: actionLabel
			})
		]
	});
}
//#endregion
export { EmptyState as t };
