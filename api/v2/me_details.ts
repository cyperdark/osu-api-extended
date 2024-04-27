import { credentials } from "../../utility/auth";
import { IDefaultParams, IError, Modes_names } from "../../types";
import { MeDetailsResponse } from "../../types/v2/me_details";
import { request } from "../../utility/request";


type Response = MeDetailsResponse & IError;


export const me_details = async (addons?: IDefaultParams & { mode: Modes_names }): Promise<Response> => {
  if (credentials.method != 'lazer') {
    return { error: new Error(`Login via lazer to use this endpoint`) } as Response
  };


  let url = 'https://osu.ppy.sh/api/v2/me';
  if (addons?.mode) url += `/${addons.mode}`;

  const data = await request(url, {
    method: 'GET',
    addons,
  });


  return data;
};