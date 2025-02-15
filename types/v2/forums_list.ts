export interface forums_list_response {
  id: number
  name: string
  description: string
  subforums?: forums_list_response[]
}