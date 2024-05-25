import {IDefaultParams, IError} from "../../types";
import { chatChannelsListResponse } from "../../types/v2/chat_channels_list";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";



export const chat_channels_list = async (addons?: IDefaultParams): Promise<chatChannelsListResponse[] & IError> => {
  const data = await request(`https://osu.ppy.sh/api/v2/chat/channels`, {
    method: 'GET',
  });

  if (data.error) return handleErrors(data.error);

  return data;
};