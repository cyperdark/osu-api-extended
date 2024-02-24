import { IDefaultParams } from "../../../types";
import { BeamapsDetailsDifficulty } from "../../../types/v2/beamaps_details_difficulty";
import { BeamapsDetailsSet } from "../../../types/v2/beamaps_details_set";
import { request } from "../../../utility/request";


type params = ({
  type: 'difficulty';
  id: number;
} | {
  type: 'set';
  id: number;
});


type Response<T extends params['type']> =
  T extends 'difficulty'
  ? BeamapsDetailsDifficulty
  : T extends 'set'
  ? BeamapsDetailsSet : never;


const name = async <T extends params>(params: T, addons: IDefaultParams): Promise<Response<T['type']>> => {
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
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons
  });

  return data as Response<T['type']>;
};


export default name;