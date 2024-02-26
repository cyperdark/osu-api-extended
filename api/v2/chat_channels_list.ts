import { request } from "../../utility/request";



const name = async () => {
  const data = await request(`https://osu.ppy.sh/api/v2/chat/channels`, {
    method: 'GET',
  });

  return data;
};


export default name;