export interface NewsListResponse {
  news_posts: NewsPost[]
  news_sidebar: NewsSidebar
  search: Search
  cursor: Cursor
  cursor_string: string
}

export interface NewsPost {
  id: number
  author: string
  edit_url: string
  first_image: string
  published_at: string
  updated_at: string
  slug: string
  title: string
  preview: string
}

export interface NewsSidebar {
  current_year: number
  news_posts: NewsPost2[]
  years: number[]
}

export interface NewsPost2 {
  id: number
  author: string
  edit_url: string
  first_image: string
  published_at: string
  updated_at: string
  slug: string
  title: string
}

export interface Search {
  limit: number
  sort: string
  year: any
}

export interface Cursor {
  published_at: string
  id: number
}
