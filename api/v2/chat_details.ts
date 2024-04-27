import { IDefaultParams, IError } from "../../types";
import { ChatDetailsResponse } from "../../types/v2/chat_details";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = ChatDetailsResponse & IError;


export const chat_details = async (channel_id: number, addons?: IDefaultParams): Promise<Response> => {
  if (channel_id == null) {
    return handleErrors(`Specify channel id`) as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/chat/channels/${channel_id}`, {
    method: 'GET',
    addons,
  });

  if (data.error) return handleErrors(data.error);

  return data;
};