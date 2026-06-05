import { GamemodeEnum } from "../../types/enums.js";
import { IDefaultParams, IError, Modes_names } from "../../types/index.js";
import { teams_details_response } from "../../types/v2/teams_details.js";
import { handleErrors } from "../../utility/handleErrors.js";
import { request } from "../../utility/request.js";


type Response = teams_details_response & IError;


export const teams_details = async (params: {
  id: number | string;
  mode: Modes_names | number;
}, addons?: IDefaultParams): Promise<Response> => {
  if (params.id == null) {
    return handleErrors(new Error(`Specify room id`)) as Response;
  };


  let url = `https://osu.ppy.sh/api/v2/teams/${typeof params.id == 'number' ? params.id : `@${params.id}`}`;
  if (typeof params.mode != 'undefined') url += `/${typeof params.mode == 'string' ? GamemodeEnum[params.mode] : params.mode}`

  const data = await request(url, {
    method: 'GET',
    addons,
  });

  if (data.error) return handleErrors(new Error(data.error));
  return data;
};