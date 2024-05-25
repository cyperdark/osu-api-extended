export interface ForumsTopicsDetailsResponse {
  posts: Post[]
  search: Search
  topic: Topic
  cursor: Cursor
  cursor_string: string
}

export interface Post {
  created_at: string
  deleted_at: any
  edited_at?: string
  edited_by_id?: number
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

export interface Search {
  limit: number
  sort: string
}

export interface Topic {
  created_at: string
  deleted_at: any
  first_post_id: number
  forum_id: number
  id: number
  is_locked: boolean
  last_post_id: number
  post_count: number
  title: string
  type: string
  updated_at: string
  user_id: number
  poll: any
}

export interface Cursor {
  id: number
}
