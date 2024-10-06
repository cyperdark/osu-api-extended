const languages: string[] = ['any', 'other', 'english', 'japanese', 'chinese', 'instrumental', 'korean', 'french', 'german', 'swedish', 'italian'];
const genres: string[] = ['any', 'unspecified', 'video game', 'anime', 'rock', 'pop', 'other', 'novelty', 'other', 'hip hop', 'electronic'];
const modes: string[] = ['std', 'taiko', 'ctb', 'mania'];

const status_name = (id: number) => {
  switch (id) {
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
      return 'undefined';
  }
};

const parse = (num: string | number, amount: number) => parseFloat(Number(num).toFixed(amount))

const name = (data: any) => {
  const result: any = [];

  for (let i = 0; i < data.length; i++) {
    const d = data[i];

    const info: any = {
      id: {
        set: +d.beatmapset_id,
        diff: +d.beatmap_id,
      },
      date: {
        submit: d.submit_date,
        approved: d.approved_date,
        update: d.last_update,
      },
      metadata: {
        artist: {
          original: d.artist,
          unicode: d.artist_unicode,
        },
        title: {
          original: d.title,
          unicode: d.title_unicode,
        },
        creator: {
          id: +d.creator_id,
          name: d.creator,
        },
        favs: +d.favourite_count,
        rating: parseFloat(Number(d.rating).toFixed(2)),
        source: d.source,
        genre_id: {
          id: +d.genre_id,
          name: genres[+d.genre_id],
        },
        language_id: {
          id: +d.language_id,
          name: languages[+d.genre_id],
        },
        tags: d.tags,
      },
      status: {
        id: +d.approved,
        name: status_name(+d.approved),
      },
      difficulties: [],
      misc: {
        download_unavailable: !!d.download_unavailable,
        audio_unavailable: !!d.audio_unavailable,
        storyboard: !!d.storyboard,
        video: !!d.video,
        packs: d.packs,
        bg: {
          full: `https://assets.ppy.sh/beatmaps/${d.beatmapset_id}/covers/fullsize.jpg`,
          raw: `https://assets.ppy.sh/beatmaps/${d.beatmapset_id}/covers/raw.jpg`,
          slim: {
            1: `https://assets.ppy.sh/beatmaps/${d.beatmapset_id}/covers/slimcover.jpg`,
            2: `https://assets.ppy.sh/beatmaps/${d.beatmapset_id}/covers/slimcover@2x.jpg`,
          },
          cover: {
            1: `https://assets.ppy.sh/beatmaps/${d.beatmapset_id}/covers/cover.jpg`,
            2: `https://assets.ppy.sh/beatmaps/${d.beatmapset_id}/covers/cover@2x.jpg`,
          },
          card: {
            1: `https://assets.ppy.sh/beatmaps/${d.beatmapset_id}/covers/card.jpg`,
            2: `https://assets.ppy.sh/beatmaps/${d.beatmapset_id}/covers/card@2x.jpg`,
          },
          list: {
            1: `https://assets.ppy.sh/beatmaps/${d.beatmapset_id}/covers/list.jpg`,
            2: `https://assets.ppy.sh/beatmaps/${d.beatmapset_id}/covers/list@2x.jpg`,
          },
        },
      },
    };

    const obj = {
      id: +d.beatmap_id,
      diff: d.version,
      mode: {
        id: +d.mode,
        name: modes[+d.mode],
      },
      file_md5: d.file_md5,
      stats: {
        star: {
          pure: parse(d.difficultyrating, 2),
          aim: parse(d.diff_aim, 2),
          speed: parse(d.diff_speed, 2),
        },
        ar: parse(d.diff_approach, 2),
        od: parse(d.diff_overall, 2),
        cs: parse(d.diff_size, 2),
        hp: parse(d.diff_drain, 2),
        bpm: {
          avg: +d.bpm,
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
    };

    const find = result.find((r: any) => r.id.set == d.beatmapset_id);

    if (find) find.difficulties.push(obj);
    else {
      info.difficulties.push(obj);
      result.push(info);
    };
  };

  return result;
};

export default name;