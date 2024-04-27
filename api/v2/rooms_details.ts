import { IDefaultParams, IError } from "../../types";
import { RoomsDetailsResponse } from "../../types/v2/rooms_details";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = RoomsDetailsResponse & IError;


export const rooms_details = async (id: number | 'latest', addons?: IDefaultParams): Promise<Response> => {
  if (id == null) {
    return handleErrors(`Specify room id`) as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/rooms/${id}`, {
    method: 'GET',
    addons,
  });

  if (data.error) return handleErrors(data.error);


  return data;
};