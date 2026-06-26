import { n as api } from "./AppContext-BT3qM9c6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/event.service-CJDs_W6U.js
var mapBackendEventToFrontend = (backendEvent) => {
	if (!backendEvent) return null;
	const dateObj = new Date(backendEvent.event_date);
	const timeStr = dateObj.toLocaleTimeString("en-IN", {
		hour: "2-digit",
		minute: "2-digit"
	});
	const dateStr = dateObj.toISOString().split("T")[0];
	return {
		id: String(backendEvent.id),
		title: backendEvent.title || "Community Event",
		description: backendEvent.description || "",
		posterUrl: backendEvent.posterUrl || "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600",
		date: dateStr,
		time: timeStr,
		organizer: backendEvent.organizer_name || "Organizer",
		organizerId: String(backendEvent.organizer_id || ""),
		location: {
			latitude: backendEvent.latitude,
			longitude: backendEvent.longitude
		},
		address: backendEvent.location_address || "Indore",
		distanceKm: backendEvent.distanceKm ?? .5,
		interestedCount: backendEvent.attendees ? backendEvent.attendees.length : backendEvent.interested_count ?? 0,
		capacity: backendEvent.capacity ?? null,
		category: backendEvent.category || "General",
		status: backendEvent.status || "approved"
	};
};
var eventService = {
	list: (params) => api.get("/events", { params }).then((res) => {
		const mapped = (res.data.data || []).map(mapBackendEventToFrontend);
		return {
			...res,
			data: {
				...res.data,
				data: mapped
			}
		};
	}),
	get: (id) => api.get(`/events/${id}`).then((res) => {
		const mapped = mapBackendEventToFrontend(res.data.data);
		return {
			...res,
			data: {
				...res.data,
				data: mapped
			}
		};
	}),
	markInterested: (id) => api.post(`/events/${id}/rsvp`).then((res) => {
		const mapped = mapBackendEventToFrontend(res.data.data);
		return {
			...res,
			data: {
				...res.data,
				data: { interestedCount: mapped?.interestedCount ?? 0 }
			}
		};
	}),
	create: (payload) => api.post("/events", payload).then((res) => {
		const mapped = mapBackendEventToFrontend(res.data.data);
		return {
			...res,
			data: {
				...res.data,
				data: mapped
			}
		};
	}),
	delete: (id) => api.delete(`/events/${id}`),
	approve: (id) => api.patch(`/events/${id}/approve`),
	reject: (id) => api.patch(`/events/${id}/reject`)
};
//#endregion
export { eventService as t };
