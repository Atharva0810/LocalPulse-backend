import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as axios } from "../_libs/axios+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppContext-BT3qM9c6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var api = axios.create({
	baseURL: "https://localpulse-backend-b9lt.onrender.com/api/v1",
	headers: { "Content-Type": "application/json" },
	timeout: 15e3
});
api.interceptors.request.use((config) => {
	if (typeof window !== "undefined") {
		const token = window.localStorage.getItem("lp_token");
		if (token) config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});
api.interceptors.response.use((response) => response, (error) => {
	if (error.response && error.response.status === 401) {
		if (typeof window !== "undefined") {
			window.localStorage.removeItem("lp_token");
			window.location.href = "/login";
		}
	}
	return Promise.reject(error);
});
var authService = {
	register: (payload) => api.post("/auth/register", {
		email: payload.email,
		password: payload.password,
		full_name: payload.name,
		city: payload.city,
		role: "citizen"
	}),
	login: (payload) => api.post("/auth/login", payload),
	me: () => api.get("/auth/me"),
	logout: () => {
		window.localStorage.removeItem("lp_token");
		return api.post("/auth/logout").catch(() => {});
	}
};
var mapBackendUserToFrontend = (backendUser) => {
	if (!backendUser) return null;
	return {
		id: String(backendUser.id),
		name: backendUser.full_name || backendUser.name || "User",
		email: backendUser.email,
		avatarUrl: backendUser.avatarUrl || `https://api.dicebear.com/7.x/adventurer/svg?seed=${backendUser.email}`,
		city: backendUser.city || "",
		contributionScore: backendUser.contributionScore ?? 0,
		reportsCount: backendUser.reportsCount ?? 0,
		upvotesGiven: backendUser.upvotesGiven ?? 0,
		role: backendUser.role
	};
};
var DEFAULT_LOCATION = {
	latitude: 0,
	longitude: 0,
	city: "",
	isSet: false
};
var AppContext = (0, import_react.createContext)(null);
async function reverseGeocode(lat, lng) {
	try {
		const data = await (await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)).json();
		return data.address?.city || data.address?.town || data.address?.village || data.address?.county || "Unknown location";
	} catch {
		return "Unknown location";
	}
}
function AppProvider({ children }) {
	const [user, setUserState] = (0, import_react.useState)(null);
	const [isLoadingUser, setIsLoadingUser] = (0, import_react.useState)(true);
	const [radiusKm, setRadiusKm] = (0, import_react.useState)(3);
	const [userLocation, setUserLocationState] = (0, import_react.useState)(() => {
		try {
			const stored = localStorage.getItem("lp_location");
			if (stored) return JSON.parse(stored);
		} catch {}
		return DEFAULT_LOCATION;
	});
	const [isDetectingLocation, setIsDetectingLocation] = (0, import_react.useState)(false);
	const setUser = (u) => {
		if (u) setUserState(mapBackendUserToFrontend(u));
		else setUserState(null);
	};
	const setUserLocation = (0, import_react.useCallback)((loc) => {
		setUserLocationState(loc);
		localStorage.setItem("lp_location", JSON.stringify(loc));
	}, []);
	const detectLocation = (0, import_react.useCallback)(async () => {
		if (!navigator.geolocation) return;
		setIsDetectingLocation(true);
		return new Promise((resolve) => {
			navigator.geolocation.getCurrentPosition(async (pos) => {
				const { latitude, longitude } = pos.coords;
				setUserLocation({
					latitude,
					longitude,
					city: await reverseGeocode(latitude, longitude),
					isSet: true
				});
				setIsDetectingLocation(false);
				resolve();
			}, () => {
				setIsDetectingLocation(false);
				resolve();
			}, { timeout: 1e4 });
		});
	}, [setUserLocation]);
	(0, import_react.useEffect)(() => {
		if (!(typeof window !== "undefined" ? window.localStorage.getItem("lp_token") : null)) {
			setIsLoadingUser(false);
			return;
		}
		authService.me().then((res) => setUser(res.data.data)).catch(() => {
			window.localStorage.removeItem("lp_token");
			setUser(null);
		}).finally(() => setIsLoadingUser(false));
	}, []);
	const logout = () => {
		window.localStorage.removeItem("lp_token");
		setUser(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppContext.Provider, {
		value: {
			user,
			setUser,
			isLoadingUser,
			radiusKm,
			setRadiusKm,
			logout,
			userLocation,
			setUserLocation,
			detectLocation,
			isDetectingLocation
		},
		children
	});
}
function useApp() {
	const ctx = (0, import_react.useContext)(AppContext);
	if (!ctx) throw new Error("useApp must be used within AppProvider");
	return ctx;
}
//#endregion
export { useApp as i, api as n, authService as r, AppProvider as t };
