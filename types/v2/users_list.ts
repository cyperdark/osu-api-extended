export interface UsersLisResponse {
  avatar_url: string
  country_code: string
  default_group: string
  id: number
  is_active: boolean
  is_bot: boolean
  is_deleted: boolean
  is_online: boolean
  is_supporter: boolean
  last_visit: string
  pm_friends_only: boolean
  profile_colour?: string
  username: string
  country: Country
  cover: Cover
  groups: Group[]
  statistics_rulesets: StatisticsRulesets
}

export interface Country {
  code: string
  name: string
}

export interface Cover {
  custom_url: string
  url: string
  id: any
}

export interface Group {
  colour: string
  has_listing: boolean
  has_playmodes: boolean
  id: number
  identifier: string
  is_probationary: boolean
  name: string
  short_name: string
  playmodes: any
}

export interface StatisticsRulesets {
  osu: Osu
  taiko: Taiko
  fruits: Fruits
  mania: Mania
}

export interface Osu {
  count_100: number
  count_300: number
  count_50: number
  count_geki: number
  count_katu: number
  count_miss: number
  level: Level
  global_rank: number
  global_rank_exp: any
  pp: number
  pp_exp: number
  ranked_score: number
  hit_accuracy: number
  play_count: number
  play_time: number
  total_score: number
  total_hits: number
  maximum_combo: number
  replays_watched_by_others: number
  is_ranked: boolean
  grade_counts: GradeCounts
}

export interface Level {
  current: number
  progress: number
}

export interface GradeCounts {
  ss: number
  ssh: number
  s: number
  sh: number
  a: number
}

export interface Taiko {
  count_100: number
  count_300: number
  count_50: number
  count_geki: number
  count_katu: number
  count_miss: number
  level: Level2
  global_rank: number
  global_rank_exp: any
  pp: number
  pp_exp: number
  ranked_score: number
  hit_accuracy: number
  play_count: number
  play_time: number
  total_score: number
  total_hits: number
  maximum_combo: number
  replays_watched_by_others: number
  is_ranked: boolean
  grade_counts: GradeCounts2
}

export interface Level2 {
  current: number
  progress: number
}

export interface GradeCounts2 {
  ss: number
  ssh: number
  s: number
  sh: number
  a: number
}

export interface Fruits {
  count_100: number
  count_300: number
  count_50: number
  count_geki: number
  count_katu: number
  count_miss: number
  level: Level3
  global_rank: number
  global_rank_exp: any
  pp: number
  pp_exp: number
  ranked_score: number
  hit_accuracy: number
  play_count: number
  play_time: number
  total_score: number
  total_hits: number
  maximum_combo: number
  replays_watched_by_others: number
  is_ranked: boolean
  grade_counts: GradeCounts3
}

export interface Level3 {
  current: number
  progress: number
}

export interface GradeCounts3 {
  ss: number
  ssh: number
  s: number
  sh: number
  a: number
}

export interface Mania {
  count_100: number
  count_300: number
  count_50: number
  count_geki: number
  count_katu: number
  count_miss: number
  level: Level4
  global_rank: number
  global_rank_exp: any
  pp: number
  pp_exp: number
  ranked_score: number
  hit_accuracy: number
  play_count: number
  play_time: number
  total_score: number
  total_hits: number
  maximum_combo: number
  replays_watched_by_others: number
  is_ranked: boolean
  grade_counts: GradeCounts4
  variants: Variant[]
}

export interface Level4 {
  current: number
  progress: number
}

export interface GradeCounts4 {
  ss: number
  ssh: number
  s: number
  sh: number
  a: number
}


export interface Variant {
  mode: string
  variant: string
  country_rank: number
  global_rank: number
  pp: number
}