import { BeatmapsLookupAttributes } from "../../../types/v2/beatmaps_lookup_attributes";
import { BeatmapsLookupDifficulty } from "../../../types/v2/beatmaps_lookup_difficulty";
import { BeatmapsLookupSet } from "../../../types/v2/beatmaps_lookup_set";
import { Modes_enums } from "../../../types/enums";
import { request } from "../../../utility/request";
import { Modes_names } from "../../../types";


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
});


type Response<T extends params['type']> =
  T extends 'difficulty'
  ? BeatmapsLookupDifficulty
  : T extends 'set'
  ? BeatmapsLookupSet
  : T extends 'attributes'
  ? BeatmapsLookupAttributes
  : never;


const name = async <T extends params>(obj: T): Promise<Response<T['type']>> => {
  const params: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';


  switch (obj.type) {
    case 'difficulty':
      url += '/beatmaps/lookup';

      if (obj.id) params.id = obj.id;
      if (obj.checksum) params.checksum = obj.checksum;
      if (obj.filename) params.filename = obj.filename;

      break;

    case 'set':
      url += '/beatmapsets/lookup';

      if (obj.id) params.beatmap_id = obj.id;

      break;

    case 'attributes':
      url += `/beatmaps/${obj.id}/attributes`;
      method = 'POST';

      if (obj.mods) params.mods = obj.mods;

      if (typeof obj.mode == 'string') params.ruleset = obj.mode;
      else if (typeof obj.mode == 'number') params.ruleset_id = Modes_enums[obj.mode];

      break;
  };


  const data = await request(url, {
    method: method,
    params: params,
  });

  if (obj.type == 'attributes')
    return data.attributes as Response<T['type']>;

  return data as Response<T['type']>;
};


export default name;