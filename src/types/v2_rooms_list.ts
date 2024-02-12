import { Mod } from "./mods";

export interface response {
  id: number;
  name: string;
  category: string;
  type: string;
  user_id: number;
  starts_at: string;
  ends_at: string;
  max_attempts: string;
  participant_count: number;
  channel_id: number;
  active: boolean;
  has_password: boolean;
  queue_mode: string;
  auto_skip: boolean;
  host: {
    avatar_url: string;
    country_code: string;
    default_group: string;
    id: number;
    is_active: boolean;
    is_bot: boolean;
    is_deleted: boolean;
    is_online: boolean;
    is_supporter: boolean;
    last_visit: string;
    pm_friends_only: boolean;
    profile_colour: string;
    username: string;
    country: {
      code: string;
      name: string;
    };
  };
  playlist: {
    id: number;
    room_id: number;
    beatmap_id: number;
    ruleset_id: number;
    allowed_mods: Mod[];
    required_mods: [];
    expired: boolean;
    owner_id: number;
    playlist_order?: string;
    played_at?: string;
    beatmap: {
      beatmapset_id: number;
      difficulty_rating: number;
      id: number;
      mode: string;
      status: string;
      total_length: number;
      user_id: number;
      version: string;
      beatmapset: {
        artist: string;
        artist_unicode: string;
        covers: {
          cover: string;
          'cover@2x': string;
          card: string;
          'card@2x': string;
          list: string;
          'list@2x': string;
          slimcover: string;
          'slimcover@2x': string;
        };
        creator: string;
        favourite_count: number;
        hype: string;
        id: number;
        nsfw: boolean;
        offset: number;
        play_count: number;
        preview_url: string;
        source: string;
        spotlight: boolean;
        status: string;
        title: string;
        title_unicode: string;
        track_id: number;
        user_id: number;
        video: boolean;
      };
      checksum: string;
      max_combo: number;
    };
  }[];
  recent_participants: {
    avatar_url: string;
    country_code: string;
    default_group: string;
    id: number;
    is_active: boolean;
    is_bot: boolean;
    is_deleted: boolean;
    is_online: boolean;
    is_supporter: boolean;
    last_visit?: string;
    pm_friends_only: boolean;
    profile_colour?: string;
    username: string;
  }[];
}


export interface types {
  /**
   * 
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_rooms_list = await v2.rooms.list(mode, object);
   *   console.log(v2_rooms_list);
   * };
   * 
   * main();
   * ```
   * @param {string} mode ```all``` or ```owned``` or ```participated``` or ```ended```
   * @param {string} object.category ```normal``` or ```spotlight``` or ```featured_artist```
   * @param {number} object.limit Number of results
   * @param {number} object.season_id season_id
   * @param {string} object.type_group ```playlists``` or ```realtime```
  */
  (mode: 'all' | 'owned' | 'participated' | 'ended' , object?: {category?: 'normal' | 'spotlight' | 'featured_artist' , limit?: number, season_id?: number, type_group?: 'playlists' | 'realtime' , }): Promise<response[]>;
}
