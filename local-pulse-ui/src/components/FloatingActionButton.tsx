import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

export function FloatingActionButton() {
  const { user } = useApp();

  // Admins don't report issues — hide FAB entirely
  if (user?.role === "admin") return null;

  return (
    <Link
      to="/report"
      className="fixed bottom-24 right-5 lg:bottom-8 lg:right-8 z-30 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 grid place-items-center hover:bg-primary/90 hover:scale-105 transition-all"
      aria-label="Report an issue"
    >
      <Plus className="h-7 w-7" />
    </Link>
  );
}
