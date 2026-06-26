import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { A as FileText, Y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { i as useCitizenOnlyGuard, t as AppShell } from "./useRouteGuard-CYgdOl03.mjs";
import { t as issueService } from "./issue.service-BZA5ilcn.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as SkeletonCard } from "./SkeletonCard-BMRq53tJ.mjs";
import { t as IssueCard } from "./IssueCard-vZBbwusK.mjs";
import { t as EmptyState } from "./EmptyState-B0joMvPI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/my-reports-Kg2hUCXn.js
var import_jsx_runtime = require_jsx_runtime();
function MyReportsPage() {
	const { isLoading: guardLoading } = useCitizenOnlyGuard();
	const queryClient = useQueryClient();
	useNavigate();
	const { data, isLoading, isError } = useQuery({
		queryKey: ["issues", "mine"],
		queryFn: () => issueService.myReports().then((res) => res.data.data),
		enabled: !guardLoading
	});
	const deleteMutation = useMutation({
		mutationFn: (id) => issueService.delete(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["issues", "mine"] });
			toast.success("Report deleted successfully.");
		},
		onError: () => toast.error("Failed to delete report. Please try again.")
	});
	if (guardLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" })
	});
	const mine = data ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl md:text-3xl font-extrabold",
			children: "My Reports"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-muted-foreground text-sm mt-1",
			children: [
				"Track the issues you've reported · ",
				mine.length,
				" report",
				mine.length !== 1 ? "s" : ""
			]
		})] }), isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: FileText,
			title: "Couldn't load your reports",
			description: "Please check your connection and try again."
		}) : isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-2 xl:grid-cols-3 gap-5",
			children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonCard, {}, i))
		}) : mine.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: FileText,
			title: "No reports yet",
			description: "Your reported issues will appear here.",
			actionLabel: "Report your first issue",
			actionTo: "/report"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-2 xl:grid-cols-3 gap-5",
			children: mine.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IssueCard, { issue: i }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						if (confirm("Delete this report? This can't be undone.")) deleteMutation.mutate(i.id);
					},
					disabled: deleteMutation.isPending,
					className: "w-full text-xs font-semibold text-destructive hover:underline py-1 disabled:opacity-50 transition-opacity opacity-0 group-hover:opacity-100",
					children: "Delete report"
				})]
			}, i.id))
		})]
	}) });
}
//#endregion
export { MyReportsPage as component };
