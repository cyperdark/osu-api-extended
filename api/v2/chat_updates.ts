import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (params: {
  after_id: number;
  includes: ('presence' | 'silences' | 'messages')[];
  history_since: number;
}, addons?: IDefaultParams) => {
  const object = {
    'history_since': params.history_since,
    'includes[]': params.includes,
    'since': params.after_id,
  };


  const data = await request(`https://osu.ppy.sh/api/v2/chat/updates`, {
    method: 'GET',
    params: object,
    addons,
  });


  return data;
};


export default name;