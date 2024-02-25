import { IDefaultParams } from "../../types";
import { download, request } from "../../utility/request";
import path from "path";
import fs from "fs";



type params = ({
  type: 'difficulty';

  id: number;
  host: 'osu' | 'osu_direct_mirror' | 'catboy';

  file_path: string;
  overwrite: boolean;

  progress_track_fn: (host: string, progress: number) => void;
} | {
  type: 'set';

  id: number;
  host: 'osu' | 'beatconnect' | 'chimu' | 'nerinyan' | 'osu_direct_mirror' | 'sayobot' | 'gatari' | 'ripple' | 'akatsuki' | 'catboy',

  file_path: string;
  no_video?: boolean;
  overwrite: boolean;

  progress_track_fn: (host: string, progress: number) => void;
});


const name = async <T extends params>(params: T, addons?: IDefaultParams): Promise<string | null> => {
  const { dir } = path.parse(params.file_path);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });


  if (fs.existsSync(params.file_path) && params.overwrite != true) {
    return 'exists';
  };


  const progress_track = (progress: number) => {
    params.progress_track_fn(params.host, progress);
  };


  let url = '';
  let headers: any = {
    accept: 'application/octet-stream',
  };


  if (params.type == 'set') {
    switch (params.host) {
      case 'chimu':
        url = `https://api.chimu.moe/v1/download/${params.id}`;
        break;

      case 'beatconnect':
        url = `https://beatconnect.io/b/${params.id}/`;
        break;

      case 'sayobot':
        url = `https://dl.sayobot.cn/beatmaps/download/${params.no_video ? 'novideo' : 'full'}/${params.id}`;
        break;

      // DOESNT WORK FOR SOME REASON
      case 'nerinyan':
        url = `https://api.nerinyan.moe/d/${params.id}${params.no_video ? '?nv=1' : ''}`;
        headers = {
          Accept: 'application/x-osu-beatmap-archive'
        };
        break;

      case 'osu_direct_mirror':
        url = `https://api.osu.direct/d/${params.id}`
        break;

      case 'gatari':
        url = `https://osu.gatari.pw/d/${params.id}`;
        headers['Referer'] = 'https://osu.gatari.pw/';
        break;

      case 'ripple':
        url = `https://storage.ripple.moe/d/${params.id}`;
        headers['Referer'] = 'https://ripple.moe/';
        break;

      case 'akatsuki':
        url = `https://akatsuki.gg/d/${params.id}`;
        headers['Referer'] = 'https://akatsuki.gg/';
        break;

      case 'catboy':
        url = `https://catboy.best/d/${params.id}`;
        headers['Referer'] = 'https://catboy.best/';
        break;

      case 'osu':
      default:
        url = `https://osu.ppy.sh/api/v2/beatmapsets/${params.id}/download${params.no_video ? '?noVideo=1' : ''}`;
        headers['Referer'] = 'https://osu.ppy.sh/';
        break;
    };


    const data = await download(url, params.file_path, {
      _callback: params.progress_track_fn != null,
      headers,
      callback: progress_track,
    });


    return data;
  } else if (params.type == 'difficulty') {
    switch (params.host) {
      case 'osu_direct_mirror':
        url = `https://api.osu.direct/osu/${params.id}?raw=true`
        break;

      case 'catboy':
        url = `https://catboy.best/osu/${params.id}`;
        headers['Referer'] = 'https://catboy.best/';
        break;

      default:
        url = `https://osu.ppy.sh/osu/${params.id}`;
        break;
    };


    const data = await download(url, params.file_path, {
      _callback: params.progress_track_fn != null,
      headers,
      callback: progress_track,
    });


    return data;
  };


  return `Unknown type: ${(params as any).type}`;
};


export default name;