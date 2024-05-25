export interface ChangelogsListAllResponse {
  streams: Stream[]
  builds: Build[]
  search: Search
}

export interface Stream {
  id: number
  name: string
  display_name: string
  is_featured: boolean
  latest_build: LatestBuild
  user_count: number
}

export interface LatestBuild {
  created_at: string
  display_version: string
  id: number
  users: number
  version: string
  youtube_id?: string
  update_stream: UpdateStream
}

export interface UpdateStream {
  id: number
  name: string
  display_name: string
  is_featured: boolean
}

export interface Build {
  created_at: string
  display_version: string
  id: number
  users: number
  version: string
  youtube_id?: string
  update_stream: UpdateStream2
  changelog_entries: ChangelogEntry[]
}

export interface UpdateStream2 {
  id: number
  name: string
  display_name: string
  is_featured: boolean
}

export interface ChangelogEntry {
  id?: number
  repository?: string
  github_pull_request_id?: number
  github_url?: string
  url: any
  type: string
  category: string
  title: string
  major: boolean
  created_at: string
  github_user: GithubUser
  message?: string
  message_html?: string
}

export interface GithubUser {
  display_name: string
  github_url?: string
  github_username?: string
  id?: number
  osu_username?: string
  user_id?: number
  user_url?: string
}

export interface Search {
  stream: any
  from: any
  to: any
  max_id: any
  limit: number
}
