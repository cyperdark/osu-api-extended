import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";


type params = ({
  type: 'verify';
} | {
  type: 'reissue';
} | {
  type: 'delete';
});


type Response<T extends params['type']> =
  T extends 'verify'
  ? any | IError
  : T extends 'reissue'
  ? any | IError
  : T extends 'delete'
  ? any | IError
  : IError;


// FIXME?
export const session_actions = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'POST';


  switch (params.type) {
    case 'verify':
      url += `/session/verify`;

      break;

    case 'reissue':
      url += `/session/verify/reissue`;

      break;

    case 'delete':
      url += `/oauth/tokens/current`;
      method = 'DELETE';

      break;
  };


  const data = await request(url, {
    method: method,
    addons,
  });


  return data as Response<T['type']>;
};