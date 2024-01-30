import { request } from "../../../../utility/request";
import { Modes_names } from "../../../../types";
import mods from '../../../../tools/mods';
import { ScoresUser } from '../../../../types/scores_user';



const name = async (user_id: number, type: 'recent' | 'best' | 'firsts' | 'pinned', object?: {
  include_fails?: boolean,
  mode?: Modes_names,
  limit?: number,
  offset?: number,
  mods?: number
}): Promise<ScoresUser[]> => {
  if (object.include_fails)
    // @ts-ignore
    object.include_fails = object.include_fails == true ? 1 : 0;

  const data = await request(`https://osu.ppy.sh/api/v2/users/${user_id}/scores/${type}`, {
    method: 'GET',
    params: object,
  });

  // check if scores exists. Sometimes there can an error
  if (Array.isArray(data)) {
    const transform: ScoresUser[] = data.map((v: ScoresUser, i) => {
      const id = v.mods.map(r => r.acronym).filter(r => r != 'CL').join('');

      return {
        index: i + 1,
        mods_id: mods.id(id) || 0,
        ...v
      };
    });

    if (object?.mods) return transform.filter(r => (r.mods_id & object.mods) > 0);
    return transform;
  };

  return data;
};


export default name;