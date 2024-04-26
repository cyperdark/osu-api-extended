import { IDefaultParams, IError } from "../../types";
import { MatchesListResponse } from "../../types/v2/matches_list";
import { request } from "../../utility/request";



export const matches_list = async (params: {
  limit: number;
  sort: 'id_desc' | 'id_asc',
  /**
   * Use cursor.match_id
   */
  after_id: number;
}, addons?: IDefaultParams): Promise<MatchesListResponse | IError> => {
  const object = {
    limit: params.limit,
    sort: params.sort,
    'cursor[match_id]': params.after_id,
  };


  const data = await request(`https://osu.ppy.sh/api/v2/matches`, {
    method: 'GET',
    params: object,
    addons,
  });


  return data;
};