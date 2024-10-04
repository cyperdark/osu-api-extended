import type { IError, Modes_names } from "../types";
import { handleErrors } from "../utility/handleErrors";

import { ScoresListUserBestResponse } from "../types/v2/scores_list_user_best";


type Response = {
  pp: number;
  totalNow: number;
  totalBefore: number;
} & IError;


/**
 * Calculate how much pp would you gain from a play
 *
 * &nbsp;
 *
 * ### Parameters
 * - `scores` - Plays pp or Array of scores
 * - `pp` - Amount of play pp
 *
 * &nbsp;
 *
 * ### Usage Example
 * ```js
 * const { tools } = require('osu-api-extended');
 * 
 * function main() {
 *   try {
 *     const plays = [1000, 900, 800, 700];
 *     const scores = [{ id: 123, pp: 1000 }, { id: 123, pp: 555 }, { id: 123, pp: 234 }, { id: 123, pp: 100 }];
 *     const result = tools.calculate_net_pp(plays, 400);
 *     // or 
 *     const result = tools.calculate_net_pp(scores, 400);
 *     if (result.error != null) {
 *       console.log(result.error);
 *       return;
 *     };
 * 
 * 
 *     console.log(result);
 *   } catch (error) {
 *     console.log(error);
 *   };
 * };
 * 
 * main();
 * ```
 */
export const calculate_net_pp = (scores: ScoresListUserBestResponse[] | number[], pp: number): Response => {
  if (!Array.isArray(scores)) {
    return handleErrors(new Error(`Provide array of scores or plays pp`)) as Response;
  };

  if (!isFinite(pp) || pp == null) {
    return handleErrors(new Error(`Specify play pp`)) as Response;
  };


  const pp_values = typeof scores[0] == 'number' ? scores : (scores as any[]).map(r => r.pp);
  pp_values.sort((a, b) => b - a);

  // weight the user's current scores. (see https://osu.ppy.sh/wiki/en/Performance_points/Weighting_system)
  const weighted_before = pp_values.slice(0, 100).map((x, i) => x * Math.pow(0.95, i));
  // sum up the total pp value of the user's current scores.
  const total_pp_old = weighted_before.reduce((a, b) => a + b, 0);


  if (pp_values.length >= 100 && pp < Math.min(pp_values[pp_values.length - 1]))
    return {
      pp: 0,
      totalNow: total_pp_old,
      totalBefore: total_pp_old,
    } as Response;


  // Push new pp
  pp_values.push(pp);
  pp_values.sort((a, b) => b - a);


  // weight the new scores. (see https://osu.ppy.sh/wiki/en/Performance_points/Weighting_system)
  const weighted_after = pp_values.slice(0, 100).map((x, i) => x * Math.pow(0.95, i));
  // sum up the total pp value of the user's new simulated scores.
  const total_pp_new = weighted_after.reduce((a, b) => a + b, 0);


  return {
    pp: total_pp_new - total_pp_old,
    totalNow: total_pp_new,
    totalBefore: total_pp_old,
  } as Response;
};