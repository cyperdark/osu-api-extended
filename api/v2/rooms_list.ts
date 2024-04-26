import { IDefaultParams, IError } from "../../types";
import { RoomsListResponse } from "../../types/v2/rooms_list";
import { request } from "../../utility/request";



export const rooms_list = async (params: {
  type?: 'playlists' | 'realtime';
  show?: 'all' | 'active' | 'ended' | 'participated' | 'owned';

  query?: string;

  limit?: number;
  sort?: 'ended' | 'created';

  cursor_string?: string;
}, addons?: IDefaultParams): Promise<RoomsListResponse | IError> => {
  if (addons == null)
    addons = { apiVersion: '99999999' }


  const data = await request(`https://osu.ppy.sh/api/v2/rooms`, {
    method: 'GET',
    params: {
      type_group: params.type,
      mode: params.show,
      sort: params.sort,
      limit: params.limit,
      cursor_string: params.cursor_string,
    },
    addons,
  });


  if (params?.query && !('error' in data))
    data.rooms = data.rooms.filter((r: any) => r.name.toLowerCase().includes(params.query.trim().toLowerCase()))


  return data;
};