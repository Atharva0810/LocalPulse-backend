import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./input-wipxj9S9.mjs";
import { C as MapPin, R as Calendar, f as Share2, k as Heart, r as Users } from "../_libs/lucide-react.mjs";
import { n as km } from "./SkeletonCard-BMRq53tJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/EventCard-v8sOWLjH.js
var import_jsx_runtime = require_jsx_runtime();
function EventCard({ event, onInterested }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col",
		children: [event.posterUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "aspect-[16/9] bg-muted overflow-hidden relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: event.posterUrl,
				alt: event.title,
				className: "h-full w-full object-cover"
			}), event.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/90 text-xs font-semibold",
				children: event.category
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 space-y-3 flex-1 flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-base leading-snug line-clamp-2",
					children: event.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								new Date(event.date).toLocaleDateString("en-IN", {
									weekday: "short",
									month: "short",
									day: "numeric"
								}),
								" • ",
								event.time
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "truncate",
								children: [
									event.address,
									" • ",
									km(event.distanceKm)
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								event.interestedCount,
								" interested • by ",
								event.organizer
							] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 mt-auto pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						className: "flex-1 gap-1.5",
						onClick: () => onInterested?.(event.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" }), " Interested"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "outline",
						className: "gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" }), " Share"]
					})]
				})
			]
		})]
	});
}
//#endregion
export { EventCard as t };
