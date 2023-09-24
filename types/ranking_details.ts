export interface RankingDetails {
  cursor?: Cursor;
  ranking: Ranking[];
  total?: number;
  beatmapsets?: Beatmapset[];
  spotlight?: Spotlight;
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
  bpm: number;
  can_be_hyped: boolean;
  deleted_at: null;
  discussion_enabled: boolean;
  discussion_locked: boolean;
  is_scoreable: boolean;
  last_updated: Date;
  legacy_thread_url: string;
  nominations_summary: NominationsSummary;
  ranked: number;
  ranked_date: Date;
  storyboard: boolean;
  submitted_date: Date;
  tags: string;
  availability: Availability;
  beatmaps: Beatmap[];
}

export interface Availability {
  download_disabled: boolean;
  more_information: null;
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
  Ranked = "ranked",
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

export interface NominationsSummary {
  current: number;
  required: number;
}

export interface Cursor {
  page: number;
}

export interface Ranking {
  count_100?: number;
  count_300?: number;
  count_50?: number;
  count_miss?: number;
  level?: Level;
  global_rank?: number | null;
  global_rank_exp?: number | null;
  pp?: number | null;
  pp_exp?: number;
  ranked_score: number;
  hit_accuracy?: number;
  play_count: number;
  play_time?: number | null;
  total_score?: number;
  total_hits?: number;
  maximum_combo?: number;
  replays_watched_by_others?: number;
  is_ranked?: boolean;
  grade_counts?: GradeCounts;
  user?: User;
  code?: string;
  active_users?: number;
  performance?: number;
  country?: Country;
}

export interface Country {
  code: string;
  name: string;
}

export interface GradeCounts {
  ss: number;
  ssh: number | null;
  s: number;
  sh: number | null;
  a: number;
}

export interface Level {
  current: number;
  progress: number;
}

export interface User {
  avatar_url: string;
  country_code: string;
  default_group: DefaultGroup;
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
  country: Country;
  cover: Cover;
}

export interface Cover {
  custom_url: null | string;
  url: string;
  id: null | string;
}

export enum DefaultGroup {
  Alumni = "alumni",
  Bng = "bng",
  Default = "default",
  Loved = "loved",
  Nat = "nat",
}

export interface Spotlight {
  end_date: Date;
  id: number;
  mode_specific: boolean;
  name: string;
  start_date: Date;
  type: string;
  participant_count: number;
}
