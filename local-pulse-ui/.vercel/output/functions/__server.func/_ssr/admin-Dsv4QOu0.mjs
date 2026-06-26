import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as string, i as object } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Dsv4QOu0.js
var $$splitComponentImporter = () => import("./admin-CxYt0T44.mjs");
var adminSearchSchema = object({ tab: string().optional().catch("summary") });
var Route = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Admin — LocalPulse" }] }),
	validateSearch: adminSearchSchema,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
