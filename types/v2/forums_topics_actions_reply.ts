export interface ForumsTopicsActionsReplyResponse {
  created_at: string
  deleted_at: any
  edited_at: any
  edited_by_id: any
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
