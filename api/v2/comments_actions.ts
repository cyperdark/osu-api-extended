import { request } from "../../utility/request";
import { IDefaultParams } from "../../types";


type params = ({
  type: 'difficulty';
} | {
  type: 'set';
  id: number;
});


type Response<T extends params['type']> =
  T extends 'difficulty'
  ? any
  : T extends 'difficulties'
  ? any
  : never;


const name = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']> | { error: string }> => {
  return { error: 'lazer ...' };
  const object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';


  switch (params.type) {
    case 'difficulty':
      url += `/beatmaps/lookup`;

      break;

    case 'set':
      url += `/beatmaps/lookup`;

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