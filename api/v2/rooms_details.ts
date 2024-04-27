import { IDefaultParams, IError } from "../../types";
import { RoomsDetailsResponse } from "../../types/v2/rooms_details";
import { request } from "../../utility/request";


type Response = RoomsDetailsResponse & IError;


export const rooms_details = async (id: number | 'latest', addons?: IDefaultParams): Promise<Response> => {
  if (id == null) {
    return { error: new Error(`Specify room id`) } as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/rooms/${id}`, {
    method: 'GET',
    addons,
  });


  return data;
};