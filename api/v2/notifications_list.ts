import { IDefaultParams, IError } from "../../types";
import { NotificationsListResponse } from "../../types/v2/notifications_list";
import { credentials } from "../../utility/auth";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = NotificationsListResponse & IError;


export const notifications_list = async (params: {
  max_id: string;
  unread_only: boolean;
}, addons?: IDefaultParams): Promise<Response> => {
  if (credentials.type != 'lazer') {
    return handleErrors(new Error(`Login via lazer to use this endpoint`)) as Response
  };


  const data = await request(`https://osu.ppy.sh/api/v2/notifications`, {
    method: 'GET',
    params: {
      max_id: params?.max_id
    },
    addons,
  });
  if (data.error) return handleErrors(new Error(data.error));


  if (params?.unread_only == true && !('error' in data))
    data.notifications = data.notifications.filter((r: any) => r.is_read == false);

  return data;
};