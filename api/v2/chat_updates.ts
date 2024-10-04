import { IDefaultParams, IError } from "../../types";
import { ChatUpdatesResponse } from "../../types/v2/chat_updates";
import { credentials } from "../../utility/auth";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = ChatUpdatesResponse & IError;


export const chat_updates = async (params: {
  after_id: number;
  includes: ('presence' | 'silences' | 'messages')[];
  history_since: number;
}, addons?: IDefaultParams): Promise<Response> => {
  if (credentials.type != 'lazer') {
    return handleErrors(new Error(`Login via lazer to use this endpoint`)) as Response
  };


  const data = await request(`https://osu.ppy.sh/api/v2/chat/updates`, {
    method: 'GET',
    params: {
      'history_since': params?.history_since,
      'includes[]': params?.includes,
      'since': params?.after_id,
    },
    addons,
  });

  if (data.error) return handleErrors(new Error(data.error));

  return data;
};