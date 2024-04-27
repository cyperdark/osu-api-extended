import { country_details } from "../../../../tools/index";


const parse = (num: string | number, amount: number) => parseFloat(Number(num).toFixed(amount))

const name = (data: any) => {
  const events = data[0].events.map((d: any) => {
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

  const info: any = {
    id: +data[0].user_id,
    name: data[0].username,
    pp: parse(data[0].pp_raw, 2),
    acc: parse(data[0].accuracy, 2),
    lvl: parse(data[0].level, 2),
    join: data[0].join_date,
    country: {
      flag: `https://osu.ppy.sh/images/flags/${data[0].country}.png`,
      short: data[0].country,
      full: country_details(data[0].country).name || '',
    },
    play: {
      count: +data[0].playcount,
      time: +data[0].total_seconds_played,
    },
    hits: {
      300: +data[0].count300,
      100: +data[0].count100,
      50: +data[0].count50,
    },
    score: {
      total: +data[0].total_score,
      ranked: +data[0].ranked_score,
    },
    rank: {
      global: +data[0].pp_rank,
      country: +data[0].pp_country_rank,
    },
    ranks: {
      ssh: +data[0].count_rank_ssh,
      ss: +data[0].count_rank_ss,
      sh: +data[0].count_rank_sh,
      s: +data[0].count_rank_s,
      a: +data[0].count_rank_a,
    },
    events,
  };

  return info;
};

export default name;