import { Modes_names } from "../index";

export enum ActionType {
  Rank = 'rank',
  Achievement = 'achievement',
  BeatmapsetUpload = 'beatmapsetUpload',
  BeatmapsetUpdate = 'beatmapsetUpdate',
  UsernameChange = 'usernameChange',
  UserSupportFirst = 'userSupportFirst',
  UserSupportAgain = 'userSupportAgain',
  BeatmapsetRevive = 'beatmapsetRevive',
  BeatmapsetApprove = 'beatmapsetApprove',
}

export interface UsersEventsResponse {
  events: Event[];
  cursor: Cursor;
  cursor_string: string;
}

export interface Cursor {
  event_id: number;
}

export interface Event {
  created_at: string;
  createdAt: string;
  id: number;
  type: 'achievement' | 'beatmapPlaycount' | 'beatmapsetApprove' | 'beatmapsetDelete' | 'beatmapsetRevive' | 'beatmapsetUpdate' | 'beatmapsetUpload' | 'rank' | 'userSupportAgain' | 'userSupportFirst' | 'userSupportGift' | 'usernameChange';
  scoreRank?: string;
  rank?: number;
  mode?: Modes_names;
  beatmap?: Beatmap;
  user?: User;
  achievement?: Achievement;
  beatmapset?: Beatmapset;
  approval?: string;
}

export interface Beatmap {
  title: string;
  url: string;
}

export interface User {
  username: string;
  url: string;
  previousUsername?: string;
}

export interface Achievement {
  icon_url: string;
  id: number;
  name: string;
  grouping: string;
  ordering: number;
  slug: string;
  description: string;
  mode: Modes_names;
  instructions: any;
}

export interface Beatmapset {
  title: string
  url: string
}
