import { Mod } from "../mods"

export interface scores_list_leaderboard_response {
  classic_total_score: number
  preserve: boolean
  processed: boolean
  ranked: boolean
  maximum_statistics: Statistics
  mods: Mod[]
  statistics: Statistics
  beatmap_id: number
  best_id: null
  id: number
  rank: string
  type: string
  user_id: number
  accuracy: number
  build_id: null
  ended_at: string
  has_replay: boolean
  is_perfect_combo: boolean
  legacy_perfect: boolean
  legacy_score_id: number
  legacy_total_score: number
  max_combo: number
  passed: boolean
  pp: null
  ruleset_id: number
  started_at: null
  total_score: number
  replay: boolean
  current_user_attributes: Currentuserattributes
  user: User
  index: number
  total_score_without_mods?: number
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
  last_visit: null | string
  pm_friends_only: boolean
  profile_colour: null
  username: string
  country: Country
  cover: Cover
  team: null
}

export interface Cover {
  custom_url: null | string
  url: string
  id: null | string
}

export interface Country {
  code: string
  name: string
}

export interface Currentuserattributes {
  pin: null
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
  large_bonus?: number
  large_tick_hit?: number
  large_tick_miss?: number
  legacy_combo_increase?: number
  small_bonus?: number
  small_tick_hit?: number
  small_tick_miss?: number
}