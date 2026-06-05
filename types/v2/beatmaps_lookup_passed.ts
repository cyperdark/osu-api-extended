export interface beatmaps_lookup_passed_response {
  beatmaps_passed: Beatmapspassed[]
}

export interface Beatmapspassed {
  beatmapset_id: number
  difficulty_rating: number
  id: number
  mode: string
  status: string
  total_length: number
  user_id: number
  version: string
}