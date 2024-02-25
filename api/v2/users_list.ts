import { request } from "../../utility/request";
import { UsersDetails } from '../../types/users_details';
import { IDefaultParams } from "../../types";



const name = async (ids: number[], addons?: IDefaultParams): Promise<UsersDetails[]> => {
  const data = await request(`https://osu.ppy.sh/api/v2/users`, {
    method: 'GET',
    params: {
      'ids[]': ids
    },
    addons
  });

  if (data.users) return data.users;
  return data;
};


export default name;