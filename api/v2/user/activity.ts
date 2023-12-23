import { request } from "../../../utility/request";
import { Modes_names } from "../../../types";
import { UserDetails } from '../../../types/user_details';



const name = async ({ user, limit, offset }: {
  user: number;
  limit: number;
  offset: string;
}): Promise<UserDetails> => {
  let url = `https://osu.ppy.sh/api/v2/users/${user}/recent_activity`;


  const data = await request(url, {
    method: 'GET',
    params: { limit, offset },
  });

  return data;
};


export default name;