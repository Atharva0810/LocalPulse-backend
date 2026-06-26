import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./input-wipxj9S9.mjs";
import { C as MapPin, W as ArrowUp, b as MessageCircle, j as EyeOff } from "../_libs/lucide-react.mjs";
import { n as ISSUE_CATEGORIES } from "./constants-CyPHHQ4y.mjs";
import { t as StatusBadge } from "./StatusBadge-P0Wocr5E.mjs";
import { n as km, r as timeAgo } from "./SkeletonCard-BMRq53tJ.mjs";
import { t as IssueImage } from "./IssueImage-DeHR_eWW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/IssueCard-vZBbwusK.js
var import_jsx_runtime = require_jsx_runtime();
function IssueCard({ issue }) {
	const cat = ISSUE_CATEGORIES.find((c) => c.value === issue.category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/issues/$id",
			params: { id: issue.id },
			className: "block w-full overflow-hidden bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IssueImage, {
				src: issue.imageUrl,
				alt: issue.title,
				category: issue.category,
				className: "w-full h-[220px] object-cover rounded-t-2xl"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cat?.emoji }),
								" ",
								cat?.label
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: issue.status }),
						issue.anonymous && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-3 w-3" }), " Anonymous"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/issues/$id",
					params: { id: issue.id },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-base leading-snug line-clamp-2 hover:text-primary",
						children: issue.title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground line-clamp-2",
					children: issue.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 shrink-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: issue.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0",
							children: km(issue.distanceKm)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0",
							children: timeAgo(issue.createdAt)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between pt-2 border-t",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2",
						children: issue.reporter && !issue.anonymous ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: issue.reporter.avatarUrl,
							alt: "",
							className: "h-7 w-7 rounded-full"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium",
							children: issue.reporter.name
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: "Reported anonymously"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "ghost",
							className: "h-8 px-2 gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-4 w-4" }),
								" ",
								issue.upvotes
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "ghost",
							className: "h-8 px-2 gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }),
								" ",
								issue.commentsCount
							]
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
export { IssueCard as t };
