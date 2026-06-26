import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Newspaper, Calendar, Wrench, Plus, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useApp } from "@/contexts/AppContext";

const citizenItems = [
  { to: "/dashboard", label: "Home", icon: LayoutDashboard },
  { to: "/feed", label: "Feed", icon: Newspaper },
  { to: "/report", label: "", icon: Plus, action: true },
  { to: "/events", label: "Events", icon: Calendar },
  { to: "/providers", label: "Services", icon: Wrench },
];

const adminItems = [
  { to: "/admin", label: "Admin", icon: ShieldCheck, search: { tab: "summary" } },
  { to: "/admin", label: "Reports", icon: Newspaper, search: { tab: "reports" } },
  { to: "/admin", label: "Users", icon: LayoutDashboard, search: { tab: "users" } },
  { to: "/admin", label: "Events", icon: Calendar, search: { tab: "events" } },
  { to: "/admin", label: "Config", icon: Wrench, search: { tab: "config" } },
];

export function BottomNav() {
  const { user } = useApp();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const search = useRouterState({ select: (s) => s.location.search }) as any;

  const isAdmin = user?.role === "admin";
  const items = isAdmin ? adminItems : citizenItems;

  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background border-t pb-[env(safe-area-inset-bottom)]">
      <ul className={cn("grid h-16", isAdmin ? "grid-cols-5" : "grid-cols-5")}>
        {items.map((it) => {
          if (!isAdmin && (it as any).action) {
            return (
              <li key="report" className="grid place-items-center">
                <Link
                  to={it.to}
                  className="-mt-7 h-14 w-14 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-lg shadow-primary/30"
                  aria-label="Report Issue"
                >
                  <it.icon className="h-7 w-7" />
                </Link>
              </li>
            );
          }
          const active = isAdmin
            ? pathname === it.to && search.tab === (it as any).search?.tab
            : pathname === it.to;
          return (
            <li key={`${it.to}-${it.label}`}>
              <Link
                to={it.to}
                search={(it as any).search}
                className={cn(
                  "h-full flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium",
                  active ? "text-primary" : "text-muted-foreground"
                )}
              >
                <it.icon className="h-5 w-5" />
                {it.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
