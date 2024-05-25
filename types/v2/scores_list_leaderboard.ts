import { Mod } from "../mods"

export interface ScoresListLeaderboardResponse {
  ranked: boolean
  preserve: boolean
  processed: boolean
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
  build_id?: number
  ended_at: string
  has_replay: boolean
  is_perfect_combo: boolean
  legacy_perfect: boolean
  legacy_score_id?: number
  legacy_total_score: number
  max_combo: number
  passed: boolean
  pp?: number
  ruleset_id: number
  started_at?: string
  total_score: number
  replay: boolean
  current_user_attributes: CurrentUserAttributes
  user: User
  index: number
}

export interface MaximumStatistics {
  great: number
  legacy_combo_increase?: number
  ignore_hit?: number
  slider_tail_hit?: number
}


export interface Statistics {
  perfect?: number
  good?: number
  ok?: number
  great?: number
  meh?: number
  miss?: number
  ignore_hit?: number
  ignore_miss?: number
  slider_tail_hit?: number
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
  last_visit?: string
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
  custom_url?: string
  url: string
  id?: string
}
