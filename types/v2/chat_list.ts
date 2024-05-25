export interface ChatListResponse {
  channel_id: number
  description: string
  icon?: string
  message_length_limit: number
  moderated: boolean
  name: string
  type: string
  uuid: any
  current_user_attributes: CurrentUserAttributes
  last_message_id: number
  last_read_id?: number
  users: number[]
}

export interface CurrentUserAttributes {
  can_message: boolean
  can_message_error: any
  last_read_id?: number
}
