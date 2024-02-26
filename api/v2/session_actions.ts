import { request } from "../../utility/request";
import { IDefaultParams } from "../../types";


type params = ({
  type: 'verify';
} | {
  type: 'reissue';
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
    case 'verify':
      url += `/session/verify`;

      break;

    case 'reissue':
      url += `/session/verify/reissue`;

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