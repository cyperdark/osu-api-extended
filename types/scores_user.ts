export interface ScoresUser {
  index: number;
  mods_id: number;
  ranked: boolean;
  maximum_statistics: MaximumStatistics;
  mods: Mod[];
  statistics: Statistics;
  beatmap_id: number;
  best_id: any;
  id: number;
  rank: string;
  type: string;
  user_id: number;
  accuracy: number;
  build_id?: number;
  ended_at: string;
  has_replay: boolean;
  legacy_perfect: any;
  legacy_score_id?: number;
  legacy_total_score: number;
  max_combo: number;
  passed: boolean;
  pp?: number;
  ruleset_id: number;
  started_at?: string;
  total_score: number;
  replay: boolean;
  current_user_attributes: CurrentUserAttributes;
  beatmap: Beatmap;
  beatmapset: Beatmapset;
  user: User;
  weight?: Weight;
}

export interface MaximumStatistics {
  great?: number;
  legacy_combo_increase?: number;
  small_tick_hit?: number;
  large_tick_hit?: number;
  perfect?: number;
  ignore_hit?: number;
  large_bonus?: number;
  small_bonus?: number;
  slider_tail_hit?: number;
}

export interface Mod {
  acronym: string;
  settings?: Settings;
}

export interface Settings {
  approach_rate?: number;
  speed_change?: number;
}

export interface Statistics {
  ok?: number;
  miss?: number;
  great: number;
  large_bonus?: number;
  small_tick_hit?: number;
  large_tick_hit?: number;
  small_tick_miss?: number;
  meh?: number;
  good?: number;
  perfect?: number;
  ignore_hit?: number;
  ignore_miss?: number;
  small_bonus?: number;
  slider_tail_hit?: number;
  large_tick_miss?: number;
}

export interface CurrentUserAttributes {
  pin: any;
}

export interface Beatmap {
  beatmapset_id: number;
  difficulty_rating: number;
  id: number;
  mode: string;
  status: string;
  total_length: number;
  user_id: number;
  version: string;
  accuracy: number;
  ar: number;
  bpm: number;
  convert: boolean;
  count_circles: number;
  count_sliders: number;
  count_spinners: number;
  cs: number;
  deleted_at: any;
  drain: number;
  hit_length: number;
  is_scoreable: boolean;
  last_updated: string;
  mode_int: number;
  passcount: number;
  playcount: number;
  ranked: number;
  url: string;
  checksum: string;
}

export interface Beatmapset {
  artist: string;
  artist_unicode: string;
  covers: Covers;
  creator: string;
  favourite_count: number;
  hype?: Hype;
  id: number;
  nsfw: boolean;
  offset: number;
  play_count: number;
  preview_url: string;
  source: string;
  spotlight: boolean;
  status: string;
  title: string;
  title_unicode: string;
  track_id?: number;
  user_id: number;
  video: boolean;
}

export interface Covers {
  cover: string;
  "cover@2x": string;
  card: string;
  "card@2x": string;
  list: string;
  "list@2x": string;
  slimcover: string;
  "slimcover@2x": string;
}

export interface Hype {
  current: number;
  required: number;
}

export interface User {
  avatar_url: string;
  country_code: string;
  default_group: string;
  id: number;
  is_active: boolean;
  is_bot: boolean;
  is_deleted: boolean;
  is_online: boolean;
  is_supporter: boolean;
  last_visit?: string;
  pm_friends_only: boolean;
  profile_colour: any;
  username: string;
}

export interface Weight {
  percentage: number;
  pp: number;
}