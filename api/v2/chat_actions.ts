import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { ChatActionsNewResponse } from "../../types/v2/chat_actions_new";
import { ChatActionsKeepaliveResponse } from "../../types/v2/chat_actions_keepalive";
import { handleErrors } from "../../utility/handleErrors";
import { chatActionsSendResponse } from "../../types/v2/chat_actions_send";
import { chatActionsJoinResponse } from "../../types/v2/chat_actions_join";
import { credentials } from "../../utility/auth";


type params = ({
  type: 'new';

  is_action: boolean;

  user_id: number;
  message: string;

  uuid?: string;
} | {
  type: 'send';

  is_action: boolean;

  channel_id: number;
  message: string;
} | {
  type: 'join' | 'leave';

  channel_id: number;
  user_id: number;
} | {
  type: 'read';

  channel_id: number;
  message_id: number;
} | {
  type: 'keepalive';

  history_since?: number;
  since?: number;
});


type Response<T extends params['type']> =
  T extends 'new'
  ? ChatActionsNewResponse & IError
  : T extends 'send'
  ? chatActionsSendResponse & IError
  : T extends 'join'
  ? chatActionsJoinResponse & IError
  : T extends 'leave'
  ? "" & IError
  : T extends 'read'
  ? "" & IError
  : T extends 'keepalive'
  ? ChatActionsKeepaliveResponse[] & IError
  : IError;


export const chat_actions = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  if (credentials.type != 'lazer' && credentials.type != 'cli') {
    return handleErrors(new Error(`Login via lazer or cli to use this endpoint`)) as Response<T['type']>;
  };


  const object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'POST';


  switch (params?.type) {
    case 'new':
      if (credentials.type == 'cli' && !credentials.scopes.includes('chat.write')) {
        return handleErrors(new Error(`Requires "chat.write" scope`)) as Response<T['type']>;
      };


      url += `/chat/new`;
      method = 'POST';

      if (params.is_action == null || params.user_id == null || params.message == null) {
        return handleErrors(new Error('Missing required parameters')) as Response<T['type']>;
      };


      if (params?.is_action != null) object['is_action'] = params.is_action;
      if (params?.user_id != null) object['target_id'] = params.user_id;
      if (params?.message != null) object['message'] = params.message;
      if (params?.uuid) object['uuid'] = params.uuid;
      break;

    case 'send':
      if (credentials.type == 'cli' && !credentials.scopes.includes('chat.write')) {
        return handleErrors(new Error(`Requires "chat.write" scope`)) as Response<T['type']>;
      };

      if (params?.channel_id == null || params?.message == null || params?.is_action == null) {
        return handleErrors(new Error(`Missing required parameters`)) as Response<T['type']>;
      };


      url += `/chat/channels/${params.channel_id}/messages`;
      method = 'POST';

      if (params?.message != null) object['message'] = params.message;
      if (params?.is_action != null) object['is_action'] = params.is_action;
      break;

    case 'join':
      if (credentials.type == 'cli' && !credentials.scopes.includes('chat.write_manage')) {
        return handleErrors(new Error(`Requires "chat.write_manage" scope`)) as Response<T['type']>;
      };

      if (params?.channel_id == null || params?.user_id == null) {
        return handleErrors(new Error(`Missing required parameters`)) as Response<T['type']>;
      };


      url += `/chat/channels/${params.channel_id}/users/${params.user_id}`;
      method = 'PUT';
      break;

    case 'leave':
      if (credentials.type == 'cli' && !credentials.scopes.includes('chat.write_manage')) {
        return handleErrors(new Error(`Requires "chat.write_manage" scope`)) as Response<T['type']>;
      };

      if (params?.channel_id == null || params?.user_id == null) {
        return handleErrors(new Error(`Missing required parameters`)) as Response<T['type']>;
      };


      url += `/chat/channels/${params.channel_id}/users/${params.user_id}`;
      method = 'DELETE';
      break;

    case 'read':
      if (credentials.type == 'cli' && !credentials.scopes.includes('chat.read')) {
        return handleErrors(new Error(`Requires "chat.read" scope`)) as Response<T['type']>;
      };

      if (params?.channel_id == null || params?.message_id == null) {
        return handleErrors(new Error(`Missing required parameters`)) as Response<T['type']>;
      };


      url += `/chat/channels/${params.channel_id}/mark-as-read/${params.message_id}`;
      method = 'PUT';
      break;

    case 'keepalive':
      if (credentials.type == 'cli' && !credentials.scopes.includes('chat.write')) {
        return handleErrors(new Error(`Requires "chat.read" scope`)) as Response<T['type']>;
      };

      url += `/chat/ack`;
      method = 'POST';

      if (params?.history_since != null) object['history_since'] = params.history_since;
      if (params?.since != null) object['since'] = params.since;
      break;

    default:
      return handleErrors(new Error(`Unsupported type: ${(params as any).type}`)) as Response<T['type']>;
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons,
  });

  if (data.error) return handleErrors(new Error(data.error)) as Response<T['type']>;


  if (params?.type == 'keepalive') return data.silences as Response<T['type']>;
  return data as Response<T['type']>;
};