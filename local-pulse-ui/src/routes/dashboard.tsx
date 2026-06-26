import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { RadiusSelector } from "@/components/RadiusSelector";
import { IssueCard } from "@/components/IssueCard";
import { EventCard } from "@/components/EventCard";
import { ProviderCard } from "@/components/ProviderCard";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { SkeletonCard } from "@/components/SkeletonCard";
import { dashboardService } from "@/services/dashboard.service";
import { useApp } from "@/contexts/AppContext";
import { useRouteGuard } from "@/hooks/useRouteGuard";
import { LocationPicker } from "@/components/LocationPicker";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Users,
  MapPin,
  Navigation,
  Loader2,
  BarChart3,
  Calendar,
  Wrench,
  TrendingUp,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — LocalPulse" }] }),
  component: Dashboard,
});

function Dashboard() {
  const { isLoading: guardLoading, user } = useRouteGuard(["citizen", "admin"]);
  const { radiusKm, userLocation, setUserLocation, detectLocation, isDetectingLocation } = useApp();
  const [showPicker, setShowPicker] = useState(false);

  if (guardLoading) {
    return (
      <AppShell>
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </AppShell>
    );
  }

  // Route admin to admin dashboard view
  if (user?.role === "admin") {
    return <AdminDashboard />;
  }

  return <CitizenDashboard />;
}

// ─── ADMIN DASHBOARD ───────────────────────────────────────────────────────────
function AdminDashboard() {
  const { user } = useApp();

  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["admin", "stats"],
    queryFn: () =>
      dashboardService.adminStats().then((res) => res.data.data),
  });

  const statCards = stats
    ? [
        {
          label: "Total Users",
          value: stats.users ?? 0,
          icon: Users,
          color: "text-blue-600 bg-blue-50 dark:bg-blue-950/30",
          change: "+12 today",
        },
        {
          label: "Total Reports",
          value: stats.totalReports ?? 0,
          icon: FileText,
          color: "text-secondary bg-secondary/10",
          change: "All time",
        },
        {
          label: "Open Issues",
          value: stats.openIssues ?? 0,
          icon: AlertTriangle,
          color: "text-amber-600 bg-amber-50 dark:bg-amber-950/30",
          change: "Needs attention",
        },
        {
          label: "Resolved",
          value: stats.resolvedIssues ?? 0,
          icon: CheckCircle2,
          color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30",
          change: "All time",
        },
        {
          label: "Events",
          value: stats.events ?? 0,
          icon: Calendar,
          color: "text-primary bg-primary/10",
          change: "Active",
        },
      ]
    : [];

  const resolutionRate =
    stats && stats.totalReports > 0
      ? Math.round(((stats.resolvedIssues ?? 0) / stats.totalReports) * 100)
      : 0;

  return (
    <AppShell>
      <div className="space-y-8">
        {/* Admin Hero */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 text-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-sm opacity-80">Admin Operations Center</p>
              <h1 className="text-2xl md:text-3xl font-extrabold mt-1">
                Welcome back, {user?.name?.split(" ")[0]} 👋
              </h1>
              <p className="text-sm opacity-70 mt-2">
                {stats
                  ? `${stats.openIssues ?? 0} issues need your attention · ${resolutionRate}% resolution rate`
                  : "Loading platform statistics..."}
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <Link
                to="/admin"
                search={{ tab: "reports" } as any}
                className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2.5 font-semibold shadow hover:bg-white/90 text-sm"
              >
                Manage Reports <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {statsLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="bg-card border rounded-2xl p-4 animate-pulse h-28" />
              ))
            : statCards.map((s) => (
                <div key={s.label} className="bg-card border rounded-2xl p-4 shadow-sm">
                  <div className={`h-10 w-10 rounded-xl grid place-items-center ${s.color}`}>
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-3 text-2xl font-extrabold">
                    {(s.value ?? 0).toLocaleString()}
                  </div>
                  <div className="text-xs font-medium text-foreground">{s.label}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{s.change}</div>
                </div>
              ))}
        </div>

        {/* Charts placeholder row */}
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 bg-card border rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">Issue Status Distribution</h3>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </div>
            {stats ? (
              <div className="space-y-3">
                {[
                  { label: "Open", value: stats.openIssues ?? 0, total: stats.totalReports ?? 1, color: "bg-amber-500" },
                  { label: "Resolved", value: stats.resolvedIssues ?? 0, total: stats.totalReports ?? 1, color: "bg-emerald-500" },
                  { label: "In Progress", value: Math.max(0, (stats.totalReports ?? 0) - (stats.openIssues ?? 0) - (stats.resolvedIssues ?? 0)), total: stats.totalReports ?? 1, color: "bg-blue-500" },
                ].map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-semibold">{item.value}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.color}`}
                        style={{ width: `${item.total > 0 ? Math.round((item.value / item.total) * 100) : 0}%` }}
                      />
                    </div>
                  </div>
                ))}
                <div className="pt-2 text-xs text-muted-foreground text-right">
                  Resolution rate: <span className="font-bold text-emerald-600">{resolutionRate}%</span>
                </div>
              </div>
            ) : (
              <div className="h-44 rounded-xl bg-muted/40 animate-pulse" />
            )}
          </div>

          <div className="bg-card border rounded-2xl p-5">
            <h3 className="font-bold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              {[
                { label: "Manage Reports", to: "/admin", search: { tab: "reports" }, icon: FileText, color: "text-amber-600 bg-amber-50 dark:bg-amber-950/30" },
                { label: "Manage Users", to: "/admin", search: { tab: "users" }, icon: Users, color: "text-blue-600 bg-blue-50 dark:bg-blue-950/30" },
                { label: "Providers", to: "/admin", search: { tab: "providers" }, icon: Wrench, color: "text-purple-600 bg-purple-50 dark:bg-purple-950/30" },
                { label: "Events", to: "/admin", search: { tab: "events" }, icon: Calendar, color: "text-primary bg-primary/10" },
                { label: "Analytics", to: "/admin", search: { tab: "stats" }, icon: TrendingUp, color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30" },
              ].map((a) => (
                <Link
                  key={a.label}
                  to={a.to}
                  search={a.search as any}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                >
                  <div className={`h-8 w-8 rounded-lg grid place-items-center ${a.color}`}>
                    <a.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">{a.label}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* System info row */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-card border rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-bold">Platform Overview</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: "Database", value: "MongoDB Atlas" },
                { label: "Total Issues", value: (stats?.totalReports ?? 0).toLocaleString() },
                { label: "Active Users", value: (stats?.users ?? 0).toLocaleString() },
                { label: "Events", value: (stats?.events ?? 0).toLocaleString() },
                { label: "Resolution Rate", value: `${resolutionRate}%` },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between border-b pb-2 text-sm last:border-0">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-bold">API Health</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: "Backend Status", value: "✅ Online", green: true },
                { label: "Avg Response", value: "~200ms" },
                { label: "Auth Service", value: "✅ Active", green: true },
                { label: "Storage", value: "MongoDB" },
                { label: "API Version", value: "v1" },
              ].map(({ label, value, green }) => (
                <div key={label} className="flex justify-between border-b pb-2 text-sm last:border-0">
                  <span className="text-muted-foreground">{label}</span>
                  <span className={`font-semibold ${green ? "text-emerald-600" : ""}`}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

// ─── CITIZEN DASHBOARD ─────────────────────────────────────────────────────────
function CitizenDashboard() {
  const { radiusKm, userLocation, setUserLocation, detectLocation, isDetectingLocation, user } =
    useApp();
  const [showPicker, setShowPicker] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["dashboard", radiusKm, userLocation.latitude, userLocation.longitude],
    queryFn: () =>
      dashboardService
        .overview({
          radiusKm,
          ...(userLocation.isSet
            ? { latitude: userLocation.latitude, longitude: userLocation.longitude }
            : {}),
        })
        .then((res) => res.data.data),
  });

  const stats = data?.stats;
  const nearbyIssues = data?.nearbyIssues ?? [];
  const nearbyEvents = data?.nearbyEvents ?? [];
  const nearbyProviders = data?.nearbyProviders ?? [];

  const statCards = stats
    ? [
        {
          label: "Total Reports",
          value: stats.totalReports ?? 0,
          icon: FileText,
          color: "text-secondary bg-secondary/10",
        },
        {
          label: "Open",
          value: stats.openIssues ?? 0,
          icon: AlertTriangle,
          color: "text-amber-600 bg-amber-50 dark:bg-amber-950/30",
        },
        {
          label: "Resolved",
          value: stats.resolvedIssues ?? 0,
          icon: CheckCircle2,
          color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30",
        },
        {
          label: "Citizens",
          value: stats.users ?? 0,
          icon: Users,
          color: "text-primary bg-primary/10",
        },
      ]
    : [];

  return (
    <AppShell>
      <div className="space-y-8">
        {/* Hero */}
        <div className="rounded-3xl bg-gradient-to-br from-primary to-[color:var(--civic-orange)] text-primary-foreground p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-sm opacity-90">
                Namaste{user?.name ? `, ${user.name}` : ""} 👋
              </p>
              <h1 className="text-2xl md:text-3xl font-extrabold mt-1">
                Your neighborhood, in one view
              </h1>
              <p className="text-sm opacity-90 mt-2 max-w-lg">
                {stats
                  ? `${stats.openIssues ?? 0} issues need attention near you.`
                  : "Loading your neighborhood updates..."}
              </p>
              <button
                onClick={() => setShowPicker(true)}
                className="mt-3 inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
              >
                <MapPin className="h-3.5 w-3.5" />
                {userLocation.isSet ? userLocation.city : "Set your location"}
              </button>
            </div>
            <Link
              to="/report"
              className="self-start md:self-end inline-flex items-center gap-2 rounded-xl bg-background text-foreground px-4 py-2.5 font-semibold shadow hover:bg-background/90"
            >
              Report Issue <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Location prompt */}
        {!userLocation.isSet && (
          <div className="flex items-center gap-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-4">
            <Navigation className="h-5 w-5 text-amber-600 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                Location not set
              </div>
              <div className="text-xs text-amber-700 dark:text-amber-400 mt-0.5">
                Set your location to see nearby issues, events and providers
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <Button
                size="sm"
                variant="outline"
                className="h-8 text-xs border-amber-300"
                onClick={async () => { await detectLocation(); }}
                disabled={isDetectingLocation}
              >
                {isDetectingLocation ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <>
                    <Navigation className="h-3.5 w-3.5 mr-1" />
                    Auto-detect
                  </>
                )}
              </Button>
              <Button size="sm" className="h-8 text-xs" onClick={() => setShowPicker(true)}>
                <MapPin className="h-3.5 w-3.5 mr-1" />
                Pick on map
              </Button>
            </div>
          </div>
        )}

        {/* Stats */}
        {isError ? (
          <p className="text-sm text-destructive">
            Couldn't load dashboard data. Please try again.
          </p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="bg-card border rounded-2xl p-4 animate-pulse h-24" />
                ))
              : statCards.map((s) => (
                  <div key={s.label} className="bg-card border rounded-2xl p-4 shadow-sm">
                    <div className={`h-10 w-10 rounded-xl grid place-items-center ${s.color}`}>
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-3 text-2xl font-extrabold">
                      {(s.value ?? 0).toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
          </div>
        )}

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h2 className="text-xl font-bold">Nearby</h2>
          <RadiusSelector />
        </div>

        <section>
          <SectionHeader title="Nearby Issues" to="/feed" />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
              : nearbyIssues.length === 0
              ? <p className="text-sm text-muted-foreground col-span-full py-6 text-center">No issues found nearby. <Link to="/report" className="text-primary font-semibold">Be the first to report one!</Link></p>
              : nearbyIssues.slice(0, 3).map((i) => <IssueCard key={i.id} issue={i} />)}
          </div>
        </section>

        <section>
          <SectionHeader title="Nearby Events" to="/events" />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
              : nearbyEvents.length === 0
              ? <p className="text-sm text-muted-foreground col-span-full py-6 text-center">No events in your area right now.</p>
              : nearbyEvents.slice(0, 3).map((e) => <EventCard key={e.id} event={e} />)}
          </div>
        </section>

        <section>
          <SectionHeader title="Trusted Service Providers" to="/providers" />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
              : nearbyProviders.length === 0
              ? <p className="text-sm text-muted-foreground col-span-full py-6 text-center">No providers found in this radius.</p>
              : nearbyProviders.slice(0, 3).map((p) => <ProviderCard key={p.id} provider={p} />)}
          </div>
        </section>
      </div>

      <FloatingActionButton />

      {showPicker && (
        <LocationPicker
          value={userLocation.isSet ? userLocation : null}
          onChange={(loc) => {
            setUserLocation({ ...loc, isSet: true });
            setShowPicker(false);
          }}
          onClose={() => setShowPicker(false)}
        />
      )}
    </AppShell>
  );
}

function SectionHeader({ title, to }: { title: string; to: string }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-bold text-lg">{title}</h3>
      <Link
        to={to}
        className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:underline"
      >
        View all <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
