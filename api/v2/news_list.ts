import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (params: {
  from_year?: string;

  limit?: string;
  cursor_string?: string;
} = {}, addons: IDefaultParams) => {
  const data = await request(`https://osu.ppy.sh/api/v2/news`, {
    method: 'GET',
    params: {
      year: params.from_year,
      limit: params.limit,
      cursor_string: params.cursor_string,
    },
    addons,
  });

  return data;
};


export default name;