import { calculate_accuracy, calculate_mods } from "../../../../tools/index";


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
        name: calculate_mods(+d.enabled_mods).name || '',
      },
      accuracy: 0,
      pp: parseFloat(d.pp),
      replay: +d.replay_available,
    };

    score.accuracy = calculate_accuracy(score.hits, mode).accuracy || 0;

    info.push(score);
  };

  return info;
};


export default name;