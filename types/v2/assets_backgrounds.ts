export interface SeasonalBackgrounds {
  ends_at: string
  backgrounds: Background[]
}

export interface BeatmapsetBackground {
  cover: string
  "cover@2x": string
  card: string
  "card@2x": string
  list: string
  "list@2x": string
  slimcover: string
  "slimcover@2x": string
  raw: string
  fullsize: string
}


export interface Background {
  url: string
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
  last_visit?: string
  pm_friends_only: boolean
  profile_colour: any
  username: string
}
