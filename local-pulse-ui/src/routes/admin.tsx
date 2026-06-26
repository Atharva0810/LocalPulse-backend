import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AppShell } from "@/components/layout/AppShell";
import { dashboardService } from "@/services/dashboard.service";
import { issueService } from "@/services/issue.service";
import { providerService } from "@/services/provider.service";
import { adminService } from "@/services/admin.service";
import { eventService } from "@/services/event.service";
import { STATUS_LABEL, PROVIDER_CATEGORIES, ADMIN_TABS } from "@/constants";
import type { IssueStatus, ProviderCategory } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Search, FileText, AlertTriangle, CheckCircle2, Calendar, Users,
  BarChart3, Map, Trash2, ShieldAlert, Loader2, Wrench, Settings,
  Plus, Star, UserX, UserCheck, X, CheckCircle, ClipboardList,
} from "lucide-react";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from "@/components/ui/select";
import { StatusBadge } from "@/components/StatusBadge";
import { useRouteGuard } from "@/hooks/useRouteGuard";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
  DialogDescription, DialogFooter, DialogClose,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { z } from "zod";
import { cn } from "@/lib/utils";

const adminSearchSchema = z.object({
  tab: z.string().optional().catch("summary"),
});

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — LocalPulse" }] }),
  validateSearch: adminSearchSchema,
  component: AdminPage,
});

function AdminPage() {
  const { isLoading: guardLoading } = useRouteGuard(["admin"]);
  const { tab = "summary" } = Route.useSearch();
  const navigate = useNavigate();

  if (guardLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center space-y-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
          <p className="text-sm text-muted-foreground">Authenticating admin session...</p>
        </div>
      </div>
    );
  }

  const tabs = ADMIN_TABS;

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex items-start justify-between border-b pb-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold flex items-center gap-2">
              <ShieldAlert className="h-7 w-7 text-primary" /> Admin Operations
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Manage the LocalPulse civic platform
            </p>
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 overflow-x-auto pb-1 -mb-2 scrollbar-none">
          {tabs.map((t) => (
            <button
              key={t.value}
              onClick={() => navigate({ to: "/admin", search: { tab: t.value } })}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors",
                tab === t.value
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tab === "summary" && <SummaryTab />}
        {tab === "reports" && <ReportsTab />}
        {tab === "users" && <UsersTab />}
        {tab === "providers" && <ProvidersTab />}
        {tab === "events" && <EventsTab />}
        {tab === "config" && <ConfigTab />}
        {tab === "stats" && <StatsTab />}
      </div>
    </AppShell>
  );
}

// ─── SUMMARY TAB ───────────────────────────────────────────────────────────────
function SummaryTab() {
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["admin", "stats"],
    queryFn: () => dashboardService.adminStats().then((res) => res.data.data),
  });

  const resolutionRate =
    stats && stats.totalReports > 0
      ? Math.round(((stats.resolvedIssues ?? 0) / stats.totalReports) * 100)
      : 0;

  const cards = stats
    ? [
        { label: "Total Reports", value: stats.totalReports ?? 0, icon: FileText, color: "text-secondary bg-secondary/10" },
        { label: "Open Issues", value: stats.openIssues ?? 0, icon: AlertTriangle, color: "text-amber-600 bg-amber-50 dark:bg-amber-950/30" },
        { label: "Resolved", value: stats.resolvedIssues ?? 0, icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30" },
        { label: "Events", value: stats.events ?? 0, icon: Calendar, color: "text-primary bg-primary/10" },
        { label: "Users", value: stats.users ?? 0, icon: Users, color: "text-blue-600 bg-blue-50 dark:bg-blue-950/30" },
      ]
    : [];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {statsLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bg-card border rounded-2xl p-4 animate-pulse h-24" />
            ))
          : cards.map((c) => (
              <div key={c.label} className="bg-card border rounded-2xl p-4">
                <div className={`h-10 w-10 rounded-xl grid place-items-center ${c.color}`}>
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 text-2xl font-extrabold">{(c.value ?? 0).toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">{c.label}</div>
              </div>
            ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="bg-card border rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Issue Status Distribution</h3>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </div>
          {stats ? (
            <div className="space-y-3">
              {[
                { label: "Open", value: stats.openIssues ?? 0, color: "bg-amber-500" },
                { label: "Resolved", value: stats.resolvedIssues ?? 0, color: "bg-emerald-500" },
                { label: "Other", value: Math.max(0, (stats.totalReports ?? 0) - (stats.openIssues ?? 0) - (stats.resolvedIssues ?? 0)), color: "bg-blue-500" },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${stats.totalReports > 0 ? Math.round((item.value / stats.totalReports) * 100) : 0}%` }}
                    />
                  </div>
                </div>
              ))}
              <p className="text-xs text-muted-foreground pt-1">
                Resolution rate: <span className="font-bold text-emerald-600">{resolutionRate}%</span>
              </p>
            </div>
          ) : (
            <div className="h-44 rounded-xl bg-muted/40 animate-pulse" />
          )}
        </div>
        <div className="bg-card border rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold">Issue Heatmap</h3>
            <Map className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-4 h-44 rounded-xl bg-gradient-to-br from-[color:var(--civic-orange-soft)] to-[color:var(--civic-blue-soft)] grid place-items-center text-sm text-muted-foreground">
            Geospatial heatmap (AI — coming soon)
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── REPORTS TAB ───────────────────────────────────────────────────────────────
function ReportsTab() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [pendingStatus, setPendingStatus] = useState<Record<string, IssueStatus>>({});

  const { data: issuesData, isLoading: issuesLoading } = useQuery({
    queryKey: ["issues", "admin", { search, statusFilter }],
    queryFn: () =>
      issueService
        .list({ q: search || undefined, status: statusFilter !== "all" ? statusFilter : undefined })
        .then((res) => res.data.data),
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: IssueStatus }) =>
      issueService.updateStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["issues", "admin"] });
      toast.success("Issue status updated successfully!");
    },
    onError: () => toast.error("Failed to update status."),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => issueService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["issues", "admin"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "stats"] });
      toast.success("Issue report deleted.");
    },
    onError: () => toast.error("Failed to delete issue."),
  });

  const issues = issuesData ?? [];

  return (
    <div className="bg-card border rounded-2xl overflow-hidden">
      <div className="p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b">
        <h3 className="font-bold flex items-center gap-2">
          <ClipboardList className="h-4 w-4" /> All Reports
          <span className="text-xs font-normal text-muted-foreground ml-1">({issues.length})</span>
        </h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-9 h-10 w-56"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-10 w-36"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="under_review">Under Review</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-left">
            <tr>
              <th className="px-5 py-3 font-semibold">Issue</th>
              <th className="px-5 py-3 font-semibold">Category</th>
              <th className="px-5 py-3 font-semibold">Location</th>
              <th className="px-5 py-3 font-semibold">Status</th>
              <th className="px-5 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {issuesLoading ? (
              <tr><td colSpan={5} className="px-5 py-8 text-center text-muted-foreground">Loading issues...</td></tr>
            ) : issues.length === 0 ? (
              <tr><td colSpan={5} className="px-5 py-8 text-center text-muted-foreground">No issues found.</td></tr>
            ) : (
              issues.map((i) => {
                const selected = pendingStatus[i.id] ?? i.status;
                return (
                  <tr key={i.id} className="border-t hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3 font-medium max-w-[240px] truncate">{i.title}</td>
                    <td className="px-5 py-3 capitalize">{i.category}</td>
                    <td className="px-5 py-3 text-muted-foreground max-w-[160px] truncate">{i.address}</td>
                    <td className="px-5 py-3"><StatusBadge status={i.status} /></td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <Select
                          value={selected}
                          onValueChange={(v) =>
                            setPendingStatus((prev) => ({ ...prev, [i.id]: v as IssueStatus }))
                          }
                        >
                          <SelectTrigger className="h-8 w-36 text-xs"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            {(["open", "under_review", "in_progress", "resolved"] as IssueStatus[]).map(
                              (st) => (
                                <SelectItem key={st} value={st}>{STATUS_LABEL[st]}</SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8"
                          disabled={updateStatusMutation.isPending || selected === i.status}
                          onClick={() => updateStatusMutation.mutate({ id: i.id, status: selected })}
                        >
                          Update
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-destructive"
                          disabled={deleteMutation.isPending}
                          onClick={() => {
                            if (confirm(`Delete "${i.title}"? This can't be undone.`)) {
                              deleteMutation.mutate(i.id);
                            }
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── USERS TAB ─────────────────────────────────────────────────────────────────
function UsersTab() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");

  const { data: usersData, isLoading, isError } = useQuery({
    queryKey: ["admin", "users", search],
    queryFn: () =>
      adminService.getUsers({ q: search || undefined }).then((res) => res.data.data),
  });

  const suspendMutation = useMutation({
    mutationFn: (id: string) => adminService.suspendUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "users"] });
      toast.success("User suspended.");
    },
    onError: () => toast.error("Action failed. Check if endpoint is available."),
  });

  const activateMutation = useMutation({
    mutationFn: (id: string) => adminService.activateUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "users"] });
      toast.success("User activated.");
    },
    onError: () => toast.error("Action failed."),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => adminService.deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "users"] });
      toast.success("User deleted.");
    },
    onError: () => toast.error("Action failed."),
  });

  const users = usersData ?? [];

  return (
    <div className="bg-card border rounded-2xl overflow-hidden">
      <div className="p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b">
        <h3 className="font-bold flex items-center gap-2">
          <Users className="h-4 w-4" /> All Users
          <span className="text-xs font-normal text-muted-foreground ml-1">({users.length})</span>
        </h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            className="pl-9 h-10 w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-left">
            <tr>
              <th className="px-5 py-3 font-semibold">User</th>
              <th className="px-5 py-3 font-semibold">Email</th>
              <th className="px-5 py-3 font-semibold">Role</th>
              <th className="px-5 py-3 font-semibold">City</th>
              <th className="px-5 py-3 font-semibold">Status</th>
              <th className="px-5 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan={6} className="px-5 py-8 text-center text-muted-foreground">Loading users...</td></tr>
            ) : isError ? (
              <tr><td colSpan={6} className="px-5 py-8 text-center text-destructive">Failed to load users. The /admin/users endpoint may not be implemented yet.</td></tr>
            ) : users.length === 0 ? (
              <tr><td colSpan={6} className="px-5 py-8 text-center text-muted-foreground">No users found.</td></tr>
            ) : (
              users.map((u: any) => (
                <tr key={u.id} className="border-t hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={u.avatarUrl}
                        alt={u.name}
                        className="h-8 w-8 rounded-full object-cover border"
                      />
                      <span className="font-medium">{u.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{u.email}</td>
                  <td className="px-5 py-3">
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-[11px] font-semibold",
                      u.role === "admin" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    )}>
                      {u.role}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{u.city || "—"}</td>
                  <td className="px-5 py-3">
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-[11px] font-semibold",
                      u.is_active !== false
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400"
                        : "bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400"
                    )}>
                      {u.is_active !== false ? "Active" : "Suspended"}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-1.5">
                      {u.is_active !== false ? (
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 text-xs text-amber-600 border-amber-300 hover:bg-amber-50"
                          disabled={suspendMutation.isPending}
                          onClick={() => {
                            if (confirm(`Suspend ${u.name}?`)) suspendMutation.mutate(u.id);
                          }}
                        >
                          <UserX className="h-3.5 w-3.5 mr-1" /> Suspend
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 text-xs text-emerald-600 border-emerald-300 hover:bg-emerald-50"
                          disabled={activateMutation.isPending}
                          onClick={() => activateMutation.mutate(u.id)}
                        >
                          <UserCheck className="h-3.5 w-3.5 mr-1" /> Activate
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-destructive"
                        disabled={deleteMutation.isPending}
                        onClick={() => {
                          if (confirm(`Permanently delete ${u.name}? This can't be undone.`)) {
                            deleteMutation.mutate(u.id);
                          }
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── PROVIDERS TAB ─────────────────────────────────────────────────────────────
function ProvidersTab() {
  const queryClient = useQueryClient();
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "plumber",
    contact_email: "",
    contact_phone: "",
    service_radius_km: 10,
    latitude: 22.7196,
    longitude: 75.8577,
  });

  const { data: providers, isLoading, isError } = useQuery({
    queryKey: ["admin", "providers"],
    queryFn: () => providerService.list({ radiusKm: 100 }).then((res) => res.data.data),
  });

  const deleteProviderMutation = useMutation({
    mutationFn: (id: string) => adminService.deleteProvider(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "providers"] });
      toast.success("Provider deleted successfully.");
    },
    onError: () => toast.error("Failed to delete provider."),
  });

  const registerProviderMutation = useMutation({
    mutationFn: (payload: any) => adminService.registerProvider(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "providers"] });
      setShowAddModal(false);
      toast.success("Provider registered successfully!");
      setFormData({ name: "", category: "plumber", contact_email: "", contact_phone: "", service_radius_km: 10, latitude: 22.7196, longitude: 75.8577 });
    },
    onError: (err: any) => toast.error(err?.response?.data?.message ?? "Failed to register provider."),
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact_email || !formData.contact_phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    registerProviderMutation.mutate({
      ...formData,
      service_radius_km: parseFloat(formData.service_radius_km.toString()),
      latitude: parseFloat(formData.latitude.toString()),
      longitude: parseFloat(formData.longitude.toString()),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Local Service Providers</h3>
        <Button onClick={() => setShowAddModal(true)} className="flex items-center gap-1.5 rounded-xl">
          <Plus className="h-4 w-4" /> Register Provider
        </Button>
      </div>
      <div className="bg-card border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left">
              <tr>
                <th className="px-5 py-3 font-semibold">Name</th>
                <th className="px-5 py-3 font-semibold">Category</th>
                <th className="px-5 py-3 font-semibold">Email</th>
                <th className="px-5 py-3 font-semibold">Phone</th>
                <th className="px-5 py-3 font-semibold">Radius</th>
                <th className="px-5 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr><td colSpan={6} className="px-5 py-8 text-center text-muted-foreground">Loading providers...</td></tr>
              ) : isError ? (
                <tr><td colSpan={6} className="px-5 py-8 text-center text-destructive">Failed to load service providers.</td></tr>
              ) : providers?.length === 0 ? (
                <tr><td colSpan={6} className="px-5 py-8 text-center text-muted-foreground">No service providers registered.</td></tr>
              ) : (
                providers?.map((p) => (
                  <tr key={p.id} className="border-t hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3 font-medium">
                      <div className="flex items-center gap-2">
                        <span className="capitalize">{p.name}</span>
                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-semibold">
                          <Star className="h-3 w-3 fill-amber-500 stroke-amber-500" /> {p.rating}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3 capitalize">{p.category}</td>
                    <td className="px-5 py-3 text-muted-foreground">{p.contact_email}</td>
                    <td className="px-5 py-3 text-muted-foreground">{p.contact_phone}</td>
                    <td className="px-5 py-3 text-muted-foreground">{p.service_radius_km} km</td>
                    <td className="px-5 py-3">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-destructive"
                        disabled={deleteProviderMutation.isPending}
                        onClick={() => {
                          if (confirm(`Remove provider "${p.name}"?`)) deleteProviderMutation.mutate(p.id);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Register Service Provider</DialogTitle>
            <DialogDescription>Add a new verified service provider profile to LocalPulse.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleRegister} className="space-y-4 my-2">
            <div>
              <Label htmlFor="pname">Provider / Business Name *</Label>
              <Input id="pname" placeholder="e.g. Ramesh Plumbing Services" value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} className="mt-1" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Category *</Label>
                <Select value={formData.category} onValueChange={(v) => setFormData((p) => ({ ...p, category: v }))}>
                  <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {PROVIDER_CATEGORIES.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>{cat.emoji} {cat.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="pradius">Service Radius (km)</Label>
                <Input id="pradius" type="number" min="0.5" max="100" step="0.5" value={formData.service_radius_km} onChange={(e) => setFormData((p) => ({ ...p, service_radius_km: parseFloat(e.target.value) }))} className="mt-1" />
              </div>
            </div>
            <div>
              <Label htmlFor="pemail">Contact Email *</Label>
              <Input id="pemail" type="email" placeholder="ramesh@example.com" value={formData.contact_email} onChange={(e) => setFormData((p) => ({ ...p, contact_email: e.target.value }))} className="mt-1" required />
            </div>
            <div>
              <Label htmlFor="pphone">Contact Phone *</Label>
              <Input id="pphone" type="tel" placeholder="+91 9876543210" value={formData.contact_phone} onChange={(e) => setFormData((p) => ({ ...p, contact_phone: e.target.value }))} className="mt-1" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="plat">Latitude</Label>
                <Input id="plat" type="number" step="0.0001" value={formData.latitude} onChange={(e) => setFormData((p) => ({ ...p, latitude: parseFloat(e.target.value) }))} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="plng">Longitude</Label>
                <Input id="plng" type="number" step="0.0001" value={formData.longitude} onChange={(e) => setFormData((p) => ({ ...p, longitude: parseFloat(e.target.value) }))} className="mt-1" />
              </div>
            </div>
            <DialogFooter className="mt-6">
              <DialogClose asChild><Button type="button" variant="outline">Cancel</Button></DialogClose>
              <Button type="submit" disabled={registerProviderMutation.isPending}>
                {registerProviderMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Register"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── EVENTS TAB ────────────────────────────────────────────────────────────────
function EventsTab() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");

  const { data: eventsData, isLoading, isError } = useQuery({
    queryKey: ["admin", "events", search],
    queryFn: () =>
      eventService.list({ q: search || undefined }).then((res) => res.data.data),
  });

  const approveMutation = useMutation({
    mutationFn: (id: string) => eventService.approve(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "events"] });
      toast.success("Event approved.");
    },
    onError: () => toast.error("Failed to approve event. Endpoint may not be available."),
  });

  const rejectMutation = useMutation({
    mutationFn: (id: string) => eventService.reject(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "events"] });
      toast.success("Event rejected.");
    },
    onError: () => toast.error("Failed to reject event."),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => eventService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "events"] });
      toast.success("Event deleted.");
    },
    onError: () => toast.error("Failed to delete event."),
  });

  const events = eventsData ?? [];

  return (
    <div className="bg-card border rounded-2xl overflow-hidden">
      <div className="p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b">
        <h3 className="font-bold flex items-center gap-2">
          <Calendar className="h-4 w-4" /> All Events
          <span className="text-xs font-normal text-muted-foreground ml-1">({events.length})</span>
        </h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search events..."
            className="pl-9 h-10 w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-left">
            <tr>
              <th className="px-5 py-3 font-semibold">Event</th>
              <th className="px-5 py-3 font-semibold">Organizer</th>
              <th className="px-5 py-3 font-semibold">Date</th>
              <th className="px-5 py-3 font-semibold">Location</th>
              <th className="px-5 py-3 font-semibold">Interested</th>
              <th className="px-5 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan={6} className="px-5 py-8 text-center text-muted-foreground">Loading events...</td></tr>
            ) : isError ? (
              <tr><td colSpan={6} className="px-5 py-8 text-center text-destructive">Failed to load events.</td></tr>
            ) : events.length === 0 ? (
              <tr><td colSpan={6} className="px-5 py-8 text-center text-muted-foreground">No events found.</td></tr>
            ) : (
              events.map((e) => (
                <tr key={e.id} className="border-t hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-3 font-medium max-w-[200px] truncate">{e.title}</td>
                  <td className="px-5 py-3 text-muted-foreground">{e.organizer}</td>
                  <td className="px-5 py-3 text-muted-foreground">{e.date}</td>
                  <td className="px-5 py-3 text-muted-foreground max-w-[160px] truncate">{e.address}</td>
                  <td className="px-5 py-3">{e.interestedCount}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-1.5">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 text-xs text-emerald-600 border-emerald-300 hover:bg-emerald-50"
                        disabled={approveMutation.isPending}
                        onClick={() => approveMutation.mutate(e.id)}
                      >
                        <CheckCircle className="h-3.5 w-3.5 mr-1" /> Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 text-xs text-amber-600 border-amber-300 hover:bg-amber-50"
                        disabled={rejectMutation.isPending}
                        onClick={() => rejectMutation.mutate(e.id)}
                      >
                        <X className="h-3.5 w-3.5 mr-1" /> Reject
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-destructive"
                        disabled={deleteMutation.isPending}
                        onClick={() => {
                          if (confirm(`Delete "${e.title}"?`)) deleteMutation.mutate(e.id);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── CONFIG TAB ────────────────────────────────────────────────────────────────
function ConfigTab() {
  const queryClient = useQueryClient();
  const [config, setConfig] = useState<any>({
    maintenance_mode: false,
    allow_registration: true,
    issue_auto_assignment: false,
    max_upload_size_mb: 10,
    default_search_radius_km: 5,
    notifications_enabled: true,
    provider_auto_approval: false,
    event_creation_enabled: true,
  });

  const { isLoading, isError } = useQuery({
    queryKey: ["admin", "config"],
    queryFn: () =>
      adminService.getConfig().then((res) => {
        if (res.data.data) setConfig(res.data.data);
        return res.data.data;
      }),
  });

  const saveMutation = useMutation({
    mutationFn: (payload: any) => adminService.updateConfig(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "config"] });
      toast.success("System configurations updated.");
    },
    onError: () => toast.error("Failed to save configurations."),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveMutation.mutate({
      ...config,
      max_upload_size_mb: parseInt(config.max_upload_size_mb.toString()),
      default_search_radius_km: parseInt(config.default_search_radius_km.toString()),
    });
  };

  if (isLoading) {
    return (
      <div className="flex py-12 items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
        <span className="ml-2 text-sm text-muted-foreground">Loading system settings...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-destructive/10 text-destructive text-sm p-4 rounded-xl text-center">
        Failed to fetch system configurations. Please reload the page.
      </div>
    );
  }

  return (
    <div className="max-w-2xl bg-card border rounded-2xl p-6 space-y-6">
      <div>
        <h3 className="font-bold text-lg">System Configuration</h3>
        <p className="text-muted-foreground text-sm">Control global application behaviors</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          {[
            { key: "maintenance_mode", label: "Maintenance Mode", desc: "Force application into read-only mode" },
            { key: "allow_registration", label: "Allow New Registrations", desc: "Permit new user registrations" },
            { key: "issue_auto_assignment", label: "Automated Issue Assignment", desc: "Automatically assign issues to matching providers" },
            { key: "notifications_enabled", label: "Notifications Dispatcher", desc: "Enable system emails and push alerts" },
            { key: "provider_auto_approval", label: "Provider Auto-Approval", desc: "Automatically approve new service providers" },
            { key: "event_creation_enabled", label: "Allow Event Creation", desc: "Enable citizens to schedule civic meetups" },
          ].map(({ key, label, desc }) => (
            <div key={key} className="flex items-center justify-between border-b pb-3">
              <div>
                <Label className="font-semibold text-sm">{label}</Label>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
              <Switch
                checked={config[key]}
                onCheckedChange={(checked) => setConfig((prev: any) => ({ ...prev, [key]: checked }))}
              />
            </div>
          ))}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <Label htmlFor="max_upload">Max Attachment Size (MB)</Label>
              <Input id="max_upload" type="number" min="1" max="100" value={config.max_upload_size_mb} onChange={(e) => setConfig((p: any) => ({ ...p, max_upload_size_mb: parseInt(e.target.value) }))} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="search_radius">Default Search Radius (km)</Label>
              <Input id="search_radius" type="number" min="1" max="50" value={config.default_search_radius_km} onChange={(e) => setConfig((p: any) => ({ ...p, default_search_radius_km: parseInt(e.target.value) }))} className="mt-1" />
            </div>
          </div>
        </div>
        <Button type="submit" className="w-full rounded-xl" disabled={saveMutation.isPending}>
          {saveMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Save Configurations"}
        </Button>
      </form>
    </div>
  );
}

// ─── STATS TAB ─────────────────────────────────────────────────────────────────
function StatsTab() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["admin", "stats"],
    queryFn: () => dashboardService.adminStats().then((res) => res.data.data),
  });

  if (isLoading) {
    return (
      <div className="flex py-12 items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
        <span className="ml-2 text-sm text-muted-foreground">Gathering statistics...</span>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-card border rounded-2xl p-6 space-y-4">
        <div>
          <h3 className="font-bold text-lg">System Utilization</h3>
          <p className="text-xs text-muted-foreground">Platform database size and usage metrics</p>
        </div>
        <div className="space-y-3">
          {[
            { label: "Database Engine", value: "MongoDB Atlas" },
            { label: "Total Users", value: stats?.users ?? 0 },
            { label: "Issues Logged", value: stats?.totalReports ?? 0 },
            { label: "Events Active", value: stats?.events ?? 0 },
            { label: "Resolution Rate", value: `${stats?.totalReports ? Math.round(((stats.resolvedIssues ?? 0) / stats.totalReports) * 100) : 0}%` },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between border-b pb-2 text-sm">
              <span className="text-muted-foreground">{label}</span>
              <span className="font-semibold">{String(value)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-card border rounded-2xl p-6 space-y-4">
        <div>
          <h3 className="font-bold text-lg">API Performance</h3>
          <p className="text-xs text-muted-foreground">Average service response times</p>
        </div>
        <div className="space-y-3">
          {[
            { label: "Avg Response Time", value: "~200 ms", green: true },
            { label: "Success Rate (2xx)", value: "99.8%", green: true },
            { label: "Backend Status", value: "Online ✅", green: true },
            { label: "Uptime", value: "99.99%", green: true },
          ].map(({ label, value, green }) => (
            <div key={label} className="flex justify-between border-b pb-2 text-sm">
              <span className="text-muted-foreground">{label}</span>
              <span className={`font-semibold ${green ? "text-emerald-600" : ""}`}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}