export interface beatmaps_lookup_difficulties_response {
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
  beatmapset: Beatmapset
  failtimes: Failtimes
  max_combo: number
  owners: Owner[]
}

export interface Owner {
  id: number
  username: string
}

export interface Failtimes {
  fail: number[]
  exit: number[]
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
  bpm: number
  can_be_hyped: boolean
  deleted_at: null
  discussion_enabled: boolean
  discussion_locked: boolean
  is_scoreable: boolean
  last_updated: string
  legacy_thread_url: string
  nominations_summary: Nominationssummary
  ranked: number
  ranked_date: string
  storyboard: boolean
  submitted_date: string
  tags: string
  availability: Availability
  ratings: number[]
}

export interface Availability {
  download_disabled: boolean
  more_information: null
}

export interface Nominationssummary {
  current: number
  eligible_main_rulesets: string[]
  required_meta: Requiredmeta
}

export interface Requiredmeta {
  main_ruleset: number
  non_main_ruleset: number
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