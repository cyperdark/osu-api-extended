export interface beatmaps_lookup_set_response {
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
  track_id: number
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
  ranked_date: null
  storyboard: boolean
  submitted_date: string
  tags: string
  availability: Availability
  beatmaps: Beatmap[]
  converts: any[]
  current_nominations: any[]
  description: Description
  genre: Genre
  language: Genre
  pack_tags: any[]
  ratings: number[]
  recent_favourites: any[]
  related_users: Relateduser[]
  related_tags: any[]
  user: Relateduser
}

export interface Relateduser {
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

export interface Genre {
  id: number
  name: string
}

export interface Description {
  description: string
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
  failtimes: Failtimes
  max_combo: number
  owners: Owner[]
  top_tag_ids: any[]
}

export interface Owner {
  id: number
  username: string
}

export interface Failtimes {
  exit: number[]
  fail: number[]
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