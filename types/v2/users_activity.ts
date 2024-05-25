export interface UsersActivityResponse {
  created_at: string
  createdAt: string
  id: number
  type: string
  mode: string
  beatmap: Beatmap
  user: User
  scoreRank?: string
  rank?: number
}

export interface Beatmap {
  title: string
  url: string
}

export interface User {
  username: string
  url: string
}
