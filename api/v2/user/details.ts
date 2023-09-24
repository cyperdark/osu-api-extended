import { request } from "../../../utility/request";
import { gamemode_names } from "../../../utility/types";



const name = async (user: number, { mode, key }: { mode?: gamemode_names, key?: 'id' | 'username' } = {}) => {
  let url = `https://osu.ppy.sh/api/v2/users/${user}`;
  if (mode != null)
    url += `/${mode}`;

  const data = await request(url, {
    method: 'GET',
    params: { key },
  });

  return data;
};


export default name;