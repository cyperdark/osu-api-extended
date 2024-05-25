import { IDefaultParams, IError } from "../../types";
import { SpotlightsListResponse } from "../../types/v2/spotlights_list";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = SpotlightsListResponse[] & IError;


export const spotlights_list = async (addons?: IDefaultParams): Promise<Response> => {
  const data = await request(`https://osu.ppy.sh/api/v2/spotlights`, {
    method: 'GET',
    addons,
  });

  if (data.error) return handleErrors(data.error);


  return data.spotlights;
};