import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (addons?: IDefaultParams) => {
  const data = await request(`https://osu.ppy.sh/api/v2/friends`, {
    method: 'GET',
    addons,
  });

  return data;
};


export default name;