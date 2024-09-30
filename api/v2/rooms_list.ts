import { IDefaultParams, IError } from "../../types";
import { RoomsListResponse } from "../../types/v2/rooms_list";
import { credentials } from "../../utility/auth";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = RoomsListResponse & IError;


export const rooms_list = async (params: {
  type?: 'playlists' | 'realtime';
  status?: 'all' | 'active' | 'ended' | 'participated' | 'owned';

  query?: string;

  limit?: number;
  sort?: 'ended' | 'created';

  cursor_string?: string;
}, addons?: IDefaultParams): Promise<Response> => {
  if (credentials.type != 'lazer') {
    return handleErrors(`Login via lazer to use this endpoint`) as Response
  };

  if (addons == null)
    addons = { apiVersion: '99999999' }


  let data = await request(`https://osu.ppy.sh/api/v2/rooms`, {
    method: 'GET',
    params: {
      type_group: params?.type,
      mode: params?.status,
      sort: params?.sort,
      limit: params?.limit,
      cursor_string: params?.cursor_string,
    },
    addons,
  });

  if (data.error) return handleErrors(data.error);

  if (params?.query && !('error' in data)) {
    if (data.rooms) data.rooms = data.rooms.filter((r: any) => r.name.toLowerCase().includes(params?.query.trim().toLowerCase()))
    else data = data.filter((r: any) => r.name.toLowerCase().includes(params?.query.trim().toLowerCase()))
  };


  return data;
};