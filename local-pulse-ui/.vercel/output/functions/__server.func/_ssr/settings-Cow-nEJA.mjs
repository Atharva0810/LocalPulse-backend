import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as useApp } from "./AppContext-BT3qM9c6.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as string, i as object } from "../_libs/zod.mjs";
import { n as Input, t as Button } from "./input-wipxj9S9.mjs";
import { Y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as useRouteGuard, t as AppShell } from "./useRouteGuard-CYgdOl03.mjs";
import { t as Label } from "./label-CXxqgUVc.mjs";
import { t as Switch } from "./switch-BkH24Mxn.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-Cow-nEJA.js
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	name: string().min(2, "Name is too short"),
	email: string().email("Enter a valid email"),
	city: string().min(2, "City is too short")
});
function SettingsPage() {
	const { isLoading: guardLoading, user } = useRouteGuard([
		"citizen",
		"provider",
		"authority",
		"admin"
	]);
	const { setUser } = useApp();
	const navigate = useNavigate();
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
		resolver: u(schema),
		values: {
			name: user?.name ?? "",
			email: user?.email ?? "",
			city: user?.city ?? ""
		}
	});
	if (guardLoading || !user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" })
	});
	const onSubmit = async (values) => {
		try {
			setUser({
				...user,
				name: values.name,
				email: values.email,
				city: values.city
			});
			toast.success("Profile updated successfully!");
		} catch {
			toast.error("Failed to save changes. Please try again.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl mx-auto space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl md:text-3xl font-extrabold",
			children: "Settings"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground text-sm mt-1",
			children: "Manage your profile and preferences"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit(onSubmit),
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border rounded-2xl p-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-bold",
							children: "Profile"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
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
								className: "mt-1.5 h-11",
								...register("city")
							}),
							errors.city && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-destructive mt-1",
								children: errors.city.message
							})
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border rounded-2xl p-5 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-bold",
						children: "Notifications"
					}), [
						["Status updates on my reports", true],
						["New comments on my reports", true],
						["New events nearby", false],
						["Trending issues in my area", true]
					].map(([label, def]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { defaultChecked: def })]
					}, label))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						className: "flex-1 h-11",
						onClick: () => navigate({ to: "/profile" }),
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: isSubmitting,
						className: "flex-1 h-11",
						children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Save changes"
					})]
				})
			]
		})]
	}) });
}
//#endregion
export { SettingsPage as component };
