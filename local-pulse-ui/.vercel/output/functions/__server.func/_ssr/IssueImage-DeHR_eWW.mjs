import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/IssueImage-DeHR_eWW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORY_PLACEHOLDERS = {
	road: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=600",
	water: "https://images.unsplash.com/photo-1504470695779-75300268aa0e?auto=format&fit=crop&q=80&w=600",
	electricity: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600",
	safety: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
	sanitation: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=600",
	other: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600"
};
var getCategoryPlaceholder = (category) => {
	return CATEGORY_PLACEHOLDERS[String(category || "other").toLowerCase()] || CATEGORY_PLACEHOLDERS.other;
};
function IssueImage({ src, alt, category, className = "" }) {
	const fallbackUrl = getCategoryPlaceholder(category);
	const [imgSrc, setImgSrc] = (0, import_react.useState)(src || fallbackUrl);
	const [hasError, setHasError] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setImgSrc(src || fallbackUrl);
		setHasError(false);
	}, [src, fallbackUrl]);
	const handleError = () => {
		if (!hasError) {
			setImgSrc(fallbackUrl);
			setHasError(true);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: imgSrc,
		alt,
		onError: handleError,
		className: `object-cover ${className}`,
		loading: "lazy"
	});
}
//#endregion
export { IssueImage as t };
