import { Mod } from "../mods"

export interface RoomsListResponse {
  rooms: Room[]
  cursor: Cursor
  cursor_string: string
}

export interface Room {
  id: number
  name: string
  category: string
  type: string
  user_id: number
  starts_at: string
  ends_at: any
  max_attempts: any
  participant_count: number
  channel_id: number
  active: boolean
  has_password: boolean
  queue_mode: string
  auto_skip: boolean
  current_playlist_item: CurrentPlaylistItem
  difficulty_range: DifficultyRange
  host: Host
  playlist_item_stats: PlaylistItemStats
  recent_participants: RecentParticipant[]
}

export interface CurrentPlaylistItem {
  id: number
  room_id: number
  beatmap_id: number
  ruleset_id: number
  allowed_mods: Mod[]
  required_mods: Mod[]
  expired: boolean
  owner_id: number
  playlist_order: number
  played_at: any
  beatmap: Beatmap
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
  beatmapset: Beatmapset
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

export interface DifficultyRange {
  max: number
  min: number
}

export interface Host {
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
  country: Country
}

export interface Country {
  code: string
  name: string
}

export interface PlaylistItemStats {
  count_active: number
  count_total: number
  ruleset_ids: number[]
}

export interface RecentParticipant {
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

export interface Cursor {
  id: number
}
