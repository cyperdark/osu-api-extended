export interface UsersEvents {
  events: Event[];
  cursor: Cursor;
  cursor_string: string;
}

export interface Cursor {
  event_id: number;
}

export interface Event {
  created_at: Date;
  createdAt: Date;
  id: number;
  type: Type;
  scoreRank?: string;
  rank?: number;
  mode?: Mode;
  beatmap?: Beatmap;
  user: User;
  achievement?: Achievement;
  beatmapset?: Beatmap;
}

export interface Achievement {
  icon_url: string;
  id: number;
  name: string;
  grouping: string;
  ordering: number;
  slug: string;
  description: string;
  mode: Mode | null;
  instructions: null | string;
}

export enum Mode {
  Fruits = "fruits",
  Mania = "mania",
  Osu = "osu",
  Taiko = "taiko",
}

export interface Beatmap {
  title: string;
  url: string;
}

export enum Type {
  Achievement = "achievement",
  BeatmapsetUpdate = "beatmapsetUpdate",
  Rank = "rank",
}

export interface User {
  username: string;
  url: string;
}
