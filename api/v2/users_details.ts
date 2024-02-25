import { IDefaultParams, Modes_names } from "../../types";
import { request } from "../../utility/request";



const name = async (params: {
  id: number;
  mode?: Modes_names;
  key?: 'id' | 'username';
}, addons?: IDefaultParams) => {
  const data = await request(`https://osu.ppy.sh/api/v2/users/${params.id}${params.mode ? `/${params.mode}` : ''}`, {
    method: 'GET',
    params: { key: params.key },
    addons,
  });


  return data;
};


export default name;