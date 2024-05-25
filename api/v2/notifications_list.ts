import { IDefaultParams, IError } from "../../types";
import { NotificationsListResponse } from "../../types/v2/notifications_list";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = NotificationsListResponse & IError;


export const notifications_list = async (params: {
  max_id: string;
  unreaded_only: boolean;
}, addons?: IDefaultParams): Promise<Response> => {
  const data = await request(`https://osu.ppy.sh/api/v2/notifications`, {
    method: 'GET',
    params: {
      max_id: params.max_id
    },
    addons,
  });
  if (data.error) return handleErrors(data.error);


  if (params.unreaded_only == true && !('error' in data))
    data.notifications = data.notifications.filter((r: any) => r.is_read == false);

  return data;
};