import { v2 } from "../";
import type { Modes_names } from "../types";

export const calculate_net_pp = async (params: {
    user_id: number;
    pp_value: number;
    gamemode?: Modes_names;
}): Promise<number> => {
    // fetch user's top plays
    const top_plays = await v2.scores.list({
        type: "user_best",
        user_id: params.user_id,
        limit: 100,
    });

    // map returned data to only pp values.
    const old_scores = top_plays.map(x => x.pp);

    // create a copy of the top plays array for simulation.
    const new_scores = [...top_plays];

    // return 0.0 if the passed pp value is lower than the lowest best score.
    if (params.pp_value < Math.min(...old_scores)) return 0.0;

    // weight the user's current scores. (see https://osu.ppy.sh/wiki/en/Performance_points/Weighting_system)
    const weighted_old_scores = old_scores.map((x, i) => x * Math.pow(0.95, i));

    // change the last score to the new value.
    new_scores[new_scores.length - 1].pp = params.pp_value;

    // sort the array by pp value (descending).
    new_scores.sort((a, b) => b.pp - a.pp);

    // weight the new scores. (see https://osu.ppy.sh/wiki/en/Performance_points/Weighting_system)
    const weighted_new_scores = new_scores.map((x, i) => x.pp * Math.pow(0.95, i));

    // sum up the total pp value of the user's current scores.
    const total_pp_old = weighted_old_scores.reduce((a, b) => a + b, 0);

    // sum up the total pp value of the user's new simulated scores.
    const total_pp_new = weighted_new_scores.reduce((a, b) => a + b, 0);

    // return the delta between the two pp values.
    return total_pp_new - total_pp_old;
};