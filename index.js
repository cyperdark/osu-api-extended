const Country = require("./src/country");
const Mods = require("./src/mods");
const osr = require('node-osr');
const axios = require("axios");
const lzma = require('lzma');
const fs = require('fs');
const { Interface } = require("readline");

class Api {
  constructor() {
    this.key = "";
  }

  /**
   * Get beatmap data
   * @param {Object} obj {\
   * s: "beatmapset id",\
   * b: "beatmap id",\
   * u: "User id or name",\
   * m: "mode (0 = osu!, 1 = Taiko, 2 = CtB, 3 = osu!mania). Optional, default: 0",\
   * a: "0 = not included, 1 = included",\
   * h: "beatmap hash",\
   * mods: "mods id",\
   * since: "return all beatmaps ranked or loved since this date. Must be a MySQL date. In UTC",\
   * type: "specify if u is a user_id or a username",\
   * limit: "0-500",
   * }
   * @description \
   * a: "include converted beatmaps? Only has an effect if m is chosen and not 0. Optional, default: 0"\
   * \
   * h: "example of hash: a5b99395a42bd55bc5eb1d2411cbdf8b" \
   * \
   * mods: "mods that applies to the beatmap requested. Optional, default is 0. (Refer to the Mods section below, note that requesting multiple mods is supported, but it should not contain any non-difficulty-increasing mods or the return value will be invalid.)""\
   * \
   * type: "Use string for usernames or id for user_ids. Optional, default behaviour is automatic recognition (may be problematic for usernames made up of digits only)"
   */
  beatmap(obj) {
    return new Promise(async ex => {
      try {
        let data = await this.get(`http://osu.ppy.sh/api/get_beatmaps?k=${this.key}`, obj);
        const genres = ['any', 'unspecified', 'video game', 'anime', 'rock', 'pop', 'other', 'novelty', 'other', 'hip hop', 'electronic'];
        const languages = ['any', 'other', 'english', 'japanese', 'chinese', 'instrumental', 'korean', 'french', 'german', 'swedish', 'italian'];
        const modes = ['std', 'taiko', 'ctb', 'mania'];
        const parseStatusById = statusId => {
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
              return;
          }
        };
        if (data) {
          let info = {
            id: { set: +data[0].beatmapset_id },
            date: {
              submit: data[0].submit_date,
              approved: data[0].approved_date,
              update: data[0].last_update,
            },
            data: {
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
              rating: Number(data[0].rating).toFixed(2),
              source: data[0].source,
              genre_id: {
                id: +data[0].genre_id,
                name: genres[+data[0].genre_id]
              },
              language_id: {
                id: +data[0].language_id,
                name: languages[+data[0].genre_id]
              },
              tags: data[0].tags,
            },
            status: {
              id: +data[0].approved,
              name: parseStatusById(+data[0].approved),
            },
            diff: [],
            other: {
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
              }
            }
          };
          if (data.length == 1) info.id.diff = +data[0].beatmap_id;
          for (let i = 0; i < data.length; i++) {
            let d = data[i];
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
                  pure: Number(d.difficultyrating).toFixed(2),
                  aim: Number(d.diff_aim).toFixed(2),
                  speed: Number(d.diff_speed).toFixed(2),
                },
                ar: Number(d.diff_approach).toFixed(2),
                od: Number(d.diff_overall).toFixed(2),
                cs: Number(d.diff_size).toFixed(2),
                hp: Number(d.diff_drain).toFixed(2),
                bpm: {
                  api: +d.bpm,
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
          };
          ex(info);
        } else ex({});
      } catch (err) { console.log(`\n\nosu-api-ex | beatmap => ${JSON.stringify(obj)}`, err, '\n\n'); }
    });
  }
  /**
  * Get user data
  * @param {Object} obj {\
  * u: "User id or name",\
  * m: "mode (0 = osu!, 1 = Taiko, 2 = CtB, 3 = osu!mania). Optional, default: 0",\
  * type: "specify if u is a user_id or a username",\
  * event_days: "1-31. Default: 1",\
  * }
  * @description \
  * type: "Use string for usernames or id for user_ids. Optional, default behaviour is automatic recognition (may be problematic for usernames made up of digits only)"
  */
  user(obj) {
    return new Promise(async ex => {
      try {
        let data = await this.get(`http://osu.ppy.sh/api/get_user?k=${this.key}`, obj);
        data = data[0];
        if (data) {
          let events = data.events.map(d => {
            let pure = d.display_html.replace(/<[^>]*>?/gm, '').trim();
            return {
              display: {
                html: d.display_html,
                pure,
              },
              id: {
                diff: +d.beatmap_id,
                set: +d.beatmapset_id,
              },
              date: d.date,
              epicfactor: +d.epicfactor,
            };
          });
          let info = {
            id: +data.user_id,
            name: data.username,
            pp: data.pp_raw,
            acc: data.accuracy,
            lvl: data.level,
            join: data.join_date,
            country: {
              flag: `https://osu.ppy.sh/images/flags/${data.country}.png`,
              short: data.country,
              full: Country(data.country),
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
            events
          };
          ex(info);
        } else ex({});
      } catch (err) { console.log(`\n\nosu-api-ex | user => ${JSON.stringify(obj)}`, err, '\n\n'); }
    });
  }
  /**
  * Get scores data
  * @param {Object} obj {\
  * b: "beatmap id", \
  * u: "User id or name", \
  * m: "mode (0 = osu!, 1 = Taiko, 2 = CtB, 3 = osu!mania). Optional, default: 0", \
  * mods: "Mods id", \
  * type: "specify if u is a user_id or a username",\
  * limit: "range between 1 and 100 - defaults to 50", \
  * }
  * @description \
  * type: "Use string for usernames or id for user_ids. Optional, default behaviour is automatic recognition (may be problematic for usernames made up of digits only)"
  */
  scores(obj) {
    let { accuracy, mods } = this;

    return new Promise(async ex => {
      try {
        let data = await this.get(`http://osu.ppy.sh/api/get_scores?k=${this.key}`, obj);
        if (data) {
          let info = await Promise.all(data.map(async d => {
            return {
              date: d.date,
              rank: d.rank,
              user: {
                id: +d.user_id,
                name: d.username,
              },
              score: {
                id: +d.score_id,
                total: +d.score
              },
              combo: {
                max: +d.maxcombo,
                full: +d.perfect
              },
              hits: {
                300: +d.count300,
                geki: +d.countgeki,
                100: +d.count100,
                katu: +d.countkatu,
                50: +d.count50,
                0: +d.countmiss,
              },
              mods: {
                id: +d.enabled_mods,
                name: await mods(d.enabled_mods)
              },
              accuracy: accuracy(d.count300, d.count100, d.count50, d.countmiss, d.countgeki, d.countkatu, (obj.m) ? obj.m : 0),
              pp: d.pp,
              replay: +d.replay_available
            };
          }));
          ex(info);
        } else ex([]);
      } catch (err) { console.log(`\n\nosu-api-ex | scores => ${JSON.stringify(obj)}`, err, '\n\n'); }
    });
  }
  /**
  * Get best scores
  * @param {Object} obj {\
  * u: "User id or name",\
  * m: "mode (0 = osu!, 1 = Taiko, 2 = CtB, 3 = osu!mania). Optional, default: 0",\
  * limit: "range between 1 and 100 - defaults to 10",\
  * type: "specify if u is a user_id or a username",\
  * }
  * @description \
  * type: "Use string for usernames or id for user_ids. Optional, default behaviour is automatic recognition (may be problematic for usernames made up of digits only)"
  */
  best(obj) {
    let { accuracy, mods } = this;

    return new Promise(async ex => {
      try {
        let data = await this.get(`http://osu.ppy.sh/api/get_user_best?k=${this.key}`, obj);
        if (data) {
          let info = await Promise.all(data.map(async d => {
            return {
              date: d.date,
              rank: d.rank,
              user: +d.user_id,
              bmid: +d.beatmap_id,
              score: {
                id: +d.score_id,
                total: +d.score
              },
              combo: {
                max: +d.maxcombo,
                full: +d.perfect
              },
              hits: {
                300: +d.count300,
                geki: +d.countgeki,
                100: +d.count100,
                katu: +d.countkatu,
                50: +d.count50,
                0: +d.countmiss,
              },
              mods: {
                id: +d.enabled_mods,
                name: await mods(d.enabled_mods)
              },
              accuracy: accuracy(d.count300, d.count100, d.count50, d.countmiss, d.countgeki, d.countkatu, (obj.m) ? obj.m : 0),
              pp: d.pp,
              replay: +d.replay_available
            };
          }));
          ex(info);
        } else ex([]);
      } catch (err) { console.log(`\n\nosu-api-ex | best => ${JSON.stringify(obj)}`, err, '\n\n'); }
    });
  }
  /**
  * Get recent scores
  * @param {Object} obj {\
  * u: "User id or name",\
  * m: "mode (0 = osu!, 1 = Taiko, 2 = CtB, 3 = osu!mania). Optional, default: 0",\
  * limit: "range between 1 and 100 - defaults to 10",\
  * type: "specify if u is a user_id or a username",\
  * }
  * @description \
  * type: "Use string for usernames or id for user_ids. Optional, default behaviour is automatic recognition (may be problematic for usernames made up of digits only)"
  */
  recent(obj) {
    let { accuracy, mods } = this;
    return new Promise(async ex => {
      try {
        let data = await this.get(`http://osu.ppy.sh/api/get_user_recent?k=${this.key}`, obj);
        if (data) {
          let info = await Promise.all(data.map(async d => {
            return {
              date: d.date,
              rank: d.rank,
              id: {
                user: +d.user_id,
                diff: +d.beatmap_id,
              },
              score: +d.score,
              combo: {
                max: +d.maxcombo,
                full: +d.perfect
              },
              hits: {
                300: +d.count300,
                geki: +d.countgeki,
                100: +d.count100,
                katu: +d.countkatu,
                50: +d.count50,
                0: +d.countmiss,
              },
              mods: {
                id: +d.enabled_mods,
                name: await mods(d.enabled_mods)
              },
              accuracy: accuracy(d.count300, d.count100, d.count50, d.countmiss, d.countgeki, d.countkatu, (obj.m) ? obj.m : 0),
            };
          }));
          ex(info.reverse());
        } else ex([]);
      } catch (err) { console.log(`\n\nosu-api-ex | recent => ${JSON.stringify(obj)}`, err, '\n\n'); }
    });
  }
  /**
  * Get match data
  * @param {Object} obj {\
  * mp: "match id to get information from (required).",\
  * }
  */
  match(obj) {
    let { mods } = this;
    return new Promise(async ex => {
      try {
        let data = await this.get(`http://osu.ppy.sh/api/get_match?k=${this.key}`, obj);
        const modes = ['std', 'taiko', 'ctb', 'mania'];
        const scoring = ['Score', 'Accuracy', 'Combo', 'Score v2'];
        const team = ['Head to head', 'Tag Co-op', 'Team vs', 'Tag Team vs'];
        const teams = ['no team', 'blue', 'red'];
        if (data) {
          let info = {
            match: {
              id: +data.match.match_id,
              name: data.match.name,
              time: {
                start: data.match.start_time,
                end: data.match.end_time,
              }
            },
            games: []
          };
          for (let i = 0; i < data.games.length; i++) {
            let g = data.games[i];
            let obj = {
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
                }
              },
              mods: {
                id: +g.mods,
                name: await this.mods(g.mods)
              },
              scores: []
            };
            for (let ss = 0; ss < g.scores.length; ss++) {
              let s = g.scores[ss];
              let sobj = {
                team: {
                  id: +s.team,
                  id: teams[+s.team],
                },
                slot: +s.slot,
                user: {
                  id: +s.user_id
                },
                score: +s.score,
                combo: {
                  max: +s.maxcombo,
                  perfect: +s.perfect
                },
                hits: {
                  300: +s.count300,
                  geki: +s.countgeki,
                  100: +s.count100,
                  katu: +s.countkatu,
                  50: +s.count50,
                  0: +s.countmiss,
                },
                mods: {
                  id: +s.enabled_mods,
                  name: await mods(s.enabled_mods)
                },
                rank: g.rank,
                pass: g.pass,
              };
              obj.scores.push(sobj);
            };
            info.games.push(obj);
          };
          ex(info);
        } else ex([]);
      } catch (err) { console.log(`\n\nosu-api-ex | match => ${JSON.stringify(obj)}`, err, '\n\n'); }
    });
  }
  /**
  * Get replay
  * @param {Object} obj {\
  * b: "beatmap id",\
  * u: "User id or Username",\
  * m: "mode (0 = osu!, 1 = Taiko, 2 = CtB, 3 = osu!mania). Optional",\
  * mods: "mods id",\
  * type: "specify if u is a user_id or a username",\
  * }
  * @param {String} path path to folder. Optional, example: './replays'
  * @description \
  * mods: "mods that applies to the beatmap requested. Optional, default is 0. (Refer to the Mods section below, note that requesting multiple mods is supported, but it should not contain any non-difficulty-increasing mods or the return value will be invalid.)""\
  * \
  * type: "Use string for usernames or id for user_ids. Optional, default behaviour is automatic recognition (may be problematic for usernames made up of digits only)"
  */
  replay(obj, path) {
    return new Promise(async ex => {
      try {
        if (obj.b == null || obj.u == null || obj.mods == null) return ex('Missing parameters. Required: b (beatmap id), u (user id or name), mods (mods id)');
        if (fs.existsSync(path != undefined ? `${path}/${obj.b}-${obj.u}.osr` : `${obj.b}-${obj.u}.osr`)) ex('have');
        else {
          let data = await this.get(`http://osu.ppy.sh/api/get_replay?k=${this.key}`, obj);
          if (data != 0) {
            let dec = Buffer.from(data.content, data.encoding);
            let replay = new osr.Replay();
            replay.replay_data = lzma.decompress(dec);
            let map = await this.beatmap({ b: obj.b });
            let score = await this.scores({ b: obj.b, u: obj.u, mods: obj.mods });
            if (score) if (score[0].replay == 0) return ex('replay not available');
            replay.beatmapMD5 = map.diff.filter(m => parseInt(m.id) == parseInt(obj.b))[0].file_md5;
            replay.playerName = score[0].user.name;
            replay.number_300s = score[0].hits[300];
            replay.number_100s = score[0].hits[100];
            replay.number_50s = score[0].hits[50];
            replay.gekis = score[0].hits['geki'];
            replay.katus = score[0].hits['katu'];
            replay.misses = score[0].hits[0];
            replay.score = score[0].score.total;
            replay.max_combo = score[0].combo.max;
            replay.perfect_combo = score[0].combo.full;
            replay.mods = obj.mods;
            replay.timestamp = new Date(score[0].date);
            let replayFile = replay.serializeSync();
            fs.writeFileSync(path != undefined ? `${path}/${obj.b}-${obj.u}.osr` : `${obj.b}-${obj.u}.osr`, replayFile);
            ex(replayFile);
          } else ex({});
        };
      } catch (err) { console.log(`\n\nosu-api-ex | replay => ${JSON.stringify(obj)}`, err, '\n\n'); }
    });
  }
  /**
  * Get replay
  * @param {Object} b diff id
  * @param {String} path path to folder. Optional, example: './diffs'
  */
  diffFile(b, path) {
    return new Promise(async ex => {
      try {
        if (fs.existsSync(path != undefined ? `${path}/${b}.osu` : `${b}.osu`)) ex('have');
        else {
          let diff = await this.get(`https://osu.ppy.sh/osu/${b}`);
          fs.writeFileSync(path != undefined ? `${path}/${b}.osu` : `${b}.osu`, diff, 'utf-8');
          ex('done');
        };
      } catch (err) { console.log(`\n\nosu-api-ex | diffFile => ${b}`, err, '\n\n'); }
    });
  }
  /**
  * Calculate accuracy
  * @param {Number} h300 hits 300
  * @param {Number} h100 hits 100
  * @param {Number} h50 hits 50
  * @param {Number} h0 Misses
  * @param {Number} geki hits 300geki
  * @param {Number} katu hits 100katu
  * @param {Number} mode mode (0 = osu!, 1 = Taiko, 2 = CtB, 3 = osu!mania)
  */
  accuracy(h300, h100, h50, h0, geki, katu, mode) {
    try {
      let acc = 0.0;

      switch (mode) {
        case 1:
          acc = 100.0 * (2 * +h300 + +h100) / (2 * (+h300 + +h100 + +h0));
          break;
        case 2:
          acc = 100.0 * (+h300 + +h100 + +h50) / (+h300 + +h100 + +h50 + +katu + +h0);
          break;
        case 3:
          acc = 100.0 * (6 * +geki + 6 * +h300 + 4 * +katu + 2 * +h100 + +h50) / (6 * (+h50 + +h100 + +h300 + +h0 + +geki + +katu));
          break;
        default:
          acc = 100.0 * (6 * +h300 + 2 * +h100 + +h50) / (6 * (+h50 + +h100 + +h300 + +h0));
          break;
      }

      return acc.toFixed(2);
    } catch (err) { console.log(`\n\nosu-api-ex | accuracy`, err, '\n\n'); }
  }
  /**
  * Calculate mods
  * @param {Number|String} m Mods id or name
  */
  mods(m) {
    try {
      let mods = new Mods();
      if (isNaN(m)) return mods.name(m);
      else return mods.id(+m);
    } catch (err) { console.log(`\n\nosu-api-ex | mods`, err, '\n\n'); }
  }
  /**
  * Calculate mods
  * @param {Object} hits { geki, katu, 300, 100, 50, 0 }
  * @param {Number|String} m Mods id or name
  * @param {Number} mode Mode id
  */
  rank(hits, m, mode) {
    return new Promise(async ex => {
      try {
        let hdfl = isNaN(m) ? m.toLowerCase().indexOf('hd') > -1 ? true : m.toLowerCase().indexOf('fl') > -1 ? true : false : (await this.mods(m)).toLowerCase().indexOf('hd') > -1 ? true : (await this.mods(m)).toLowerCase().indexOf('fl') > -1 ? true : false;
        let params = {
          totalHits: 0,
          acc: 0.0,
          ratio300: 0,
          ratio50: 0,
          rank: ''
        };
        switch (mode) {
          case 0:
            params.totalHits = +hits[50] + +hits[100] + +hits[300] + +hits[0];
            params.acc = params.totalHits > 0 ? (+hits[50] * 50 + +hits[100] * 100 + +hits[300] * 300) / (params.totalHits * 300) : 1;
            params.ratio300 = +hits[300] / params.totalHits, params.ratio50 = +hits[50] / params.totalHits;

            if (params.ratio300 == 1) params.rank = hdfl == true ? 'XH' : 'X';
            else if (params.ratio300 > 0.9 && params.ratio50 <= 0.01 && hits[0] == 0) params.rank = hdfl == true ? 'SH' : 'S';
            else if ((params.ratio300 > 0.8 && hits[0] == 0) || params.ratio300 > 0.9) params.rank = 'A';
            else if ((params.ratio300 > 0.7 && hits[0] == 0) || params.ratio300 > 0.8) params.rank = 'B';
            else if (params.ratio300 > 0.6) params.rank = 'C';
            else params.rank = 'D';

            break;

          case 1:
            params.totalHits = +hits[50] + +hits[100] + +hits[300] + +hits[0];
            params.acc = params.totalHits > 0 ? (+hits[100] * 150 + +hits[300] * 300) / (params.totalHits * 300) : 1;
            params.ratio300 = +hits[300] / params.totalHits, params.ratio50 = +hits[50] / params.totalHits;

            if (params.ratio300 == 1) params.rank = hdfl == true ? 'XH' : 'X';
            else if (params.ratio300 > 0.9 && params.ratio50 <= 0.01 && hits[0] == 0) params.rank = hdfl == true ? 'SH' : 'S';
            else if ((params.ratio300 > 0.8 && hits[0] == 0) || params.ratio300 > 0.9) params.rank = 'A';
            else if ((params.ratio300 > 0.7 && hits[0] == 0) || params.ratio300 > 0.8) params.rank = 'B';
            else if (params.ratio300 > 0.6) params.rank = 'C';
            else params.rank = 'D';

            break;

          case 2:
            params.totalHits = +hits[50] + +hits[100] + +hits[300] + +hits[0] + +hits.katu;
            params.acc = params.totalHits > 0 ? (+hits[50] + +hits[100] + +hits[300]) / params.totalHits : 1;

            if (params.acc == 1) params.rank = hdfl == true ? 'XH' : 'X';
            else if (params.acc > 0.98) params.rank = hdfl == true ? 'SH' : 'S';
            else if (params.acc > 0.94) params.rank = 'A';
            else if (params.acc > 0.9) params.rank = 'B';
            else if (params.acc > 0.85) params.rank = 'C';
            else params.rank = 'D';

            break;

          case 3:
            params.totalHits = +hits[50] + +hits[100] + +hits[300] + +hits[0] + +hits.geki + +hits.katu;
            params.acc = params.totalHits > 0 ? (+hits[50] * 50 + +hits[100] * 100 + +hits.kati * 200 + (+hits[300] + hits.geki) * 300) / (params.totalHits * 300) : 1;

            if (params.acc == 1) params.rank = hdfl == true ? 'XH' : 'X';
            else if (params.acc > 0.95) params.rank = hdfl == true ? 'SH' : 'S';
            else if (params.acc > 0.9) params.rank = 'A';
            else if (params.acc > 0.8) params.rank = 'B';
            else if (params.acc > 0.7) params.rank = 'C';
            else params.rank = 'D';

            break;
        };
        ex(params.rank)
      } catch (err) { console.log(`\n\nosu-api-ex | rank`, err, '\n\n'); };
    });
  }
  /**
  * Get pp data
  * @param {Object} obj {\
  * id: "beatmap id",\
  * combo: "Combo",\
  * mods: "Mods id",\
  * acc: "Accuracy",\
  * miss: "Misscount",\
  * }
  */
  pp_calc(obj) {
    return new Promise(async ex => {
      try {
        let data = await this.get(`https://pp.osuck.net/pp`, obj, 1);
        ex(data);
      } catch (err) { console.log(`\n\nosu-api-ex | pp_calc => ${JSON.stringify(obj)}`, err, '\n\n'); }
    });
  }
  /**
  * Get pp data
  * @param {String} url
  * @param {Object} obj
  */
  get(url, obj, o) {
    return new Promise(async ex => {
      try {
        let { data } = await axios.get(url, { params: obj });
        ex((o == 1) ? data : data.length == 0 ? 0 : data);
      } catch (err) { console.log(`\n\nosu-api-ex | get => ${url}} ${JSON.stringify(obj)}`, err, '\n\n'); }
    });
  }
}

module.exports = Api;