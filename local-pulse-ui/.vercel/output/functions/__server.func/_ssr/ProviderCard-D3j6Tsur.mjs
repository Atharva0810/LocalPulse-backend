import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./input-wipxj9S9.mjs";
import { C as MapPin, et as BadgeCheck, g as Phone, l as Star } from "../_libs/lucide-react.mjs";
import { r as PROVIDER_CATEGORIES } from "./constants-CyPHHQ4y.mjs";
import { n as km } from "./SkeletonCard-BMRq53tJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProviderCard-D3j6Tsur.js
var import_jsx_runtime = require_jsx_runtime();
function ProviderCard({ provider }) {
	const cat = PROVIDER_CATEGORIES.find((c) => c.value === provider.category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "bg-card border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: provider.photoUrl,
					alt: provider.name,
					className: "h-16 w-16 rounded-xl object-cover shrink-0"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold truncate",
								children: provider.name
							}), provider.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-4 w-4 text-secondary shrink-0" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								cat?.emoji,
								" ",
								cat?.label
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1 mt-1 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-amber-400 text-amber-400" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: provider.rating.toFixed(1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted-foreground",
									children: [
										"(",
										provider.reviewsCount,
										")"
									]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center gap-1.5 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: provider.address
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0",
						children: km(provider.distanceKm)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					className: "flex-1 gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					className: "flex-1",
					children: "View Profile"
				})]
			})
		]
	});
}
//#endregion
export { ProviderCard as t };
