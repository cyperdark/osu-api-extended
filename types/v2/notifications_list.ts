export interface NotificationsListResponse {
  notifications: Notification[]
  stacks: Stack[]
  timestamp: string
  types: Type[]
  notification_endpoint: string
}

export interface Notification {
  id: number
  name: string
  created_at: string
  object_type: string
  object_id: number
  source_user_id: number
  is_read: boolean
  details: Details
}

export interface Details {
  title: string
  username: string
  cover_url: string
  beatmapset_id: number
  title_unicode: string
}

export interface Stack {
  category: string
  cursor?: Cursor
  name: string
  object_type: string
  object_id: number
  total: number
}

export interface Cursor {
  id: number
}

export interface Type {
  cursor: Cursor2
  name?: string
  total: number
}

export interface Cursor2 {
  id: number
  type?: string
}
