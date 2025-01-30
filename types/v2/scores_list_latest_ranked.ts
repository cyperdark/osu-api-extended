import { Mod } from "../mods"

export interface scores_list_latest_ranked_response {
  scores: Score[]
  cursor: Cursor
  cursor_string: string
}

export interface Cursor {
  id: number
}

export interface Score {
  classic_total_score: number
  preserve: boolean
  processed: boolean
  ranked: boolean
  maximum_statistics: Statistics
  mods: Mod[]
  statistics: Statistics
  total_score_without_mods: number
  beatmap_id: number
  best_id: null
  id: number
  rank: string
  type: string
  user_id: number
  accuracy: number
  build_id: null | number
  ended_at: string
  has_replay: boolean
  is_perfect_combo: boolean
  legacy_perfect: boolean
  legacy_score_id: null | number
  legacy_total_score: number
  max_combo: number
  passed: boolean
  pp: null | number
  ruleset_id: number
  started_at: null | string
  total_score: number
  replay: boolean
  current_user_attributes: Currentuserattributes
  index: number
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