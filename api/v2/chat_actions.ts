import { request } from "../../utility/request";
import { IDefaultParams } from "../../types";


type params = ({
  type: 'new';

  is_action: boolean;

  user_id: number;
  message: string;

  uuid?: string;
} | {
  type: 'keepalive';

  history_since?: number;
  since?: number;
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
    case 'new':
      url += `/chat/new`;
      method = 'POST';

      object['is_action'] = params.is_action;
      object['target_id'] = params.user_id;
      object['message'] = params.message;
      object['uuid'] = params.uuid;
      break;

    case 'keepalive':
      url += `/chat/ack`;
      method = 'POST';

      object['history_since'] = params.history_since;
      object['since'] = params.since;
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