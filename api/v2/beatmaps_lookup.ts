import { BeatmapsLookupAttributes } from "../../types/v2/beatmaps_lookup_attributes";
import { beatmaps_lookup_difficulty_response } from "../../types/v2/beatmaps_lookup_difficulty";
import { beatmaps_lookup_set_response } from "../../types/v2/beatmaps_lookup_set";
import { GamemodeEnum } from "../../types/enums";
import { request } from "../../utility/request";
import { IDefaultParams, IError, Modes_names } from "../../types";
import { beatmaps_lookup_difficulties_response } from "../../types/v2/beatmaps_lookup_difficulties";
import { handleErrors } from "../../utility/handleErrors";


type params = ({
  type: 'difficulty';
  id?: number;
  checksum?: string;
  filename?: string;
} | {
  type: 'set';
  id: number;
} | {
  type: 'attributes';
  id: number;
  mods?: number;
  mode?: Modes_names
} | {
  type: 'difficulties';
  ids: number[];
});


type Response<T extends params['type']> =
  T extends 'difficulty'
  ? beatmaps_lookup_difficulty_response & IError
  : T extends 'set'
  ? beatmaps_lookup_set_response & IError
  : T extends 'attributes'
  ? BeatmapsLookupAttributes & IError
  : T extends 'difficulties'
  ? beatmaps_lookup_difficulties_response[] & IError
  : IError;


export const beatmaps_lookup = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  const object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';


  switch (params.type) {
    case 'difficulty':
      url += '/beatmaps/lookup';

      if (params.id == null && params.checksum == null && params.filename == null) {
        return handleErrors(new Error(`Specify at least one parameter`)) as Response<T['type']>;
      };

      object.id = params.id;
      object.checksum = params.checksum;
      object.filename = params.filename;

      break;

    case 'set':
      url += '/beatmapsets/lookup';

      if (params.id == null) {
        return handleErrors(new Error(`Specify beatmap set id`)) as Response<T['type']>;
      };

      object.beatmap_id = params.id;

      break;

    case 'attributes':
      url += `/beatmaps/${params.id}/attributes`;
      method = 'POST';

      if (params.id == null) {
        return handleErrors(new Error(`Specify beatmap id`)) as Response<T['type']>;
      };

      object.mods = params.mods;

      if (typeof params.mode == 'string') object.ruleset = params.mode;
      else if (typeof params.mode == 'number') object.ruleset_id = GamemodeEnum[params.mode];

      break;

    case 'difficulties':
      url += `/beatmaps`;

      if (Array.isArray(params.ids)) object['ids[]'] = params.ids;
      else {
        return handleErrors(new Error(`Specify at least one beatmap id`)) as Response<T['type']>;
      };

      break;

    default:
      return handleErrors(new Error(`Unsupported type: ${(params as any).type}`)) as Response<T['type']>;
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons,
  });

  if (data.error) return handleErrors(new Error(data.error)) as Response<T['type']>;


  if (params.type == 'attributes') return data.attributes as Response<T['type']>;
  if (params.type == 'difficulties') return data.beatmaps as Response<T['type']>;
  return data as Response<T['type']>;
};