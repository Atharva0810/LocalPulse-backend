import api from "./api";
import type { APIResponse, AdminStats, Provider, User, Event } from "@/types";

export const adminService = {
  // Stats
  getStats: () => api.get<APIResponse<AdminStats>>("/admin/stats"),

  // System Config
  getConfig: () => api.get<APIResponse<any>>("/admin/system-config"),
  updateConfig: (payload: any) =>
    api.put<APIResponse<any>>("/admin/system-config", payload),

  // Providers
  deleteProvider: (id: string) =>
    api.delete<APIResponse<any>>(`/providers/${id}`),
  registerProvider: (payload: any) =>
    api.post<APIResponse<Provider>>("/providers/register", payload),

  // Users - list all users (admin endpoint)
  getUsers: (params?: { q?: string; role?: string; skip?: number; limit?: number }) =>
    api.get<APIResponse<any[]>>("/admin/users", { params }).then((res) => ({
      ...res,
      data: {
        ...res.data,
        data: (res.data.data || []).map((u: any) => ({
          id: String(u.id),
          name: u.full_name || u.name || "User",
          email: u.email,
          role: u.role || "citizen",
          city: u.city || "",
          avatarUrl: `https://api.dicebear.com/7.x/adventurer/svg?seed=${u.email}`,
          createdAt: u.created_at || new Date().toISOString(),
          is_active: u.is_active ?? true,
          contributionScore: u.contributionScore ?? 0,
          reportsCount: u.reportsCount ?? 0,
        })),
      },
    })),

  suspendUser: (userId: string) =>
    api.patch<APIResponse<any>>(`/admin/users/${userId}/suspend`),

  activateUser: (userId: string) =>
    api.patch<APIResponse<any>>(`/admin/users/${userId}/activate`),

  deleteUser: (userId: string) =>
    api.delete<APIResponse<null>>(`/admin/users/${userId}`),

  // Events management
  getEvents: (params?: { status?: string; q?: string }) =>
    api.get<APIResponse<any[]>>("/events", { params }).then((res) => ({
      ...res,
      data: { ...res.data, data: res.data.data || [] },
    })),

  approveEvent: (eventId: string) =>
    api.patch<APIResponse<any>>(`/events/${eventId}/approve`),

  rejectEvent: (eventId: string) =>
    api.patch<APIResponse<any>>(`/events/${eventId}/reject`),

  deleteEvent: (eventId: string) =>
    api.delete<APIResponse<null>>(`/events/${eventId}`),

  // Comments moderation
  deleteComment: (commentId: string) =>
    api.delete<APIResponse<null>>(`/comments/${commentId}`),

  moderateComment: (commentId: string, action: "approve" | "remove") =>
    api.post<APIResponse<any>>(`/admin/moderate/comments/${commentId}`, null, {
      params: { action },
    }),
};
