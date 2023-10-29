import { gamemode_names } from "../../../../types";
import { request } from "../../../../utility/request";



const name = async (beatmap_id: number, user_id: number, obj: { mode?: gamemode_names, mods?: string[], best_only?: boolean } = {}) => {
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