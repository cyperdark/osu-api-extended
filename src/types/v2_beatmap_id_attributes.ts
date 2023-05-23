export interface response {
  attributes: {
    star_rating: number;
    max_combo: number;
    aim_difficulty: number;
    speed_difficulty: number;
    speed_note_count: number;
    flashlight_difficulty: number;
    slider_factor: number;
    approach_rate: number;
    overall_difficulty: number;
    stamina_difficulty: number;
    rhythm_difficulty: number;
    colour_difficulty: number;
    peak_difficulty: number;
    great_hit_window: number;
  };
}


export interface types {
  /**
   * Return attributes (stars, combo, stats) of beatmap
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_beatmap_id_attributes = await v2.beatmap.id.attributes(beatmap_id, body);
   *   console.log(v2_beatmap_id_attributes);
   * };
   * 
   * main();
   * ```
   * @param {number} beatmap_id Beatmap id
   * @param {string[] | number} body.mods Array of matching mods ['HD', 'DT']
   * @param {string} body.ruleset ```osu``` or ```fruits``` or ```mania``` or ```taiko```
   * @param {number} body.ruleset_id ```0``` or ```1``` or ```2``` or ```3```
  */
  (beatmap_id: number, body: {mods?: string[] | number, ruleset?: 'osu' | 'fruits' | 'mania' | 'taiko' , ruleset_id?: '0' | '1' | '2' | '3' , }): Promise<response[]>;
}
