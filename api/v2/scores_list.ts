import { request } from "../../utility/request";
import { IDefaultParams, Modes_names } from "../../types";


type params = {
  mode?: Modes_names;
} & ({
  type: 'leaderboard' | 'solo_scores';

  leaderboard_type?: 'global' | 'country' | 'friend',
  beatmap_id: number;
  mods?: string[];
} | {
  type: 'beatmap_best';

  beatmap_id: number;
  user_id: number;
  mods?: string[];
} | {
  type: 'beatmap_all';

  beatmap_id: number;
  user_id: number;
} | {
  type: 'user_best' | 'user_firsts' | 'user_recent' | 'user_pinned';

  user_id: number;

  include_fails?: boolean;

  offset?: number;
  limit?: number;
});


type Response<T extends params['type']> =
  T extends 'difficulty'
  ? any
  : T extends 'difficulties'
  ? any
  : never;


const name = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  const object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';


  switch (params.type) {
    case 'leaderboard':
      url += `/beatmaps/${params.beatmap_id}/scores`;


      object['type'] = params.leaderboard_type;
      object['mode'] = params.mode;
      object['mods[]'] = params.mods;
      break;

    case 'beatmap_best':
      url += `/beatmaps/${params.beatmap_id}/scores/users/${params.user_id}`;


      object['mode'] = params.mode;
      object['mods[]'] = params.mods;
      break;

    case 'beatmap_all':
      url += `/beatmaps/${params.beatmap_id}/scores/users/${params.user_id}/all`;


      object['mode'] = params.mode;
      break;

    case 'user_best':
    case 'user_firsts':
    case 'user_recent':
    case 'user_pinned':
      url += `/users/${params.user_id}/scores/${params.type.replace('user_', '')}`;


      object['mode'] = params.mode;
      object['limit'] = params.limit;
      object['offset'] = params.offset;
      object['include_fails'] = params.include_fails == true ? 1 : params.include_fails == false ? 0 : undefined;
      break;

    case 'solo_scores':
      url += `/beatmaps/${params.beatmap_id}/solo-scores`;


      object['type'] = params.leaderboard_type;
      object['mode'] = params.mode;
      object['mods[]'] = params.mods;
      break;
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons,
  });


  if ('error' in data) {
    return data;
  };

  if (['leaderboard', 'beatmap_all'].includes(params.type)) {
    data.scores.forEach((r: any, index: number) => r.index = index);
    return data.scores as Response<T['type']>;
  };

  if (params.type != 'beatmap_best') data.forEach((r: any, index: number) => r.index = index);

  return data as Response<T['type']>;
};


export default name;