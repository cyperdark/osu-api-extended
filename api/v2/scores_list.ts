import { request } from "../../utility/request";
import { IDefaultParams, IError, Modes_names } from "../../types";
import { ScoresListLeaderboardResponse } from "../../types/v2/scores_list_leaderboard";
import { ScoresListSoloScoresResponse } from "../../types/v2/scores_list_solo_scores";
import { ScoresListBeatmapBestResponse } from "../../types/v2/scores_list_beatmap_best";
import { ScoresListBeatmapAllResponse } from "../../types/v2/scores_list_beatmap_all";
import { ScoresListUserBestResponse } from "../../types/v2/scores_list_user_best";
import { ScoresListUserFirstsResponse } from "../../types/v2/scores_list_user_firsts";
import { ScoresListUserRecentResponse } from "../../types/v2/scores_list_user_recent";
import { ScoresListUserPinnedResponse } from "../../types/v2/scores_list_user_pinned";


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
  T extends 'leaderboard'
  ? ScoresListLeaderboardResponse[] & IError
  : T extends 'solo_scores'
  ? ScoresListSoloScoresResponse[] & IError
  : T extends 'beatmap_best'
  ? ScoresListBeatmapBestResponse[] & IError
  : T extends 'beatmap_all'
  ? ScoresListBeatmapAllResponse[] & IError
  : T extends 'user_best'
  ? ScoresListUserBestResponse[] & IError
  : T extends 'user_firsts'
  ? ScoresListUserFirstsResponse[] & IError
  : T extends 'user_recent'
  ? ScoresListUserRecentResponse[] & IError
  : T extends 'user_pinned'
  ? ScoresListUserPinnedResponse[] & IError
  : IError;


export const scores_list = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  const object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';


  switch (params.type) {
    case 'leaderboard':
      if (params.beatmap_id == null) {
        return { error: new Error(`Specify beatmap id`) } as Response<T['type']>;
      };


      url += `/beatmaps/${params.beatmap_id}/scores`;


      object['type'] = params.leaderboard_type;
      object['mode'] = params.mode;
      object['mods[]'] = params.mods;
      break;

    case 'beatmap_best':
      if (params.beatmap_id == null) {
        return { error: new Error(`Specify beatmap id`) } as Response<T['type']>;
      };

      if (params.user_id == null) {
        return { error: new Error(`Specify user id`) } as Response<T['type']>;
      };


      url += `/beatmaps/${params.beatmap_id}/scores/users/${params.user_id}`;


      object['mode'] = params.mode;
      object['mods[]'] = params.mods;
      break;

    case 'beatmap_all':
      if (params.beatmap_id == null) {
        return { error: new Error(`Specify beatmap id`) } as Response<T['type']>;
      };

      if (params.user_id == null) {
        return { error: new Error(`Specify user id`) } as Response<T['type']>;
      };


      url += `/beatmaps/${params.beatmap_id}/scores/users/${params.user_id}/all`;


      object['mode'] = params.mode;
      break;

    case 'user_best':
    case 'user_firsts':
    case 'user_recent':
    case 'user_pinned':
      if (params.user_id == null) {
        return { error: new Error(`Specify user id`) } as Response<T['type']>;
      };


      url += `/users/${params.user_id}/scores/${params.type.replace('user_', '')}`;


      object['mode'] = params.mode;
      object['limit'] = params.limit;
      object['offset'] = params.offset;
      object['include_fails'] = params.include_fails == true ? 1 : params.include_fails == false ? 0 : undefined;
      break;

    case 'solo_scores':
      if (params.beatmap_id == null) {
        return { error: new Error(`Specify beatmap id`) } as Response<T['type']>;
      };


      url += `/beatmaps/${params.beatmap_id}/solo-scores`;


      object['type'] = params.leaderboard_type;
      object['mode'] = params.mode;
      object['mods[]'] = params.mods;
      break;

    default:
      return { error: new Error(`Unsupported type: ${(params as any).type}`) } as Response<T['type']>;
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