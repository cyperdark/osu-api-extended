export interface teams_details_response {
  flag_url: string
  id: number
  name: string
  short_name: string
  cover_url: string
  created_at: string
  default_ruleset_id: number
  description: string
  is_open: boolean
  empty_slots: number
  leader: Leader
  members: Member[]
  statistics: Statistics
}

export interface Statistics {
  team_id: number
  ruleset_id: number
  play_count: number
  ranked_score: number
  performance: number
}

export interface Member {
  avatar_url: string
  country_code: string
  default_group: string
  id: number
  is_active: boolean
  is_bot: boolean
  is_deleted: boolean
  is_online: boolean
  is_supporter: boolean
  last_visit: null | string
  pm_friends_only: boolean
  profile_colour: null
  username: string
  country: Country
  cover: Cover2
  groups: any[]
  team: Team
}

export interface Cover2 {
  custom_url: null | string
  url: string
  id: null | string
}

export interface Leader {
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
  profile_colour: null
  username: string
  country: Country
  cover: Cover
  groups: any[]
  team: Team
}

export interface Team {
  flag_url: string
  id: number
  name: string
  short_name: string
}

export interface Cover {
  custom_url: string
  url: string
  id: string
}

export interface Country {
  code: string
  name: string
}