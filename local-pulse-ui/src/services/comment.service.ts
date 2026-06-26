import api from "./api";
import type { APIResponse, Comment } from "@/types";

/**
 * Map backend CommentResponse → frontend Comment
 *
 * Backend fields (from comment.py CommentResponse):
 *   id          : int
 *   issue_id    : int
 *   author_id   : int
 *   author_name : str
 *   content     : str        ← NOT "text"
 *   created_at  : datetime
 *   updated_at  : datetime
 */
export const mapBackendCommentToFrontend = (backendComment: any): Comment => {
  return {
    id: String(backendComment.id ?? backendComment.comment_id ?? ""),
    issueId: String(backendComment.issue_id ?? ""),
    author: {
      id: String(backendComment.author_id ?? ""),
      name:
        backendComment.author_name ||
        backendComment.author?.name ||
        "Citizen",
      avatarUrl: `https://api.dicebear.com/7.x/adventurer/svg?seed=${backendComment.author_id ?? "anon"}`,
    },
    // Backend field is "content" — map to frontend "text"
    text: backendComment.content ?? backendComment.text ?? "",
    createdAt:
      backendComment.created_at || new Date().toISOString(),
    isOwn: backendComment.is_own ?? false,
  };
};

export const commentService = {
  /**
   * GET /comments/{issue_id}
   * Lists all comments for an issue.
   */
  list: (issueId: string) =>
    api
      .get<APIResponse<any[]>>(`/comments/${issueId}`)
      .then((res) => {
        const mapped = (res.data.data || []).map(
          mapBackendCommentToFrontend
        );
        return { ...res, data: { ...res.data, data: mapped } };
      }),

  /**
   * POST /comments/{issue_id}
   * Body: { content: string }   ← "content" is the required field name
   */
  create: (issueId: string, text: string) =>
    api
      .post<APIResponse<any>>(`/comments/${issueId}`, {
        content: text,           // ← "content", NOT "text"
      })
      .then((res) => {
        const mapped = mapBackendCommentToFrontend(res.data.data);
        return { ...res, data: { ...res.data, data: mapped } };
      }),

  /**
   * DELETE /comments/{comment_id}
   * Note: endpoint is /comments/{comment_id} — NOT /comments/single/{comment_id}
   */
  delete: (commentId: string) =>
    api.delete<APIResponse<null>>(`/comments/${commentId}`),
};
