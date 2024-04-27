import { IDefaultParams, IError } from "../../types";
import { ChatMessagesResponse } from "../../types/v2/chat_messages";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = ChatMessagesResponse[] & IError;


export const chat_messages = async (params: {
  id: number;
  limit?: number;
  since?: number;
  until?: number;
  return_object?: boolean;
}, addons?: IDefaultParams): Promise<Response> => {
  if (params.id == null) {
    return handleErrors(`Specify channel id`) as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/chat/channels/${params.id}/messages`, {
    method: 'GET',
    params,
    addons,
  });

  if (data.error) return handleErrors(data.error);

  return data;
};