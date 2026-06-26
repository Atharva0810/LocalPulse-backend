import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as useApp } from "./AppContext-BT3qM9c6.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as string, i as object, n as boolean, r as number, t as _enum } from "../_libs/zod.mjs";
import { n as Input, r as cn, t as Button } from "./input-wipxj9S9.mjs";
import { i as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { C as MapPin, J as Sparkles, L as Camera, Q as CircleCheck, Y as LoaderCircle, v as Navigation } from "../_libs/lucide-react.mjs";
import { i as useCitizenOnlyGuard, n as LocationPicker, t as AppShell } from "./useRouteGuard-CYgdOl03.mjs";
import { t as issueService } from "./issue.service-BZA5ilcn.mjs";
import { n as ISSUE_CATEGORIES } from "./constants-CyPHHQ4y.mjs";
import { t as Label } from "./label-CXxqgUVc.mjs";
import { t as Switch } from "./switch-BkH24Mxn.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Textarea } from "./textarea-DClw33Hu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/report-DZDxi9q4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	title: string().min(5, "Title is too short"),
	description: string().min(10, "Add a bit more detail"),
	category: _enum([
		"road",
		"water",
		"electricity",
		"safety",
		"sanitation",
		"other"
	]),
	latitude: number(),
	longitude: number(),
	anonymous: boolean()
});
function ReportPage() {
	const { isLoading: guardLoading } = useCitizenOnlyGuard();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { userLocation } = useApp();
	const [photoFile, setPhotoFile] = (0, import_react.useState)(null);
	const [photoPreview, setPhotoPreview] = (0, import_react.useState)(null);
	const [apiError, setApiError] = (0, import_react.useState)(null);
	const [showLocationPicker, setShowLocationPicker] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [pickedLocation, setPickedLocation] = (0, import_react.useState)(userLocation.isSet ? userLocation : null);
	const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = useForm({
		resolver: u(schema),
		defaultValues: {
			latitude: userLocation.isSet ? userLocation.latitude : 0,
			longitude: userLocation.isSet ? userLocation.longitude : 0,
			anonymous: false,
			category: "road"
		}
	});
	if (guardLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" })
	});
	const category = watch("category");
	const anonymous = watch("anonymous");
	const handleLocationPicked = (loc) => {
		setPickedLocation(loc);
		setValue("latitude", loc.latitude);
		setValue("longitude", loc.longitude);
		setShowLocationPicker(false);
	};
	const onSubmit = async (values) => {
		setApiError(null);
		try {
			let image_url = void 0;
			if (photoFile) try {
				image_url = await issueService.uploadImage(photoFile);
			} catch (uploadErr) {
				console.error("Failed to upload image, falling back to placeholder:", uploadErr);
				image_url = `https://images.unsplash.com/photo-1594913785162-e6785b423cb1?auto=format&fit=crop&q=80&w=600`;
			}
			await issueService.create({
				title: values.title,
				description: values.description,
				category: values.category,
				latitude: values.latitude,
				longitude: values.longitude,
				anonymous: values.anonymous,
				image_url
			});
			queryClient.invalidateQueries({ queryKey: ["issues"] });
			setSubmitted(true);
			toast.success("Issue reported successfully! Thank you for making your city better.");
			setTimeout(() => {
				navigate({ to: "/my-reports" });
			}, 1800);
		} catch (err) {
			setApiError(err?.response?.data?.message ?? "Failed to submit report. Please try again.");
			toast.error("Failed to submit report.");
		}
	};
	const onPhoto = (e) => {
		const f = e.target.files?.[0];
		if (f) {
			setPhotoFile(f);
			setPhotoPreview(URL.createObjectURL(f));
		}
	};
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-md mx-auto text-center py-20 space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-24 w-24 rounded-full bg-emerald-100 dark:bg-emerald-950/30 grid place-items-center mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-12 w-12 text-emerald-600" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-extrabold",
				children: "Issue Reported!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm",
				children: "Thank you for making your city better. Your report has been submitted and is now visible to the community."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-center gap-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }), "Redirecting to My Reports..."]
			})
		]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl mx-auto space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl md:text-3xl font-extrabold",
			children: "Report a civic issue"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground text-sm mt-1",
			children: "Help your neighborhood by reporting issues that matter."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit(onSubmit),
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border rounded-2xl p-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Photo" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block aspect-[16/9] rounded-xl border-2 border-dashed bg-muted/40 hover:bg-muted cursor-pointer overflow-hidden",
							children: [photoPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: photoPreview,
								alt: "Preview",
								className: "h-full w-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full grid place-items-center text-center p-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-8 w-8 mx-auto text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-medium text-sm",
										children: "Add a photo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "JPG, PNG up to 5 MB"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "image/*",
								className: "hidden",
								onChange: onPhoto
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs text-muted-foreground bg-secondary/10 text-secondary px-3 py-2 rounded-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "AI will auto-suggest category and severity from your photo (coming soon)"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border rounded-2xl p-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "title",
								children: "Title"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "title",
								placeholder: "E.g. Large pothole near MG Road",
								className: "mt-1.5 h-11",
								...register("title")
							}),
							errors.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-destructive mt-1",
								children: errors.title.message
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "description",
								children: "Description"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "description",
								rows: 4,
								placeholder: "Describe the issue, when it started, who is affected...",
								className: "mt-1.5",
								...register("description")
							}),
							errors.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-destructive mt-1",
								children: errors.description.message
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 grid grid-cols-3 sm:grid-cols-6 gap-2",
							children: ISSUE_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setValue("category", c.value),
								className: cn("px-2 py-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-colors", category === c.value ? "bg-primary text-primary-foreground border-primary" : "bg-card hover:bg-muted"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl",
									children: c.emoji
								}), c.label]
							}, c.value))
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border rounded-2xl p-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Location" }), pickedLocation && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: [
									pickedLocation.latitude.toFixed(5),
									", ",
									pickedLocation.longitude.toFixed(5)
								]
							})]
						}),
						pickedLocation ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 p-3 rounded-xl border bg-primary/5 border-primary/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary shrink-0" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-semibold truncate",
										children: pickedLocation.city
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground",
										children: [
											pickedLocation.latitude.toFixed(5),
											", ",
											pickedLocation.longitude.toFixed(5)
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									size: "sm",
									variant: "ghost",
									className: "ml-auto shrink-0",
									onClick: () => setShowLocationPicker(true),
									children: "Change"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setShowLocationPicker(true),
							className: "w-full flex flex-col items-center gap-2 p-6 rounded-xl border-2 border-dashed hover:bg-muted transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-6 w-6 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium",
									children: "Select issue location"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Pin on map or use your current location"
								})
							]
						}),
						errors.latitude && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-destructive",
							children: "Please select a location on the map"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border rounded-2xl p-5 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold text-sm",
						children: "Report anonymously"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Your name and avatar won't be shown publicly."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: anonymous,
						onCheckedChange: (v) => setValue("anonymous", v)
					})]
				}),
				apiError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-destructive bg-destructive/10 rounded-lg px-3 py-2",
					children: apiError
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3 sticky bottom-20 lg:static bg-background/80 backdrop-blur lg:bg-transparent p-2 lg:p-0 -mx-2 lg:mx-0 rounded-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						className: "flex-1 h-12",
						onClick: () => navigate({ to: "/feed" }),
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: isSubmitting || !pickedLocation,
						className: "flex-1 h-12 text-base font-semibold",
						children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Submit report"
					})]
				})
			]
		})]
	}), showLocationPicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationPicker, {
		value: pickedLocation,
		onChange: handleLocationPicked,
		onClose: () => setShowLocationPicker(false)
	})] });
}
//#endregion
export { ReportPage as component };
