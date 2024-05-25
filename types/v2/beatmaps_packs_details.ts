export interface BeatmapsPacksDetailsResponse {
  author: string
  date: string
  name: string
  no_diff_reduction: boolean
  ruleset_id: any
  tag: string
  url: string
  beatmapsets: Beatmapset[]
  user_completion_data: UserCompletionData
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

export interface UserCompletionData {
  completed: boolean
  beatmapset_ids: any[]
}
