import { namespace, RequestNamepsace } from "../../../../utility/request";
import { id as mods_id } from "../../../../utility/mods";
import form_best from "../../form/user/best";
import form_recent from "../../form/user/recent";

const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/');

const _mode = [
  'osu',
  'taiko',
  'fruits',
  'mania',
];


export interface types {
  (user: string | number, type: 'best' | 'recent', obj?: {
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    type?: 'u' | 'id',
    limit?: number,
  }): Promise<{
    date: string;
    beatmap: number;
    rank: string;
    user: {
      id: number;
    };
    score: {
      id?: number;
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
    pp?: number;
    replay?: number;
  }[]>;
};


const name: types = async (user, type, obj = {}) => {
  const params = {
    u: user,
    m: _mode.indexOf(obj.mode),
    type: obj.type,
    limit: obj.limit,
  };

  const data = await request(`get_user_${type}`, {
    method: 'GET',
    params: params,
  });

  if (data.length == 0) return null;

  if (type == 'best') {
    const format = form_best(data, obj.mode);
    return format;
  };

  const format = form_recent(data, obj.mode);
  return format;
};


export default name;