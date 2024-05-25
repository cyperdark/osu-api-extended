export interface NewsDetailsResponse {
  id: number
  author: string
  edit_url: string
  first_image: string
  published_at: string
  updated_at: string
  slug: string
  title: string
  content: string
  navigation: Navigation
}

export interface Navigation {
  newer: Newer
  older: Older
}

export interface Newer {
  id: number
  author: string
  edit_url: string
  first_image: string
  published_at: string
  updated_at: string
  slug: string
  title: string
}

export interface Older {
  id: number
  author: string
  edit_url: string
  first_image: string
  published_at: string
  updated_at: string
  slug: string
  title: string
}
