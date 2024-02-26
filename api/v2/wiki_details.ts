import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (params: {
  locale: string;
  path_name: string;
}, addons?: IDefaultParams) => {
  const data = await request(`https://osu.ppy.sh/api/v2/wiki/${params.locale}/${params.path_name}`, {
    method: 'GET',
    addons,
  });

  return data;
};


export default name;