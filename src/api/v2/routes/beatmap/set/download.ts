import { download } from "../../../../../utility/request";


export const description: any = {
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
      type: 'Function',
      name: 'callback',
      optional: true,
      description: 'function which is will be triggered on downloading progress',
    },
  ],
  return: 'string',
};

export interface types {
  (beatmapset: number, file_path: string, callback: Function): Promise<string>;
};


const name: types = async (beatmapset, file_path, callback) => {
  const data = await download(`https://osu.ppy.sh/api/v2/beatmapsets/${beatmapset}/download`, file_path, {}, callback);

  return data;
};


export default name;