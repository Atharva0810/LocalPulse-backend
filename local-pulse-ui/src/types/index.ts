export type IssueStatus =
  | "open"
  | "under_review"
  | "in_progress"
  | "resolved"
  | "closed";
export type IssueCategory =
  | "road"
  | "water"
  | "electricity"
  | "safety"
  | "sanitation"
  | "other";
export type ProviderCategory =
  | "plumber"
  | "electrician"
  | "tutor"
  | "carpenter"
  | "mechanic"
  | "cleaner"
  | "painter"
  | "doctor"
  | "lawyer"
  | "ca"
  | "tailor"
  | "beauty"
  | "home_repair";
export type NotificationType =
  | "status_updated"
  | "comment_added"
  | "new_event"
  | "issue_resolved"
  | "new_upvotes"
  | "admin_alert"
  | "mention";

export type EventStatus = "pending" | "approved" | "rejected" | "cancelled";
export type UserRole = "citizen" | "admin" | "provider" | "authority";

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  city: string;
  contributionScore: number;
  reportsCount: number;
  upvotesGiven: number;
  role?: UserRole;
  is_active?: boolean;
  createdAt?: string;
}

export interface GeoPoint {
  latitude: number;
  longitude: number;
}

export interface Comment {
  id: string;
  issueId: string;
  author: Pick<User, "id" | "name" | "avatarUrl">;
  text: string;
  createdAt: string;
  isOwn?: boolean;
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  category: IssueCategory;
  status: IssueStatus;
  imageUrl?: string;
  location: GeoPoint;
  address: string;
  distanceKm: number;
  createdAt: string;
  upvotes: number;
  commentsCount: number;
  reporter: Pick<User, "id" | "name" | "avatarUrl"> | null;
  anonymous: boolean;
  aiCategory?: IssueCategory;
  aiSeverity?: "low" | "medium" | "high";
  aiDescription?: string;
  duplicateOf?: string | null;
}

export interface Event {
  id: string;
  title: string;
  description?: string;
  posterUrl?: string;
  date: string;
  time: string;
  organizer: string;
  organizerId?: string;
  location: GeoPoint;
  address: string;
  distanceKm: number;
  interestedCount: number;
  capacity?: number | null;
  category?: string;
  status?: EventStatus;
}

export interface Provider {
  id: string;
  name: string;
  photoUrl?: string;
  category: ProviderCategory;
  rating: number;
  reviewsCount: number;
  phone: string;
  address: string;
  distanceKm: number;
  verified?: boolean;
  contact_email?: string;
  contact_phone?: string;
  service_radius_km?: number;
  is_active?: boolean;
}

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
  refId?: string;
}

export interface AdminStats {
  totalReports: number;
  openIssues: number;
  resolvedIssues: number;
  events: number;
  users: number;
  providers?: number;
  pendingEvents?: number;
  resolvedToday?: number;
}

export interface APIResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: any;
}