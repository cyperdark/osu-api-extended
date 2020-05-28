const axios = require("axios");
const fs = require("fs");
const path = require("path");
const Mods = require("./mods");

class Api {
  constructor(api) {
    this.api = ""
  };

  async bms(obj) {
    return new Promise(async ex => {
      let get = this.get(`http://osu.ppy.sh/api/get_beatmaps?k=${this.api}`, obj);
      let data = await get;
      let info = {
        id: {
          set: parseInt(data[0].beatmapset_id),
        },
        date: {
          submit: data[0].submit_date,
          approved: data[0].approved_date,
          update: data[0].last_update,
        },
        data: {
          artist: data[0].artist,
          title: data[0].title,
          creator: {
            id: parseInt(data[0].creator_id),
            name: data[0].creator,
          },
          favs: parseInt(data[0].favourite_count),
          rating: Number(data[0].rating).toFixed(2),
          source: data[0].source,
          genre_id: {
            id: parseInt(data[0].genre_id),
            name: (data[0].genre_id == 0) ? 'any' : (data[0].genre_id == 1) ? 'unspecified' : (data[0].genre_id == 2) ? 'video game' : (data[0].genre_id == 3) ? 'anime' : (data[0].genre_id == 4) ? 'rock' : (data[0].genre_id == 5) ? 'pop' : (data[0].genre_id == 6) ? 'other' : (data[0].genre_id == 7) ? 'novelty' : (data[0].genre_id == 9) ? 'hip hop' : (data[0].genre_id == 10) ? 'electronic' : 'else',
          },
          language_id: {
            id: parseInt(data[0].language_id),
            name: (data[0].language_id == 0) ? 'any' : (data[0].language_id == 1) ? 'other' : (data[0].language_id == 2) ? 'english' : (data[0].language_id == 3) ? 'japanese' : (data[0].language_id == 4) ? 'chinese' : (data[0].language_id == 5) ? 'instrumental' : (data[0].language_id == 6) ? 'korean' : (data[0].language_id == 7) ? 'french' : (data[0].language_id == 8) ? 'german' : (data[0].language_id == 9) ? 'swedish' : (data[0].language_id == 10) ? 'spanish' : (data[0].language_id == 11) ? 'italian' : 'else',
          },
          tags: data[0].tags,
        },
        status: {
          id: parseInt(data[0].approved),
          name: (data[0].approved == 4) ? 'loved' : (data[0].approved == 3) ? 'qualified' : (data[0].approved == 2) ? 'approved' : (data[0].approved == 1) ? 'ranked' : (data[0].approved == 0) ? 'pending' : (data[0].approved == -1) ? 'WIP' : (data[0].approved == -2) ? 'graveyard' : 'else',
        },
        diff: [],
        other: {
          download_unavailable: parseInt(data[0].download_unavailable),
          audio_unavailable: parseInt(data[0].audio_unavailable),
          storyboard: parseInt(data[0].storyboard),
          video: parseInt(data[0].video),
          packs: data[0].packs,
          bg: {
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
      }
      if (data.length == 1) {
        info.id.diff = parseInt(data[0].beatmap_id);
        info.diff = [{
          id: parseInt(data[0].beatmap_id),
          diff: data[0].version,
          mode: {
            id: parseInt(data[0].mode),
            name: (data[0].mode == "0") ? 'std' : (data[0].mode == "1") ? 'taiko' : (data[0].mode == "2") ? 'ctb' : (data[0].mode == "3") ? 'mania' : 'None',
          },
          file_md5: data[0].file_md5,
          stats: {
            star: {
              pure: Number(data[0].difficultyrating).toFixed(2),
              aim: Number(data[0].diff_aim).toFixed(2),
              speed: Number(data[0].diff_speed).toFixed(2),
            },
            ar: Number(data[0].diff_approach).toFixed(2),
            od: Number(data[0].diff_overall).toFixed(2),
            cs: Number(data[0].diff_size).toFixed(2),
            hp: Number(data[0].diff_drain).toFixed(2),
            bpm: parseInt(data[0].bpm),
            combo: parseInt(data[0].max_combo),
            time: {
              full: parseInt(data[0].total_length),
              drain: parseInt(data[0].hit_length),
            },
            objects: {
              all: parseInt(data[0].count_normal) + parseInt(data[0].count_slider) + parseInt(data[0].count_spinner),
              circles: parseInt(data[0].count_normal),
              sliders: parseInt(data[0].count_slider),
              spinners: parseInt(data[0].count_spinner),
            },
          },
          plays: parseInt(data[0].playcount),
          pass: parseInt(data[0].passcount)
        }];
        ex(info);
      } else {
        data.forEach((d, ind, arr) => {
          info.diff.push({
            id: parseInt(d.beatmap_id),
            diff: d.version,
            mode: {
              id: parseInt(d.mode),
              name: (d.mode == "0") ? 'std' : (d.mode == "1") ? 'taiko' : (d.mode == "2") ? 'ctb' : (d.mode == "3") ? 'mania' : 'None',
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
              bpm: parseInt(d.bpm),
              combo: parseInt(d.max_combo),
              time: {
                full: parseInt(d.total_length),
                drain: parseInt(d.hit_length),
              },
              objects: {
                all: parseInt(d.count_normal) + parseInt(d.count_slider) + parseInt(d.count_spinner),
                circles: parseInt(d.count_normal),
                sliders: parseInt(d.count_slider),
                spinners: parseInt(d.count_spinner),
              },
            },
            plays: parseInt(d.playcount),
            pass: parseInt(d.passcount),
          })
        });
        ex(info);
      };
    });
  };

  async user(obj) {
    return new Promise(async ex => {
      let get = this.get(`http://osu.ppy.sh/api/get_user?k=${this.api}`, obj);
      let data = await get;
      let events = []
      data[0].events.forEach((i, ind, arr) => {
        let mapObj = {
          "<img src='/images/": "",
          "_small.png'/>": "",
          "<b><a href='": "",
          "'>": " ",
          "</a></b>": "",
          "<b>": "",
          "</b>": "",
          "<a href='": "",
          "</a>": "",
        };
        let re = new RegExp(Object.keys(mapObj).join("|"), "gi");
        let pure = i.display_html.replace(re, function (matched) { return mapObj[matched]; });
        events.push({
          display: {
            html: i.display_html,
            pure,
          },
          id: {
            diff: i.beatmap_id,
            set: i.beatmapset_id,
          },
          date: i.date,
          epicfactor: i.epicfactor,
        });
      });
      let info = {
        id: data[0].user_id,
        name: data[0].username,
        pp: data[0].pp_raw,
        acc: data[0].accuracy,
        lvl: data[0].level,
        join: data[0].join_date,
        country: {
          flag: `https://osu.ppy.sh/images/flags/${data[0].country}.png`,
          short: data[0].country,
          full: await country(data[0].country),
        },
        play: {
          count: data[0].playcount,
          time: data[0].total_seconds_played,
        },
        hits: {
          300: data[0].count300,
          100: data[0].count100,
          50: data[0].count50,
        },
        score: {
          total: data[0].total_score,
          ranked: data[0].ranked_score,
        },
        rank: {
          global: data[0].pp_rank,
          country: data[0].pp_country_rank,
        },
        ranks: {
          ssh: data[0].count_rank_ssh,
          ss: data[0].count_rank_ss,
          sh: data[0].count_rank_sh,
          s: data[0].count_rank_s,
          a: data[0].count_rank_a,
        },
        events
      };
      ex(info);
    });
  };

  async scores(obj) {
    return new Promise(async ex => {
      let get = this.get(`http://osu.ppy.sh/api/get_scores?k=${this.api}`, obj);
      let data = await get;
      let info = {
        date: data[obj.i].date,
        rank: data[obj.i].rank,
        user: {
          id: data[obj.i].user_id,
          name: data[obj.i].username,
        },
        score: {
          id: data[obj.i].score_id,
          total: data[obj.i].score
        },
        combo: {
          max: data[obj.i].maxcombo,
          full: data[obj.i].perfect
        },
        hits: {
          300: data[obj.i].count300,
          geki: data[obj.i].countgeki,
          100: data[obj.i].count100,
          katu: data[obj.i].countkatu,
          50: data[obj.i].count50,
          0: data[obj.i].countmiss,
        },
        mods: {
          id: data[obj.i].enabled_mods,
          name: Mods(data[obj.i].enabled_mods)
        },
        pp: data[obj.i].pp,
        replay: data[obj.i].replay_available
      };
      ex(info);
    });
  };

  async best(obj) {
    return new Promise(async ex => {
      let get = this.get(`http://osu.ppy.sh/api/get_user_best?k=${this.api}`, obj);
      let data = await get;
      let info = [];
      data.forEach((i, ind, arr) => {
        info.push({
          date: i.date,
          rank: i.rank,
          user: i.user_id,
          bmid: i.beatmap_id,
          score: {
            id: i.score_id,
            total: i.score
          },
          combo: {
            max: i.maxcombo,
            full: i.perfect
          },
          hits: {
            300: i.count300,
            geki: i.countgeki,
            100: i.count100,
            katu: i.countkatu,
            50: i.count50,
            0: i.countmiss,
          },
          mods: {
            id: i.enabled_mods,
            name: Mods(i.enabled_mods)
          },
          pp: i.pp,
          replay: i.replay_available
        });
      });
      ex(info);
    });
  };

  async recent(obj) {
    return new Promise(async ex => {
      let get = this.get(`http://osu.ppy.sh/api/get_user_recent?k=${this.api}`, obj);
      let data = await get;
      let info = [];
      data.forEach((i, ind, arr) => {
        info.push({
          date: i.date,
          rank: i.rank,
          id: {
            user: i.user_id,
            diff: i.beatmap_id,
          },
          score: i.score,
          combo: {
            max: i.maxcombo,
            full: i.perfect
          },
          hits: {
            300: i.count300,
            geki: i.countgeki,
            100: i.count100,
            katu: i.countkatu,
            50: i.count50,
            0: i.countmiss,
          },
          mods: {
            id: i.enabled_mods,
            name: Mods(i.enabled_mods)
          },
        });
      });
      ex(info);
    });
  };

  async calc(obj) {
    return new Promise(async ex => {
      let get = this.get(`https://ppv3.glitch.me`, obj);
      let data = await get;
      ex(data);
    });
  };

  async get(url, obj) {
    return new Promise(async ex => {
      let axi = await axios(url, { params: obj });
      ex(axi.data);
    });
  };
};

async function country(id) {
  try {
    let json = fs.readFileSync(path.join(__dirname, 'flags.json'), "utf-8");
    let parse = JSON.parse(json);
    let res = parse.filter(f => f.flag == id);
    return res[0].country;
  } catch (err) { console.log("api/country", err); };
};

module.exports = Api;