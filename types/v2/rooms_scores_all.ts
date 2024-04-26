export interface RoomsScoresAllResponse {
  params: Params
  scores: Score[]
  total: number
  user_score: any
  cursor: any
  cursor_string: any
}

export interface Params {
  limit: number
  sort: string
}

export interface Score {
  playlist_item_id: number
  room_id: number
  solo_score_id: number
  ranked: boolean
  preserve: boolean
  processed: boolean
  maximum_statistics: MaximumStatistics
  mods: any[]
  statistics: Statistics
  beatmap_id: number
  best_id: any
  id: number
  rank: string
  type: string
  user_id: number
  accuracy: number
  build_id: number
  ended_at: string
  has_replay: boolean
  is_perfect_combo: boolean
  legacy_perfect: boolean
  legacy_score_id: any
  legacy_total_score: number
  max_combo: number
  passed: boolean
  pp: number
  ruleset_id: number
  started_at: string
  total_score: number
  replay: boolean
  current_user_attributes: CurrentUserAttributes
  user: User
}

export interface MaximumStatistics {
  great: number
  ignore_hit: number
  large_bonus: number
  small_bonus: number
  large_tick_hit: number
  slider_tail_hit: number
}

export interface Statistics {
  ok: number
  great: number
  ignore_hit: number
  ignore_miss: number
  large_bonus: number
  small_bonus: number
  large_tick_hit: number
  slider_tail_hit: number
  meh?: number
  miss?: number
  large_tick_miss?: number
}

export interface CurrentUserAttributes {
  pin: any
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
  last_visit: string
  pm_friends_only: boolean
  profile_colour: any
  username: string
  country: Country
  cover: Cover
}

export interface Country {
  code: string
  name: string
}

export interface Cover {
  custom_url: any
  url: string
  id: string
}
