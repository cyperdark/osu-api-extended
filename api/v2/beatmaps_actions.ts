import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { handleErrors } from "../../utility/handleErrors";
// import { postDataObject } from "../../tools";


type params = ({
  type: 'favourite';

  /** beatmap set id */
  id: number;
  status: boolean;
} | {
  type: 'tag';

  /** beatmap id */
  id: number;
  /** tag name */
  name: string;
  status: boolean;
});


type Response<T extends params['type']> =
  T extends 'favourite'
  ? string & IError
  : T extends 'tag'
  ? string & IError
  : IError;


export const beatmaps_actions = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  if (params.type == 'favourite' || params.type == 'tag') {
    return handleErrors(new Error(`currently osu! api does not support this action`)) as Response<T['type']>;
  };

  // if (params.id == null) {
  //   if (params.type == 'favourite') return handleErrors(new Error(`Specify beatmapset id`)) as Response<T['type']>;
  //   return handleErrors(new Error(`Specify beatmap id`)) as Response<T['type']>;
  // };


  // const object: any = {};
  // let url = 'https://osu.ppy.sh/api/v2';
  // let method = 'POST';


  // switch (params.type) {
  //   case 'favourite': {
  //     url += `/beatmapsets/${params.id}/favourites`;
  //     object['action'] = params.status == true ? 'favourite' : 'unfavourite';
  //     break;
  //   };

  //   case 'tag': {
  //     if (params.name == null || params.name == '') return handleErrors(new Error(`Specify tag name`)) as Response<T['type']>;

  //     url += `/beatmaps/${params.id}/tags/${params.name}`;
  //     method = params.status == true ? 'PUT' : 'DELETE';
  //     break;
  //   }

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