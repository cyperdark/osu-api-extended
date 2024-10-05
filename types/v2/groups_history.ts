export interface GroupsHistoryResponse {
  events: Event[]
  cursor: Cursor
  cursor_string: string
}

export interface Event {
  created_at: string
  group_id: number
  hidden: boolean
  id: number
  type: string
  user_id: number
  user_name: string
  group_name: string
  playmodes?: string[]
}

export interface Cursor {
  id: number
}
