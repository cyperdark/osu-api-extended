export interface response {
  beatmap_id: number;
  count: number;
  beatmap: {
    beatmapset_id: number;
    difficulty_rating: number;
    id: number;
    mode: string;
    status: string;
    total_length: number;
    user_id: number;
    version: string;
  };
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
    track_id: string;
    user_id: number;
    video: boolean;
  };
}


export interface types {
  /**
   * Return list of user most played beatmaps
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_user_beatmaps_most_played = await v2.user.beatmaps.most_played(user, object);
   *   console.log(v2_user_beatmaps_most_played);
   * };
   * 
   * main();
   * ```
   * @param {number} user id of the user
   * @param {number} object.limit 
   * @param {number} object.offset 
  */
  (user: number, object: {limit?: number, offset?: number, }): Promise<response>;
}
