import { IDefaultParams, IError } from "../../types";
import { UsersBeatmapsResponse } from "../../types/v2/users_beatmaps";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = UsersBeatmapsResponse[] & IError;


export const users_beatmaps = async (params: {
  type: 'favourite' | 'graveyard' | 'guest' | 'loved' | 'most_played' | 'nominated' | 'pending' | 'ranked';
  id: number;

  limit?: number;
  offset?: number;
}, addons?: IDefaultParams): Promise<Response> => {
  if (params.id == null) {
    return handleErrors(`Specify user id`) as Response;
  };

  if (params.type == null) {
    return handleErrors(`Specify beatmaps type`) as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/users/${params.id}/beatmapsets/${params.type}`, {
    method: 'GET',
    params: {
      limit: params.limit,
      offset: params.offset,
    },
    addons,
  });

  if (data.error) return handleErrors(data.error);


  return data;
};