export interface changelogsDetailsResponse {
  created_at: string
  display_version: string
  id: number
  users: number
  version: string
  youtube_id: any
  update_stream: UpdateStream
  changelog_entries: ChangelogEntry[]
  versions: Versions
}

export interface UpdateStream {
  id: number
  name: string
  display_name: string
  is_featured: boolean
}

export interface ChangelogEntry {
  id: number
  repository: string
  github_pull_request_id: number
  github_url: string
  url: any
  type: string
  category: string
  title: string
  major: boolean
  created_at: string
  github_user: GithubUser
  message: any
  message_html: any
}

export interface GithubUser {
  display_name: string
  github_url: string
  github_username: string
  id: number
  osu_username?: string
  user_id?: number
  user_url?: string
}

export interface Versions {
  next: Next
  previous: Previous
}

export interface Next {
  created_at: string
  display_version: string
  id: number
  users: number
  version: string
  youtube_id: any
  update_stream: UpdateStream2
}

export interface UpdateStream2 {
  id: number
  name: string
  display_name: string
  is_featured: boolean
}

export interface Previous {
  created_at: string
  display_version: string
  id: number
  users: number
  version: string
  youtube_id: any
  update_stream: UpdateStream3
}

export interface UpdateStream3 {
  id: number
  name: string
  display_name: string
  is_featured: boolean
}
