import { Mod } from "../mods"

export interface ScoresDetailsResponse {
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
  pp: number
  ruleset_id: number
  started_at?: string
  total_score: number
  replay: boolean
  current_user_attributes: CurrentUserAttributes
  beatmap: Beatmap
  beatmapset: Beatmapset
  rank_global: number
  user: User2
}

export interface MaximumStatistics {
  great: number
  legacy_combo_increase?: number
  ignore_hit?: number
  large_tick_hit?: number
  slider_tail_hit?: number
}


export interface Statistics {
  ok: number
  miss?: number
  great: number
  ignore_hit?: number
  large_tick_hit?: number
  slider_tail_hit?: number
}

export interface CurrentUserAttributes {
  pin: any
}

export interface Beatmap {
  beatmapset_id: number
  difficulty_rating: number
  id: number
  mode: string
  status: string
  total_length: number
  user_id: number
  version: string
  accuracy: number
  ar: number
  bpm: number
  convert: boolean
  count_circles: number
  count_sliders: number
  count_spinners: number
  cs: number
  deleted_at: any
  drain: number
  hit_length: number
  is_scoreable: boolean
  last_updated: string
  mode_int: number
  passcount: number
  playcount: number
  ranked: number
  url: string
  checksum: string
  max_combo: number
  user: User
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
  last_visit: any
  pm_friends_only: boolean
  profile_colour: any
  username: string
}

export interface Beatmapset {
  artist: string
  artist_unicode: string
  covers: Covers
  creator: string
  favourite_count: number
  hype: any
  id: number
  nsfw: boolean
  offset: number
  play_count: number
  preview_url: string
  source: string
  spotlight: boolean
  status: string
  title: string
  title_unicode: string
  track_id: any
  user_id: number
  video: boolean
}

export interface Covers {
  cover: string
  "cover@2x": string
  card: string
  "card@2x": string
  list: string
  "list@2x": string
  slimcover: string
  "slimcover@2x": string
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
  country: Country
  cover: Cover
  groups: any[]
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
