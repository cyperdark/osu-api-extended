import { credentials } from "../../utility/auth";
import { IError } from "../../types";
import { MedownloadquotaResponse } from "../../types/v2/me_download_quota";
import { request } from "../../utility/request";



export const me_download_quota = async (): Promise<MedownloadquotaResponse | IError> => {
  if (credentials.method != 'lazer') {
    return { error: new Error(`Login via lazer to use this endpoint`) };
  };


  const data = await request(`https://osu.ppy.sh/api/v2/me/download-quota-check`, {
    method: 'GET',
  });


  return data;
};