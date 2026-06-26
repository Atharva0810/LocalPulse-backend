import { n as api } from "./AppContext-BT3qM9c6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/provider.service-Bqo-MFyi.js
var mapBackendProviderToFrontend = (backendProvider) => {
	return {
		id: String(backendProvider.id),
		name: backendProvider.name,
		photoUrl: backendProvider.photoUrl,
		category: backendProvider.category,
		rating: backendProvider.rating ?? 5,
		reviewsCount: backendProvider.reviewsCount ?? 0,
		phone: backendProvider.contact_phone || backendProvider.phone || "",
		address: backendProvider.address || "Indore",
		distanceKm: backendProvider.distanceKm ?? 1.2,
		verified: backendProvider.verified ?? true,
		contact_email: backendProvider.contact_email,
		contact_phone: backendProvider.contact_phone,
		service_radius_km: backendProvider.service_radius_km,
		is_active: backendProvider.is_active ?? true
	};
};
var providerService = {
	list: (params) => api.get("/providers", { params }).then((res) => {
		const mapped = (res.data.data || []).map(mapBackendProviderToFrontend);
		return {
			...res,
			data: {
				...res.data,
				data: mapped
			}
		};
	}),
	get: (id) => api.get(`/providers/${id}`).then((res) => {
		const mapped = mapBackendProviderToFrontend(res.data.data);
		return {
			...res,
			data: {
				...res.data,
				data: mapped
			}
		};
	}),
	register: (payload) => api.post("/providers/register", payload).then((res) => {
		const mapped = mapBackendProviderToFrontend(res.data.data);
		return {
			...res,
			data: {
				...res.data,
				data: mapped
			}
		};
	})
};
//#endregion
export { providerService as t };
