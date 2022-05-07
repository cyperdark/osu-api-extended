import { accuracy } from "../../../../utility/tools/index";
import { name as mods_name } from "../../../../utility/mods";


const name = (data: any, mode: any) => {
  const info = [];

  for (let i = 0; i < data.length; i++) {
    const d = data[i];

    const score: any = {
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
        name: mods_name(+d.enabled_mods),
      },
      accuracy: 0,
      pp: parseFloat(d.pp),
      replay: +d.replay_available,
    };

    score.accuracy = accuracy(score.hits, mode);

    info.push(score);
  };

  return info;
};


export default name;