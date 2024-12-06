import { request } from "../../utility/request";
import { IDefaultParams, IError, Modes_names } from "../../types";
import { scores_list_leaderboard_response } from "../../types/v2/scores_list_leaderboard";
import { scores_list_solo_scores_response } from "../../types/v2/scores_list_solo_scores";
import { scores_list_user_beatmap_best_response } from "../../types/v2/scores_list_user_beatmap_best";
import { scores_list_user_beatmap_all_response } from "../../types/v2/scores_list_user_beatmap_all";
import { scores_list_user_user_best_response } from "../../types/v2/scores_list_user_best";
import { scores_list_user_user_firsts_response } from "../../types/v2/scores_list_user_firsts";
import { scores_list_user_recent_response } from "../../types/v2/scores_list_user_recent";
import { scores_list_user_user_pinned_response } from "../../types/v2/scores_list_user_pinned";
import { scores_list_latest_ranked_response } from "../../types/v2/scores_list_latest_ranked";
import { handleErrors } from "../../utility/handleErrors";


type params = {
  mode?: Modes_names;
} & ({
  type: 'leaderboard' | 'solo_scores';

  leaderboard_type?: 'global' | 'country' | 'friend',
  beatmap_id: number;
  mods?: string[];
} | {
  type: 'user_beatmap_best';

  beatmap_id: number;
  user_id: number;
  mods?: string[];
} | {
  type: 'user_beatmap_all';

  beatmap_id: number;
  user_id: number;
} | {
  type: 'user_best' | 'user_firsts' | 'user_recent' | 'user_pinned';

  user_id: number;

  include_fails?: boolean;

  offset?: number;
  limit?: number;
} | {
  type: 'latest_ranked';

  mode: Modes_names;
  cursor_string?: string;
});


type Response<T extends params['type']> =
  T extends 'leaderboard'
  ? scores_list_leaderboard_response[] & IError
  : T extends 'solo_scores'
  ? scores_list_solo_scores_response[] & IError
  : T extends 'beatmap_best'
  ? scores_list_user_beatmap_best_response[] & IError
  : T extends 'beatmap_all'
  ? scores_list_user_beatmap_all_response[] & IError
  : T extends 'user_best'
  ? scores_list_user_user_best_response[] & IError
  : T extends 'user_firsts'
  ? scores_list_user_user_firsts_response[] & IError
  : T extends 'user_recent'
  ? scores_list_user_recent_response[] & IError
  : T extends 'user_pinned'
  ? scores_list_user_user_pinned_response[] & IError
  : T extends 'latest_ranked'
  ? scores_list_latest_ranked_response & IError
  : IError;


export const scores_list = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  const object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';
  let bypass_flat = false;


  switch (params?.type) {
    case 'leaderboard':
      if (params.beatmap_id == null) {
        return handleErrors(new Error(`Specify beatmap id`)) as Response<T['type']>;
      };


      url += `/beatmaps/${params.beatmap_id}/scores`;


      object['type'] = params.leaderboard_type;
      if (params?.mode != null) object['mode'] = params.mode;
      if (Array.isArray(params?.mods)) object['mods[]'] = params.mods;
      break;

    case 'user_beatmap_best':
      if (params.beatmap_id == null) {
        return handleErrors(new Error(`Specify beatmap id`)) as Response<T['type']>;
      };

      if (params.user_id == null) {
        return handleErrors(new Error(`Specify user id`)) as Response<T['type']>;
      };


      url += `/beatmaps/${params.beatmap_id}/scores/users/${params.user_id}`;


      if (params?.mode != null) object['mode'] = params.mode;
      if (Array.isArray(params?.mods)) object['mods[]'] = params.mods;
      break;

    case 'user_beatmap_all':
      if (params.beatmap_id == null) {
        return handleErrors(new Error(`Specify beatmap id`)) as Response<T['type']>;
      };

      if (params.user_id == null) {
        return handleErrors(new Error(`Specify user id`)) as Response<T['type']>;
      };


      url += `/beatmaps/${params.beatmap_id}/scores/users/${params.user_id}/all`;


      if (params?.mode != null) object['mode'] = params.mode;
      break;

    case 'user_best':
    case 'user_firsts':
    case 'user_recent':
    case 'user_pinned':
      if (params.user_id == null) {
        return handleErrors(new Error(`Specify user id`)) as Response<T['type']>;
      };


      url += `/users/${params.user_id}/scores/${params.type.replace('user_', '')}`;


      if (params?.mode != null) object['mode'] = params.mode;
      if (params?.limit != null) object['limit'] = params.limit;
      if (params?.offset != null) object['offset'] = params.offset;
      if (params?.include_fails != null) object['include_fails'] = params.include_fails == true ? 1 : params.include_fails == false ? 0 : undefined;
      break;

    case 'solo_scores':
      if (params.beatmap_id == null) {
        return handleErrors(new Error(`Specify beatmap id`)) as Response<T['type']>;
      };


      url += `/beatmaps/${params.beatmap_id}/solo-scores`;


      if (params?.leaderboard_type) object['type'] = params.leaderboard_type;
      if (params?.mode) object['mode'] = params.mode;
      if (Array.isArray(params?.mods)) object['mods[]'] = params.mods;
      break;

    case 'latest_ranked':
      if (params.mode == null) {
        return handleErrors(new Error(`Specify gamemode`)) as Response<T['type']>;
      };


      url += `/scores`;
      bypass_flat = true;


      if (params?.mode) object['ruleset'] = params.mode;
      if (params?.cursor_string) object['cursor_string'] = params.cursor_string;
      break;

    default:
      return handleErrors(new Error(`Unsupported type: ${(params as any).type}`)) as Response<T['type']>;
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons,
  });

  if (data.error) return handleErrors(new Error(data.error)) as Response<T['type']>;


  if ('scores' in data && bypass_flat != true) {
    data.scores.forEach((r: any, index: number) => r.index = index);
    return data.scores as Response<T['type']>;
  };

  if (params.type != 'user_beatmap_best' && Array.isArray(data)) data.forEach((r: any, index: number) => r.index = index);
  return data as Response<T['type']>;
};