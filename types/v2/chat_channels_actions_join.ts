export interface chatChannelsActionsJoinResponse {
  channel_id: number
  description: string
  icon: any
  message_length_limit: number
  moderated: boolean
  name: string
  type: string
  uuid: any
  current_user_attributes: CurrentUserAttributes
  last_message_id: number
  last_read_id: any
  users: any[]
}

export interface CurrentUserAttributes {
  can_message: boolean
  can_message_error: any
  last_read_id: any
}
