import { scores_object } from "../../types/v1";
import { accuracy } from "../../utility/tools";
import { name } from "../../utility/mods";

const format = (data: any, mode: any): scores_object[] => {
  const info = [];

  for (let i = 0; i < data.length; i++) {
    const d = data[i];

    const score: scores_object = {
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
        name: name(+d.enabled_mods),
      },
      accuracy: accuracy(+d.count300, +d.countgeki, +d.count100, +d.countkatu, +d.count50, +d.countmiss, mode),
      pp: parseFloat(d.pp),
      replay: +d.replay_available,
    };

    info.push(score);
  };

  return info;
};

export default format;