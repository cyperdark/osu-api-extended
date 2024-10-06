import { IDefaultParams, IError } from "../../types";
import { ChatUpdatesResponse } from "../../types/v2/chat_updates";
import { credentials } from "../../utility/auth";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = ChatUpdatesResponse & IError;


export const chat_updates = async (params: {
  after_id: number;
  includes?: ('presence' | 'silences' | 'messages')[];
  history_since?: number;
}, addons?: IDefaultParams): Promise<Response> => {
  if (credentials.type != 'lazer') {
    return handleErrors(new Error(`Login via lazer to use this endpoint`)) as Response
  };

  if (params?.after_id == null) {
    return handleErrors(new Error(`Specify after_id`)) as Response
  };


  const obj: any = {};
  if (params?.history_since) obj['history_since'] = params.history_since;
  if (params?.includes) obj['includes[]'] = params.includes;
  if (params?.after_id) obj['since'] = params.after_id;


  const data = await request(`https://osu.ppy.sh/api/v2/chat/updates`, {
    method: 'GET',
    params: obj,
    addons,
  });


  if (data.error) return handleErrors(new Error(data.error));
  return data;
};