import { namespace, RequestNamepsace } from "../../../../utility/request";
import { id as mods_id } from "../../../../utility/mods";
import form from "../../form/beatmap/creator";

const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/');

const _mode = [
  'osu',
  'taiko',
  'fruits',
  'mania',
];


export interface types {
  (id: number, obj?: {
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    converted?: '0' | '1',
    hash?: string,
    limit?: number,
    mods?: string | number,
    since?: string,
  }): Promise<{}[]>;
};


const name: types = async (id, obj = {}) => {
  const params = {
    u: id,
    m: _mode.indexOf(obj.mode),
    a: obj.converted,
    h: obj.hash,
    since: obj.since,
    mods: mods_id(obj.mods),
    limit: obj.limit,
  };

  const data = await request(`get_beatmaps`, {
    method: 'GET',
    params: params,
  });

  if (data.length == 0) return null;

  const format = form(data);
  return format;
};


export default name;