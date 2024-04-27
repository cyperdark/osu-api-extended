import { Mod } from "../mods"

export interface ScoresListBeatmapAllResponse {
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
  build_id: any
  ended_at: string
  has_replay: boolean
  is_perfect_combo: boolean
  legacy_perfect: boolean
  legacy_score_id: number
  legacy_total_score: number
  max_combo: number
  passed: boolean
  pp: number
  ruleset_id: number
  started_at: any
  total_score: number
  replay: boolean
  current_user_attributes: CurrentUserAttributes
  index: number
}

export interface MaximumStatistics {
  great: number
  legacy_combo_increase: number
}


export interface Statistics {
  ok: number
  great: number
  meh?: number
  miss?: number
}

export interface CurrentUserAttributes {
  pin: any
}
