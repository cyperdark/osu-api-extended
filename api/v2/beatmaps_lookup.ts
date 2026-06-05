import { BeatmapsLookupAttributes } from "../../types/v2/beatmaps_lookup_attributes";
import { beatmaps_lookup_difficulty_response } from "../../types/v2/beatmaps_lookup_difficulty";
import { beatmaps_lookup_set_response } from "../../types/v2/beatmaps_lookup_set";
import { GamemodeEnum } from "../../types/enums";
import { request } from "../../utility/request";
import { IDefaultParams, IError, Modes_names } from "../../types";
import { beatmaps_lookup_difficulties_response } from "../../types/v2/beatmaps_lookup_difficulties";
import { handleErrors } from "../../utility/handleErrors";
import { beatmaps_lookup_passed_response } from "../../types/v2/beatmaps_lookup_passed.js";


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
  mode?: Modes_names | number
} | {
  type: 'difficulties';
  ids: number[];
} | {
  type: 'passed';

  user_id: number;
  /** beatmapset ids */
  beatmapset_ids: number[];

  mode?: Modes_names | number;
  legacy?: boolean;
  no_diff_reduction?: boolean;
  exclude_converts?: boolean;
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
  : T extends 'passed'
  ? beatmaps_lookup_passed_response & IError
  : IError;


export const beatmaps_lookup = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  const object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';


  switch (params.type) {
    case 'difficulty': {
      url += '/beatmaps/lookup';

      if (params.id == null && params.checksum == null && params.filename == null) {
        return handleErrors(new Error(`Specify at least one parameter`)) as Response<T['type']>;
      };

      object.id = params.id;
      object.checksum = params.checksum;
      object.filename = params.filename;

      break;
    };

    case 'set': {
      url += '/beatmapsets/lookup';

      if (params.id == null) {
        return handleErrors(new Error(`Specify beatmap set id`)) as Response<T['type']>;
      };

      object.beatmap_id = params.id;

      break;
    };

    case 'attributes': {
      url += `/beatmaps/${params.id}/attributes`;
      method = 'POST';

      if (params.id == null) {
        return handleErrors(new Error(`Specify beatmap id`)) as Response<T['type']>;
      };

      object.mods = params.mods;

      if (typeof params.mode == 'string') object.ruleset = params.mode;
      else if (typeof params.mode == 'number') object.ruleset_id = GamemodeEnum[params.mode];

      break;
    };

    case 'difficulties': {
      url += `/beatmaps`;

      if (Array.isArray(params.ids)) object['ids[]'] = Array.from(new Set(params.ids));
      else {
        return handleErrors(new Error(`Specify at least one beatmap id`)) as Response<T['type']>;
      };

      break;
    };

    case 'passed': {
      if (!params.user_id)
        return handleErrors(new Error(`Specify user id`)) as Response<T['type']>;

      url += `/users/${params.user_id}/beatmaps-passed`;
      method = 'GET';


      if (Array.isArray(params.beatmapset_ids)) object['beatmapset_ids[]'] = Array.from(new Set(params.beatmapset_ids));

      if ((object['beatmapset_ids[]'] || []).length == 0)
        return handleErrors(new Error(`Specify at least one beatmapset id`)) as Response<T['type']>;

      if (object['beatmapset_ids[]'].length > 50)
        return handleErrors(new Error(`Maximum allowed is 50 beatmapsets`)) as Response<T['type']>;

      if (typeof params.exclude_converts != 'undefined') object['exclude_converts'] = params.exclude_converts;
      if (typeof params.legacy != 'undefined') object['is_legacy'] = params.legacy;
      if (typeof params.no_diff_reduction != 'undefined') object['no_diff_reduction'] = params.no_diff_reduction;
      if (typeof params.mode != 'undefined')
        object['ruleset_id'] = typeof params.mode == 'string' ? GamemodeEnum[params.mode] : params.mode;
      break;
    };

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
  if (params.type == 'passed') return data as Response<T['type']>;
  return data as Response<T['type']>;
};