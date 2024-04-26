export interface MatchesListResponse {
  matches: Match[]
  params: Params
  cursor: Cursor
  cursor_string: string
}

export interface Match {
  id: number
  start_time: string
  end_time: string
  name: string
}

export interface Params {
  limit: number
  sort: string
}

export interface Cursor {
  match_id: number
}
