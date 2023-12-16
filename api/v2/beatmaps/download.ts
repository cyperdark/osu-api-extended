import { download } from "../../../utility/request";


const name = async (obj: {
  from: 'osu' | 'beatconnect' | 'chimu' | 'nerinyan' | 'osu_direct_mirror' | 'sayobot' | 'gatari' | 'ripple' | 'akatsuki' | 'catboy',
  beatmapset_id: number;
  file_path: string;
  no_video?: boolean;
  progress_track_fn: (from: string, progress: number) => void;
}): Promise<any> => {
  let url = '';
  let headers: any = {
    accept: 'application/octet-stream',
  };

  const progress_track = (progress: number) => {
    obj.progress_track_fn(obj.from, progress);
  };

  switch (obj.from) {
    case 'chimu':
      url = `https://api.chimu.moe/v1/download/${obj.beatmapset_id}`;
      break;

    case 'beatconnect':
      url = `https://beatconnect.io/b/${obj.beatmapset_id}/`;
      break;

    case 'sayobot':
      url = `https://dl.sayobot.cn/beatmaps/download/${obj.no_video ? 'novideo' : 'full'}/${obj.beatmapset_id}`;
      break;

    // DOESNT WORK FOR SOME REASON
    // case 'nerinyan':
    //   url = `https://api.nerinyan.moe/d/${obj.beatmapset_id}${obj.no_video ? '?nv=1' : ''}`;
    //   headers = {
    //     accept: 'application/x-osu-beatmap-archive'
    //   };
    //   break;

    case 'osu_direct_mirror':
      url = `https://api.osu.direct/d/${obj.beatmapset_id}`
      break;

    case 'gatari':
      url = `https://osu.gatari.pw/d/${obj.beatmapset_id}`;
      headers['Referer'] = 'https://osu.gatari.pw/';
      break;

    case 'ripple':
      url = `https://storage.ripple.moe/d/${obj.beatmapset_id}`;
      headers['Referer'] = 'https://ripple.moe/';
      break;

    case 'akatsuki':
      url = `https://akatsuki.gg/d/${obj.beatmapset_id}`;
      headers['Referer'] = 'https://akatsuki.gg/';
      break;

    case 'catboy':
      url = `https://catboy.best/d/${obj.beatmapset_id}`;
      headers['Referer'] = 'https://catboy.best/';
      break;

    case 'osu':
    default:
      url = `https://osu.ppy.sh/api/v2/beatmapsets/${obj.beatmapset_id}/download${obj.no_video ? '?noVideo=1' : ''}`;
      headers['Referer'] = 'https://osu.ppy.sh/';
      break;
  };


  const data = await download(url, obj.file_path, {
    _callback: obj.progress_track_fn != null,
    headers,
    callback: progress_track,
  });
  return data;
};


export default name;