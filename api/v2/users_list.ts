import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { UsersLisResponse } from "../../types/v2/users_list";
import { handleErrors } from "../../utility/handleErrors";


type Response = UsersLisResponse[] & IError;


export const users_list = async (params: { ids: number[], include_variants?: boolean }, addons?: IDefaultParams): Promise<Response> => {
  if ((params.ids || [])?.length == 0) {
    return handleErrors(`Specify at least one user id`) as Response;
  };

  if (params.ids.length > 50) {
    return handleErrors("No more than 50 users can be requested at once.") as Response;
  }

  const data = await request(`https://osu.ppy.sh/api/v2/users`, {
    method: 'GET',
    params: {
      'ids[]': params.ids,
      include_variant_statistics: params.include_variants,
    },
    addons
  });

  if (data.error) return handleErrors(data.error);


  if (data.users) return data.users;
  return data;
};