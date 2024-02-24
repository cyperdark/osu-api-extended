import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (params: {
  max_id: string;
  unreaded_only: boolean;
}, addons: IDefaultParams) => {
  const data = await request(`https://osu.ppy.sh/api/v2/notifications`, {
    method: 'GET',
    params: { max_id: params.max_id },
    addons,
  });

  if (params.unreaded_only == true)
    data.notifications = data.notifications.filter((r: any) => r.is_read == false);

  return data;
};


export default name;