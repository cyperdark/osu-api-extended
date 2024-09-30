import { IDefaultParams, IError } from "../../types";
import { RoomsDetailsResponse } from "../../types/v2/rooms_details";
import { credentials } from "../../utility/auth";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = RoomsDetailsResponse & IError;


export const rooms_details = async (params: { id: number | 'latest' }, addons?: IDefaultParams): Promise<Response> => {
  if (credentials.type != 'lazer') {
    return handleErrors(`Login via lazer to use this endpoint`) as Response
  };

  if (params.id == null) {
    return handleErrors(`Specify room id`) as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/rooms/${params.id}`, {
    method: 'GET',
    addons,
  });

  if (data.error) return handleErrors(data.error);


  return data;
};