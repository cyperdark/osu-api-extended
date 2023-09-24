import { request } from "../../../utility/request";
import { UsersDetails } from '../../../types/users_details';



const name = async (ids: number[]): Promise<UsersDetails[]> => {
  const data = await request(`https://osu.ppy.sh/api/v2/users`, {
    method: 'GET',
    params: {
      ids
    },
  });

  if (data.users) return data.users;
  return data;
};


export default name;