export interface response {
  position: number;
  accuracy: number;
  best_id: number;
  created_at: string;
  id: number;
  max_combo: number;
  mode: string;
  mode_int: number;
  mods: string[];
  passed: boolean;
  perfect: boolean;
  pp: number;
  rank: string;
  replay: boolean;
  score: number;
  statistics: {
    count_100: number;
    count_300: number;
    count_50: number;
    count_geki: number;
    count_katu: number;
    count_miss: number;
  };
  type: string;
  user_id: number;
  current_user_attributes: {
    pin: string;
  };
  user: {
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
    cover: {
      custom_url: string;
      url: string;
      id: string;
    };
  };
}


export interface types {
  /**
   * Returns the top scores for a beatmap
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_scores_beatmap = await v2.scores.beatmap(beatmap, object);
   *   console.log(v2_scores_beatmap);
   * };
   * 
   * main();
   * ```
   * @param {number} beatmap id of the beatmap
   * @param {string} object.mode ```osu``` or ```fruits``` or ```mania``` or ```taiko```
   * @param {string[]} object.mods Array of matching mods ['HD', 'DT']
   * @param {string} object.type ```global``` or ```country``` or ```friend```
  */
  (beatmap: number, object: {mode?: 'osu' | 'fruits' | 'mania' | 'taiko' , mods?: string[], type?: 'global' | 'country' | 'friend' , }): Promise<response[]>;
}
