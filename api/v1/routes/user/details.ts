import { IError } from "../../../../types";
import { handleErrors } from "../../../../utility/handleErrors";
import { request } from "../../../../utility/request";
import form from "../../form/user/details";


const _mode = [
  'osu',
  'taiko',
  'fruits',
  'mania',
];

type Response = response[] & IError;

export interface types {
  (user: string | number, obj?: {
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    type?: 'u' | 'id',
    event_days?: number
  }): Promise<Response>;
};

export interface response {
  id: number;
  name: string;
  pp: number;
  acc: number;
  lvl: number;
  join: string;
  country: {
    flag: string;
    short: string;
    full: string;
  };
  play: {
    count: number;
    time: number;
  };
  hits: {
    50: number;
    100: number;
    300: number;
  };
  score: {
    total: number;
    ranked: number;
  };
  rank: {
    global: number;
    country: number;
  };
  ranks: {
    ssh: number;
    ss: number;
    sh: number;
    s: number;
    a: number;
  };
  events: {
    display: {
      html: string;
      pure: string;
    };
    id: {
      diff: number;
      set: number;
    };
    date: string;
    epicfactor: number;
  };
}



const name: types = async (user, obj = {}) => {
  const params = {
    u: user,
    m: _mode.indexOf(obj.mode),
    type: obj.type,
    event_days: obj.event_days,
  };
  if (params.m == -1) delete params.m;


  const data = await request(`https://osu.ppy.sh/api/get_user`, {
    method: 'GET',
    params: params,
  });
  if (data.error) return handleErrors(new Error(data.error)) as Response;
  if (data.length == 0) return handleErrors(new Error('User not found')) as Response;


  const format = form(data);
  return format;
};


export default name;