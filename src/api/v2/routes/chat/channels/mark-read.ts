import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (channel: string, message: object, obj: {
    channel_id?: string,
    message_id?: string,
  }): Promise<{

  }[]>;
};


const name: types = async (channel, message, obj) => {
  const data = await request(`chat/channels/${channel}/mark-as-read/${message}`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;