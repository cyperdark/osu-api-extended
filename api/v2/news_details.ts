import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (params: {
  news_id: string;
  key?: 'id' | null;
}, addons?: IDefaultParams) => {
  const data = await request(`https://osu.ppy.sh/api/v2/news/${params.news_id}`, {
    method: 'GET',
    params: { key: params?.key },
    addons,
  });

  return data;
};


export default name;