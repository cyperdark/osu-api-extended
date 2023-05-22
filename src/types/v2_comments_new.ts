export interface response {
  comments: {
    id: number;
    parent_id: string;
    user_id: number;
    pinned: boolean;
    replies_count: number;
    votes_count: number;
    commentable_type: string;
    commentable_id: number;
    legacy_name: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    edited_at: string;
    edited_by_id: string;
    message: string;
    message_html: string;
  }[];
  has_more: boolean;
  has_more_id: string;
  included_comments: [];
  pinned_comments: [];
  user_votes: [];
  user_follow: boolean;
  users: {
    avatar_url: string;
    country_code: string;
    default_group: string;
    id: number;
    is_active: boolean;
    is_bot: boolean;
    is_deleted: boolean;
    is_online: boolean;
    is_supporter: boolean;
    last_visit: string;
    pm_friends_only: boolean;
    profile_colour: string;
    username: string;
  }[];
  sort: string;
  cursor: {
    created_at: string;
    id: number;
  };
  top_level_count: number;
  total: number;
  commentable_meta: {
    current_user_attributes: {
      can_new_comment_reason: string;
    };
    id?: number;
    type?: string;
    title: string;
    url?: string;
    owner_id?: number;
    owner_title?: string;
  }[];
}


export interface types {
  /**
   * Posts a new comment to a comment thread
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_comments_new = await v2.comments.new(comment);
   *   console.log(v2_comments_new);
   * };
   * 
   * main();
   * ```
   * @param {string} comment.commentable_id Resource ID the comment thread is attached to
   * @param {string} comment.commentable_type ```news_post``` or ```beatmapset```
   * @param {string} comment.message Text of the comment
   * @param {string} comment.parent_id The id of the comment to reply to, null if not a reply
  */
  (comment: {commentable_id?: string, commentable_type?: 'news_post' | 'beatmapset' , message?: string, parent_id?: string, }): Promise<response>;
}
