import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (params: {
  type: 'favourite' | 'graveyard' | 'guest' | 'loved' | 'most_played' | 'nominated' | 'pending' | 'ranked';
  id: number;

  limit?: number;
  offset?: number;
}, addons?: IDefaultParams) => {
  const data = await request(`https://osu.ppy.sh/api/v2/users/${params.id}/beatmapsets/${params.type}`, {
    method: 'GET',
    params: {
      limit: params.limit,
      offset: params.offset,
    },
    addons,
  });


  return data;
};


export default name;