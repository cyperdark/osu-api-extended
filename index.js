const axios = require("axios");
const Country = require("./src/Country");
const Mods = require("./src/Mods");

class Api {
  constructor() {
    this.key = "";
  }

  /**
   * Get beatmap data
   * @param {Object} obj
   * @description `
    return all beatmaps ranked or loved since this date. Must be a MySQL date. In UTC"
    --Object params--
    s: "beatmapset id",
    b: "beatmap id",
    u: "User id or Username",
    type: "specify if u is a user_id or a username. Use string for usernames or id for user_ids. Optional, default behaviour is automatic recognition (may be problematic for usernames made up of digits only)",
    m: "mode (0 = osu!, 1 = Taiko, 2 = CtB, 3 = osu!mania). Optional",
    a: "include converted beatmaps? (0 = not included, 1 = included). Only has an effect if m is chosen and not 0. Optional, default: 0",
    h: "beatmap hash (example of hash: a5b99395a42bd55bc5eb1d2411cbdf8b). Optional",
    limit: "amount of results. Optional, default and maximum are 500",
    mods: "mods that applies to the beatmap requested. Optional, default is 0. (Refer to the Mods section below, note that requesting multiple mods is supported, but it should not contain any non-difficulty-increasing mods or the return value will be invalid.)",
   * `
   * @return {Object}
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
              artist: data[0].artist,
              title: data[0].title,
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
              download_unavailable: !!data.download_unavailable,
              audio_unavailable: !!data.audio_unavailable,
              storyboard: !!data.storyboard,
              video: !!data.video,
              packs: data.packs,
              bg: {
                slim: {
                  1: `https://assets.ppy.sh/beatmaps/${data.beatmapset_id}/covers/slimcover.jpg`,
                  2: `https://assets.ppy.sh/beatmaps/${data.beatmapset_id}/covers/slimcover@2x.jpg`,
                },
                cover: {
                  1: `https://assets.ppy.sh/beatmaps/${data.beatmapset_id}/covers/cover.jpg`,
                  2: `https://assets.ppy.sh/beatmaps/${data.beatmapset_id}/covers/cover@2x.jpg`,
                },
                card: {
                  1: `https://assets.ppy.sh/beatmaps/${data.beatmapset_id}/covers/card.jpg`,
                  2: `https://assets.ppy.sh/beatmaps/${data.beatmapset_id}/covers/card@2x.jpg`,
                },
                list: {
                  1: `https://assets.ppy.sh/beatmaps/${data.beatmapset_id}/covers/list.jpg`,
                  2: `https://assets.ppy.sh/beatmaps/${data.beatmapset_id}/covers/list@2x.jpg`,
                },
              }
            }
          };

          if (data.length == 1) 
            info.id.diff = +data.beatmap_id;

          data.forEach(d => {
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
                bpm: +d.bpm,
                combo: +d.max_combo,
                time: {
                  full: parseInt(d.total_length),
                  drain: parseInt(d.hit_length),
                },
                objects: {
                  all: +d.count_normal + d.count_slider + d.count_spinner,
                  circles: +d.count_normal,
                  sliders: +d.count_slider,
                  spinners: +d.count_spinner,
                },
              },
              plays: +d.playcount,
              pass: +d.passcount,
            });
          })
          ex(info);
        } else ex({});
      } catch (err) { console.log(`\n\nosu-api-ex | beatmap => ${JSON.stringify(obj)}`, err, '\n\n'); }
    });

    this.user
  }
  /**
   * Get user data
   * @param {Object} obj
   * @return {Object}
   * @description `
    --Object params--
    u: "User id or Username",
    m: "mode (0 = osu!, 1 = Taiko, 2 = CtB, 3 = osu!mania). Optional, default: 0",
    type: "specify if u is a user_id or a username. Use string for usernames or id for user_ids. Optional, default behaviour is automatic recognition (may be problematic for usernames made up of digits only)",
    event_days: "Range of 1-31. Optional, default: 1",
   * `
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
              full: await new Country(data.country),
            },
            play: {
              count: +data.playcount,
              time: parseInt(data.total_seconds_played),
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
   * @param {Object} obj
   * @return {Object}
   * @description `
    --Object params--
    b: "beatmap id",
    u: "User id or Username",
    m: "mode (0 = osu!, 1 = Taiko, 2 = CtB, 3 = osu!mania). Optional, default: 0",
    mods: "Mods id",
    type: "specify if u is a user_id or a username. Use string for usernames or id for user_ids. Optional, default behaviour is automatic recognition (may be problematic for usernames made up of digits only)",
    limit: "amount of results from the top (range between 1 and 100 - defaults to 50)",
   * `
   */
  scores(obj) {
    let {
      accuracy,
      mods
    } = this;

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
        } else ex({});
      } catch (err) { console.log(`\n\nosu-api-ex | scores => ${JSON.stringify(obj)}`, err, '\n\n'); }
    });
  }
  /**
   * Get best scores
   * @param {Object} obj
   * @return {Object}
   * @description `
    --Object params--
    u: "User id or Username",
    m: "mode (0 = osu!, 1 = Taiko, 2 = CtB, 3 = osu!mania). Optional, default: 0",
    limit: "amount of results (range between 1 and 100 - defaults to 10)",
    type: "specify if u is a user_id or a username. Use string for usernames or id for user_ids. Optional, default behavior is automatic recognition (may be problematic for usernames made up of digits only)",
   * `
   */
  best(obj) {
    let {
      accuracy,
      mods
    } = this;

    return new Promise(async ex => {
      try {
        let data = await this.get(`http://osu.ppy.sh/api/get_user_best?k=${this.key}`, obj);
        if (data) {
          Promise.all(data.map(async d => {
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
        } else ex({});
      } catch (err) { console.log(`\n\nosu-api-ex | best => ${JSON.stringify(obj)}`, err, '\n\n'); }
    });
  }
  /**
   * Get recent scores
   * @param {Object} obj
   * @return {Object}
   * @description `
    --Object params--
    u: "User id or Username",
    m: "mode (0 = osu!, 1 = Taiko, 2 = CtB, 3 = osu!mania). Optional, default: 0",
    limit: "amount of results (range between 1 and 50 - defaults to 10)",
    type: "specify if u is a user_id or a username. Use string for usernames or id for user_ids. Optional, default behavior is automatic recognition (may be problematic for usernames made up of digits only)",
   * `
   */
  recent(obj) {
    let { mods } = this;

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
            };
          }));
          ex(info.reverse());
        } else ex({});
      } catch (err) { console.log(`\n\nosu-api-ex | recent => ${JSON.stringify(obj)}`, err, '\n\n'); }
    });
  }
  /**
   * Calculate accuracy
   * @param {null|Number|Boolean|String} h300
   * @param {null|Number|Boolean|String} h100
   * @param {null|Number|Boolean|String} h50
   * @param {null|Number|Boolean|String} h0
   * @param {null|Number|Boolean|String} geki
   * @param {null|Number|Boolean|String} katu
   * @param {null|Number|Boolean|String} mode
   * @return {Number}
   * @description `
    h300: "hits 300",
    h100: "hits 100",
    h50: "hits 50",
    h0: "Misses",
    geki: "hits 300geki",
    katu: "hits 100katu",
    mode: "mode (0 = osu!, 1 = Taiko, 2 = CtB, 3 = osu!mania)",
   * `
   */
  accuracy(h300, h100, h50, h0, geki, katu, mode) {
    try {
      let 
        p300  = +h300, 
        p100  = +h100, 
        p50   = +h50, 
        p0    = +h0, 
        pgeki = +geki, 
        pkatu = +katu,
        acc   = 0.0;

      switch (mode) {
        case 1:
          acc = 100.0 * (2 * p300 + p100) / (2 * (p300 + p100 + p0));
          break;
        case 2:
          acc = 100.0 * (p300 + p100 + p50) / (p300 + p100 + p50 + pkatu + p0);
          break;
        case 3:
          acc = 100.0 * (6 * pgeki + 6 * p300 + 4 * pkatu + 2 * p100 + p50) / (6 * (p50 + p100 + p300 + p0 + pgeki + pkatu));
          break;
        default:
          acc = 100.0 * (6 * p300 + 2 * p100 + p50) / (6 * (p50 + p100 + p300 + p0));
          break;
      }

      return acc.toFixed(2);
    } catch (err) { console.log(`\n\nosu-api-ex | accuracy`, err, '\n\n'); }
  }
  /**
   * Calculate mods
   * @param {null|Number|Boolean|String} m
   * @return {Number|String}
   */
  mods(m) {
    try {
      let mods = new Mods();
      if (!m) 
        return mods.name(m);
      else 
        return mods.id(parseInt(m));
    } catch (err) { console.log(`\n\nosu-api-ex | mods`, err, '\n\n'); }
  }
  /**
   * Get pp data
   * @param {Object} obj
   * @return {Object}
   * @description `
    --Object params--
    id: "beatmap id",
    combo: "Combo",
    mods: "Mods id",
    acc: "Accuracy",
    miss: "Misscount",e. Use string for usernames or id for user_ids. Optional, default behavior is automatic recognition (may be problematic for usernames made up of digits only)",
   * `
   */
  pp_calc(obj) {
    return new Promise(async ex => {
      try {
        let data = await this.get(`https://ppv3.glitch.me`, obj, 1);
        ex(data);
      } catch (err) { console.log(`\n\nosu-api-ex | pp_calc => ${JSON.stringify(obj)}`, err, '\n\n'); }
    });
  }
  /**
   * Get pp data
   * @param {String} url
   * @param {Object} obj
   * @return {Object}
   */
  get(url, obj, o) {
    return new Promise(async ex => {
      try {
        let { data } = await axios.get(url, { params: obj });
        ex((o == 1) ? data : (data.length == 0) ? 0 : data);
      } catch (err) { console.log(`\n\nosu-api-ex | get => ${JSON.stringify(obj)}`, err, '\n\n'); }
    });
  }
}

module.exports = Api;