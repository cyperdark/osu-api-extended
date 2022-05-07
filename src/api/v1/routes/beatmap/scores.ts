import { namespace, RequestNamepsace } from "../../../../utility/request";
import { id as mods_id } from "../../../../utility/mods";
import form from "../../form/beatmap/scores";

const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/');

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
  }): Promise<{
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
    hits: {
      0: number;
      50: number;
      100: number;
      300: number;
      geki: number;
      katu: number;
    };
    mods: {
      id: number;
      name: string;
    };
    accuracy: number;
    pp: number;
    replay: number;
  }[]>;
};


const name: types = async (id, obj = {}) => {
  const params = {
    b: id,
    u: obj.user,
    m: _mode.indexOf(obj.mode),
    mods: mods_id(obj.mods),
    type: obj.type,
    limit: obj.limit,
  };

  const data = await request(`get_scores`, {
    method: 'GET',
    params: params,
  });

  if (data.length == 0) return null;

  const format = form(data, obj.mode);
  return format;
};


export default name;