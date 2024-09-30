export interface BeatmapsDiscussionsPostsResponse {
  beatmapsets: Beatmapset[]
  discussions: Discussion[]
  posts: Post[]
  users: User[]
  cursor: Cursor
  cursor_string: string
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

export interface Hype {
  current: number
  required: number
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
}

export interface Post {
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
}

export interface Cursor {
  page: number
  limit: number
}
