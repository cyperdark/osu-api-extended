import { IDefaultParams, IError } from "../../types";
import { RoomsDetailsResponse } from "../../types/v2/rooms_details";
import { request } from "../../utility/request";



export const rooms_details = async (id: number | 'latest', addons?: IDefaultParams): Promise<RoomsDetailsResponse | IError> => {
  if (id == null) {
    return { error: new Error(`Specify room id`) };
  };


  const data = await request(`https://osu.ppy.sh/api/v2/rooms/${id}`, {
    method: 'GET',
    addons,
  });


  return data;
};