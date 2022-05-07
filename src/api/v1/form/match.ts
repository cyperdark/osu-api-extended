import { name as mods_name } from "../../../utility/mods";

const modes = ['std', 'taiko', 'ctb', 'mania'];
const scoring = ['Score', 'Accuracy', 'Combo', 'Score v2'];
const team = ['Head to head', 'Tag Co-op', 'Team vs', 'Tag Team vs'];
const teams = ['no team', 'blue', 'red'];

const name = (data: any) => {  
  const match: any = {
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
    const game: any = {
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
        name: mods_name(+g.mods),
      },
      scores: [],
    };

    for (let s = 0; s < g.scores.length; s++) {
      const ss = g.scores[s];

      const score: any = {
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
          name: mods_name(+ss.enabled_mods),
        },
        rank: g.rank,
        pass: g.pass,
      };
      game.scores.push(score);
    };

    match.games.push(game);
  };

  return match;
};


export default name;