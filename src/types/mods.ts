export interface Mod {
  acronym: string
  settings?: Settings;
}

export interface Settings {
  retries?: number;
  speed_change?: number;
  adjust_pitch?: boolean;
  restart?: boolean;
  only_fade_approach_circles?: boolean;
  follow_delay?: number;
  size_multiplier?: number;
  combo_based_size?: boolean;
  minimum_accuracy?: number;
  accuracy_judge_mode?: string;
  seed?: number;
  metronome?: boolean;
  circle_size?: number;
  approach_rate?: number;
  drain_rate?: number;
  overall_difficulty?: number;
  extended_limits?: boolean;
  no_slider_head_accuracy?: boolean;
  classic_note_lock?: boolean;
  always_play_tail_sample?: boolean;
  fade_hit_circle_early?: boolean;
  classic_health?: boolean;
  angle_sharpness?: number;
  reflection?: string;
  strength?: number;
  start_scale?: number;
  initial_rate?: number;
  final_rate?: number;
  spin_speed?: number;
  direction?: string;
  scale?: number;
  style?: string;
  inverse_muting?: boolean;
  enable_metronome?: boolean;
  mute_combo_count?: number;
  affects_hit_sounds?: boolean;
  hidden_combo_count?: number;
  attraction_strength?: number;
  repulsion_strength?: number;
  max_depth?: number;
  show_approach_circles?: boolean;
  scroll_speed?: number;
  hard_rock_offsets?: boolean;
  coverage?: number;
}