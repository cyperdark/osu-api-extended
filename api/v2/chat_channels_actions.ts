import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { chatChannelsActionsSendResponse } from "../../types/v2/chat_channels_actions_send";
import { chatChannelsActionsJoinResponse } from "../../types/v2/chat_channels_actions_join";


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
  T extends 'send'
  ? chatChannelsActionsSendResponse & IError
  : T extends 'join'
  ? chatChannelsActionsJoinResponse & IError
  : T extends 'leave'
  ? "" & IError
  : T extends 'readed'
  ? "" & IError
  : IError;


export const chat_channels_actions = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  const object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'POST';


  switch (params.type) {
    case 'send':
      if (params.id == null || params.message == null || params.is_action == null) {
        return { error: new Error(`Missing required parameters`) } as Response<T['type']>;
      };


      url += `/chat/channels/${params.id}/messages`;

      object['message'] = params.message;
      object['is_action'] = params.is_action;
      break;

    case 'join':
      if (params.id == null || params.user_id == null) {
        return { error: new Error(`Missing required parameters`) } as Response<T['type']>;
      };


      url += `/chat/channels/${params.id}/users/${params.user_id}`;
      method = 'PUT';
      break;

    case 'leave':
      if (params.id == null || params.user_id == null) {
        return { error: new Error(`Missing required parameters`) } as Response<T['type']>;
      };


      url += `/chat/channels/${params.id}/users/${params.user_id}`;
      method = 'DELETE';
      break;

    case 'readed':
      if (params.channel_id == null || params.message_id == null) {
        return { error: new Error(`Missing required parameters`) } as Response<T['type']>;
      };


      url += `/chat/channels/${params.channel_id}/mark-as-read/${params.message_id}`;
      method = 'PUT';
      break;

    default:
      return { error: new Error(`Unsupported type: ${(params as any).type}`) } as Response<T['type']>;
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons,
  });


  return data as Response<T['type']>;
};