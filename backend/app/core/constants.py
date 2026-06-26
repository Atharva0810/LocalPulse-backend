from enum import Enum

class UserRole(str, Enum):
    CITIZEN = "citizen"
    PROVIDER = "provider"
    AUTHORITY = "authority"
    ADMIN = "admin"

class IssueStatus(str, Enum):
    OPEN = "Open"
    REPORTED = "reported"
    UNDER_REVIEW = "under_review"
    ASSIGNED = "assigned"
    IN_PROGRESS = "in_progress"
    RESOLVED = "resolved"
    DISMISSED = "dismissed"

class NotificationType(str, Enum):
    SYSTEM = "system"
    ISSUE_STATUS_CHANGE = "issue_status_change"
    NEW_COMMENT = "new_comment"
    NEW_EVENT = "new_event"
    DIRECT_MESSAGE = "direct_message"

class ProviderCategory(str, Enum):
    PLUMBER = "plumber"
    ELECTRICIAN = "electrician"
    TUTOR = "tutor"
    CARPENTER = "carpenter"
    MECHANIC = "mechanic"
    CLEANER = "cleaner"
    OTHER = "other"
