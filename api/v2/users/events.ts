import { request } from "../../../utility/request";
import { UsersEvents, Event } from '../../../types/users_events';



const name = async ({ sort, cursor_string, type }: {
  cursor_string?: string;
  sort?: 'id_desc' | 'id_asc',
  type?: ('achievement' | 'beatmapPlaycount' | 'beatmapsetApprove' | 'beatmapsetDelete' | 'beatmapsetRevive' | 'beatmapsetUpdate' | 'beatmapsetUpload' | 'rank' | 'userSupportAgain' | 'userSupportFirst' | 'userSupportGift' | 'usernameChange')[]
} = {}): Promise<UsersEvents> => {
  const data: UsersEvents = await request(`https://osu.ppy.sh/api/v2/events`, {
    method: 'GET',
    params: { sort: sort, cursor_string: cursor_string },
  });


  if (type != null) {
    if (!Array.isArray(type))
      throw new Error('Event Type must be an Array of options');

    const sorted = data.events.filter(r => type.includes(r.type));
    data.events = sorted;
  };


  return data;
};


export default name;