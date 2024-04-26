export interface UsersDetailsResponse {
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
  profile_colour?: string
  username: string
  cover_url: string
  discord?: string
  has_supported: boolean
  interests?: string
  join_date: string
  location?: string
  max_blocks: number
  max_friends: number
  occupation?: string
  playmode: string
  playstyle?: string[]
  post_count: number
  profile_order: string[]
  title: any
  title_url: any
  twitter?: string
  website?: string
  country: Country
  cover: Cover
  kudosu: Kudosu
  account_history: any[]
  active_tournament_banner: any
  active_tournament_banners: any[]
  badges: Badge[]
  beatmap_playcounts_count: number
  comments_count: number
  favourite_beatmapset_count: number
  follower_count: number
  graveyard_beatmapset_count: number
  groups: Group[]
  guest_beatmapset_count: number
  loved_beatmapset_count: number
  mapping_follower_count: number
  monthly_playcounts: MonthlyPlaycount[]
  nominated_beatmapset_count: number
  page: Page
  pending_beatmapset_count: number
  previous_usernames: string[]
  rank_highest: RankHighest
  ranked_beatmapset_count: number
  replays_watched_counts: ReplaysWatchedCount[]
  scores_best_count: number
  scores_first_count: number
  scores_pinned_count: number
  scores_recent_count: number
  statistics: Statistics
  support_level: number
  user_achievements: UserAchievement[]
  rank_history: RankHistory
  rankHistory: RankHistory2
  ranked_and_approved_beatmapset_count: number
  unranked_beatmapset_count: number
}

export interface Country {
  code: string
  name: string
}

export interface Cover {
  custom_url: string
  url: string
  id: any
}

export interface Kudosu {
  available: number
  total: number
}

export interface Badge {
  awarded_at: string
  description: string
  "image@2x_url": string
  image_url: string
  url: string
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
  playmodes: any
}

export interface MonthlyPlaycount {
  start_date: string
  count: number
}

export interface Page {
  html: string
  raw: string
}

export interface RankHighest {
  rank: number
  updated_at: string
}

export interface ReplaysWatchedCount {
  start_date: string
  count: number
}

export interface Statistics {
  count_100: number
  count_300: number
  count_50: number
  count_miss: number
  level: Level
  global_rank: number
  global_rank_exp: any
  pp: number
  pp_exp: number
  ranked_score: number
  hit_accuracy: number
  play_count: number
  play_time: number
  total_score: number
  total_hits: number
  maximum_combo: number
  replays_watched_by_others: number
  is_ranked: boolean
  grade_counts: GradeCounts
  country_rank: number
  rank: Rank
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

export interface Rank {
  country: number
}

export interface UserAchievement {
  achieved_at: string
  achievement_id: number
}

export interface RankHistory {
  mode: string
  data: number[]
}

export interface RankHistory2 {
  mode: string
  data: number[]
}
