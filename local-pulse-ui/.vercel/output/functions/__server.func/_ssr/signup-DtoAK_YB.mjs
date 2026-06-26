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
import { t as AuthShell } from "./login-umOAn5RE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-DtoAK_YB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	name: string().min(2, "Enter your name"),
	email: string().email("Enter a valid email"),
	city: string().min(2, "Enter your city"),
	password: string().min(6, "At least 6 characters")
});
function SignupPage() {
	const navigate = useNavigate();
	const { setUser } = useApp();
	const [apiError, setApiError] = (0, import_react.useState)(null);
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: u(schema) });
	const onSubmit = async (values) => {
		setApiError(null);
		try {
			await authService.register(values);
			const { access_token } = (await authService.login({
				email: values.email,
				password: values.password
			})).data.data;
			window.localStorage.setItem("lp_token", access_token);
			const user = (await authService.me()).data.data;
			setUser(user);
			navigate({ to: "/dashboard" });
		} catch (err) {
			window.localStorage.removeItem("lp_token");
			setUser(null);
			setApiError(err?.response?.data?.message ?? "Registration failed. Please try again.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Join LocalPulse",
		subtitle: "Sign up and start making your neighborhood better",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit(onSubmit),
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "name",
						children: "Full name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "name",
						placeholder: "Ananya Sharma",
						className: "mt-1.5 h-11",
						...register("name")
					}),
					errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-destructive mt-1",
						children: errors.name.message
					})
				] }),
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
						htmlFor: "city",
						children: "City"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "city",
						placeholder: "Indore",
						className: "mt-1.5 h-11",
						...register("city")
					}),
					errors.city && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-destructive mt-1",
						children: errors.city.message
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
					children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Create account"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-center text-muted-foreground",
					children: ["Already a member? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "text-primary font-semibold",
						children: "Log in"
					})]
				})
			]
		})
	});
}
//#endregion
export { SignupPage as component };
