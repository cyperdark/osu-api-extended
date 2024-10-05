import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { handleErrors } from "../../utility/handleErrors";
import { GroupsHistoryResponse } from "../../types/v2/groups_history";


type Response = GroupsHistoryResponse & IError;


export const groups_history = async (params: {
  user?: string | number;
  group?: 'gmt' | 'nat' | 'dev' | 'alumni' | 'support' | 'bng' | 'loved' | 'bng_limited';
  sort?: 'id_desc' | 'id_asc';
  max_date?: string;
  min_date?: string;
}, addons?: IDefaultParams): Promise<Response> => {
  const data = await request(`https://osu.ppy.sh/groups/history`, {
    method: 'GET',
    params,
    addons
  });


  if (data.error) return handleErrors(new Error(data.error));
  return data;
};