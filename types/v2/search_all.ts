export interface SearchAll {
  type: string
  result: Result
}

export interface Result {
  user: User
  wiki_page: WikiPage
}

export interface User {
  data: UserData[]
  total: number
}

export interface UserData {
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

export interface WikiPage {
  data: WikiData[]
  total: number
}

export interface WikiData {
  available_locales: string[]
  layout: string
  locale: string
  markdown: string
  path: string
  subtitle?: string
  tags: string[]
  title: string
}
