import { IDefaultParams, IError } from "../../types";
import { ChatMessagesResponse } from "../../types/v2/chat_messages";
import { request } from "../../utility/request";



export const chat_messages = async (params: {
  id: number;
  limit?: number;
  since?: number;
  until?: number;
  return_object?: boolean;
}, addons?: IDefaultParams): Promise<ChatMessagesResponse | IError> => {
  if (params.id == null) {
    return { error: new Error(`Specify channel id`) };
  };


  const data = await request(`https://osu.ppy.sh/api/v2/chat/channels/${params.id}/messages`, {
    method: 'GET',
    params,
    addons,
  });


  return data;
};