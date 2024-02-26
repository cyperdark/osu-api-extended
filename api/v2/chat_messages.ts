import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (params: {
  id: number;
  limit?: number;
  since?: number;
  until?: number;
  return_object?: boolean;
}, addons?: IDefaultParams) => {
  const data = await request(`https://osu.ppy.sh/api/v2/chat/channels/${params.id}/messages`, {
    method: 'GET',
    params,
    addons,
  });


  return data;
};


export default name;