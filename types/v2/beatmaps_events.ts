export interface BeatmapsEvents {
  events: Event[]
  reviewsConfig: ReviewsConfig
  users: User2[]
}

export interface Event {
  id: number
  type: string
  comment?: Comment
  created_at: string
  user_id?: number
  beatmapset: Beatmapset
  discussion?: Discussion
}

export interface Comment {
  beatmap_discussion_id?: number
  beatmap_discussion_post_id?: number
  new_vote?: NewVote
  votes?: Vote[]
  old?: string
  new?: string
}

export interface NewVote {
  user_id: number
  score: number
}

export interface Vote {
  user_id: number
  score: number
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
  user: User
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
  profile_colour: any
  username: string
}

export interface Discussion {
  id: number
  beatmapset_id: number
  beatmap_id?: number
  user_id: number
  deleted_by_id: any
  message_type: string
  parent_id?: any
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

export interface ReviewsConfig {
  max_blocks: number
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
  last_visit?: string
  pm_friends_only: boolean
  profile_colour?: string
  username: string
  groups: Group[]
}

export interface Group {
  colour: string
  has_listing: boolean
  has_playmodes: boolean
  id: number
  identifier: string
  is_probationary: boolean
  name: string
  short_name: string
  playmodes?: string[]
}
