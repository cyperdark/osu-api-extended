export interface BeatmapsDiscussionsListResponse {
  discussions: Discussion[]
  users: User[]
  votes: Vote[]
  cursor?: Cursor
  cursor_string?: string
}

export interface Discussion {
  id: number
  beatmapset_id: number
  beatmap_id?: number
  user_id: number
  deleted_by_id: any
  message_type: string
  parent_id?: number
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

export interface Vote {
  beatmapset_discussion_id: number
  created_at: string
  id: number
  score: number
  updated_at: string
  user_id: number
}

export interface Cursor {
  page: number
  limit: number
}
