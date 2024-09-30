import { IDefaultParams, IError } from "../../types";
import { BeamapsDetailsDifficulty } from "../../types/v2/beatmaps_details_difficulty";
import { BeamapsDetailsSet } from "../../types/v2/beatmaps_details_set";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type params = ({
  type: 'difficulty';
  id: number;
} | {
  type: 'set';
  id: number;
});


type Response<T extends params['type']> =
  T extends 'difficulty'
  ? BeamapsDetailsDifficulty & IError
  : T extends 'set'
  ? BeamapsDetailsSet & IError
  : IError;


export const beatmaps_details = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  if (params.id == null) {
    return handleErrors(`Specify ${params.type} id`) as Response<T['type']>;
  };


  const object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';


  switch (params.type) {
    case 'difficulty':
      url += `/beatmaps/${params.id}`;
      break;

    case 'set':
      url += `/beatmapsets/${params.id}`;
      break;

    default:
      return handleErrors(`Unsupported type: ${(params as any).type}`) as Response<T['type']>;
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons
  });
  
  if (data.error) return handleErrors(data.error) as Response<T['type']>;


  return data as Response<T['type']>;
};