import { IDefaultParams, Modes_names } from "../../types";
import { request } from "../../utility/request";



const name = async (params: {
  id: number;
  mode?: Modes_names;
}, addons?: IDefaultParams) => {
  let url = params.mode ? `https://osu.ppy.sh/api/v2/scores/${params.mode}/${params.id}` : `https://osu.ppy.sh/api/v2/scores/${params.id}`;

  const data = await request(url, {
    method: 'GET',
    addons,
  });

  return data;
};


export default name;