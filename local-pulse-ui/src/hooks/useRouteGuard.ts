import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useApp } from "@/contexts/AppContext";
import type { UserRole } from "@/types";

export function useRouteGuard(allowedRoles: UserRole[]) {
  const { user, isLoadingUser } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoadingUser) return;

    // Not logged in → go to login
    if (!user) {
      navigate({ to: "/login" });
      return;
    }

    const userRole = (user.role || "citizen") as UserRole;

    // Admin has platform-wide access — never block admins
    if (userRole === "admin") return;

    // Role not in allowed list → redirect to appropriate home
    if (!allowedRoles.includes(userRole)) {
      if (userRole === "provider") {
        navigate({ to: "/providers" });
      } else if (userRole === "authority") {
        navigate({ to: "/profile" });
      } else {
        navigate({ to: "/dashboard" });
      }
    }
  }, [user, isLoadingUser, navigate]); // eslint-disable-line react-hooks/exhaustive-deps

  const userRole = (user?.role || "citizen") as UserRole;
  const hasAccess =
    !isLoadingUser &&
    !!user &&
    (allowedRoles.includes(userRole) || userRole === "admin");

  return {
    isLoading: isLoadingUser || !user || !hasAccess,
    user,
  };
}

/** Redirect admin users away from citizen-only pages */
export function useCitizenOnlyGuard() {
  const { user, isLoadingUser } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoadingUser) return;
    if (!user) {
      navigate({ to: "/login" });
      return;
    }
    if (user.role === "admin") {
      navigate({ to: "/admin" });
    }
  }, [user, isLoadingUser, navigate]);

  return { isLoading: isLoadingUser || !user, user };
}
