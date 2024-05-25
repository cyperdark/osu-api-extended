export interface ChatMessagesResponse {
  channel_id: number
  content: string
  is_action: boolean
  message_id: number
  sender_id: number
  timestamp: string
  type: string
  sender: Sender
}

export interface Sender {
  avatar_url: string
  country_code: string
  default_group: string
  id: number
  is_active: boolean
  is_bot: boolean
  is_deleted: boolean
  is_online: boolean
  is_supporter: boolean
  last_visit?: string
  pm_friends_only: boolean
  profile_colour: any
  username: string
}
