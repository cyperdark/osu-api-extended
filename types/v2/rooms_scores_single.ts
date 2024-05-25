import { Mod } from "../mods"

export interface RoomsScoresSingleResponse {
  playlist_item_id: number
  room_id: number
  solo_score_id: number
  ranked: boolean
  preserve: boolean
  maximum_statistics: MaximumStatistics
  mods: Mod[]
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
  position: number
  scores_around: ScoresAround
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
  perfect?: number
  good?: number
  ok?: number
  great?: number
  meh?: number
  miss?: number
  ignore_hit: number
  ignore_miss: number
  large_bonus: number
  small_bonus: number
  large_tick_hit: number
  slider_tail_hit: number
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

export interface ScoresAround {
  higher: Higher
  lower: Lower
}

export interface Higher {
  scores: any[]
  params: Params
  cursor: any
  cursor_string: any
}

export interface Params {
  limit: number
  sort: string
}

export interface Lower {
  scores: Score[]
  params: Params2
  cursor: any
  cursor_string: any
}

export interface Score {
  playlist_item_id: number
  room_id: number
  solo_score_id: number
  ranked: boolean
  preserve: boolean
  maximum_statistics: MaximumStatistics2
  mods: Mod[]
  statistics: Statistics2
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
  current_user_attributes: CurrentUserAttributes2
  user: User2
}

export interface MaximumStatistics2 {
  great: number
  ignore_hit: number
  large_bonus: number
  small_bonus: number
  large_tick_hit: number
  slider_tail_hit: number
}

export interface Statistics2 {
  perfect?: number
  good?: number
  ok?: number
  great?: number
  meh?: number
  miss?: number
  ignore_hit: number
  ignore_miss: number
  large_bonus: number
  small_bonus: number
  large_tick_hit: number
  large_tick_miss: number
  slider_tail_hit: number
}

export interface CurrentUserAttributes2 {
  pin: any
}

export interface User2 {
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
  country: Country2
  cover: Cover2
}

export interface Country2 {
  code: string
  name: string
}

export interface Cover2 {
  custom_url: any
  url: string
  id: string
}

export interface Params2 {
  limit: number
  sort: string
}
