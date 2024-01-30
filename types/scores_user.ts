export interface ScoresUser {
  index: number;
  mods_id: number;
  accuracy: number;
  best_id: number | null;
  created_at: Date;
  id: number;
  max_combo: number;
  mode: Mode;
  mode_int: number;
  mods: string[];
  passed: boolean;
  perfect: boolean;
  pp: number | null;
  rank: string;
  replay: boolean;
  score: number;
  statistics: Statistics;
  type: Type;
  user_id: number;
  current_user_attributes: CurrentUserAttributes;
  beatmap: Beatmap;
  beatmapset: Beatmapset;
  user: User;
  weight?: Weight;
}

export interface Beatmap {
  beatmapset_id: number;
  difficulty_rating: number;
  id: number;
  mode: Mode;
  status: Status;
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
  deleted_at: null;
  drain: number;
  hit_length: number;
  is_scoreable: boolean;
  last_updated: Date;
  mode_int: number;
  passcount: number;
  playcount: number;
  ranked: number;
  url: string;
  checksum: string;
}

export enum Mode {
  Osu = "osu",
}

export enum Status {
  Approved = "approved",
  Loved = "loved",
  Ranked = "ranked",
}

export interface Beatmapset {
  artist: string;
  artist_unicode: string;
  covers: Covers;
  creator: string;
  favourite_count: number;
  hype: null;
  id: number;
  nsfw: boolean;
  offset: number;
  play_count: number;
  preview_url: string;
  source: string;
  spotlight: boolean;
  status: Status;
  title: string;
  title_unicode: string;
  track_id: number | null;
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

export interface CurrentUserAttributes {
  pin: null;
}

export interface Statistics {
  count_100: number | null;
  count_300: number | null;
  count_50: number | null;
  count_geki: number | null;
  count_katu: number | null;
  count_miss: number | null;
}

export enum Type {
  ScoreBestOsu = "score_best_osu",
  ScoreOsu = "score_osu",
}

export interface User {
  avatar_url: string;
  country_code: CountryCode;
  default_group: DefaultGroup;
  id: number;
  is_active: boolean;
  is_bot: boolean;
  is_deleted: boolean;
  is_online: boolean;
  is_supporter: boolean;
  last_visit: Date;
  pm_friends_only: boolean;
  profile_colour: null;
  username: string;
}

export enum CountryCode {
  ID = "ID",
}

export enum DefaultGroup {
  Default = "default",
}

export interface Weight {
  percentage: number;
  pp: number;
}
