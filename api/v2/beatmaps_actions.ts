// import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { handleErrors } from "../../utility/handleErrors";
// import { postDataObject } from "../../tools";


type params = ({
  type: 'favourite';

  beatmapset_id: number;
  add: boolean;
});


type Response<T extends params['type']> =
  T extends 'difficulty'
  ? any & IError
  : T extends 'difficulties'
  ? any & IError
  : IError;

// FIX
const name = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  return handleErrors(new Error('TEMPORARY NOT WORKING, have no clue why')) as Response<T['type']>;
  // if (params.type == null)
  //   return {
  //     error: 'Type not specified',
  //   };

  // const object: any = {};
  // let url = 'https://osu.ppy.sh/api/v2';
  // let method = 'POST';


  // switch (params.type) {
  //   case 'favourite':
  //     url += `/beatmapsets/${params.beatmapset_id}/favourites`;

  //     object['action'] = params.add == true ? 'favourite' : 'unfavourite';
  //     break;
  // };


  // const data = await request(url, {
  //   method: method,
  //   // params: object,
  //   data: postDataObject('', object),
  //   addons,
  // });


  // return data as Response<T['type']>;
};


export default name;