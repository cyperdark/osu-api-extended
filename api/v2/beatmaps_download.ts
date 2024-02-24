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


const name = <T extends params>(params: T, addons: IDefaultParams): Promise<string | null> => new Promise((resolve, reject) => {
  const { dir } = path.parse(params.file_path);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });


  if (fs.existsSync(params.file_path) && params.overwrite != true) {
    return {
      type: 'exists',
      path: params.file_path,
    };
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


    return download(url, {
      _callback: params.progress_track_fn != null,
      headers,
      addons: addons,
      callback: progress_track,
    })
      .then((result: any) => {
        if (result.error) return resolve(result.error);

        fs.writeFile(params.file_path, result.result, 'utf8', (err) => {
          if (err) return reject(err);

          resolve(params.file_path);
        });
      })
      .catch(reject);
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

    return download(url, {
      _callback: params.progress_track_fn != null,
      headers,
      addons: addons,
      callback: progress_track,
    })
      // return request(url, { method: "GET" })
      .then((result: any) => {
        if (result.error) return resolve(result.error);

        fs.writeFile(params.file_path, result.result, 'utf8', (err) => {
          if (err) return reject(err);

          resolve(params.file_path);
        });
      })
      .catch(reject);
  };

  return resolve(`Unknown type: ${(params as any).type}`);
});


export default name;