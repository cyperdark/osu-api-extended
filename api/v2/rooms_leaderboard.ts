import { IDefaultParams, IError } from "../../types";
import { RoomsLeaderboardResponse } from "../../types/v2/rooms_leaderboard";
import { request } from "../../utility/request";



export const rooms_leaderboard = async (params: {
  id: number;
  limit?: number;
}, addons?: IDefaultParams): Promise<RoomsLeaderboardResponse | IError> => {
  if (params.id == null) {
    return { error: new Error(`Specify room id`) };
  };


  const data = await request(`https://osu.ppy.sh/api/v2/rooms/${params.id}/leaderboard`, {
    method: 'GET',
    params: { limit: params.limit },
    addons,
  });


  return data;
};