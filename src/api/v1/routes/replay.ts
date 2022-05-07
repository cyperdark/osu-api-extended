import { namespace, RequestNamepsace } from "../../../utility/request";
// import { id as mods_id } from "../../../../utility/mods";
import path from "path";
import fs from "fs";

import scores from "./beatmap/scores";
import diff from "./beatmap/diff";

import form from "../form/replays";

const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/');

const _mode = [
  'osu',
  'taiko',
  'fruits',
  'mania',
];


export interface types {
  (obj: {
    id?: number, user?: string | number,
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    score_id?: number,
    mods?: string | number,
    type?: 'u' | 'id',
  }, dest: string, file: string): Promise<string>;
};


const name: types = async (obj = {}, dest, file) => {
  let _file = '';

  if (dest) _file = `${dest}${dest.endsWith('/') ? '' : '/'}${file ? `${file}.osr` : 'replay.osr'}`;
  else _file = file ? `${file}.osr` : 'replay.osr';

  if (fs.existsSync(_file)) throw new Error(`Replay ${_file} already exists`);

  const params = {
    b: obj.id,
    u: obj.user,
    m: _mode.indexOf(obj.mode),
    s: obj.score_id,
    type: obj.type,
    mods: obj.mods,
  };

  const data = await request(`get_replay`, {
    method: 'GET',
    params: params,
  });

  const score = await scores(obj.id, {
    user: obj.user,
    mode: obj.mode,
    mods: obj.mods,
    type: obj.type,
  });

  if (!score) throw new Error(`Score not founded. Check your params: ${JSON.stringify(obj)}`);

  const map = await diff(obj.id);
  if (!map) throw new Error(`Beatmap not founded. Check your beatmap id: ${obj.id}`);

  const format = form(data, map, score, obj.id, obj.mods, _file);
  return format;
};


export default name;