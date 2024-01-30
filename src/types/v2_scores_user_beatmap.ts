export interface response {
  maximum_statistics: {
    great: number
    legacy_combo_increase: number
  }
  mods: Array<{
    acronym: string
  }>
  statistics: {
    ok: number
    meh?: number
    miss: number
    great: number
  }
  beatmap_id: number
  best_id: any
  id: number
  rank: string
  type: string
  user_id: number
  accuracy: number
  build_id: any
  ended_at: string
  has_replay: boolean
  legacy_perfect: any
  legacy_score_id: number
  legacy_total_score: number
  max_combo: number
  passed: boolean
  pp: any
  ruleset_id: number
  started_at: any
  total_score: number
  replay: boolean
  current_user_attributes: {
    pin: any
  }
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
  (beatmap: number, user?: string | number, object?: { mode?: 'osu' | 'fruits' | 'mania' | 'taiko', mods?: string[], best_only?: boolean, }): Promise<response[]>;
}
