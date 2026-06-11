import { handleErrors } from "../../../../utility/handleErrors";
import { request } from "../../../../utility/request";
import form_best from "../../form/user/best";
import form_recent from "../../form/user/recent";


const _mode = [
  'osu',
  'taiko',
  'fruits',
  'mania',
];

type Reponse = response[];

export interface types {
  (user: string | number, type: 'best' | 'recent', obj?: {
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    type?: 'u' | 'id',
    limit?: number,
  }): Promise<Reponse>;
};

export interface response {
  date: string;
  beatmap: number;
  rank: string;
  user: {
    id: number;
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



const name: types = async (user, type, obj = {}) => {
  const params = {
    u: user,
    m: _mode.indexOf(obj.mode),
    type: obj.type,
    limit: obj.limit,
  };
  if (params.m == -1) delete params.m;

  const data = await request(`https://osu.ppy.sh/api/get_user_${type}`, {
    method: 'GET',
    params: params,
  });

  if (data.error) return handleErrors(new Error(data.error));


  if (data.length == 0) return [];

  if (type == 'best') {
    const format = form_best(data, obj.mode);
    return format;
  };

  const format = form_recent(data, obj.mode);
  return format;
};


export default name;