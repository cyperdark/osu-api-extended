import { IDefaultParams, IError } from "../../types";
import { UsersLookupResponse } from "../../types/v2/users_lookup";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = UsersLookupResponse[] & IError;


export const users_lookup = async (params: {
  ids: (string | number)[];
}, addons?: IDefaultParams): Promise<Response> => {
  if ((params?.ids || [])?.length == 0) {
    return handleErrors(new Error(`Specify at least one user id`)) as Response;
  };

  if (params.ids.length > 50) {
    return handleErrors(new Error("No more than 50 users can be requested at once.")) as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/users/lookup`, {
    method: 'GET',
    params: {
      'ids[]': params.ids,
    },
    addons,
  });


  if (data.error) return handleErrors(new Error(data.error));
  return data;
};