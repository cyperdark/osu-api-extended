import { user_object } from "../../types/v1";
import { country } from "../../utility/tools";

const format = (data: any): user_object => {
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

  const info: user_object = {
    id: +data[0].user_id,
    name: data[0].username,
    pp: parseFloat(data[0].pp_raw),
    acc: parseFloat(data[0].accuracy),
    lvl: parseFloat(data[0].level),
    join: data[0].join_date,
    country: {
      flag: `https://osu.ppy.sh/images/flags/${data[0].country}.png`,
      short: data[0].country,
      full: country(data[0].country),
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

export default format;