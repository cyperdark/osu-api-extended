import { IDefaultParams, IError } from "../../types";
import { NotificationsListResponse } from "../../types/v2/notifications_list";
import { request } from "../../utility/request";



export const notifications_list = async (params: {
  max_id: string;
  unreaded_only: boolean;
}, addons?: IDefaultParams): Promise<NotificationsListResponse | IError> => {
  const object: any = {};
  if (params.max_id != null) object.max_id = params.max_id;


  const data = await request(`https://osu.ppy.sh/api/v2/notifications`, {
    method: 'GET',
    params: object,
    addons,
  });


  if (params.unreaded_only == true && !('error' in data))
    data.notifications = data.notifications.filter((r: any) => r.is_read == false);

  return data;
};