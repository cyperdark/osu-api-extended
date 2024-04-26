import { IError } from "../../types";
import { chatChannelsListResponse } from "../../types/v2/chat_channels_list";
import { request } from "../../utility/request";



export const chat_channels_list = async (): Promise<chatChannelsListResponse | IError> => {
  const data = await request(`https://osu.ppy.sh/api/v2/chat/channels`, {
    method: 'GET',
  });


  return data;
};