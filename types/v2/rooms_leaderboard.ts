export interface RoomsLeaderboardResponse {
  leaderboard: Leaderboard[]
  user_score: any
}

export interface Leaderboard {
  accuracy: number
  attempts: number
  completed: number
  pp: number
  room_id: number
  total_score: number
  user_id: number
  user: User
}

export interface User {
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
  profile_colour: any
  username: string
  country: Country
}

export interface Country {
  code: string
  name: string
}
