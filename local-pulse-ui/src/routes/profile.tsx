import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { useApp } from "@/contexts/AppContext";
import { authService } from "@/services/auth.service";
import {
  Award,
  FileText,
  ArrowUp,
  MapPin,
  LogOut,
  Settings,
  ShieldCheck,
  Loader2,
  Mail,
  Building,
} from "lucide-react";
import { useRouteGuard } from "@/hooks/useRouteGuard";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — LocalPulse" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  const { isLoading: guardLoading, user } = useRouteGuard([
    "citizen",
    "provider",
    "authority",
    "admin",
  ]);
  const { logout } = useApp();
  const navigate = useNavigate();

  if (guardLoading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch {
      // ignore — log out client-side regardless
    } finally {
      logout();
      navigate({ to: "/" });
    }
  };

  const isAdmin = user.role === "admin";

  return (
    <AppShell>
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Hero banner */}
        <div
          className={`rounded-3xl p-6 md:p-8 text-white ${
            isAdmin
              ? "bg-gradient-to-br from-slate-700 to-slate-900"
              : "bg-gradient-to-br from-primary to-[color:var(--civic-orange)]"
          }`}
        >
          <div className="flex items-center gap-4">
            {user.avatarUrl && (
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="h-20 w-20 rounded-2xl border-4 border-white/30 object-cover"
              />
            )}
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl md:text-3xl font-extrabold truncate">
                  {user.name}
                </h1>
                {isAdmin && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
                    <ShieldCheck className="h-3.5 w-3.5" /> Admin
                  </span>
                )}
              </div>
              <p className="text-sm opacity-90 inline-flex items-center gap-1.5 mt-1">
                <Mail className="h-3.5 w-3.5" /> {user.email}
              </p>
              {user.city && (
                <p className="text-sm opacity-80 inline-flex items-center gap-1.5 mt-0.5">
                  <MapPin className="h-3.5 w-3.5" /> {user.city}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Stats — citizen only */}
        {!isAdmin && (
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Reports", value: user.reportsCount, icon: FileText },
              { label: "Upvotes Given", value: user.upvotesGiven, icon: ArrowUp },
              { label: "Score", value: user.contributionScore, icon: Award },
            ].map((s) => (
              <div key={s.label} className="bg-card border rounded-2xl p-4 text-center">
                <s.icon className="h-5 w-5 mx-auto text-primary" />
                <div className="mt-2 text-xl font-extrabold">{s.value ?? 0}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Admin role info */}
        {isAdmin && (
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Role", value: "Administrator", icon: ShieldCheck },
              { label: "City", value: user.city || "N/A", icon: MapPin },
              { label: "Department", value: "Ops", icon: Building },
            ].map((s) => (
              <div key={s.label} className="bg-card border rounded-2xl p-4 text-center">
                <s.icon className="h-5 w-5 mx-auto text-primary" />
                <div className="mt-2 text-sm font-bold truncate">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Navigation links */}
        <div className="bg-card border rounded-2xl divide-y">
          {!isAdmin && (
            <Link
              to="/my-reports"
              className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium">My Reports</span>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </Link>
          )}
          {isAdmin && (
            <Link
              to="/admin"
              search={{ tab: "summary" } as any}
              className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium">Admin Panel</span>
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            </Link>
          )}
          <Link
            to="/settings"
            className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
          >
            <span className="font-medium">Settings</span>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </Link>
        </div>

        <Button
          variant="outline"
          className="w-full h-11 gap-2 text-destructive border-destructive/30 hover:bg-destructive/5"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" /> Log out
        </Button>
      </div>
    </AppShell>
  );
}
