import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (params: {
  id: number;
  limit?: number;
  offset?: number;
}, addons?: IDefaultParams) => {
  const data = await request(`https://osu.ppy.sh/api/v2/users/${params.id}/recent_activity`, {
    method: 'GET',
    params: {
      limit: params.limit,
      offset: params.offset,
    },
    addons,
  });


  return data;
};


export default name;