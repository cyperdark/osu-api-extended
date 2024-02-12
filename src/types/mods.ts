type BaseMod = {
  acronym: string;
  settings?: {};
};

type EZ = BaseMod & {
  acronym: "EZ";
  settings: {
    retries: number;
  };
};

type NF = BaseMod & {
  acronym: "NF";
};

type HT = BaseMod & {
  acronym: "HT";
  settings?: {
    speed_change: number;
    adjust_pitch: boolean;
  };
};

type DC = BaseMod & {
  acronym: "DC";
  settings: {
    speed_change: number;
  };
};

type HR = BaseMod & {
  acronym: "HR";
};

type SD = BaseMod & {
  acronym: "SD";
  settings: {
    restart: boolean;
  };
};

type PF = BaseMod & {
  acronym: "PF";
  settings: {
    restart: boolean;
  };
};

type DT = BaseMod & {
  acronym: "DT";
  settings?: {
    speed_change: number;
    adjust_pitch: boolean;
  };
};

type NC = BaseMod & {
  acronym: "NC";
  settings: {
    speed_change: number;
  };
};

type HD = BaseMod & {
  acronym: "HD";
  settings: {
    only_fade_approach_circles: boolean;
  };
};

type FL = BaseMod & {
  acronym: "FL";
  settings?: {
    follow_delay: number;
    size_multiplier: number;
    combo_based_size: boolean;
  };
};

type BL = BaseMod & {
  acronym: "BL";
};

type ST = BaseMod & {
  acronym: "ST";
};

type AC = BaseMod & {
  acronym: "AC";
  settings?: {
    minimum_accuracy: number;
    accuracy_judge_mode: string;
    restart: boolean;
  };
};

type TP = BaseMod & {
  acronym: "TP";
  settings?: {
    seed: number;
    metronome: boolean;
  };
};

type DA = BaseMod & {
  acronym: "DA";
  settings?: {
    circle_size: number;
    approach_rate: number;
    drain_rate: number;
    overall_difficulty: number;
    extended_limits: boolean;
  };
};

type CL = BaseMod & {
  acronym: "CL";
  settings?: {
    no_slider_head_accuracy: boolean;
    classic_note_lock: boolean;
    always_play_tail_sample: boolean;
    fade_hit_circle_early: boolean;
    classic_health: boolean;
  };
};

type RD = BaseMod & {
  acronym: "RD";
  settings?: {
    angle_sharpness: number;
    seed: number;
  };
};

type MR = BaseMod & {
  acronym: "MR";
  settings: {
    reflection: string;
  };
};

type AL = BaseMod & {
  acronym: "AL";
};

type SG = BaseMod & {
  acronym: "SG";
};

type AT = BaseMod & {
  acronym: "AT";
};

type CN = BaseMod & {
  acronym: "CN";
};

type RX = BaseMod & {
  acronym: "RX";
};

type AP = BaseMod & {
  acronym: "AP";
};

type SO = BaseMod & {
  acronym: "SO";
};

type TR = BaseMod & {
  acronym: "TR";
};

type WG = BaseMod & {
  acronym: "WG";
  settings: {
    strength: number;
  };
};

type SI = BaseMod & {
  acronym: "SI";
};

type GR = BaseMod & {
  acronym: "GR";
  settings: {
    start_scale: number;
  };
};

type DF = BaseMod & {
  acronym: "DF";
  settings: {
    start_scale: number;
  };
};

type WU = BaseMod & {
  acronym: "WU";
  settings?: {
    initial_rate: number;
    final_rate: number;
    adjust_pitch: boolean;
  };
};

type WD = BaseMod & {
  acronym: "WD";
  settings?: {
    initial_rate: number;
    final_rate: number;
    adjust_pitch: boolean;
  };
};

type TC = BaseMod & {
  acronym: "TC";
};

type BR = BaseMod & {
  acronym: "BR";
  settings?: {
    spin_speed: number;
    direction: string;
  };
};

type AD = BaseMod & {
  acronym: "AD";
  settings?: {
    scale: number;
    style: string;
  };
};

type MU = BaseMod & {
  acronym: "MU";
  settings?: {
    inverse_muting: boolean;
    enable_metronome: boolean;
    mute_combo_count: number;
    affects_hit_sounds: boolean;
  };
};

type NS = BaseMod & {
  acronym: "NS";
  settings: {
    hidden_combo_count: number;
  };
};

type MG = BaseMod & {
  acronym: "MG";
  settings: {
    attraction_strength: number;
  };
};

type RP = BaseMod & {
  acronym: "RP";
  settings: {
    repulsion_strength: number;
  };
};

type AS = BaseMod & {
  acronym: "AS";
  settings?: {
    initial_rate: number;
    adjust_pitch: boolean;
  };
};

type FR = BaseMod & {
  acronym: "FR";
};

type BU = BaseMod & {
  acronym: "BU";
};

type SY = BaseMod & {
  acronym: "SY";
};

type DP = BaseMod & {
  acronym: "DP";
  settings?: {
    max_depth: number;
    show_approach_circles: boolean;
  };
};

type TD = BaseMod & {
  acronym: "TD";
};

type SV2 = BaseMod & {
  acronym: "SV2";
};

type SW = BaseMod & {
  acronym: "SW";
};

type FF = BaseMod & {
  acronym: "FF";
};

type FI = BaseMod & {
  acronym: "FI";
  settings: {
    coverage: number;
  };
};

type DS = BaseMod & {
  acronym: "DS";
};

type IN = BaseMod & {
  acronym: "IN";
};

type CS = BaseMod & {
  acronym: "CS";
};

type HO = BaseMod & {
  acronym: "HO";
};

type K1 = BaseMod & {
  acronym: "1K";
};

type K2 = BaseMod & {
  acronym: "2K";
};

type K3 = BaseMod & {
  acronym: "3K";
};

type K4 = BaseMod & {
  acronym: "4K";
};

type K5 = BaseMod & {
  acronym: "5K";
};

type K6 = BaseMod & {
  acronym: "6K";
};

type K7 = BaseMod & {
  acronym: "7K";
};

type K8 = BaseMod & {
  acronym: "8K";
};

type K9 = BaseMod & {
  acronym: "9K";
};

type K10 = BaseMod & {
  acronym: "10K";
};

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
