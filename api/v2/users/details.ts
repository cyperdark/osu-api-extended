import { request } from "../../../utility/request";



const name = async (ids: number[]) => {
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