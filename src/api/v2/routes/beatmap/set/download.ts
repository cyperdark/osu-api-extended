import { types } from '../../../../../types/v2_beatmap_set_download';
import { Description } from '../../../../../utility/types';

import { download } from "../../../../../utility/request";


export const description: Description = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Download beatmap set to specified directory',
  params: [
    {
      type: 'number',
      name: 'beatmapset',
      optional: false,
      description: 'id of the beatmap set',
    },
    {
      type: 'string',
      name: 'file_path',
      optional: false,
      description: 'path to file with their name and extension',
    },
    {
      type: 'string',
      name: 'host_name',
      optional: false,
      description: '\`\`\`osu\`\`\` or \`\`\`chimu\`\`\` or \`\`\`beatconnect\`\`\` or \`\`\`sayobot\`\`\` or \`\`\`nerinyan\`\`\` or ',
    },
    {
      type: 'boolean',
      name: 'no_video',
      optional: false,
      description: 'Download with or without video',
    },
    {
      type: 'Function',
      name: 'callback',
      optional: true,
      description: 'function which is will be triggered on downloading progress',
    },
  ],
  return: 'string',
};


const name: types = async (beatmapset, file_path, host_name, no_video, callback) => {
  let url = '';

  switch (host_name) {
    case 'osu':
      url = `https://osu.ppy.sh/api/v2/beatmapsets/${beatmapset}/download${no_video ? '?noVideo=1' : ''}`;
      break;

    case 'chimu':
      url = `https://chimu.moe/v1/download/${beatmapset}`;
      break;

    case 'beatconnect':
      url = `https://beatconnect.io/b/${beatmapset}/`;
      break;

    case 'sayobot':
      url = `https://dl.sayobot.cn/beatmaps/download/${no_video ? 'novideo' : 'full'}/${beatmapset}`;
      break;

    case 'nerinyan':
      url = `https://api.nerinyan.moe/d/${beatmapset}${no_video ? '?nv=1' : ''}`;
      break;

    default:
      url = `https://osu.ppy.sh/api/v2/beatmapsets/${beatmapset}/download${no_video ? '?noVideo=1' : ''}`;
      break;
  };

  const data = await download(url, file_path, {
    headers: {
      "Referer": "https://osu.ppy.sh/",
    }
  }, callback);
  return data;
};


export default name;
