export interface UserDetails {
  avatar_url: string;
  country_code: string;
  default_group: string;
  id: number;
  is_active: boolean;
  is_bot: boolean;
  is_deleted: boolean;
  is_online: boolean;
  is_supporter: boolean;
  last_visit: Date | null;
  pm_friends_only: boolean;
  profile_colour: null | string;
  username: string;
  cover_url: string;
  discord: null | string;
  has_supported: boolean;
  interests: null | string;
  join_date: Date;
  location: null | string;
  max_blocks: number;
  max_friends: number;
  occupation: null | string;
  playmode: string;
  playstyle: string[] | null;
  post_count: number;
  profile_order: string[];
  title: null;
  title_url: null;
  twitter: null | string;
  website: null | string;
  country: Country;
  cover: Cover;
  kudosu: Kudosu;
  account_history: any[];
  active_tournament_banner: ActiveTournamentBanner | null;
  badges: Badge[];
  beatmap_playcounts_count: number;
  comments_count: number;
  favourite_beatmapset_count: number;
  follower_count: number;
  graveyard_beatmapset_count: number;
  groups: Group[];
  guest_beatmapset_count: number;
  loved_beatmapset_count: number;
  mapping_follower_count: number;
  monthly_playcounts: Count[];
  nominated_beatmapset_count: number;
  page: Page;
  pending_beatmapset_count: number;
  previous_usernames: string[];
  rank_highest: RankHighest;
  ranked_beatmapset_count: number;
  replays_watched_counts: Count[];
  scores_best_count: number;
  scores_first_count: number;
  scores_pinned_count: number;
  scores_recent_count: number;
  statistics: Statistics;
  support_level: number;
  user_achievements: UserAchievement[];
  rank_history: RankHistory;
  rankHistory: RankHistory;
  ranked_and_approved_beatmapset_count: number;
  unranked_beatmapset_count: number;
}

export interface UserAuth extends UserDetails {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

export interface ActiveTournamentBanner {
  id: number;
  tournament_id: number;
  image: string;
  "image@2x": string;
}

export interface Badge {
  awarded_at: Date;
  description: string;
  "image@2x_url": string;
  image_url: string;
  url: string;
}

export interface Country {
  code: string;
  name: string;
}

export interface Cover {
  custom_url: string;
  url: string;
  id: null | string;
}

export interface Group {
  colour: string;
  has_listing: boolean;
  has_playmodes: boolean;
  id: number;
  identifier: string;
  is_probationary: boolean;
  name: string;
  short_name: string;
  playmodes: null;
}

export interface Kudosu {
  available: number;
  total: number;
}

export interface Count {
  start_date: Date;
  count: number;
}

export interface Page {
  html: string;
  raw: string;
}

export interface RankHistory {
  mode: string;
  data: number[];
}

export interface RankHighest {
  rank: number;
  updated_at: Date;
}

export interface Statistics {
  count_100: number;
  count_300: number;
  count_50: number;
  count_miss: number;
  level: Level;
  global_rank: number | null;
  global_rank_exp: number;
  pp: number;
  pp_exp: number;
  ranked_score: number;
  hit_accuracy: number;
  play_count: number;
  play_time: number;
  total_score: number;
  total_hits: number;
  maximum_combo: number;
  replays_watched_by_others: number;
  is_ranked: boolean;
  grade_counts: GradeCounts;
  country_rank: number | null;
  rank: Rank;
}

export interface GradeCounts {
  ss: number;
  ssh: number;
  s: number;
  sh: number;
  a: number;
}

export interface Level {
  current: number;
  progress: number;
}

export interface Rank {
  country: number | null;
}

export interface UserAchievement {
  achieved_at: Date;
  achievement_id: number;
}
