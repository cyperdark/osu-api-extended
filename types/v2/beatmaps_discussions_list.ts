export interface BeatmapsDiscussionsListResponse {
  beatmaps: Beatmap[]
  beatmapsets: Beatmapset[]
  discussions: Discussion[]
  included_discussions: IncludedDiscussion[]
  reviews_config: ReviewsConfig
  users: User[]
  cursor: Cursor
  cursor_string: string
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
  deleted_at?: string
  drain: number
  hit_length: number
  is_scoreable: boolean
  last_updated: string
  mode_int: number
  passcount: number
  playcount: number
  ranked: number
  url: string
  checksum?: string
}

export interface Beatmapset {
  artist: string
  artist_unicode: string
  covers: Covers
  creator: string
  favourite_count: number
  hype?: Hype
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
  ranked_date: any
  storyboard: boolean
  submitted_date: string
  tags: string
  availability: Availability
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

export interface Hype {
  current: number
  required: number
}

export interface NominationsSummary {
  current: number
  required: number
}

export interface Availability {
  download_disabled: boolean
  more_information: any
}

export interface Discussion {
  id: number
  beatmapset_id: number
  beatmap_id?: number
  user_id: number
  deleted_by_id: any
  message_type: string
  parent_id: any
  timestamp?: number
  resolved: boolean
  can_be_resolved: boolean
  can_grant_kudosu: boolean
  created_at: string
  updated_at: string
  deleted_at: any
  last_post_at: string
  kudosu_denied: boolean
  starting_post: StartingPost
}

export interface StartingPost {
  beatmapset_discussion_id: number
  created_at: string
  deleted_at: any
  deleted_by_id: any
  id: number
  last_editor_id?: number
  message: string
  system: boolean
  updated_at: string
  user_id: number
}

export interface IncludedDiscussion {
  id: number
  beatmapset_id: number
  beatmap_id?: number
  user_id: number
  deleted_by_id: any
  message_type: string
  parent_id: number
  timestamp?: number
  resolved: boolean
  can_be_resolved: boolean
  can_grant_kudosu: boolean
  created_at: string
  updated_at: string
  deleted_at: any
  last_post_at: string
  kudosu_denied: boolean
  starting_post: StartingPost2
}

export interface StartingPost2 {
  beatmapset_discussion_id: number
  created_at: string
  deleted_at: any
  deleted_by_id: any
  id: number
  last_editor_id: any
  message: string
  system: boolean
  updated_at: string
  user_id: number
}

export interface ReviewsConfig {
  max_blocks: number
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
  groups: Group[]
}

export interface Group {
  colour?: string
  has_listing: boolean
  has_playmodes: boolean
  id: number
  identifier: string
  is_probationary: boolean
  name: string
  short_name: string
  playmodes?: string[]
}

export interface Cursor {
  page: number
  limit: number
}
