import type { IssueCategory, IssueStatus, ProviderCategory } from "@/types";

export const ISSUE_CATEGORIES: {
  value: IssueCategory;
  label: string;
  emoji: string;
}[] = [
  { value: "road", label: "Road", emoji: "🛣️" },
  { value: "water", label: "Water", emoji: "💧" },
  { value: "electricity", label: "Electricity", emoji: "⚡" },
  { value: "safety", label: "Safety", emoji: "🛡️" },
  { value: "sanitation", label: "Sanitation", emoji: "🧹" },
  { value: "other", label: "Other", emoji: "📌" },
];

export const PROVIDER_CATEGORIES: {
  value: ProviderCategory;
  label: string;
  emoji: string;
}[] = [
  { value: "plumber", label: "Plumber", emoji: "🔧" },
  { value: "electrician", label: "Electrician", emoji: "💡" },
  { value: "tutor", label: "Tutor", emoji: "📚" },
  { value: "carpenter", label: "Carpenter", emoji: "🪚" },
  { value: "mechanic", label: "Mechanic", emoji: "🔩" },
  { value: "cleaner", label: "Cleaner", emoji: "🧽" },
  { value: "painter", label: "Painter", emoji: "🎨" },
  { value: "doctor", label: "Doctor", emoji: "🩺" },
  { value: "lawyer", label: "Lawyer", emoji: "⚖️" },
  { value: "ca", label: "CA/Finance", emoji: "📊" },
  { value: "tailor", label: "Tailor", emoji: "🧵" },
  { value: "beauty", label: "Beauty", emoji: "💄" },
  { value: "home_repair", label: "Home Repair", emoji: "🏠" },
];

export const STATUS_LABEL: Record<IssueStatus, string> = {
  open: "Open",
  under_review: "Under Review",
  in_progress: "In Progress",
  resolved: "Resolved",
  closed: "Closed",
};

export const RADIUS_OPTIONS = [1, 3, 5, 10] as const;

export const EVENT_CATEGORIES = [
  { value: "community", label: "Community", emoji: "🤝" },
  { value: "health", label: "Health Camp", emoji: "🏥" },
  { value: "cleanup", label: "Clean-up Drive", emoji: "🧹" },
  { value: "cultural", label: "Cultural", emoji: "🎭" },
  { value: "education", label: "Education", emoji: "📚" },
  { value: "sports", label: "Sports", emoji: "⚽" },
  { value: "government", label: "Government", emoji: "🏛️" },
  { value: "other", label: "Other", emoji: "📌" },
];

export const ADMIN_TABS = [
  { value: "summary", label: "Dashboard" },
  { value: "reports", label: "Reports" },
  { value: "users", label: "Users" },
  { value: "providers", label: "Providers" },
  { value: "events", label: "Events" },
  { value: "config", label: "System Config" },
  { value: "stats", label: "Analytics" },
] as const;
