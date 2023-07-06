import { namespace, RequestNamespace } from "../../../utility/request";
// import { id as mods_id } from "../../../../utility/mods";
// import path from "path";
import fs from "fs";

import scores from "./beatmap/scores";
import diff from "./beatmap/diff";

import form from "../form/replays";

const request: RequestNamespace = namespace('https://osu.ppy.sh/api/');

const _mode = [
  'osu',
  'taiko',
  'fruits',
  'mania',
];


export const description: any = {
  auth: 2,
  title: __filename,
  method: 'GET',
  description: 'Download replay file for specified score',
  params: [
    {
      type: 'number',
      name: 'id',
      optional: true,
      description: 'id of the beatmap',
    },
    {
      type: 'number',
      name: 'user',
      optional: true,
      description: 'id of the user',
    },
    {
      type: 'string',
      name: 'mode',
      optional: true,
      description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
    },
    {
      type: 'number',
      name: 'score_id',
      optional: true,
      description: 'id of the score',
    },
    {
      type: 'string/number',
      name: 'mods',
      optional: true,
      description: 'Name of the mods \`\`\`HDDT\`\`\` or mods number \`\`\`72\`\`\`',
    },
    {
      type: 'string',
      name: 'type',
      optional: true,
      description: '\`\`\`u\`\`\` is a user_id or a username. Use string for usernames or \`\`\`id\`\`\` for user_ids',
    },
    {
      type: 'string',
      name: 'dest',
      optional: false,
      description: 'Path to the folder',
    },
    {
      type: 'string',
      name: 'file',
      optional: false,
      description: 'File name (without extension)',
    },
  ],
};

export interface types {
  (obj: {
    id?: number,
    user?: string | number,
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    score_id?: number,
    mods?: string | number,
    type?: 'u' | 'id',
  }, dest: string, file: string): Promise<string>;
};

export interface response { }


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