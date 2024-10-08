import { IDefaultParams, IError } from "../../types";
import { ChatListResponse } from "../../types/v2/chat_list";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = ChatListResponse[] & IError;


export const chat_list = async (params: {
  unread?: boolean;
  sort?: 'date_desc' | 'date_asc';
}, addons?: IDefaultParams): Promise<Response> => {
  let data = await request(`https://osu.ppy.sh/api/v2/chat/presence/`, {
    method: 'GET',
    addons
  });

  if (data.error) return handleErrors(new Error(data.error));


  if (params?.sort == 'date_asc')
    data.sort((a: any, b: any) => a.last_message_id - b.last_message_id);
  else
    data.sort((a: any, b: any) => b.last_message_id - a.last_message_id);


  if (params?.unread == true)
    data = data.filter((r: any) => r.last_read_id != r.last_message_id);


  return data;
};