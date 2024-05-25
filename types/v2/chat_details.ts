export interface ChatDetailsResponse {
  channel: Channel
  users: User[]
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
  current_user_attributes: CurrentUserAttributes
  last_message_id: number
  last_read_id: number
  users: number[]
}

export interface CurrentUserAttributes {
  can_message: boolean
  can_message_error: any
  last_read_id: number
}

export interface User {
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
  country: Country
  cover: Cover
  groups: any[]
}

export interface Country {
  code: string
  name: string
}

export interface Cover {
  custom_url: string
  url: string
  id: any
}
