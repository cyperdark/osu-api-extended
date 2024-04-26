export interface UsersKudosuResponse {
  id: number
  action: string
  amount: number
  model: string
  created_at: string
  giver: any
  post: Post
  details: Details
}

export interface Post {
  url: string
  title: string
}

export interface Details {
  event: string
}
