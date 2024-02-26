import { request } from "../../utility/request";
import { IDefaultParams } from "../../types";


type params = ({
  type: 'send';

  is_action: boolean;

  id: number;
  message: string;
} | {
  type: 'join' | 'leave';

  id: number;
  user_id: number;
} | {
  type: 'readed';

  channel_id: number;
  message_id: number;
});


type Response<T extends params['type']> =
  T extends 'difficulty'
  ? any
  : T extends 'difficulties'
  ? any
  : never;


const name = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  const object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'POST';


  switch (params.type) {
    case 'send':
      url += `/chat/channels/${params.id}/messages`;

      object['message'] = params.message;
      object['is_action'] = params.is_action;
      break;

    case 'join':
      url += `/chat/channels/${params.id}/users/${params.user_id}`;
      method = 'PUT';
      break;

    case 'leave':
      url += `/chat/channels/${params.id}/users/${params.user_id}`;
      method = 'DELETE';
      break;

    case 'readed':
      url += `/chat/channels/${params.channel_id}/mark-as-read/${params.message_id}`;
      method = 'PUT';
      break;
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons,
  });


  return data as Response<T['type']>;
};


export default name;