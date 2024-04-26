export interface RankingListChartsResponse {
  beatmapsets: Beatmapset[]
  ranking: Ranking[]
  spotlight: Spotlight
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
  track_id?: number
  user_id: number
  video: boolean
  bpm: number
  can_be_hyped: boolean
  deleted_at: any
  discussion_enabled: boolean
  discussion_locked: boolean
  is_scoreable: boolean
  last_updated: string
  legacy_thread_url: string
  nominations_summary: NominationsSummary
  ranked: number
  ranked_date: string
  storyboard: boolean
  submitted_date: string
  tags: string
  availability: Availability
  beatmaps: Beatmap[]
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

export interface NominationsSummary {
  current: number
  required: number
}

export interface Availability {
  download_disabled: boolean
  more_information: any
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
}

export interface Ranking {
  count_100: number
  count_300: number
  count_50: number
  count_miss: number
  level: Level
  global_rank: any
  global_rank_exp: any
  pp: any
  pp_exp: number
  ranked_score: number
  hit_accuracy: number
  play_count: number
  play_time: any
  total_score: number
  total_hits: number
  maximum_combo: number
  replays_watched_by_others: number
  is_ranked: boolean
  grade_counts: GradeCounts
  user: User
}

export interface Level {
  current: number
  progress: number
}

export interface GradeCounts {
  ss: number
  ssh: number
  s: number
  sh: number
  a: number
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
  profile_colour?: string
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

export interface Spotlight {
  end_date: string
  id: number
  mode_specific: boolean
  name: string
  start_date: string
  type: string
  participant_count: number
}
