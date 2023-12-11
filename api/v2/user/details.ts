import { request } from "../../../utility/request";
import { gamemode_names } from "../../../types";
import { UserDetails } from '../../../types/user_details';



const name = async ({ myself, user, mode, key }: {
  myself?: boolean;
  user?: number;
  mode?: gamemode_names;
  key?: 'id' | 'username';
}): Promise<UserDetails> => {
  let url = 'https://osu.ppy.sh/api/v2';


  if (myself == true) url += '/me';
  else if (user != null) url += `/users/${user}`;

  if (mode != null) url += `/${mode}`;


  const data = await request(url, {
    method: 'GET',
    params: { key },
  });

  return data;
};


export default name;