import { IDefaultParams, IError } from "../../types";
import { SpotlightsListResponse } from "../../types/v2/spotlights_list";
import { request } from "../../utility/request";



export const spotlights_list = async (addons?: IDefaultParams): Promise<SpotlightsListResponse | IError> => {
  const data = await request(`https://osu.ppy.sh/api/v2/spotlights`, {
    method: 'GET',
    addons,
  });


  return data.spotlights;
};