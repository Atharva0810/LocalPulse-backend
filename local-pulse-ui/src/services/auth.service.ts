import api from "./api";
import type { APIResponse } from "@/types";

export const authService = {
  register: (payload: {
    name: string;
    email: string;
    password: string;
    city: string;
  }) =>
    api.post<APIResponse<any>>("/auth/register", {
      email: payload.email,
      password: payload.password,
      full_name: payload.name,
      city: payload.city,
      role: "citizen",
    }),

  login: (payload: { email: string; password: string }) =>
    api.post<APIResponse<{ access_token: string; token_type: string }>>(
      "/auth/login",
      payload
    ),

  me: () => api.get<APIResponse<any>>("/auth/me"),

  logout: () => {
    // Remove token client-side immediately (backend endpoint optional)
    window.localStorage.removeItem("lp_token");
    // Attempt server logout but don't block on failure
    return api.post<APIResponse<null>>("/auth/logout").catch(() => {});
  },
};