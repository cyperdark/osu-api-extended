import { request } from "../../utility/request.js";
import { IDefaultParams, IError } from "../../types/index.js";
import { handleErrors } from "../../utility/handleErrors.js";
import { credentials } from "../../utility/auth.js";
// import { postDataObject } from "../../tools";


type params = ({
  type: 'pin';
  id: number;

  /* true to pin, false to unpin */
  status: boolean;
} | {
  type: 'reorder';
  id: number;

  before_id?: number;
  after_id?: number;
});


type Response<T extends params['type']> =
  T extends 'pin'
  ? string & IError
  : T extends 'reorder'
  ? string & IError
  : IError;


export const scores_actions = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  if (credentials.type != 'lazer') {
    return handleErrors(new Error(`Login via lazer or cli to use this endpoint`)) as Response<T['type']>;
  };

  if (params.type == 'pin' || params.type == 'reorder') {
    return handleErrors(new Error(`currently osu! api does not support this action`)) as Response<T['type']>;
  };

  // if (params.id == null) {
  //   return handleErrors(new Error(`Specify score id`)) as Response<T['type']>;
  // };


  // const object: any = {};
  // let url = 'https://osu.ppy.sh/api/v2';
  // let method = 'POST';


  // switch (params.type) {
  //   case 'pin': {
  //     url += `/score-pins/${params.id}`;
  //     method = params.status ? 'PUT' : 'DELETE';

  //     break;
  //   };

  //   case 'reorder': {
  //     url += `/score-pins/${params.id}/reorder`;
  //     method = 'POST';

  //     if (!params.after_id && !params.before_id)
  //       return handleErrors(new Error(`Specify after or before id`)) as Response<T['type']>;

  //     if (params.after_id) object['after_id'] = params.after_id;
  //     if (params.before_id) object['before_id'] = params.before_id;
  //     break;
  //   };

  //   default:
  //     return handleErrors(new Error(`Unsupported type: ${(params as any).type}`)) as Response<T['type']>;
  // };


  // const data = await request(url, {
  //   method: method,
  //   params: object,
  //   addons,
  // });
  // if (data.error) return handleErrors(new Error(data.error)) as Response<T['type']>;


  // return data as Response<T['type']>;
};