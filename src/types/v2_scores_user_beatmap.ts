export interface response {
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
    pin: {
      is_pinned: boolean;
      score_id: number;
      score_type: string;
    };
  };
}


export interface types {
  /**
   * Return best user score on beatmap
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_scores_user_beatmap = await v2.scores.user.beatmap(beatmap, user, object);
   *   console.log(v2_scores_user_beatmap);
   * };
   * 
   * main();
   * ```
   * @param {number} beatmap id of the beatmap
   * @param {string|number} user id of the user
   * @param {string} object.mode ```osu``` or ```fruits``` or ```mania``` or ```taiko```
   * @param {string[]} object.mods Array of matching mods ['HD', 'DT']
   * @param {boolean} object.best_only Return only best score from the beatmap
  */
  (beatmap: number, user?: string | number, object?: {mode?: 'osu' | 'fruits' | 'mania' | 'taiko' , mods?: string[], best_only?: boolean, }): Promise<response[]>;
}
