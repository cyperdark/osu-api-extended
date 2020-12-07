import { AxiosInstance } from "axios";

const lzma = require('lzma-native');
const osr = require('node-osr');
const axios = require('axios');
const fs = require('fs');

interface AccObject {
  300: number;
  geki: number;
  100: number;
  katu: number;
  50: number;
  0: number;
}

class Tools {
  country(id: string): string {
    try {
      const countrys: { flag: string; country: string }[] = JSON.parse(fs.readFileSync('./flags.json', 'utf-8'));
      const find = countrys.filter((r) => r.flag === id);

      if (find.length > 0) return find[0].country;
      else return `This country is not supported`;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  accuracy(obj: AccObject, mode?: number): number {
    try {
      let acc = 0.0;

      switch (mode) {
        case 1:
          acc = (100.0 * (2 * obj[300] + obj[100])) / (2 * (obj[300] + obj[100] + obj[0]));
          break;
        case 2:
          acc = (100.0 * (obj[300] + obj[100] + obj[50])) / (obj[300] + obj[100] + obj[50] + obj.katu + obj[0]);
          break;
        case 3:
          acc =
            (100.0 * (6 * obj.geki + 6 * obj[300] + 4 * obj.katu + 2 * obj[100] + obj[50])) /
            (6 * (obj[50] + obj[100] + obj[300] + obj[0] + obj.geki + obj.katu));
          break;
        default:
          acc = (100.0 * (6 * obj[300] + 2 * obj[100] + obj[50])) / (6 * (obj[50] + obj[100] + obj[300] + obj[0]));
          break;
      }

      return parseFloat(acc.toFixed(2));
    } catch (err) {
      console.error(err);
      return 0;
    }
  }
}

const tools = new Tools();

class Mods {
  id(mod: number): string {
    try {
      const codes: { [key: string]: string } = {
        '1': 'NF',
        '2': 'EZ',
        '4': 'TD',
        '8': 'HD',
        '16': 'HR',
        '32': 'SD',
        '64': 'DT',
        '128': 'RX',
        '256': 'HT',
        '576': 'NC',
        '1024': 'FL',
        '2048': 'AT',
        '4096': 'SO',
        '8192': 'AP',
        '16416': 'PF',
        '32768': '4K',
        '65536': '5K',
        '131072': '6K',
        '262144': '7K',
        '524288': '8K',
        '1048576': 'Fl',
        '2097152': 'RD',
        '4194304': 'LM',
        '8388608': 'Target',
        '16777216': '9K',
        '33554432': 'KeyCoop',
        '67108864': '1K',
        '134217728': '3K',
        '268435456': '2K',
        '536870912': 'ScoreV2',
        '1073741824': 'LastMod',
      };
      let cache = mod;
      const enabled = [];
      let text = '';

      const values = Object.keys(codes).map((a) => Number(a));

      for (let i = values.length - 1; i >= 0; i--) {
        if (cache >= values[i]) {
          cache -= values[i];
          enabled.push(codes[values[i]]);
        }
      }
      enabled.forEach((m) => (text += m));

      if (text === '') text = 'NM';
      return text;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  name(mod: string): number | undefined {
    try {
      let modNumber = 0;

      const codes: { [key: string]: number } = {
        NF: 1,
        EZ: 2,
        TD: 4,
        HD: 8,
        HR: 16,
        SD: 32,
        DT: 64,
        RX: 128,
        HT: 256,
        NC: 576,
        FL: 1024,
        AT: 2048,
        SO: 4096,
        AP: 8192,
        PF: 16416,
        '4K': 32768,
        '5K': 65536,
        '6K': 131072,
        '7K': 262144,
        '8K': 524288,
        FI: 1048576,
        RD: 2097152,
        LM: 4194304,
        Target: 8388608,
        '9K': 16777216,
        KeyCoop: 33554432,
        '1K': 67108864,
        '3K': 134217728,
        '2K': 268435456,
        ScoreV2: 536870912,
        LastMod: 107374182,
      };
      const name: RegExpMatchArray | null = mod.match(/.{1,2}/g);
      if (name == null) return undefined;

      const values: string[] = Object.keys(codes).map((a) => a);
      for (let i = 0; i < name.length; i++) {
        const find: any = values.filter((v) => (name != null ? v.toLowerCase() === name[i].toLowerCase() : false));
        modNumber += codes[find[0]];
      }

      return modNumber;
    } catch (err) {
      console.error(err);
    }
  }
}

const mods = new Mods();

interface DefaultObj {
  u?: number;
  m?: number;
  type?: string;
}

interface Bm extends DefaultObj {
  s?: number;
  b?: number;
  a?: number;
  h?: string;
  mods?: number;
  since?: string;
  limit?: number;
}

interface User extends DefaultObj {
  event_days?: number;
}

interface Scores extends DefaultObj {
  b?: number;
  mods?: number;
  limit?: number;
}

interface Best extends DefaultObj {
  limit?: number;
}

interface Recent extends DefaultObj {
  limit?: number;
}

interface Match {
  mp: number;
}

interface Replay {
  b: number;
  u: number;
  m?: number;
  s?: number;
  mods: number;
  path?: string;
  type?: string;
}

interface diffFile {
  id: number;
  path: string;
}

interface IdNamed {
  id: number;
  name: string;
}

interface BmObject {
  id: {
    set: number;
    diff: number;
  };
  date: {
    submit: string;
    update: string;
    approved: string;
  };
  metadata: {
    artist: {
      original: string;
      unicode: string;
    };
    title: {
      original: string;
      unicode: string;
    };
    creator: IdNamed;
    favs: number;
    rating: number;
    source: string;
    genre_id: IdNamed;
    language_id: IdNamed;
    tags: string;
  };
  status: IdNamed;
  diff: DiffObject[];
  misc: {
    download_unavailable: boolean;
    audio_unavailable: boolean;
    storyboard: boolean;
    video: boolean;
    packs: string;
    bg: {
      full: string;
      raw: string;
      slim: {
        1: string;
        2: string;
      };
      cover: {
        1: string;
        2: string;
      };
      card: {
        1: string;
        2: string;
      };
      list: {
        1: string;
        2: string;
      };
    };
  };
}

interface UserObject {
  id: number;
  name: string;
  pp: number;
  acc: number;
  lvl: number;
  join: string;
  country: {
    flag: string;
    short: string;
    full: string;
  };
  play: {
    count: number;
    time: number;
  };
  hits: {
    300: number;
    100: number;
    50: number;
  };
  score: {
    total: number;
    ranked: number;
  };
  rank: {
    global: number;
    country: number;
  };
  ranks: {
    ssh: number;
    ss: number;
    sh: number;
    s: number;
    a: number;
  };
  events: Events[];
}

interface ScoreObject {
  date: string;
  combo: {
    max: number;
    full: number;
  };
  hits: {
    300: number;
    geki: number;
    100: number;
    katu: number;
    50: number;
    0: number;
  };
  mods: IdNamed;
  rank: string;
  accuracy: number;
}

interface ScoresObject extends ScoreObject {
  user: IdNamed;
  score: {
    total: number;
    id: number;
  };
  pp: number;
  replay: number;
}

interface ScoresBestObject extends ScoreObject {
  beatmap: number;
  user: {
    id: number;
  };
  score: {
    total: number;
    id: number;
  };
  pp: number;
  replay: number;
}

interface ScoresRecentObject extends ScoreObject {
  beatmap: number;
  user: {
    id: number;
  };
  score: {
    total: number;
  };
}

interface MatchObject {
  match: {
    id: number;
    name: string;
    time: {
      start: string;
      end: string;
    };
  };
  games: MatchGame[];
}

interface MatchGame {
  id: number;
  time: {
    start: string;
    end: string;
  };
  beatmap_id: number;
  mode: IdNamed;
  types: {
    match: string;
    scoring: IdNamed;
    team: IdNamed;
  };
  mods: IdNamed;
  scores: MatchScore[];
}

interface MatchScore {
  team: IdNamed;
  slot: number;
  user: {
    id: number;
  };
  score: number;
  combo: {
    max: number;
    perfect: number;
  };
  hits: {
    300: number;
    geki: number;
    100: number;
    katu: number;
    50: number;
    0: number;
  };
  mods: IdNamed;
  rank: string;
  pass: string;
}

interface DiffObject {
  id: number;
  diff: string;
  mode: IdNamed;
  file_md5: string;
  stats: {
    star: {
      pure: number;
      aim: number;
      speed: number;
    };
    ar: number;
    od: number;
    cs: number;
    hp: number;
    bpm: {
      avg: number;
    };
    combo: number;
    time: {
      full: number;
      drain: number;
    };
    objects: {
      all: number;
      circles: number;
      sliders: number;
      spinners: number;
    };
  };
  plays: number;
  pass: number;
}

interface Events {
  id: {
    diff: number;
    set: number;
  };
  display: {
    html: string;
    pure: string;
  };
  date: string;
  epicfactor: number;
}

class V1 {
  key: string;
  private api: AxiosInstance;

  constructor(key: string) {
    this.key = key;
    this.api = axios.create({
      validateStatus: () => true,
      baseURL: 'https://osu.ppy.sh/api',
      params: {
        key: this.key,
      },
      timeout: 1e4,
    });
  }

  beatmap(obj: Bm): Promise<BmObject> | undefined {
    return new Promise(async (ex) => {
      try {
        const { data } = await this.api.get('/get_beatmaps', { params: obj });
        if (data.length > 0) {
          const genres = [
            'any',
            'unspecified',
            'video game',
            'anime',
            'rock',
            'pop',
            'other',
            'novelty',
            'other',
            'hip hop',
            'electronic',
          ];
          const languages = [
            'any',
            'other',
            'english',
            'japanese',
            'chinese',
            'instrumental',
            'korean',
            'french',
            'german',
            'swedish',
            'italian',
          ];
          const modes = ['std', 'taiko', 'ctb', 'mania'];
          const parseStatusById = (statusId: number) => {
            switch (statusId) {
              case -2:
                return 'graveyard';
              case -1:
                return 'WIP';
              case 0:
                return 'pending';
              case 1:
                return 'ranked';
              case 2:
                return 'approved';
              case 3:
                return 'qualified';
              case 4:
                return 'loved';
              default:
                return 'undefined';
            }
          };

          const info: BmObject = {
            id: {
              set: +data[0].beatmapset_id,
              diff: +data[0].beatmap_id,
            },
            date: {
              submit: data[0].submit_date,
              approved: data[0].approved_date,
              update: data[0].last_update,
            },
            metadata: {
              artist: {
                original: data[0].artist,
                unicode: data[0].artist_unicode,
              },
              title: {
                original: data[0].title,
                unicode: data[0].title_unicode,
              },
              creator: {
                id: +data[0].creator_id,
                name: data[0].creator,
              },
              favs: +data[0].favourite_count,
              rating: parseFloat(Number(data[0].rating).toFixed(2)),
              source: data[0].source,
              genre_id: {
                id: +data[0].genre_id,
                name: genres[+data[0].genre_id],
              },
              language_id: {
                id: +data[0].language_id,
                name: languages[+data[0].genre_id],
              },
              tags: data[0].tags,
            },
            status: {
              id: +data[0].approved,
              name: parseStatusById(+data[0].approved),
            },
            diff: [],
            misc: {
              download_unavailable: !!data[0].download_unavailable,
              audio_unavailable: !!data[0].audio_unavailable,
              storyboard: !!data[0].storyboard,
              video: !!data[0].video,
              packs: data[0].packs,
              bg: {
                full: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/fullsize.jpg`,
                raw: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/raw.jpg`,
                slim: {
                  1: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/slimcover.jpg`,
                  2: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/slimcover@2x.jpg`,
                },
                cover: {
                  1: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/cover.jpg`,
                  2: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/cover@2x.jpg`,
                },
                card: {
                  1: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/card.jpg`,
                  2: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/card@2x.jpg`,
                },
                list: {
                  1: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/list.jpg`,
                  2: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/list@2x.jpg`,
                },
              },
            },
          };

          for (let i = 0; i < data.length; i++) {
            const d = data[i];
            info.diff.push({
              id: +d.beatmap_id,
              diff: d.version,
              mode: {
                id: +d.mode,
                name: modes[+d.mode],
              },
              file_md5: d.file_md5,
              stats: {
                star: {
                  pure: parseFloat(Number(d.difficultyrating).toFixed(2)),
                  aim: parseFloat(Number(d.diff_aim).toFixed(2)),
                  speed: parseFloat(Number(d.diff_speed).toFixed(2)),
                },
                ar: parseFloat(Number(d.diff_approach).toFixed(2)),
                od: parseFloat(Number(d.diff_overall).toFixed(2)),
                cs: parseFloat(Number(d.diff_size).toFixed(2)),
                hp: parseFloat(Number(d.diff_drain).toFixed(2)),
                bpm: {
                  avg: +d.bpm,
                },
                combo: +d.max_combo,
                time: {
                  full: +d.total_length,
                  drain: +d.hit_length,
                },
                objects: {
                  all: +d.count_normal + +d.count_slider + +d.count_spinner,
                  circles: +d.count_normal,
                  sliders: +d.count_slider,
                  spinners: +d.count_spinner,
                },
              },
              plays: +d.playcount,
              pass: +d.passcount,
            });
          }

          ex(info);
        } else ex(undefined);
      } catch (err) {
        console.error(err);
      }
    });
  }

  user(obj: User): Promise<UserObject> | undefined {
    return new Promise(async (ex) => {
      try {
        const { data } = await this.api.get('/get_user', { params: obj });
        if (data.length > 0) {
          const events = data.events.map((d: any) => {
            return {
              display: {
                html: d.display_html,
                pure: d.display_html.replace(/<[^>]*>?/gm, '').trim(),
              },
              id: {
                diff: +d.beatmap_id,
                set: +d.beatmapset_id,
              },
              date: d.date,
              epicfactor: +d.epicfactor,
            };
          });
          const info: UserObject = {
            id: +data.user_id,
            name: data.username,
            pp: data.pp_raw,
            acc: data.accuracy,
            lvl: data.level,
            join: data.join_date,
            country: {
              flag: `https://osu.ppy.sh/images/flags/${data.country}.png`,
              short: data.country,
              full: tools.country(data.country),
            },
            play: {
              count: +data.playcount,
              time: +data.total_seconds_played,
            },
            hits: {
              300: +data.count300,
              100: +data.count100,
              50: +data.count50,
            },
            score: {
              total: +data.total_score,
              ranked: +data.ranked_score,
            },
            rank: {
              global: +data.pp_rank,
              country: +data.pp_country_rank,
            },
            ranks: {
              ssh: +data.count_rank_ssh,
              ss: +data.count_rank_ss,
              sh: +data.count_rank_sh,
              s: +data.count_rank_s,
              a: +data.count_rank_a,
            },
            events,
          };
          ex(info);
        } else ex(undefined);
      } catch (err) {
        console.error(err);
      }
    });
  }

  scores(obj: Scores): Promise<ScoresObject[]> | undefined {
    return new Promise(async (ex) => {
      try {
        const { data } = await this.api.get('/get_scores', { params: obj });
        if (data.length > 0) {
          const info = [];
          for (let i = 0; i < data.length; i++) {
            const d = data[i];
            const hits = {
              300: +d.count300,
              geki: +d.countgeki,
              100: +d.count100,
              katu: +d.countkatu,
              50: +d.count50,
              0: +d.countmiss,
            };
            const score: ScoresObject = {
              date: d.date,
              rank: d.rank,
              user: {
                id: +d.user_id,
                name: d.username,
              },
              score: {
                id: +d.score_id,
                total: +d.score,
              },
              combo: {
                max: +d.maxcombo,
                full: +d.perfect,
              },
              hits,
              mods: {
                id: +d.enabled_mods,
                name: mods.id(d.enabled_mods),
              },
              accuracy: tools.accuracy(hits, obj.m),
              pp: d.pp,
              replay: +d.replay_available,
            };
            info.push(score);
          }

          ex(info);
        } else ex(undefined);
      } catch (err) {
        console.error(err);
      }
    });
  }

  best(obj: Best): Promise<ScoresBestObject[]> | undefined {
    return new Promise(async (ex) => {
      try {
        const { data } = await this.api.get('/get_user_best', { params: obj });
        if (data.length > 0) {
          const info = [];
          for (let i = 0; i < data.length; i++) {
            const d = data[i];
            const hits = {
              300: +d.count300,
              geki: +d.countgeki,
              100: +d.count100,
              katu: +d.countkatu,
              50: +d.count50,
              0: +d.countmiss,
            };
            const score: ScoresBestObject = {
              date: d.date,
              beatmap: +d.beatmap_id,
              rank: d.rank,
              user: {
                id: +d.user_id,
              },
              score: {
                id: +d.score_id,
                total: +d.score,
              },
              combo: {
                max: +d.maxcombo,
                full: +d.perfect,
              },
              hits,
              mods: {
                id: +d.enabled_mods,
                name: mods.id(d.enabled_mods),
              },
              accuracy: tools.accuracy(hits, obj.m),
              pp: d.pp,
              replay: +d.replay_available,
            };
            info.push(score);
          }

          ex(info);
        } else ex(undefined);
      } catch (err) {
        console.error(err);
      }
    });
  }

  recent(obj: Recent): Promise<ScoresRecentObject[]> | undefined {
    return new Promise(async (ex) => {
      try {
        const { data } = await this.api.get('/get_user_recent', { params: obj });
        if (data.length > 0) {
          const info = [];
          for (let i = 0; i < data.length; i++) {
            const d = data[i];
            const hits = {
              300: +d.count300,
              geki: +d.countgeki,
              100: +d.count100,
              katu: +d.countkatu,
              50: +d.count50,
              0: +d.countmiss,
            };
            const score: ScoresRecentObject = {
              date: d.date,
              beatmap: +d.beatmap_id,
              rank: d.rank,
              user: {
                id: +d.user_id,
              },
              score: {
                total: +d.score,
              },
              combo: {
                max: +d.maxcombo,
                full: +d.perfect,
              },
              hits,
              mods: {
                id: +d.enabled_mods,
                name: mods.id(d.enabled_mods),
              },
              accuracy: tools.accuracy(hits, obj.m),
            };
            info.push(score);
          }

          ex(info);
        } else ex(undefined);
      } catch (err) {
        console.error(err);
      }
    });
  }

  match(obj: Match): undefined | Promise<MatchObject> {
    return new Promise(async (ex) => {
      try {
        const { data } = await this.api.get('/get_match', { params: obj });
        if (data.length > 0) {
          const modes = ['std', 'taiko', 'ctb', 'mania'];
          const scoring = ['Score', 'Accuracy', 'Combo', 'Score v2'];
          const team = ['Head to head', 'Tag Co-op', 'Team vs', 'Tag Team vs'];
          const teams = ['no team', 'blue', 'red'];

          const match: MatchObject = {
            match: {
              id: +data.match.match_id,
              name: data.match.name,
              time: {
                start: data.match.start_time,
                end: data.match.end_time,
              },
            },
            games: [],
          };

          for (let i = 0; i < data.games.length; i++) {
            const g = data.games[i];
            const game: MatchGame = {
              id: +g.game_id,
              time: {
                start: g.start_time,
                end: g.end_time,
              },
              beatmap_id: +g.beatmap_id,
              mode: {
                id: +g.play_mode,
                name: modes[+g.play_mode],
              },
              types: {
                match: g.match_type,
                scoring: {
                  id: +g.scoring_type,
                  name: scoring[+g.scoring_type],
                },
                team: {
                  id: +g.team_type,
                  name: team[+g.team_type],
                },
              },
              mods: {
                id: +g.mods,
                name: mods.id(g.mods),
              },
              scores: [],
            };

            for (let s = 0; s < g.scores.length; s++) {
              const ss = g.scores[s];

              const score: MatchScore = {
                team: {
                  id: +ss.team,
                  name: teams[+ss.team],
                },
                slot: +ss.slot,
                user: {
                  id: +ss.user_id,
                },
                score: +ss.score,
                combo: {
                  max: +ss.maxcombo,
                  perfect: +ss.perfect,
                },
                hits: {
                  300: +ss.count300,
                  geki: +ss.countgeki,
                  100: +ss.count100,
                  katu: +ss.countkatu,
                  50: +ss.count50,
                  0: +ss.countmiss,
                },
                mods: {
                  id: +ss.enabled_mods,
                  name: mods.id(ss.enabled_mods),
                },
                rank: g.rank,
                pass: g.pass,
              };
              game.scores.push(score);
            }

            match.games.push(game);
          }
          ex(match);
        } else ex(undefined);
      } catch (err) {
        console.error(err);
      }
    });
  }

  replay(obj: Replay): Promise<number> {
    return new Promise(async (ex) => {
      try {
        let file = '';
        if (obj.path !== undefined) file = `${obj.path}/${obj.b}-${obj.u}_${obj.mods}.osr`;
        else file = `${obj.b}-${obj.u}_${obj.mods}.osr`;
        if (fs.existsSync(file)) ex(2);
        else {
          const { data } = await this.api.get('/get_replay', { params: obj });
          if (data.error) return ex(3);
          else {
            const decode = Buffer.from(data.content, data.encoding);
            const replay = new osr.Replay();

            const map = await this.beatmap({ b: obj.b });
            const score = await this.scores({ b: obj.b, u: obj.u, mods: obj.mods });
            if (score === undefined) return ex(4);

            replay.replay_data = lzma.decompress(decode);

            replay.beatmapMD5 = map?.diff.filter((m) => m.id === obj.b)[0].file_md5;
            replay.playerName = score[0].user.name;
            replay.number_300s = score[0].hits[300];
            replay.number_100s = score[0].hits[100];
            replay.number_50s = score[0].hits[50];
            replay.gekis = score[0].hits.geki;
            replay.katus = score[0].hits.katu;
            replay.misses = score[0].hits[0];
            replay.score = score[0].score.total;
            replay.max_combo = score[0].combo.max;
            replay.perfect_combo = score[0].combo.full;
            replay.mods = obj.mods;
            replay.timestamp = new Date(score[0].date);

            const replayFile = replay.serializeSync();
            fs.writeFileSync(file, replayFile, data.encoding);
            ex(1);
          }
        }
      } catch (err) {
        console.error(err);
        ex(0);
      }
    });
  }

  diffFile(obj: diffFile): Promise<number> {
    return new Promise(async (ex) => {
      try {
        let file = '';
        if (obj.path !== undefined) file = `${obj.path}/${obj.id}.osu`;
        if (fs.existsSync(file)) ex(2);
        else {
          const { data } = await axios.get(`https://osu.ppy.sh/osu/${obj.id}`);
          fs.writeFileSync(file, data, 'utf-8');
          ex(1);
        }
      } catch (err) {
        console.error(err);
        ex(0);
      }
    });
  }

  // pp_calc(obj: User): Promise<UserObject> | undefined {
  //   return new Promise(async ex => {
  //     try {
  //       const { data } = await this.api.get('/get_beatmaps', { params: obj });
  //       if (data.length > 0) {
  //         let info = {

  //         };
  //         ex(info);
  //       } else ex(undefined);
  //     } catch (err) { console.error(err); }
  //   });
  // }

  // default(obj: User): Promise<UserObject> | undefined {
  //   return new Promise(async ex => {
  //     try {
  //       const { data } = await this.api.get('/get_beatmaps', { params: obj });
  //       if (data.length > 0) {
  //         let info = {

  //         };
  //         ex(info);
  //       } else ex(undefined);
  //     } catch (err) { console.error(err); }
  //   });
  // }
}

// const apiV1 = new V1('asdsad');

interface NewsObject {
  news_posts: NewPosts[];
  search: {
    cursor: string | null;
    limit: number;
  };
  cursor: {
    published_at: string;
    id: number;
  };
}

interface NewPosts {
  id: number;
  author: string;
  edit_url: string;
  first_image: string;
  published_at: string;
  updated_at: string;
  slug: string;
  title: string;
  preview: string;
}

class V2 {
  clientId: number;
  clientSecret: string;
  accessToken: string;
  api: AxiosInstance;
  oauth: AxiosInstance;

  constructor(clientId: number, clientSecret: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;

    this.accessToken = '';

    this.api = axios.create();
    this.oauth = axios.create({
      baseURL: 'https://osu.ppy.sh/oauth/',
      timeout: 7e3,
    });
  }

  login() {
    return new Promise(async (ex) => {
      try {
        const {
          data: { access_token },
        } = await this.oauth.post('token', {
          grant_type: 'client_credentials',
          client_id: this.clientId,
          client_secret: this.clientSecret,
          scope: 'public',
          code: 'code',
        });

        this.accessToken = access_token;

        this.api = axios.create({
          baseURL: 'https://osu.ppy.sh/api/v2/',
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          timeout: 7e3,
        });
        ex(true);
      } catch (err) {
        console.error(err);
      }
    });
  }

  news(): Promise<NewsObject> {
    return new Promise(async (ex) => {
      try {
        const { data } = await this.api.get(`/news`);
        ex(data);
      } catch (err) {
        console.error(err);
      }
    });
  }
}

export { V1, V2 };