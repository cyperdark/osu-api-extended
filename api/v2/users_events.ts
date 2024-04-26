import { request } from "../../utility/request";
import { UsersEventsResponse } from '../../types/v2/users_events';
import { IDefaultParams, IError } from "../../types";



export const users_events = async ({ sort, cursor_string, type }: {
  type?: ('achievement' | 'beatmapPlaycount' | 'beatmapsetApprove' | 'beatmapsetDelete' | 'beatmapsetRevive' | 'beatmapsetUpdate' | 'beatmapsetUpload' | 'rank' | 'userSupportAgain' | 'userSupportFirst' | 'userSupportGift' | 'usernameChange')[]
  sort?: 'id_desc' | 'id_asc',
  cursor_string?: string;
} = {}, addons?: IDefaultParams): Promise<UsersEventsResponse | IError> => {
  const data: UsersEventsResponse = await request(`https://osu.ppy.sh/api/v2/events`, {
    method: 'GET',
    params: { sort: sort, cursor_string: cursor_string },
    addons,
  });


  if (!Array.isArray(type)) {
    return { error: new Error(`Events Type must be an Array of types. Example: ['achievement', 'rank']`) };
  };

  const sorted = data.events.filter(r => type.includes(r.type));
  data.events = sorted;

  return data;
};