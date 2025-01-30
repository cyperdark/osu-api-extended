export interface beatmaps_packs_details_response {
  author: string
  date: string
  name: string
  no_diff_reduction: boolean
  ruleset_id: null
  tag: string
  url: string
  beatmapsets: Beatmapset[]
  user_completion_data: Usercompletiondata
}

export interface Usercompletiondata {
  completed: boolean
  beatmapset_ids: any[]
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
  track_id: null | number
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
}

export interface Availability {
  download_disabled: boolean
  more_information: null | string
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