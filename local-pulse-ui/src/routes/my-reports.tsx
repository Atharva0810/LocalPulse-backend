import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AppShell } from "@/components/layout/AppShell";
import { IssueCard } from "@/components/IssueCard";
import { issueService } from "@/services/issue.service";
import { EmptyState } from "@/components/EmptyState";
import { SkeletonCard } from "@/components/SkeletonCard";
import { FileText, Loader2 } from "lucide-react";
import { useCitizenOnlyGuard } from "@/hooks/useRouteGuard";
import { toast } from "sonner";

export const Route = createFileRoute("/my-reports")({
  head: () => ({ meta: [{ title: "My Reports — LocalPulse" }] }),
  component: MyReportsPage,
});

function MyReportsPage() {
  // Redirect admins away — they don't report issues
  const { isLoading: guardLoading } = useCitizenOnlyGuard();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["issues", "mine"],
    queryFn: () => issueService.myReports().then((res) => res.data.data),
    enabled: !guardLoading,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => issueService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["issues", "mine"] });
      toast.success("Report deleted successfully.");
    },
    onError: () => toast.error("Failed to delete report. Please try again."),
  });

  if (guardLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const mine = data ?? [];

  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold">My Reports</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Track the issues you've reported · {mine.length} report{mine.length !== 1 ? "s" : ""}
          </p>
        </div>
        {isError ? (
          <EmptyState
            icon={FileText}
            title="Couldn't load your reports"
            description="Please check your connection and try again."
          />
        ) : isLoading ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : mine.length === 0 ? (
          <EmptyState
            icon={FileText}
            title="No reports yet"
            description="Your reported issues will appear here."
            actionLabel="Report your first issue"
            actionTo="/report"
          />
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {mine.map((i) => (
              <div key={i.id} className="space-y-2 group">
                <IssueCard issue={i} />
                <button
                  onClick={() => {
                    if (confirm("Delete this report? This can't be undone.")) {
                      deleteMutation.mutate(i.id);
                    }
                  }}
                  disabled={deleteMutation.isPending}
                  className="w-full text-xs font-semibold text-destructive hover:underline py-1 disabled:opacity-50 transition-opacity opacity-0 group-hover:opacity-100"
                >
                  Delete report
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}