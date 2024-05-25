export interface RankingListCountryResponse {
  cursor: Cursor
  ranking: Ranking[]
  total: number
}

export interface Cursor {
  page: number
}

export interface Ranking {
  code: string
  active_users: number
  play_count: number
  ranked_score: number
  performance: number
  country: Country
}

export interface Country {
  code: string
  name: string
}
