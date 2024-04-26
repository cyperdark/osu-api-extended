import { IDefaultParams, IError } from "../../types";
import { MatchesDetailsResponse } from "../../types/v2/matches_detaIls";
import { request } from "../../utility/request";



export const matches_details = async (match_id: number, addons?: IDefaultParams): Promise<MatchesDetailsResponse | IError> => {
  if (match_id == null) {
    return { error: new Error(`Specify match id`) };
  };


  const data = await request(`https://osu.ppy.sh/api/v2/matches/${match_id}`, {
    method: 'GET',
    addons,
  });


  return data;
};