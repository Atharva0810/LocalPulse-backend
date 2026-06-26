import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as useApp, r as authService } from "./AppContext-BT3qM9c6.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as string, i as object } from "../_libs/zod.mjs";
import { n as Input, t as Button } from "./input-wipxj9S9.mjs";
import { Y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as Label } from "./label-CXxqgUVc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CSZntq_2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	email: string().email("Enter a valid email"),
	password: string().min(6, "At least 6 characters")
});
function LoginPage() {
	const navigate = useNavigate();
	const { setUser } = useApp();
	const [apiError, setApiError] = (0, import_react.useState)(null);
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: u(schema) });
	const onSubmit = async (values) => {
		setApiError(null);
		try {
			const { access_token } = (await authService.login(values)).data.data;
			window.localStorage.setItem("lp_token", access_token);
			const user = (await authService.me()).data.data;
			setUser(user);
			navigate({ to: "/dashboard" });
		} catch (err) {
			window.localStorage.removeItem("lp_token");
			setUser(null);
			setApiError(err?.response?.data?.message ?? "Invalid email or password. Please try again.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Welcome back",
		subtitle: "Log in to your LocalPulse account",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit(onSubmit),
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "email",
						children: "Email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						type: "email",
						placeholder: "you@example.com",
						className: "mt-1.5 h-11",
						...register("email")
					}),
					errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-destructive mt-1",
						children: errors.email.message
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "password",
						children: "Password"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "password",
						type: "password",
						placeholder: "••••••••",
						className: "mt-1.5 h-11",
						...register("password")
					}),
					errors.password && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-destructive mt-1",
						children: errors.password.message
					})
				] }),
				apiError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-destructive bg-destructive/10 rounded-lg px-3 py-2",
					children: apiError
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: isSubmitting,
					className: "w-full h-11 text-base font-semibold",
					children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Log in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-center text-muted-foreground",
					children: ["New to LocalPulse? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/signup",
						className: "text-primary font-semibold",
						children: "Create account"
					})]
				})
			]
		})
	});
}
function AuthShell({ title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen grid lg:grid-cols-2 bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden lg:flex flex-col justify-between p-10 bg-gradient-to-br from-[color:var(--civic-orange-soft)] to-[color:var(--civic-blue-soft)]",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold leading-tight max-w-md",
					children: "\"Reported a streetlight outage at 9 PM. Fixed by next morning.\""
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: "— Priya, Indore"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "© LocalPulse — for India's cities"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center p-6 md:p-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "lg:hidden flex items-center gap-2 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.jpg",
							alt: "LocalPulse",
							className: "h-9 w-9 rounded-xl object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-lg",
							children: "LocalPulse"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl md:text-3xl font-extrabold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-1",
						children: subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children
					})
				]
			})
		})]
	});
}
//#endregion
export { AuthShell, LoginPage as component };
