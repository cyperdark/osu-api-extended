import { IDefaultParams, IError } from "../../types";
import { ChatMessagesResponse } from "../../types/v2/chat_messages";
import { credentials } from "../../utility/auth";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = ChatMessagesResponse[] & IError;


export const chat_messages = async (params: {
  channel_id: number;
  limit?: number;
  since?: number;
  until?: number;
  return_object?: boolean;
}, addons?: IDefaultParams): Promise<Response> => {
  if (credentials.type != 'lazer') {
    return handleErrors(`Login via lazer to use this endpoint`) as Response
  };

  if (params?.channel_id == null) {
    return handleErrors(`Specify channel id`) as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/chat/channels/${params.channel_id}/messages`, {
    method: 'GET',
    params,
    addons,
  });

  if (data.error) return handleErrors(data.error);

  return data;
};