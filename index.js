const axios = require("axios");
const Mods = require("./src/mods");
const Country = require("./src/country");

class Api {
  constructor() {
    this.api = ""
  };

  async beatmap(obj) {
    return new Promise(async ex => {
      try {
        let data = await this.get(`http://osu.ppy.sh/api/get_beatmaps?k=${this.api}`, obj);
        if (data != 0) {
          let info = {
            id: { set: parseInt(data[0].beatmapset_id) },
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
          };
          (data.length == 1) ? info.id.diff = parseInt(data[0].beatmap_id) : '';
          for (let i = 0; i < data.length; i++) {
            let d = data[i];
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
            });
          };
          ex(info);
        } else ex(`api return 0 nothing`);
      } catch (err) { console.log(`\n\nosu-api-ex | beatmap => ${JSON.stringify(obj)}`, err, '\n\n') };
    });
  };

  async user(obj) {
    return new Promise(async ex => {
      try {
        let data = await this.get(`http://osu.ppy.sh/api/get_user?k=${this.api}`, obj);
        let events = [];
        if (data != 0) {
          for (let i = 0; i < data[0].events.length; i++) {
            let d = data[0].events[i];
            let re = new RegExp(Object.keys(mapObj).join("|"), "gi");
            let pure = d.display_html.replace(re, function (matched) { return mapObj[matched]; });
            events.push({
              display: {
                html: d.display_html,
                pure,
              },
              id: {
                diff: parseInt(d.beatmap_id),
                set: parseInt(d.beatmapset_id),
              },
              date: d.date,
              epicfactor: parseInt(d.epicfactor),
            });
          };
          let info = {
            id: parseInt(data[0].user_id),
            name: data[0].username,
            pp: data[0].pp_raw,
            acc: data[0].accuracy,
            lvl: data[0].level,
            join: data[0].join_date,
            country: {
              flag: `https://osu.ppy.sh/images/flags/${data[0].country}.png`,
              short: data[0].country,
              full: await Country(data[0].country),
            },
            play: {
              count: parseInt(data[0].playcount),
              time: parseInt(data[0].total_seconds_played),
            },
            hits: {
              300: parseInt(data[0].count300),
              100: parseInt(data[0].count100),
              50: parseInt(data[0].count50),
            },
            score: {
              total: parseInt(data[0].total_score),
              ranked: parseInt(data[0].ranked_score),
            },
            rank: {
              global: parseInt(data[0].pp_rank),
              country: parseInt(data[0].pp_country_rank),
            },
            ranks: {
              ssh: parseInt(data[0].count_rank_ssh),
              ss: parseInt(data[0].count_rank_ss),
              sh: parseInt(data[0].count_rank_sh),
              s: parseInt(data[0].count_rank_s),
              a: parseInt(data[0].count_rank_a),
            },
            events
          };
          ex(info);
        } else ex(`api return 0 nothing`);
      } catch (err) { console.log(`\n\nosu-api-ex | user => ${JSON.stringify(obj)}`, err, '\n\n') };
    });
  };

  async scores(obj) {
    return new Promise(async ex => {
      try {
        let data = await this.get(`http://osu.ppy.sh/api/get_scores?k=${this.api}`, obj);
        if (data != 0) {
          let info = [];
          for (let i = 0; i < data.length; i++) {
            let d = data[i];
            info.push({
              date: d.date,
              rank: d.rank,
              user: {
                id: parseInt(d.user_id),
                name: d.username,
              },
              score: {
                id: parseInt(d.score_id),
                total: parseInt(d.score)
              },
              combo: {
                max: parseInt(d.maxcombo),
                full: parseInt(d.perfect)
              },
              hits: {
                300: parseInt(d.count300),
                geki: parseInt(d.countgeki),
                100: parseInt(d.count100),
                katu: parseInt(d.countkatu),
                50: parseInt(d.count50),
                0: parseInt(d.countmiss),
              },
              mods: {
                id: parseInt(d.enabled_mods),
                name: Mods(d.enabled_mods)
              },
              accuracy: await this.accuracy(d.count300, d.count100, d.count50, d.countmiss, d.countgeki, d.countkatu, (obj.m) ? obj.m : 0),
              pp: d.pp,
              replay: parseInt(d.replay_available)
            });
          };
          ex(info);
        } else ex(`api return nothing`);
      } catch (err) { console.log(`\n\nosu-api-ex | scores => ${JSON.stringify(obj)}`, err, '\n\n') };
    });
  };

  async best(obj) {
    return new Promise(async ex => {
      try {
        let data = await this.get(`http://osu.ppy.sh/api/get_user_best?k=${this.api}`, obj);
        if (data != 0) {
          let info = [];
          for (let i = 0; i < data.length; i++) {
            let d = data[i];
            info.push({
              date: d.date,
              rank: d.rank,
              user: parseInt(d.user_id),
              bmid: parseInt(d.beatmap_id),
              score: {
                id: parseInt(d.score_id),
                total: parseInt(d.score)
              },
              combo: {
                max: parseInt(d.maxcombo),
                full: parseInt(d.perfect)
              },
              hits: {
                300: parseInt(d.count300),
                geki: parseInt(d.countgeki),
                100: parseInt(d.count100),
                katu: parseInt(d.countkatu),
                50: parseInt(d.count50),
                0: parseInt(d.countmiss),
              },
              mods: {
                id: parseInt(d.enabled_mods),
                name: Mods(d.enabled_mods)
              },
              accuracy: await this.accuracy(d.count300, d.count100, d.count50, d.countmiss, d.countgeki, d.countkatu, (obj.m) ? obj.m : 0),
              pp: d.pp,
              replay: parseInt(d.replay_available)
            });
          };
          ex(info);
        } else ex(`api return 0 nothing`);
      } catch (err) { console.log(`\n\nosu-api-ex | best => ${JSON.stringify(obj)}`, err, '\n\n') };
    });
  };

  async recent(obj) {
    return new Promise(async ex => {
      try {
        let data = await this.get(`http://osu.ppy.sh/api/get_user_recent?k=${this.api}`, obj);
        if (data != 0) {
          let info = [];
          for (let i = 0; i < data.length; i++) {
            let d = data[i];
            info.push({
              date: d.date,
              rank: d.rank,
              id: {
                user: parseInt(d.user_id),
                diff: parseInt(d.beatmap_id),
              },
              score: parseInt(d.score),
              combo: {
                max: parseInt(d.maxcombo),
                full: parseInt(d.perfect)
              },
              hits: {
                300: parseInt(d.count300),
                geki: parseInt(d.countgeki),
                100: parseInt(d.count100),
                katu: parseInt(d.countkatu),
                50: parseInt(d.count50),
                0: parseInt(d.countmiss),
              },
              mods: {
                id: parseInt(d.enabled_mods),
                name: Mods(d.enabled_mods)
              },
            });
          };
          ex(info.reverse());
        } else ex(`api return 0 nothing`);
      } catch (err) { console.log(`\n\nosu-api-ex | recent => ${JSON.stringify(obj)}`, err, '\n\n') };
    });
  };

  async accuracy(h300, h100, h50, h0, geki, katu, mode) {
    return new Promise(async ex => {
      try {
        let p300 = parseInt(h300), p100 = parseInt(h100), p50 = parseInt(h50), p0 = parseInt(h0), pgeki = parseInt(geki), pkatu = parseInt(katu);
        let acc = 0.0;
        if (mode === 0) acc = 100.0 * (6 * p300 + 2 * p100 + p50) / (6 * (p50 + p100 + p300 + p0));
        else if (mode === 1) acc = 100.0 * (2 * p300 + p100) / (2 * (p300 + p100 + p0));
        else if (mode === 2) acc = 100.0 * (p300 + p100 + p50) / (p300 + p100 + p50 + pkatu + p0);
        else acc = 100.0 * (6 * pgeki + 6 * p300 + 4 * pkatu + 2 * p100 + p50) / (6 * (p50 + p100 + p300 + p0 + pgeki + pkatu));
        ex(acc.toFixed(2));
      } catch (err) { console.log(`\n\nosu-api-ex | accuracy`, err, '\n\n') };
    });
  };

  async pp_calc(obj) {
    return new Promise(async ex => {
      try {
        let data = await this.get(`https://ppv3.glitch.me`, obj, 1);
        ex(data);
      } catch (err) { console.log(`\n\nosu-api-ex | pp_calc => ${JSON.stringify(obj)}`, err, '\n\n') };
    });
  };

  async get(url, obj, o) {
    return new Promise(async ex => {
      try {
        let axi = await axios.get(url, { params: obj });
        ex((o == 1) ? axi.data : (axi.data.length == 0) ? 0 : axi.data);
      } catch (err) { console.log(`\n\nosu-api-ex | get => ${JSON.stringify(obj)}`, err, '\n\n') };
    });
  };
};

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

module.exports = Api;