import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { RoomsScoresSingleResponse } from "../../types/v2/rooms_scores_single";
import { RoomScoresUserHighestResponse } from "../../types/v2/rooms_scores_user_highest";
import { RoomsScoresAllResponse } from "../../types/v2/rooms_scores_all";
import { handleErrors } from "../../utility/handleErrors";
import { credentials } from "../../utility/auth";


type params = ({
  type: 'all';

  id: number;
  playlist_id: number;

  limit?: number;
  sort?: 'score_asc' | 'score_desc';

  cursor_string?: string;
} | {
  type: 'single';

  id: number;
  playlist_id: number;
  score_id: number;
} | {
  type: 'user_highest';

  id: number;
  playlist_id: number;
  user_id: number;
});


type Response<T extends params['type']> =
  T extends 'all'
  ? RoomsScoresAllResponse & IError
  : T extends 'single'
  ? RoomsScoresSingleResponse & IError
  : T extends 'user_highest'
  ? RoomScoresUserHighestResponse & IError
  : IError;


export const rooms_scores = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  if (credentials.type != 'lazer' && credentials.type != 'cli') {
    return handleErrors(new Error(`Login via lazer or cli to use this endpoint`)) as Response<T['type']>;
  };


  let object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';


  if (params?.id == null) {
    return handleErrors(new Error(`Specify room id`)) as Response<T['type']>;
  };

  if (params?.playlist_id == null) {
    return handleErrors(new Error(`Specify playlist id`)) as Response<T['type']>;
  };


  switch (params?.type) {
    case 'all':
      url += `/rooms/${params.id}/playlist/${params.playlist_id}/scores`;

      if (params?.limit != null) object.limit = params.limit;
      if (params?.sort != null) object.sort = params.sort;
      if (params?.cursor_string != null) object.cursor_string = params.cursor_string;
      break;

    case 'single':
      url += `/rooms/${params.id}/playlist/${params.playlist_id}/scores/${params.score_id}`;

      break;

    case 'user_highest':
      url += `/rooms/${params.id}/playlist/${params.playlist_id}/scores/users/${params.user_id}`;

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


  return data as Response<T['type']>;
};