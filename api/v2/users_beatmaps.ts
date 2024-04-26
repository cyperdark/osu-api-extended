import { IDefaultParams, IError } from "../../types";
import { UsersBeatmapsResponse } from "../../types/v2/users_beatmaps";
import { request } from "../../utility/request";



export const users_beatmaps = async (params: {
  type: 'favourite' | 'graveyard' | 'guest' | 'loved' | 'most_played' | 'nominated' | 'pending' | 'ranked';
  id: number;

  limit?: number;
  offset?: number;
}, addons?: IDefaultParams): Promise<UsersBeatmapsResponse | IError> => {
  if (params.id == null) {
    return { error: new Error(`Specify user id`) };
  };

  if (params.type == null) {
    return { error: new Error(`Specify beatmaps type`) };
  };


  const data = await request(`https://osu.ppy.sh/api/v2/users/${params.id}/beatmapsets/${params.type}`, {
    method: 'GET',
    params: {
      limit: params.limit,
      offset: params.offset,
    },
    addons,
  });


  return data;
};