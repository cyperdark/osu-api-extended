export interface ForumsTopicsActionsEditPostResponse {
  created_at: string
  deleted_at: any
  edited_at: string
  edited_by_id: number
  forum_id: number
  id: number
  topic_id: number
  user_id: number
  body: Body
}

export interface Body {
  html: string
  raw: string
}
