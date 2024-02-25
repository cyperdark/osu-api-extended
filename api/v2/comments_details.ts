import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (comment_id: string, addons?: IDefaultParams) => {
  const data = await request(`https://osu.ppy.sh/api/v2/comments/${comment_id}`, {
    method: 'GET',
    addons,
  });


  return data;
};


export default name;