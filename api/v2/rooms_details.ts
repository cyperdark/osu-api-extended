import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (params: {
  id: number | 'latest';
}, addons?: IDefaultParams) => {
  const data = await request(`https://osu.ppy.sh/api/v2/rooms/${params.id}`, {
    method: 'GET',
    params,
    addons,
  });


  return data;
};


export default name;