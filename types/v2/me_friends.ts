export interface MeFriendsResponse {
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
  profile_colour?: string
  username: string
  country: Country
  cover: Cover
  groups: Group[]
  statistics: Statistics
  support_level: number
}

export interface Country {
  code: string
  name: string
}

export interface Cover {
  custom_url?: string
  url: string
  id?: string
}

export interface Group {
  colour?: string
  has_listing: boolean
  has_playmodes: boolean
  id: number
  identifier: string
  is_probationary: boolean
  name: string
  short_name: string
  playmodes?: string[]
}

export interface Statistics {
  count_100: number
  count_300: number
  count_50: number
  count_geki: number
  count_katu: number
  count_miss: number
  level: Level
  global_rank?: number
  global_rank_exp: any
  pp: number
  pp_exp: number
  ranked_score: number
  hit_accuracy: number
  play_count: number
  play_time: number
  total_score: number
  total_hits: number
  maximum_combo: number
  replays_watched_by_others: number
  is_ranked: boolean
  grade_counts: GradeCounts
}

export interface Level {
  current: number
  progress: number
}

export interface GradeCounts {
  ss: number
  ssh: number
  s: number
  sh: number
  a: number
}
