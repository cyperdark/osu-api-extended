import { IDefaultParams, IError } from "../../types";
import { MatchesListResponse } from "../../types/v2/matches_list";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = MatchesListResponse & IError;


export const matches_list = async (params: {
  limit: number;
  sort: 'id_desc' | 'id_asc',
  /**
   * Use cursor.match_id
   */
  after_id: number;
}, addons?: IDefaultParams): Promise<Response> => {
  const data = await request(`https://osu.ppy.sh/api/v2/matches`, {
    method: 'GET',
    params: {
      limit: params.limit,
      sort: params.sort,
      'cursor[match_id]': params.after_id,
    },
    addons,
  });

  if (data.error) return handleErrors(data.error);


  return data;
};