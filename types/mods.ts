interface EZ {
  acronym: "EZ";
  settings?: {
    retries: number;
  };
}

interface NF {
  acronym: "NF";
}

interface HT {
  acronym: "HT";
  settings?: {
    speed_change?: number;
    adjust_pitch?: boolean;
  };
}

interface DC {
  acronym: "DC";
  settings?: {
    speed_change: number;
  };
}

interface HR {
  acronym: "HR";
}

interface SD {
  acronym: "SD";
  settings?: {
    restart: boolean;
  };
}

interface PF {
  acronym: "PF";
  settings?: {
    restart: boolean;
  };
}

interface DT {
  acronym: "DT";
  settings?: {
    speed_change?: number;
    adjust_pitch?: boolean;
  };
}

interface NC {
  acronym: "NC";
  settings?: {
    speed_change: number;
  };
}

interface HD {
  acronym: "HD";
  settings?: {
    only_fade_approach_circles: boolean;
  };
}

interface FL {
  acronym: "FL";
  settings?: {
    follow_delay?: number;
    size_multiplier?: number;
    combo_based_size?: boolean;
  };
}

interface BL {
  acronym: "BL";
}

interface ST {
  acronym: "ST";
}

interface AC {
  acronym: "AC";
  settings?: {
    minimum_accuracy?: number;
    accuracy_judge_mode?: string;
    restart?: boolean;
  };
}

interface TP {
  acronym: "TP";
  settings?: {
    seed?: number;
    metronome?: boolean;
  };
}

interface DA {
  acronym: "DA";
  settings?: {
    circle_size?: number;
    approach_rate?: number;
    drain_rate?: number;
    overall_difficulty?: number;
    extended_limits?: boolean;
  };
}

interface CL {
  acronym: "CL";
  settings?: {
    no_slider_head_accuracy?: boolean;
    classic_note_lock?: boolean;
    always_play_tail_sample?: boolean;
    fade_hit_circle_early?: boolean;
    classic_health?: boolean;
  };
}

interface RD {
  acronym: "RD";
  settings?: {
    angle_sharpness?: number;
    seed?: number;
  };
}

interface MR {
  acronym: "MR";
  settings?: {
    reflection: string;
  };
}

interface AL {
  acronym: "AL";
}

interface SG {
  acronym: "SG";
}

interface AT {
  acronym: "AT";
}

interface CN {
  acronym: "CN";
}

interface RX {
  acronym: "RX";
}

interface AP {
  acronym: "AP";
}

interface SO {
  acronym: "SO";
}

interface TR {
  acronym: "TR";
}

interface WG {
  acronym: "WG";
  settings?: {
    strength: number;
  };
}

interface SI {
  acronym: "SI";
}

interface GR {
  acronym: "GR";
  settings?: {
    start_scale: number;
  };
}

interface DF {
  acronym: "DF";
  settings?: {
    start_scale: number;
  };
}

interface WU {
  acronym: "WU";
  settings?: {
    initial_rate?: number;
    final_rate?: number;
    adjust_pitch?: boolean;
  };
}

interface WD {
  acronym: "WD";
  settings?: {
    initial_rate?: number;
    final_rate?: number;
    adjust_pitch?: boolean;
  };
}

interface TC {
  acronym: "TC";
}

interface BR {
  acronym: "BR";
  settings?: {
    spin_speed?: number;
    direction?: string;
  };
}

interface AD {
  acronym: "AD";
  settings?: {
    scale?: number;
    style?: string;
  };
}

interface MU {
  acronym: "MU";
  settings?: {
    inverse_muting?: boolean;
    enable_metronome?: boolean;
    mute_combo_count?: number;
    affects_hit_sounds?: boolean;
  };
}

interface NS {
  acronym: "NS";
  settings?: {
    hidden_combo_count: number;
  };
}

interface MG {
  acronym: "MG";
  settings?: {
    attraction_strength: number;
  };
}

interface RP {
  acronym: "RP";
  settings?: {
    repulsion_strength: number;
  };
}

interface AS {
  acronym: "AS";
  settings?: {
    initial_rate?: number;
    adjust_pitch?: boolean;
  };
}

interface FR {
  acronym: "FR";
}

interface BU {
  acronym: "BU";
}

interface SY {
  acronym: "SY";
}

interface DP {
  acronym: "DP";
  settings?: {
    max_depth?: number;
    show_approach_circles?: boolean;
  };
}

interface TD {
  acronym: "TD";
}

interface SV2 {
  acronym: "SV2";
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
  | SV2;