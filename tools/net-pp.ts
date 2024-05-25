import type { IError, Modes_names } from "../types";
import { handleErrors } from "../utility/handleErrors";

import { ScoresListUserBestResponse } from "../types/v2/scores_list_user_best";


type Response = {
  pp: number;
  totalNow: number;
  totalBefore: number;
} & IError;


export const calculate_net_pp = (params: {
  scores: ScoresListUserBestResponse[] | number[];
  pp_value: number;
  gamemode?: Modes_names;
}): Response => {
  if (!Array.isArray(params.scores)) {
    return handleErrors(`Provide array of scores or numbers`) as Response;
  };

  if (!isFinite(params.pp_value) || params.pp_value == null) {
    return handleErrors(`Specify pp`) as Response;
  };


  const pp_values = typeof params.scores[0] == 'number' ? params.scores : (params.scores as any[]).map(r => r.pp);
  pp_values.sort((a, b) => b - a);

  // weight the user's current scores. (see https://osu.ppy.sh/wiki/en/Performance_points/Weighting_system)
  const weighted_before = pp_values.slice(0, 100).map((x, i) => x * Math.pow(0.95, i));
  // sum up the total pp value of the user's current scores.
  const total_pp_old = weighted_before.reduce((a, b) => a + b, 0);


  if (params.pp_value < Math.min(pp_values[pp_values.length - 1]))
    return {
      pp: 0,
      totalNow: total_pp_old,
      totalBefore: total_pp_old,
    } as Response;


  // Push new pp_value
  pp_values.push(params.pp_value);
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