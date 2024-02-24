import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";


type params = ({
  type: 'seasonal';
});

type Response<T extends params['type']> =
  T extends 'site'
  ? any
  : T extends 'beatmaps'
  ? any
  : never;


const name = async <T extends params>(params: T, addons: IDefaultParams): Promise<Response<T['type']>> => {
  let url = 'https://osu.ppy.sh/api/v2';

  switch (params.type) {
    case 'seasonal':
      url += `/seasonal-backgrounds`;

      break;
  };


  const data = await request(url, {
    method: 'GET',
    addons,
  });


  return data;
};


export default name;