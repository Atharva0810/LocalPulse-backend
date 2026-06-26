import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as ArrowRight, J as Sparkles, n as Wrench, r as Users, u as ShieldCheck, x as Megaphone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BMgvMQgh.js
var import_jsx_runtime = require_jsx_runtime();
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 bg-background/85 backdrop-blur border-b",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto h-16 px-4 md:px-6 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo.jpg",
								alt: "LocalPulse",
								className: "h-9 w-9 rounded-xl object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-lg",
								children: "LocalPulse"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden md:flex items-center gap-6 text-sm font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#features",
									className: "text-muted-foreground hover:text-foreground",
									children: "Features"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#how",
									className: "text-muted-foreground hover:text-foreground",
									children: "How it works"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#cities",
									className: "text-muted-foreground hover:text-foreground",
									children: "Cities"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "hidden sm:inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted",
								children: "Log in"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/signup",
								className: "inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90",
								children: "Get started"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-br from-[color:var(--civic-orange-soft)] via-background to-[color:var(--civic-blue-soft)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border text-xs font-semibold text-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Built for Tier-2 & Tier-3 cities"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]",
							children: [
								"Your city. ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Your voice."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Heard locally."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg text-muted-foreground max-w-xl",
							children: "Report potholes, water cuts, and safety issues in seconds. Discover what's happening in your neighborhood and find trusted local service providers — all in one place."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/signup",
								className: "inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90",
								children: ["Join your city ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard",
								className: "inline-flex items-center gap-2 px-5 py-3 rounded-xl border bg-card font-semibold hover:bg-muted",
								children: "Explore demo"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-6 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-foreground",
									children: "12,400+"
								}), " issues resolved"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-foreground",
									children: "85+"
								}), " cities"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-foreground",
									children: "120k"
								}), " citizens"] })
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200",
							alt: "Indian city street",
							className: "rounded-3xl shadow-2xl border aspect-[4/5] object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -bottom-6 -left-6 bg-card border rounded-2xl p-4 shadow-xl flex items-center gap-3 max-w-[260px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 rounded-xl bg-[color:var(--status-resolved)]/15 text-[color:var(--status-resolved)] grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bold text-sm",
								children: "Pothole resolved"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: "MG Road, 0.8 km away"
							})] })]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "features",
				className: "py-20 max-w-7xl mx-auto px-4 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-extrabold tracking-tight",
						children: "Everything your neighborhood needs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "One app for reporting issues, finding events and hiring trusted local help."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid md:grid-cols-3 gap-6",
					children: [
						{
							icon: Megaphone,
							title: "Report in 30 seconds",
							desc: "Snap a photo, drop a pin, hit submit. Anonymous or with your name — your choice."
						},
						{
							icon: Users,
							title: "Local events & meetups",
							desc: "Stay in the loop on health camps, clean-up drives and cultural events near you."
						},
						{
							icon: Wrench,
							title: "Verified service providers",
							desc: "Plumbers, electricians, tutors and more — rated by your own neighbors."
						}
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card border rounded-2xl p-6 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-bold text-lg",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: f.desc
							})
						]
					}, f.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "how",
				className: "py-20 bg-muted/40 border-y",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-4 md:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-extrabold tracking-tight text-center",
						children: "How it works"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid md:grid-cols-3 gap-6",
						children: [
							{
								n: "01",
								t: "Spot an issue",
								d: "See a pothole, broken light or water cut? Open LocalPulse."
							},
							{
								n: "02",
								t: "Report it instantly",
								d: "Photo, category, location — done. AI auto-tags severity."
							},
							{
								n: "03",
								t: "Track to resolution",
								d: "Get updates as the municipal team marks it In Progress and Resolved."
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-2xl p-6 border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-primary font-extrabold text-2xl",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-bold text-lg",
									children: s.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: s.d
								})
							]
						}, s.n))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "cities",
				className: "py-20 max-w-7xl mx-auto px-4 md:px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-extrabold tracking-tight",
						children: "Now live in 85+ cities"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Indore, Bhopal, Jaipur, Lucknow, Nagpur, Coimbatore, Patna and many more."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/signup",
						className: "mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold",
						children: ["Add your city ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t py-8 text-center text-sm text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" LocalPulse. Made with care for India's cities."
				]
			})
		]
	});
}
//#endregion
export { Landing as component };
