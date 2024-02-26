import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (params: {
  id: number;
  limit?: number;
}, addons?: IDefaultParams) => {
  const data = await request(`https://osu.ppy.sh/api/v2/rooms/${params.id}/leaderboard`, {
    method: 'GET',
    params,
    addons,
  });

  return data;
};


export default name;