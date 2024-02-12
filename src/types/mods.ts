interface BaseMod {
  acronym: string;
  settings?: {};
}

interface EZ extends BaseMod {
  acronym: "EZ";
  settings: {
    retries: number;
  };
}

interface NF extends BaseMod {
  acronym: "NF";
}

interface HT extends BaseMod {
  acronym: "HT";
  settings?: {
    speed_change: number;
    adjust_pitch: boolean;
  };
}

interface DC extends BaseMod {
  acronym: "DC";
  settings: {
    speed_change: number;
  };
}

interface HR extends BaseMod {
  acronym: "HR";
}

interface SD extends BaseMod {
  acronym: "SD";
  settings: {
    restart: boolean;
  };
}

interface PF extends BaseMod {
  acronym: "PF";
  settings: {
    restart: boolean;
  };
}

interface DT extends BaseMod {
  acronym: "DT";
  settings?: {
    speed_change: number;
    adjust_pitch: boolean;
  };
}

interface NC extends BaseMod {
  acronym: "NC";
  settings: {
    speed_change: number;
  };
}

interface HD extends BaseMod {
  acronym: "HD";
  settings: {
    only_fade_approach_circles: boolean;
  };
}

interface FL extends BaseMod {
  acronym: "FL";
  settings?: {
    follow_delay: number;
    size_multiplier: number;
    combo_based_size: boolean;
  };
}

interface BL extends BaseMod {
  acronym: "BL";
}

interface ST extends BaseMod {
  acronym: "ST";
}

interface AC extends BaseMod {
  acronym: "AC";
  settings?: {
    minimum_accuracy: number;
    accuracy_judge_mode: string;
    restart: boolean;
  };
}

interface TP extends BaseMod {
  acronym: "TP";
  settings?: {
    seed: number;
    metronome: boolean;
  };
}

interface DA extends BaseMod {
  acronym: "DA";
  settings?: {
    circle_size: number;
    approach_rate: number;
    drain_rate: number;
    overall_difficulty: number;
    extended_limits: boolean;
  };
}

interface CL extends BaseMod {
  acronym: "CL";
  settings?: {
    no_slider_head_accuracy: boolean;
    classic_note_lock: boolean;
    always_play_tail_sample: boolean;
    fade_hit_circle_early: boolean;
    classic_health: boolean;
  };
}

interface RD extends BaseMod {
  acronym: "RD";
  settings?: {
    angle_sharpness: number;
    seed: number;
  };
}

interface MR extends BaseMod {
  acronym: "MR";
  settings: {
    reflection: string;
  };
}

interface AL extends BaseMod {
  acronym: "AL";
}

interface SG extends BaseMod {
  acronym: "SG";
}

interface AT extends BaseMod {
  acronym: "AT";
}

interface CN extends BaseMod {
  acronym: "CN";
}

interface RX extends BaseMod {
  acronym: "RX";
}

interface AP extends BaseMod {
  acronym: "AP";
}

interface SO extends BaseMod {
  acronym: "SO";
}

interface TR extends BaseMod {
  acronym: "TR";
}

interface WG extends BaseMod {
  acronym: "WG";
  settings: {
    strength: number;
  };
}

interface SI extends BaseMod {
  acronym: "SI";
}

interface GR extends BaseMod {
  acronym: "GR";
  settings: {
    start_scale: number;
  };
}

interface DF extends BaseMod {
  acronym: "DF";
  settings: {
    start_scale: number;
  };
}

interface WU extends BaseMod {
  acronym: "WU";
  settings?: {
    initial_rate: number;
    final_rate: number;
    adjust_pitch: boolean;
  };
}

interface WD extends BaseMod {
  acronym: "WD";
  settings?: {
    initial_rate: number;
    final_rate: number;
    adjust_pitch: boolean;
  };
}

interface TC extends BaseMod {
  acronym: "TC";
}

interface BR extends BaseMod {
  acronym: "BR";
  settings?: {
    spin_speed: number;
    direction: string;
  };
}

interface AD extends BaseMod {
  acronym: "AD";
  settings?: {
    scale: number;
    style: string;
  };
}

interface MU extends BaseMod {
  acronym: "MU";
  settings?: {
    inverse_muting: boolean;
    enable_metronome: boolean;
    mute_combo_count: number;
    affects_hit_sounds: boolean;
  };
}

interface NS extends BaseMod {
  acronym: "NS";
  settings: {
    hidden_combo_count: number;
  };
}

interface MG extends BaseMod {
  acronym: "MG";
  settings: {
    attraction_strength: number;
  };
}

interface RP extends BaseMod {
  acronym: "RP";
  settings: {
    repulsion_strength: number;
  };
}

interface AS extends BaseMod {
  acronym: "AS";
  settings?: {
    initial_rate: number;
    adjust_pitch: boolean;
  };
}

interface FR extends BaseMod {
  acronym: "FR";
}

interface BU extends BaseMod {
  acronym: "BU";
}

interface SY extends BaseMod {
  acronym: "SY";
}

interface DP extends BaseMod {
  acronym: "DP";
  settings?: {
    max_depth: number;
    show_approach_circles: boolean;
  };
}

interface TD extends BaseMod {
  acronym: "TD";
}

interface SV2 extends BaseMod {
  acronym: "SV2";
}

interface SW extends BaseMod {
  acronym: "SW";
}

interface FF extends BaseMod {
  acronym: "FF";
}

interface FI extends BaseMod {
  acronym: "FI";
  settings: {
    coverage: number;
  };
}

interface DS extends BaseMod {
  acronym: "DS";
}

interface IN extends BaseMod {
  acronym: "IN";
}

interface CS extends BaseMod {
  acronym: "CS";
}

interface HO extends BaseMod {
  acronym: "HO";
}

interface K1 extends BaseMod {
  acronym: "1K";
}

interface K2 extends BaseMod {
  acronym: "2K";
}

interface K3 extends BaseMod {
  acronym: "3K";
}

interface K4 extends BaseMod {
  acronym: "4K";
}

interface K5 extends BaseMod {
  acronym: "5K";
}

interface K6 extends BaseMod {
  acronym: "6K";
}

interface K7 extends BaseMod {
  acronym: "7K";
}

interface K8 extends BaseMod {
  acronym: "8K";
}

interface K9 extends BaseMod {
  acronym: "9K";
}

interface K10 extends BaseMod {
  acronym: "10K";
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
  | SW
  | FF
  | FI
  | DS
  | IN
  | CS
  | HO
  | K1
  | K2
  | K3
  | K4
  | K5
  | K6
  | K7
  | K8
  | K9
  | K10;
