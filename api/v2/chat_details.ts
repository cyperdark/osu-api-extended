import { IDefaultParams, IError } from "../../types";
import { ChatDetailsResponse } from "../../types/v2/chat_details";
import { credentials } from "../../utility/auth";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = ChatDetailsResponse & IError;


export const chat_details = async (params: { channel_id: number }, addons?: IDefaultParams): Promise<Response> => {
  if (credentials.type != 'lazer' && credentials.type != 'cli') {
    return handleErrors(new Error(`Login via lazer or cli to use this endpoint`)) as Response;
  };

  if (credentials.type == 'cli' && !credentials.scopes.includes('chat.read')) {
    return handleErrors(new Error(`Requires "chat.read" scope`)) as Response;
  };

  if (params?.channel_id == null) {
    return handleErrors(new Error(`Specify channel id`)) as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/chat/channels/${params.channel_id}`, {
    method: 'GET',
    addons,
  });

  if (data.error) return handleErrors(new Error(data.error));

  return data;
};