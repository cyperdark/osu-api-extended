import { IDefaultParams, IError } from "../../types";
import { RoomsLeaderboardResponse } from "../../types/v2/rooms_leaderboard";
import { credentials } from "../../utility/auth";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = RoomsLeaderboardResponse & IError;


export const rooms_leaderboard = async (params: {
  id: number;
  limit?: number;
}, addons?: IDefaultParams): Promise<Response> => {
  if (credentials.type != 'lazer' && credentials.type != 'cli') {
    return handleErrors(new Error(`Login via lazer or cli to use this endpoint`)) as Response;
  };

  if (params?.id == null) {
    return handleErrors(new Error(`Specify room id`)) as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/rooms/${params.id}/leaderboard`, {
    method: 'GET',
    params: { limit: params?.limit },
    addons,
  });

  if (data.error) return handleErrors(new Error(data.error));


  return data;
};