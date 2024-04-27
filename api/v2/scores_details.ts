import { IDefaultParams, IError, Modes_names } from "../../types";
import { ScoresDetailsResponse } from "../../types/v2/scores_details";
import { request } from "../../utility/request";


type Response = ScoresDetailsResponse & IError;


export const scores_details = async (params: {
  id: number;
  mode?: Modes_names;
}, addons?: IDefaultParams): Promise<Response> => {
  if (params.id == null) {
    return { error: new Error(`Specify score id`) } as Response;
  };


  const url = params.mode ? `https://osu.ppy.sh/api/v2/scores/${params.mode}/${params.id}` : `https://osu.ppy.sh/api/v2/scores/${params.id}`;

  const data = await request(url, {
    method: 'GET',
    addons,
  });


  return data;
};