export interface BeatmapsPacksListResponse {
  beatmap_packs: BeatmapPack[]
  cursor: Cursor
  cursor_string: string
}

export interface BeatmapPack {
  author: string
  date: string
  name: string
  no_diff_reduction: boolean
  ruleset_id: any
  tag: string
  url: string
}

export interface Cursor {
  pack_id: number
}
