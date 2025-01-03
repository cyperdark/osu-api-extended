import { IDefaultParams, IError, Modes_names } from "../../types";
import { scores_details_response } from "../../types/v2/scores_details";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = scores_details_response & IError;


export const scores_details = async (params: {
  id: number;
  mode?: Modes_names;
}, addons?: IDefaultParams): Promise<Response> => {
  if (params?.id == null) {
    return handleErrors(new Error('Specify score id')) as Response;
  };


  const url = params.mode ? `https://osu.ppy.sh/api/v2/scores/${params.mode}/${params.id}` : `https://osu.ppy.sh/api/v2/scores/${params.id}`;

  const data = await request(url, {
    method: 'GET',
    addons,
  });

  if (data.error) return handleErrors(new Error(data.error));


  return data;
};