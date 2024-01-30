import { request } from "../../../utility/request";
import { Modes_names } from '../../../types';



const name = async (beatmap_id: number, obj?: {
  mode?: Modes_names,
  mods?: string[],
  type?: 'global' | 'country' | 'friend',
}) => {
  const data = await request(`https://osu.ppy.sh/api/v2/beatmaps/${beatmap_id}/scores`, {
    method: 'GET',
    params: obj,
  });

  if (!data.scores) return data;
  return data.scores.map((v: any, i: number) => ({ position: i + 1, ...v }));
};


export default name;