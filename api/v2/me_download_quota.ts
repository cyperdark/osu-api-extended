import { credentials } from "../../utility/auth";
import { IError, IDefaultParams } from "../../types";
import { MedownloadquotaResponse } from "../../types/v2/me_download_quota";
import { request } from "../../utility/request";
import { handleErrors } from "../../utility/handleErrors";


type Response = MedownloadquotaResponse & IError;


export const me_download_quota = async (addons?: IDefaultParams): Promise<Response> => {
  if (credentials.type != 'lazer') {
    return handleErrors(new Error('Login via lazer to use this endpoint')) as Response
  };


  const data = await request(`https://osu.ppy.sh/api/v2/me/download-quota-check`, {
    method: 'GET',
    addons,
  });

  if (data.error) return handleErrors(new Error(data.error));

  return data;
};