import { IDefaultParams, IError } from "../../types";
import { ChatUpdatesResponse } from "../../types/v2/chat_updates";
import { request } from "../../utility/request";



export const chat_updates = async (params: {
  after_id: number;
  includes: ('presence' | 'silences' | 'messages')[];
  history_since: number;
}, addons?: IDefaultParams): Promise<ChatUpdatesResponse | IError> => {
  const data = await request(`https://osu.ppy.sh/api/v2/chat/updates`, {
    method: 'GET',
    params: {
      'history_since': params.history_since,
      'includes[]': params.includes,
      'since': params.after_id,
    },
    addons,
  });


  return data;
};