import { Mod } from "../mods"

export interface scores_list_user_user_firsts_response {
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
  pp: number
  ruleset_id: number
  started_at: null
  total_score: number
  replay: boolean
  current_user_attributes: Currentuserattributes
  beatmap: Beatmap
  beatmapset: Beatmapset
  user: User
  index: number
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
  profile_colour: null
  username: string
}

export interface Beatmapset {
  artist: string
  artist_unicode: string
  covers: Covers
  creator: string
  favourite_count: number
  hype: null
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
  track_id: null
  user_id: number
  video: boolean
}

export interface Covers {
  cover: string
  'cover@2x': string
  card: string
  'card@2x': string
  list: string
  'list@2x': string
  slimcover: string
  'slimcover@2x': string
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
  deleted_at: null
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