import { ScoresUserBeatmap } from "../../../../types/v2/scores_user_beamap";
import { request } from "../../../../utility/request";
import { Modes_names } from "../../../../types";



const name = async (beatmap_id: number, user_id: number, obj: { mode?: Modes_names, mods?: string[], best_only?: boolean } = {}): Promise<ScoresUserBeatmap[]> => {
  let url = `https://osu.ppy.sh/api/v2/beatmaps/${beatmap_id}/scores/users/${user_id}`;
  if (!obj.best_only) url += '/all';

  const data = await request(url, {
    method: 'GET',
    params: obj,
  });

  if (obj.best_only == true) {
    data.score.position = data.position;
    return [data.score];
  };

  if (data.scores) return data.scores
  return data;
};


export default name;