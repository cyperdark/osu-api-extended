import { IDefaultParams, Modes_names } from "../../types";
import { request } from "../../utility/request";



const name = async (addons?: IDefaultParams & { mode: Modes_names }) => {
  let url = 'https://osu.ppy.sh/api/v2/me';
  if (addons?.mode) url += `/${addons.mode}`;

  const data = await request(url, {
    method: 'GET',
    addons,
  });

  return data;
};


export default name;