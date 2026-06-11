import { request } from "../../../../utility/request";
import { calculate_mods } from "../../../../tools/index";

import form from "../../form/beatmap/scores";
import { handleErrors } from "../../../../utility/handleErrors";

const _mode = [
  'osu',
  'taiko',
  'fruits',
  'mania',
];


export interface types {
  (id: number, obj?: {
    user?: string | number, type?: 'u' | 'id',
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    mods?: string | number,
    limit?: number,
  }): Promise<response[]>;
};

export interface response {
  date: string;
  rank: string;
  user: {
    id: number;
    name: string;
  };
  score: {
    id: number;
    total: number;
  };
  combo: {
    max: number;
    full: number;
  };
  hits: number[];
  mods: {
    id: number;
    name: string;
  };
  accuracy: number;
  pp: number;
  replay: number;
}



const name: types = async (id, obj = {}) => {
  const params = {
    b: id,
    u: obj.user,
    m: _mode.indexOf(obj.mode),
    mods: calculate_mods(obj.mods || '').number,
    type: obj.type,
    limit: obj.limit,
  };
  if (params.m == -1) delete params.m;

  const data = await request(`https://osu.ppy.sh/api/get_scores`, {
    method: 'GET',
    params: params,
  });

  if (data.error) return handleErrors(new Error(data.error));


  if (data.length == 0) return [];

  const format = form(data, obj.mode);
  return format;
};


export default name;