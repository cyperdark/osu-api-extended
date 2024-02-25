import { BeatmapsLookupAttributes } from "../../types/v2/beatmaps_lookup_attributes";
import { BeatmapsLookupDifficulty } from "../../types/v2/beatmaps_lookup_difficulty";
import { BeatmapsLookupSet } from "../../types/v2/beatmaps_lookup_set";
import { Modes_enums } from "../../types/enums";
import { request } from "../../utility/request";
import { IDefaultParams, Modes_names } from "../../types";
import { BeatmapsLookupDifficultiesResponse } from "../../types/v2/beatmaps_lookup_difficulties";


type params = ({
  type: 'difficulty';
  id: number;
  checksum: string;
  filename: string;
} | {
  type: 'set';
  id: number;
} | {
  type: 'attributes';
  id: number;
  mods: number;
  mode: Modes_names
} | {
  type: 'difficulties';
  ids: number[];
});


type Response<T extends params['type']> =
  T extends 'difficulty'
  ? BeatmapsLookupDifficulty
  : T extends 'set'
  ? BeatmapsLookupSet
  : T extends 'attributes'
  ? BeatmapsLookupAttributes
  : T extends 'difficulties'
  ? BeatmapsLookupDifficultiesResponse[]
  : never;


const name = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  const object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';


  switch (params.type) {
    case 'difficulty':
      url += '/beatmaps/lookup';

      if (params.id) object.id = params.id;
      if (params.checksum) object.checksum = params.checksum;
      if (params.filename) object.filename = params.filename;

      break;

    case 'set':
      url += '/beatmapsets/lookup';

      if (params.id) object.beatmap_id = params.id;

      break;

    case 'attributes':
      url += `/beatmaps/${params.id}/attributes`;
      method = 'POST';

      if (params.mods) object.mods = params.mods;

      if (typeof params.mode == 'string') object.ruleset = params.mode;
      else if (typeof params.mode == 'number') object.ruleset_id = Modes_enums[params.mode];

      break;

    case 'difficulties':
      url += `/beatmaps`;

      if (Array.isArray(params.ids)) object['ids[]'] = params.ids;

      break;
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons,
  });


  if (params.type == 'attributes') return data.attributes as Response<T['type']>;
  if (params.type == 'difficulties') return data.beatmaps as Response<T['type']>;
  return data as Response<T['type']>;
};


export default name;