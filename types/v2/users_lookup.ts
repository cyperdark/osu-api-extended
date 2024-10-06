export interface UsersLookupResponse {
  avatar_url: string
  country_code: string
  default_group: string
  id: number
  is_active: boolean
  is_bot: boolean
  is_deleted: boolean
  is_online: boolean
  is_supporter: boolean
  last_visit: string
  pm_friends_only: boolean
  profile_colour?: string
  username: string
  country: Country
  cover: Cover
  groups: Group[]
}

export interface Country {
  code: string
  name: string
}

export interface Cover {
  custom_url: string
  url: string
  id?: string
}

export interface Group {
  colour: string
  has_listing: boolean
  has_playmodes: boolean
  id: number
  identifier: string
  is_probationary: boolean
  name: string
  short_name: string
  playmodes: any
}
