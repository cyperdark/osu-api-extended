import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (addons?: IDefaultParams) => {
  const data = await request(`https://osu.ppy.sh/api/v2/spotlights`, {
    method: 'GET',
    addons,
  });

  return data.spotlights;
};


export default name;