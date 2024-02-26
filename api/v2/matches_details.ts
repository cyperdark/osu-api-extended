import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (match_id: number, addons?: IDefaultParams) => {
  const data = await request(`https://osu.ppy.sh/api/v2/matches/${match_id}`, {
    method: 'GET',
    addons,
  });

  
  return data;
};


export default name;