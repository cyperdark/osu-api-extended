export interface BeatmapsLookupSet {
  artist?: string
  artist_unicode?: string
  covers?: Covers
  creator?: string
  favourite_count?: number
  hype: any
  id?: number
  nsfw?: boolean
  offset?: number
  play_count?: number
  preview_url?: string
  source?: string
  spotlight?: boolean
  status?: string
  title?: string
  title_unicode?: string
  track_id: any
  user_id?: number
  video?: boolean
  bpm?: number
  can_be_hyped?: boolean
  deleted_at: any
  discussion_enabled?: boolean
  discussion_locked?: boolean
  is_scoreable?: boolean
  last_updated?: string
  legacy_thread_url?: string
  nominations_summary?: NominationsSummary
  ranked?: number
  ranked_date: any
  storyboard?: boolean
  submitted_date?: string
  tags?: string
  availability?: Availability
  beatmaps?: Beatmap[]
  converts?: Convert[]
  current_nominations?: any[]
  description?: Description
  genre?: Genre
  language?: Language
  pack_tags?: any[]
  ratings?: number[]
  recent_favourites?: RecentFavourite[]
  related_users?: RelatedUser[]
  user?: User
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
  failtimes: Failtimes
  max_combo: number
}

export interface Failtimes {
  exit: number[]
  fail: number[]
}

export interface Convert {
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
  failtimes: Failtimes2
}

export interface Failtimes2 {
  exit: number[]
  fail: number[]
}

export interface Description {
  description: string
}

export interface Genre {
  id: number
  name: string
}

export interface Language {
  id: number
  name: string
}

export interface RecentFavourite {
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
}

export interface RelatedUser {
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
  profile_colour: any
  username: string
}
