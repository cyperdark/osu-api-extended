import { Mod } from "../mods";

export interface ScoresUserBeatmap {
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
}

export interface MaximumStatistics {
  great: number;
  legacy_combo_increase?: number;
  ignore_hit?: number;
  large_bonus?: number;
  small_bonus?: number;
  large_tick_hit?: number;
}

export interface Statistics {
  perfect?: number
  good?: number
  ok?: number
  great?: number
  meh?: number
  miss?: number
  ignore_hit?: number;
  ignore_miss?: number;
  small_bonus?: number;
  large_tick_miss?: number;
}

export interface CurrentUserAttributes {
  pin: any;
}
