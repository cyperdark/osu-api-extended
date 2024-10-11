export interface EZ {
  acronym: "EZ";
  settings?: {
    retries: number;
  };
}

export interface NF {
  acronym: "NF";
}

export interface HT {
  acronym: "HT";
  settings?: {
    speed_change?: number;
    adjust_pitch?: boolean;
  };
}

export interface DC {
  acronym: "DC";
  settings?: {
    speed_change: number;
  };
}

export interface HR {
  acronym: "HR";
}

export interface SD {
  acronym: "SD";
  settings?: {
    restart: boolean;
  };
}

export interface PF {
  acronym: "PF";
  settings?: {
    restart: boolean;
  };
}

export interface DT {
  acronym: "DT";
  settings?: {
    speed_change?: number;
    adjust_pitch?: boolean;
  };
}

export interface NC {
  acronym: "NC";
  settings?: {
    speed_change: number;
  };
}

export interface HD {
  acronym: "HD";
  settings?: {
    only_fade_approach_circles: boolean;
  };
}

export interface FL {
  acronym: "FL";
  settings?: {
    follow_delay?: number;
    size_multiplier?: number;
    combo_based_size?: boolean;
  };
}

export interface BL {
  acronym: "BL";
}

export interface ST {
  acronym: "ST";
}

export interface AC {
  acronym: "AC";
  settings?: {
    minimum_accuracy?: number;
    accuracy_judge_mode?: string;
    restart?: boolean;
  };
}

export interface TP {
  acronym: "TP";
  settings?: {
    seed?: number;
    metronome?: boolean;
  };
}

export interface DA {
  acronym: "DA";
  settings?: {
    circle_size?: number;
    approach_rate?: number;
    drain_rate?: number;
    overall_difficulty?: number;
    extended_limits?: boolean;
  };
}

export interface CL {
  acronym: "CL";
  settings?: {
    no_slider_head_accuracy?: boolean;
    classic_note_lock?: boolean;
    always_play_tail_sample?: boolean;
    fade_hit_circle_early?: boolean;
    classic_health?: boolean;
  };
}

export interface RD {
  acronym: "RD";
  settings?: {
    angle_sharpness?: number;
    seed?: number;
  };
}

export interface ManiaKeys {
  acronym: '1K' | '2K' | '3K' | '4K' | '5K' | '6K' | '7K' | '8K' | '9K' | '10K';
}

export interface MR {
  acronym: "MR";
  settings?: {
    reflection: string;
  };
}

export interface AL {
  acronym: "AL";
}

export interface SG {
  acronym: "SG";
}

export interface AT {
  acronym: "AT";
}

export interface CN {
  acronym: "CN";
}

export interface RX {
  acronym: "RX";
}

export interface AP {
  acronym: "AP";
}

export interface SO {
  acronym: "SO";
}

export interface TR {
  acronym: "TR";
}

export interface WG {
  acronym: "WG";
  settings?: {
    strength: number;
  };
}

export interface SI {
  acronym: "SI";
}

export interface GR {
  acronym: "GR";
  settings?: {
    start_scale: number;
  };
}

export interface DF {
  acronym: "DF";
  settings?: {
    start_scale: number;
  };
}

export interface WU {
  acronym: "WU";
  settings?: {
    initial_rate?: number;
    final_rate?: number;
    adjust_pitch?: boolean;
  };
}

export interface WD {
  acronym: "WD";
  settings?: {
    initial_rate?: number;
    final_rate?: number;
    adjust_pitch?: boolean;
  };
}

export interface TC {
  acronym: "TC";
}

export interface BR {
  acronym: "BR";
  settings?: {
    spin_speed?: number;
    direction?: string;
  };
}

export interface AD {
  acronym: "AD";
  settings?: {
    scale?: number;
    style?: string;
  };
}

export interface MU {
  acronym: "MU";
  settings?: {
    inverse_muting?: boolean;
    enable_metronome?: boolean;
    mute_combo_count?: number;
    affects_hit_sounds?: boolean;
  };
}

export interface NS {
  acronym: "NS";
  settings?: {
    hidden_combo_count: number;
  };
}

export interface MG {
  acronym: "MG";
  settings?: {
    attraction_strength: number;
  };
}

export interface RP {
  acronym: "RP";
  settings?: {
    repulsion_strength: number;
  };
}

export interface AS {
  acronym: "AS";
  settings?: {
    initial_rate?: number;
    adjust_pitch?: boolean;
  };
}

export interface FR {
  acronym: "FR";
}

export interface BU {
  acronym: "BU";
}

export interface SY {
  acronym: "SY";
}

export interface DP {
  acronym: "DP";
  settings?: {
    max_depth?: number;
    show_approach_circles?: boolean;
  };
}

export interface TD {
  acronym: "TD";
}

export interface SV2 {
  acronym: "SV2";
}

export interface HO {
  acronym: "HO";
}

export interface CS {
  acronym: "CS";
}

export interface IN {
  acronym: "IN";
}

export interface DS {
  acronym: "DS";
}

export interface CO {
  acronym: "CO";
}

export interface FI {
  acronym: "FI";
}

export interface NR {
  acronym: "NR";
}

export interface FF {
  acronym: "FF";
}

export interface SW {
  acronym: "SW";
}

export type Mod =
  | EZ
  | NF
  | HT
  | DC
  | HR
  | SD
  | PF
  | DT
  | NC
  | HD
  | FL
  | BL
  | ST
  | AC
  | TP
  | DA
  | CL
  | RD
  | MR
  | AL
  | SG
  | AT
  | CN
  | RX
  | AP
  | SO
  | TR
  | WG
  | SI
  | GR
  | DF
  | WU
  | WD
  | TC
  | BR
  | AD
  | MU
  | NS
  | MG
  | RP
  | AS
  | FR
  | BU
  | SY
  | DP
  | TD
  | SV2 
  | ManiaKeys
  | HO
  | CS
  | IN
  | DS
  | CO
  | FI
  | NR
  | FF
  | SW;