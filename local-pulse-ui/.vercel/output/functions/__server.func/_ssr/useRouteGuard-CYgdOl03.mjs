import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as useApp, n as api, r as authService } from "./AppContext-BT3qM9c6.mjs";
import { _ as useNavigate, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Input, r as cn, t as Button } from "./input-wipxj9S9.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { $ as ChartColumn, A as FileText, C as MapPin, D as LayoutDashboard, E as Locate, F as ChevronDown, N as ClipboardList, Q as CircleCheck, R as Calendar, T as LogOut, V as Bell, X as CirclePlus, Y as LoaderCircle, _ as Newspaper, h as Plus, i as User, m as Search, n as Wrench, p as Settings, r as Users, t as X, u as ShieldCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useRouteGuard-CYgdOl03.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var citizenItems$1 = [
	{
		to: "/dashboard",
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		to: "/feed",
		label: "Issue Feed",
		icon: Newspaper
	},
	{
		to: "/events",
		label: "Events",
		icon: Calendar
	},
	{
		to: "/providers",
		label: "Providers",
		icon: Wrench
	},
	{
		to: "/my-reports",
		label: "My Reports",
		icon: FileText
	},
	{
		to: "/notifications",
		label: "Notifications",
		icon: Bell
	},
	{
		to: "/profile",
		label: "Profile",
		icon: User
	},
	{
		to: "/settings",
		label: "Settings",
		icon: Settings
	}
];
var adminItems$1 = [
	{
		to: "/admin",
		search: { tab: "summary" },
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		to: "/admin",
		search: { tab: "reports" },
		label: "Reports",
		icon: ClipboardList
	},
	{
		to: "/admin",
		search: { tab: "users" },
		label: "Users",
		icon: Users
	},
	{
		to: "/admin",
		search: { tab: "providers" },
		label: "Providers",
		icon: Wrench
	},
	{
		to: "/admin",
		search: { tab: "events" },
		label: "Events",
		icon: Calendar
	},
	{
		to: "/admin",
		search: { tab: "config" },
		label: "System Config",
		icon: Settings
	},
	{
		to: "/admin",
		search: { tab: "stats" },
		label: "Analytics",
		icon: ChartColumn
	},
	{
		to: "/notifications",
		label: "Notifications",
		icon: Bell
	},
	{
		to: "/profile",
		label: "Profile",
		icon: User
	},
	{
		to: "/settings",
		label: "Settings",
		icon: Settings
	}
];
function Sidebar() {
	const { user } = useApp();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const search = useRouterState({ select: (s) => s.location.search });
	const isAdmin = user?.role === "admin";
	const visibleItems = isAdmin ? adminItems$1 : citizenItems$1;
	const isActive = (it) => {
		if (!(pathname === it.to || it.to !== "/dashboard" && it.to !== "/admin" && pathname.startsWith(it.to))) return false;
		if (it.search && it.search.tab !== search.tab) return false;
		return true;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "hidden lg:flex flex-col w-64 shrink-0 border-r bg-sidebar h-screen sticky top-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 px-5 h-16 border-b",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/logo.jpg",
					alt: "LocalPulse",
					className: "h-9 w-9 rounded-xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-bold text-base leading-tight",
					children: "LocalPulse"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] text-muted-foreground",
					children: isAdmin ? "Admin Panel" : "Your city, your voice"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex-1 overflow-y-auto p-3 space-y-1",
				children: [isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-3 py-1.5 mb-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
						children: "Administration"
					})
				}), visibleItems.map((it) => {
					const active = isActive(it);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: it.to,
						search: it.search,
						className: cn("flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors", active ? "bg-primary text-primary-foreground shadow-sm" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-4 w-4 shrink-0" }), it.label]
					}, `${it.to}-${it.label}`);
				})]
			}),
			!isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-3 border-t",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/report",
					className: "flex items-center justify-center gap-2 w-full rounded-lg bg-primary text-primary-foreground px-3 py-2.5 text-sm font-semibold shadow-sm hover:bg-primary/90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlus, { className: "h-4 w-4" }), "Report Issue"]
				})
			})
		]
	});
}
async function reverseGeocode(lat, lng) {
	try {
		const data = await (await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)).json();
		return data.address?.city || data.address?.town || data.address?.village || data.address?.suburb || data.address?.county || "Selected location";
	} catch {
		return "Selected location";
	}
}
async function searchPlace(query) {
	try {
		return (await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`)).json();
	} catch {
		return [];
	}
}
function LocationPicker({ value, onChange, onClose, inline = false }) {
	const mapRef = (0, import_react.useRef)(null);
	const mapInstanceRef = (0, import_react.useRef)(null);
	const markerRef = (0, import_react.useRef)(null);
	const [pending, setPending] = (0, import_react.useState)(value);
	const [isGeolocating, setIsGeolocating] = (0, import_react.useState)(false);
	const [isGeocoding, setIsGeocoding] = (0, import_react.useState)(false);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [searchResults, setSearchResults] = (0, import_react.useState)([]);
	const [isSearching, setIsSearching] = (0, import_react.useState)(false);
	const initMap = (0, import_react.useCallback)(async () => {
		if (!mapRef.current || mapInstanceRef.current) return;
		const L = await import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
		if (!document.querySelector("link[data-leaflet]")) {
			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
			link.setAttribute("data-leaflet", "true");
			document.head.appendChild(link);
		}
		const center = pending ? [pending.latitude, pending.longitude] : [20.5937, 78.9629];
		const map = L.map(mapRef.current, {
			zoomControl: true,
			scrollWheelZoom: true
		}).setView(center, pending ? 14 : 5);
		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution: "&copy; OpenStreetMap contributors",
			maxZoom: 19
		}).addTo(map);
		const icon = L.divIcon({
			html: `<div style="background:#2563eb;width:22px;height:22px;border-radius:50%;border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.3)"></div>`,
			className: "",
			iconSize: [22, 22],
			iconAnchor: [11, 11]
		});
		if (pending) markerRef.current = L.marker([pending.latitude, pending.longitude], { icon }).addTo(map);
		map.on("click", async (e) => {
			const { lat, lng } = e.latlng;
			if (markerRef.current) markerRef.current.setLatLng([lat, lng]);
			else markerRef.current = L.marker([lat, lng], { icon }).addTo(map);
			setIsGeocoding(true);
			const city = await reverseGeocode(lat, lng);
			setIsGeocoding(false);
			setPending({
				latitude: lat,
				longitude: lng,
				city
			});
		});
		mapInstanceRef.current = map;
	}, []);
	(0, import_react.useEffect)(() => {
		initMap();
		return () => {
			if (mapInstanceRef.current) {
				mapInstanceRef.current.remove();
				mapInstanceRef.current = null;
				markerRef.current = null;
			}
		};
	}, []);
	const geolocate = async () => {
		if (!navigator.geolocation) return;
		setIsGeolocating(true);
		navigator.geolocation.getCurrentPosition(async (pos) => {
			const { latitude, longitude } = pos.coords;
			setPending({
				latitude,
				longitude,
				city: await reverseGeocode(latitude, longitude)
			});
			const L = await import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
			if (mapInstanceRef.current) {
				mapInstanceRef.current.setView([latitude, longitude], 15);
				const icon = L.divIcon({
					html: `<div style="background:#2563eb;width:22px;height:22px;border-radius:50%;border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.3)"></div>`,
					className: "",
					iconSize: [22, 22],
					iconAnchor: [11, 11]
				});
				if (markerRef.current) markerRef.current.setLatLng([latitude, longitude]);
				else markerRef.current = L.marker([latitude, longitude], { icon }).addTo(mapInstanceRef.current);
			}
			setIsGeolocating(false);
		}, () => setIsGeolocating(false), { timeout: 1e4 });
	};
	const handleSearch = async () => {
		if (!searchQuery.trim()) return;
		setIsSearching(true);
		setSearchResults(await searchPlace(searchQuery));
		setIsSearching(false);
	};
	const selectSearchResult = async (result) => {
		const latitude = parseFloat(result.lat);
		const longitude = parseFloat(result.lon);
		setPending({
			latitude,
			longitude,
			city: result.display_name.split(",")[0]
		});
		setSearchResults([]);
		setSearchQuery("");
		const L = await import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
		if (mapInstanceRef.current) {
			mapInstanceRef.current.setView([latitude, longitude], 14);
			const icon = L.divIcon({
				html: `<div style="background:#2563eb;width:22px;height:22px;border-radius:50%;border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.3)"></div>`,
				className: "",
				iconSize: [22, 22],
				iconAnchor: [11, 11]
			});
			if (markerRef.current) markerRef.current.setLatLng([latitude, longitude]);
			else markerRef.current = L.marker([latitude, longitude], { icon }).addTo(mapInstanceRef.current);
		}
	};
	const confirm = () => {
		if (pending) {
			onChange(pending);
			onClose?.();
		}
	};
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Search a place...",
							className: "pl-9 h-10",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							onKeyDown: (e) => e.key === "Enter" && handleSearch()
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: handleSearch,
						disabled: isSearching,
						className: "h-10 px-3",
						children: isSearching ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: geolocate,
						disabled: isGeolocating,
						className: "h-10 px-3",
						title: "Use my location",
						children: isGeolocating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Locate, { className: "h-4 w-4" })
					})
				]
			}),
			searchResults.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border rounded-xl bg-background shadow-lg divide-y text-sm max-h-48 overflow-y-auto",
				children: searchResults.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "w-full text-left px-3 py-2.5 hover:bg-muted truncate",
					onClick: () => selectSearchResult(r),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "inline h-3.5 w-3.5 mr-1.5 text-primary" }), r.display_name]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: mapRef,
					className: "rounded-xl border overflow-hidden",
					style: { height: 300 }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur text-xs text-muted-foreground px-3 py-1 rounded-full border pointer-events-none",
					children: "Click anywhere on the map to pin location"
				})]
			}),
			pending && pending.latitude !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-xl px-3 py-2.5",
				children: [isGeocoding ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin text-primary shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold",
						children: pending.city
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground",
						children: [
							pending.latitude.toFixed(5),
							", ",
							pending.longitude.toFixed(5)
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: confirm,
				disabled: !pending || pending.latitude === 0,
				className: "h-11 font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 mr-2" }), "Confirm Location"]
			})
		]
	});
	if (inline) return content;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-background rounded-2xl w-full max-w-lg shadow-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between p-4 border-b",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-bold text-base",
					children: "Select Location"
				}), onClose && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "h-8 w-8 rounded-full hover:bg-muted grid place-items-center",
					"aria-label": "Close",
					title: "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4",
				children: content
			})]
		})
	});
}
var mapBackendNotificationToFrontend = (backendNotification) => {
	return {
		id: String(backendNotification.id),
		type: backendNotification.type,
		title: backendNotification.title || "Notification",
		message: backendNotification.body || backendNotification.message || "",
		createdAt: backendNotification.created_at || (/* @__PURE__ */ new Date()).toISOString(),
		read: backendNotification.is_read ?? backendNotification.read ?? false,
		refId: backendNotification.ref_id
	};
};
var notificationService = {
	list: () => api.get("/notifications").then((res) => {
		const mapped = (res.data.data || []).map(mapBackendNotificationToFrontend);
		return {
			...res,
			data: {
				...res.data,
				data: mapped
			}
		};
	}),
	getUnreadCount: async () => {
		try {
			return ((await api.get("/notifications")).data.data || []).filter((n) => !(n.is_read ?? n.read ?? false)).length;
		} catch {
			return 0;
		}
	},
	markRead: (id) => api.put(`/notifications/${id}/read`).then((res) => ({
		...res,
		data: {
			...res.data,
			data: res.data.data ? mapBackendNotificationToFrontend(res.data.data) : null
		}
	})),
	markAllRead: async () => {
		const unread = ((await api.get("/notifications")).data.data || []).filter((n) => !(n.is_read ?? n.read ?? false));
		await Promise.all(unread.map((n) => api.put(`/notifications/${n.id}/read`)));
		return { data: {
			success: true,
			data: null
		} };
	}
};
function Navbar() {
	const { user, userLocation, setUserLocation, logout } = useApp();
	const navigate = useNavigate();
	const [showPicker, setShowPicker] = (0, import_react.useState)(false);
	const [showDropdown, setShowDropdown] = (0, import_react.useState)(false);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const dropdownRef = (0, import_react.useRef)(null);
	const locationLabel = userLocation.isSet ? userLocation.city : "Set location";
	const { data: unreadCount = 0 } = useQuery({
		queryKey: ["notifications", "unread-count"],
		queryFn: () => notificationService.getUnreadCount(),
		enabled: !!user,
		refetchInterval: 6e4,
		staleTime: 3e4
	});
	(0, import_react.useEffect)(() => {
		function handleClickOutside(e) {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setShowDropdown(false);
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	const handleSearch = (e) => {
		e.preventDefault();
		if (searchQuery.trim()) navigate({
			to: "/feed",
			search: { q: searchQuery }
		});
	};
	const handleLogout = async () => {
		setShowDropdown(false);
		try {
			await authService.logout();
		} catch {} finally {
			logout();
			navigate({ to: "/" });
		}
	};
	const isAdmin = user?.role === "admin";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-30 bg-background/85 backdrop-blur border-b",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "h-16 px-4 md:px-6 flex items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: isAdmin ? "/admin" : "/dashboard",
					className: "lg:hidden flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.jpg",
						alt: "LocalPulse",
						className: "h-8 w-8 rounded-xl object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold",
						children: "LocalPulse"
					})]
				}),
				!isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
					onSubmit: handleSearch,
					className: "hidden md:flex items-center gap-2 flex-1 max-w-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "search",
							placeholder: "Search issues, events, providers...",
							className: "w-full pl-9 h-10 rounded-xl border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/30 px-3",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value)
						})]
					})
				}),
				isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:flex items-center gap-2 flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }), " Admin Panel"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 md:hidden" }),
				!isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setShowPicker(true),
					className: "hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground border rounded-lg px-2.5 py-1.5 hover:bg-muted transition-colors max-w-[160px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-primary shrink-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate font-medium",
							suppressHydrationWarning: true,
							children: locationLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 shrink-0" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/notifications",
					className: "relative h-10 w-10 rounded-full grid place-items-center hover:bg-muted",
					"aria-label": "Notifications",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5" }), unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold grid place-items-center",
						children: unreadCount > 9 ? "9+" : unreadCount
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					ref: dropdownRef,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setShowDropdown((v) => !v),
						className: "flex items-center gap-2 rounded-full focus:outline-none",
						"aria-label": "User menu",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: user?.avatarUrl,
								alt: user?.name,
								className: "h-9 w-9 rounded-full object-cover border"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden md:block leading-tight text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold",
									children: user?.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground capitalize",
									children: user?.role || "citizen"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "hidden md:block h-3.5 w-3.5 text-muted-foreground" })
						]
					}), showDropdown && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute right-0 top-full mt-2 w-52 bg-popover border rounded-xl shadow-lg py-1 z-50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-4 py-2.5 border-b",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold truncate",
									children: user?.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground truncate",
									children: user?.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/profile",
								onClick: () => setShowDropdown(false),
								className: "flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-muted transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4 text-muted-foreground" }), "Profile"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/settings",
								onClick: () => setShowDropdown(false),
								className: "flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-muted transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-4 w-4 text-muted-foreground" }), "Settings"]
							}),
							isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/admin",
								search: { tab: "summary" },
								onClick: () => setShowDropdown(false),
								className: "flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-muted transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-muted-foreground" }), "Admin Panel"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t mt-1" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleLogout,
								className: "flex items-center gap-2.5 px-4 py-2.5 text-sm text-destructive hover:bg-destructive/10 transition-colors w-full text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), "Log out"]
							})
						]
					})]
				})
			]
		})
	}), showPicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationPicker, {
		value: userLocation.isSet ? userLocation : null,
		onChange: (loc) => setUserLocation({
			...loc,
			isSet: true
		}),
		onClose: () => setShowPicker(false)
	})] });
}
var citizenItems = [
	{
		to: "/dashboard",
		label: "Home",
		icon: LayoutDashboard
	},
	{
		to: "/feed",
		label: "Feed",
		icon: Newspaper
	},
	{
		to: "/report",
		label: "",
		icon: Plus,
		action: true
	},
	{
		to: "/events",
		label: "Events",
		icon: Calendar
	},
	{
		to: "/providers",
		label: "Services",
		icon: Wrench
	}
];
var adminItems = [
	{
		to: "/admin",
		label: "Admin",
		icon: ShieldCheck,
		search: { tab: "summary" }
	},
	{
		to: "/admin",
		label: "Reports",
		icon: Newspaper,
		search: { tab: "reports" }
	},
	{
		to: "/admin",
		label: "Users",
		icon: LayoutDashboard,
		search: { tab: "users" }
	},
	{
		to: "/admin",
		label: "Events",
		icon: Calendar,
		search: { tab: "events" }
	},
	{
		to: "/admin",
		label: "Config",
		icon: Wrench,
		search: { tab: "config" }
	}
];
function BottomNav() {
	const { user } = useApp();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const search = useRouterState({ select: (s) => s.location.search });
	const isAdmin = user?.role === "admin";
	const items = isAdmin ? adminItems : citizenItems;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background border-t pb-[env(safe-area-inset-bottom)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: cn("grid h-16", isAdmin ? "grid-cols-5" : "grid-cols-5"),
			children: items.map((it) => {
				if (!isAdmin && it.action) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: it.to,
						className: "-mt-7 h-14 w-14 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-lg shadow-primary/30",
						"aria-label": "Report Issue",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-7 w-7" })
					})
				}, "report");
				const active = isAdmin ? pathname === it.to && search.tab === it.search?.tab : pathname === it.to;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: it.to,
					search: it.search,
					className: cn("h-full flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium", active ? "text-primary" : "text-muted-foreground"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-5 w-5" }), it.label]
				}) }, `${it.to}-${it.label}`);
			})
		})
	});
}
function AppShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 flex flex-col min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 px-4 md:px-6 lg:px-8 py-6 pb-28 lg:pb-10 max-w-7xl w-full mx-auto",
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
			]
		})]
	});
}
function useRouteGuard(allowedRoles) {
	const { user, isLoadingUser } = useApp();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (isLoadingUser) return;
		if (!user) {
			navigate({ to: "/login" });
			return;
		}
		const userRole = user.role || "citizen";
		if (userRole === "admin") return;
		if (!allowedRoles.includes(userRole)) if (userRole === "provider") navigate({ to: "/providers" });
		else if (userRole === "authority") navigate({ to: "/profile" });
		else navigate({ to: "/dashboard" });
	}, [
		user,
		isLoadingUser,
		navigate
	]);
	const userRole = user?.role || "citizen";
	const hasAccess = !isLoadingUser && !!user && (allowedRoles.includes(userRole) || userRole === "admin");
	return {
		isLoading: isLoadingUser || !user || !hasAccess,
		user
	};
}
/** Redirect admin users away from citizen-only pages */
function useCitizenOnlyGuard() {
	const { user, isLoadingUser } = useApp();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (isLoadingUser) return;
		if (!user) {
			navigate({ to: "/login" });
			return;
		}
		if (user.role === "admin") navigate({ to: "/admin" });
	}, [
		user,
		isLoadingUser,
		navigate
	]);
	return {
		isLoading: isLoadingUser || !user,
		user
	};
}
//#endregion
export { useRouteGuard as a, useCitizenOnlyGuard as i, LocationPicker as n, notificationService as r, AppShell as t };
