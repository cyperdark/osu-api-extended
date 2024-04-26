export interface CommentsActionsDeleteResponse {
  comments: Comment[]
  has_more: boolean
  has_more_id: any
  included_comments: any[]
  pinned_comments: any[]
  user_votes: any[]
  user_follow: boolean
  users: User[]
  sort: string
  cursor: Cursor
  top_level_count: number
  total: number
  commentable_meta: CommentableMeum[]
}

export interface Comment {
  id: number
  parent_id: any
  user_id: number
  pinned: boolean
  replies_count: number
  votes_count: number
  commentable_type: string
  commentable_id: number
  legacy_name: any
  created_at: string
  updated_at: string
  deleted_at: string
  edited_at: string
  edited_by_id: number
}

export interface User {
  avatar_url: string
  country_code: string
  default_group: string
  id: number
  is_active: boolean
  is_bot: boolean
  is_deleted: boolean
  is_online: boolean
  is_supporter: boolean
  last_visit: any
  pm_friends_only: boolean
  profile_colour: any
  username: string
}

export interface Cursor {
  created_at: string
  id: number
}

export interface CommentableMeum {
  current_user_attributes?: CurrentUserAttributes
  id?: number
  type?: string
  title: string
  url?: string
  owner_id?: number
  owner_title?: string
}

export interface CurrentUserAttributes {
  can_new_comment_reason: any
}
