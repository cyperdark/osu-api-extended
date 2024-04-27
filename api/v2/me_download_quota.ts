import { credentials } from "../../utility/auth";
import { IError } from "../../types";
import { MedownloadquotaResponse } from "../../types/v2/me_download_quota";
import { request } from "../../utility/request";


type Response = MedownloadquotaResponse & IError;


export const me_download_quota = async (): Promise<Response> => {
  if (credentials.method != 'lazer') {
    return { error: new Error(`Login via lazer to use this endpoint`) } as Response
  };


  const data = await request(`https://osu.ppy.sh/api/v2/me/download-quota-check`, {
    method: 'GET',
  });


  return data;
};