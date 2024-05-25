export interface ChatActionsNewResponse {
  channel: Channel
  message: Message
  new_channel_id: number
}

export interface Channel {
  channel_id: number
  description: string
  icon: string
  message_length_limit: number
  moderated: boolean
  name: string
  type: string
  uuid: any
  last_message_id: number
  users: number[]
}

export interface Message {
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
  last_visit: any
  pm_friends_only: boolean
  profile_colour: any
  username: string
}
