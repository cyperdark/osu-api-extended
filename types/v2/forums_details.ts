export interface forums_details_response {
  forum: Forum
  topics: Topic[]
  pinned_topics: Pinnedtopic[]
}

export interface Pinnedtopic {
  created_at: string
  deleted_at: null
  first_post_id: number
  forum_id: number
  id: number
  is_locked: boolean
  last_post_id: number
  post_count: number
  title: string
  type: string
  updated_at: string
  user_id: number
  poll: null
}

export interface Topic {
  created_at: string
  deleted_at: null
  first_post_id: number
  forum_id: number
  id: number
  is_locked: boolean
  last_post_id: number
  post_count: number
  title: string
  type: string
  updated_at: string
  user_id: number
  views: number
  poll: Poll | null
}

export interface Poll {
  allow_vote_change: boolean
  ended_at: string
  hide_incomplete_results: boolean
  last_vote_at: string
  max_votes: number
  started_at: string
  title: Title
  total_vote_count: number
  options: Option[]
}

export interface Option {
  id: number
  text: Title
  vote_count: number
}

export interface Title {
  bbcode: string
  html: string
}

export interface Forum {
  id: number
  name: string
  description: string
  subforums: Subforum[]
}

export interface Subforum {
  id: number
  name: string
  description: string
  subforums: any[]
}