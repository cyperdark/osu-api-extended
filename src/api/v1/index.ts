import {
  Tbeatmap, Tuser, Tmatch, Treplay,
  beatmap_object, user_object, scores_object, best_object, recent_object, match_object
} from "../../types/v1";
import { RequestNamepsace } from "../../types/request";
import { id as mods_id } from "../../utility/mods";
import { namespace } from "../../utility/request";

import _beatmap from "./beatmap";
import _user from "./user";
import _scores from "./scores";
import _best from "./best";
import _recent from "./recent";
import _replay from "./replay";
import _match from "./match";
import fs from "fs";

const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/');
let cache_key: string = '';

export const _mode = [
  'osu',
  'taiko',
  'fruits',
  'mania',
];

export const set_key = (key: string) => cache_key = key;

export const beatmap: Tbeatmap = {
  diff: async (diff_id, obj = {}) => {
    const params = {
      b: diff_id,
      m: _mode.indexOf(obj.mode),
      a: obj.converted,
      h: obj.hash,
      since: obj.since,
      mods: mods_id(obj.mods),
      limit: obj.limit,
    };

    const data = await request('get_beatmaps', {
      method: 'GET',
      params: { ...{ k: cache_key }, ...params },
    });

    if (data.length > 0) return _beatmap(data);
    return null;
  },
  set: async (set_id, obj = {}) => {
    const params = {
      s: set_id,
      m: _mode.indexOf(obj.mode),
      a: obj.converted,
      h: obj.hash,
      since: obj.since,
      mods: mods_id(obj.mods),
      limit: obj.limit,
    };

    const data = await request('get_beatmaps', {
      method: 'GET',
      params: { ...{ k: cache_key }, ...params },
    });

    if (data.length > 0) return _beatmap(data);
    return null;
  },
  user: async (user, obj = {}) => {
    const params = {
      u: user,
      m: _mode.indexOf(obj.mode),
      a: obj.converted,
      h: obj.hash,
      since: obj.since,
      mods: mods_id(obj.mods),
      type: obj.type,
      limit: obj.limit,
    };

    const data = await request('get_beatmaps', {
      method: 'GET',
      params: { ...{ k: cache_key }, ...params },
    });

    if (data.length > 0) return _beatmap(data);
    return null;
  },
  scores: async (diff_id, obj = {}) => {
    const params = {
      b: diff_id,
      u: obj.user,
      m: _mode.indexOf(obj.mode),
      mods: mods_id(obj.mods),
      type: obj.type,
      limit: obj.limit,
    };

    const data = await request('get_scores', {
      method: 'GET',
      params: { ...{ k: cache_key }, ...params },
    });

    if (data.length > 0) return _scores(data, params.m);
    return null;
  },
};

export const user: Tuser = {
  get: async (user, obj = {}) => {
    const params = {
      u: user,
      m: _mode.indexOf(obj.mode),
      type: obj.type,
      event_days: obj.event_days,
    };

    const data = await request('get_user', {
      method: 'GET',
      params: { ...{ k: cache_key }, ...params },
    });

    if (data.length > 0) return _user(data);
    return null;
  },
  scores: {
    best: async (user, obj = {}) => {
      const params = {
        u: user,
        m: _mode.indexOf(obj.mode),
        type: obj.type,
      };

      const data = await request('get_user_best', {
        method: 'GET',
        params: { ...{ k: cache_key }, ...params },
      });

      if (data.length > 0) return _best(data, obj.mode);
      return null;
    },
    recent: async (user, obj = {}) => {
      const params = {
        u: user,
        m: _mode.indexOf(obj.mode),
        type: obj.type,
        limit: obj.limit,
      };

      const data = await request('get_user_recent', {
        method: 'GET',
        params: { ...{ k: cache_key }, ...params },
      });

      if (data.length > 0) return _recent(data, obj.mode);
      return null;
    },
  },
};

export const match: Tmatch = async (id) => {
  const params = { mp: id };

  const data = await request('get_match', {
    method: 'GET',
    params: { ...{ k: cache_key }, ...params },
  });

  if (data.match != 0) return _match(data);
  return null;
};

export const replay: Treplay = async (obj = {}, dest, file) => {
  let _file = '';

  if (dest) _file = `${dest}${dest.endsWith('/') ? '' : '/'}${file ? `${file}.osr` : 'replay.osr'}`;
  else _file = 'replay.osr';

  if (fs.existsSync(_file)) throw new Error(`Replay ${_file} already exists`);

  const params = {
    b: obj.diff_id,
    u: obj.user,
    m: _mode.indexOf(obj.mode),
    s: obj.score_id,
    type: obj.type,
    mods: obj.mods,
  };

  const data = await request('get_replay', {
    method: 'GET',
    params: { ...{ k: cache_key }, ...params },
  });

  const score = await beatmap.scores(obj.diff_id, {
    user: obj.user,
    mode: obj.mode,
    mods: obj.mods,
    type: obj.type,
  });

  if (!score) throw new Error(`Score not founded. Check your params: ${JSON.stringify(obj)}`);

  const map = await beatmap.diff(obj.diff_id);
  if (!map) throw new Error(`Beatmap not founded. Check your beatmap id: ${obj.diff_id}`);

  return _replay(data, map, score, obj.diff_id, obj.mods, _file);
};