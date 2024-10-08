import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { handleErrors } from "../../utility/handleErrors";


type params = ({
  type: 'mark_as_read';

  // ids: number[];

  identities?: {
    category?: string;
    object_id?: string
    object_type?: string
  }[];

  notifications?: {
    category?: string;
    id?: number;
    object_id?: string;
    object_type?: string;
  }[]
});


type Response<T extends params['type']> =
  T extends 'mark_as_read'
  ? "" & IError
  : IError;


export const notifications_actions = async <T extends params>(params: T, addons?: IDefaultParams): Promise<any> => {
  const object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';


  switch (params?.type) {
    case 'mark_as_read':
      url += '/notifications/mark-read';
      method = 'POST';

      if (!Array.isArray(params.notifications) && !Array.isArray(params.identities)) {
        return handleErrors(new Error(`Missing on of parameters`)) as Response<T['type']>;
      };

      // params.ids.forEach((r, index) => object[`identities[${index}][id]`] = r);

      if (Array.isArray(params?.notifications)) {
        object['notifications'] = params.notifications;
      };

      if (Array.isArray(params?.identities)) {
        object['identities'] = params.identities;
      };
      break;

    default:
      return handleErrors(new Error(`Unsupported type: ${(params as any).type}`)) as Response<T['type']>;
  };


  const data = await request(url, {
    method: method,
    data: JSON.stringify(object),
    addons,
  });

  if (data.error) return handleErrors(new Error(data.error)) as Response<T['type']>;


  return data as Response<T['type']>;
};