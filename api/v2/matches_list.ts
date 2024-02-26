import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (params: {
  limit: number;
  sort: 'id_desc' | 'id_asc',
  /**
   * Use cursor.match_id
   */
  after_id: number;
}, addons?: IDefaultParams) => {
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


export default name;