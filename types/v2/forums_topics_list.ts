export interface forums_topics_list_response {
  topics: Topic[]
  cursor: Cursor
  cursor_string: string
}

export interface Cursor {
  topic_last_post_time: string
}

export interface Topic {
  created_at: string
  deleted_at: null
  first_post_id: number
  forum_id: number
  id: number
  is_locked: boolean
  last_post_id: number
  post_count: number
  title: string
  type: string
  updated_at: null | string
  user_id: number
  poll: null
}