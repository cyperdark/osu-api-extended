import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (params: {
  type?: 'playlists' | 'realtime';
  show?: 'all' | 'active' | 'ended' | 'participated' | 'owned';

  query?: string;

  limit?: number;
  sort?: 'ended' | 'created';

  cursor_string?: string;
}, addons?: IDefaultParams) => {
  const object = {
    type_group: params.type,
    mode: params.show,
    sort: params.sort,
    limit: params.limit,
    cursor_string: params.cursor_string,
  };

  if (addons == null)
    addons = { apiVersion: '99999999' }

  const data = await request(`https://osu.ppy.sh/api/v2/rooms`, {
    method: 'GET',
    params: object,
    addons,
  });

  if (params?.query && !('error' in data))
    data.rooms = data.rooms.filter((r: any) => r.name.toLowerCase().includes(params.query.trim().toLowerCase()))


  return data;
};


export default name;