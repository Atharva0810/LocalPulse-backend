import api from "./api";
import type { APIResponse, Notification } from "@/types";

export const mapBackendNotificationToFrontend = (
  backendNotification: any
): Notification => {
  return {
    id: String(backendNotification.id),
    type: backendNotification.type,
    title: backendNotification.title || "Notification",
    message:
      backendNotification.body || backendNotification.message || "",
    createdAt:
      backendNotification.created_at || new Date().toISOString(),
    read:
      backendNotification.is_read ??
      backendNotification.read ??
      false,
    refId: backendNotification.ref_id,
  };
};

export const notificationService = {
  list: () =>
    api.get<APIResponse<any[]>>("/notifications").then((res) => {
      const mapped = (res.data.data || []).map(
        mapBackendNotificationToFrontend
      );
      return { ...res, data: { ...res.data, data: mapped } };
    }),

  getUnreadCount: async (): Promise<number> => {
    try {
      const res = await api.get<APIResponse<any[]>>("/notifications");
      const items = res.data.data || [];
      return items.filter(
        (n: any) => !(n.is_read ?? n.read ?? false)
      ).length;
    } catch {
      return 0;
    }
  },

  markRead: (id: string) =>
    api.put<APIResponse<any>>(`/notifications/${id}/read`).then((res) => ({
      ...res,
      data: {
        ...res.data,
        data: res.data.data
          ? mapBackendNotificationToFrontend(res.data.data)
          : null,
      },
    })),

  markAllRead: async () => {
    const res = await api.get<APIResponse<any[]>>("/notifications");
    const unread = (res.data.data || []).filter(
      (n: any) => !(n.is_read ?? n.read ?? false)
    );
    await Promise.all(
      unread.map((n: any) => api.put(`/notifications/${n.id}/read`))
    );
    return { data: { success: true, data: null } } as any;
  },
};