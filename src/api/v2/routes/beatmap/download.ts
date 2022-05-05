import { download, RequestNamepsace } from "../../../../utility/request";


export interface types {
  (beatmapset: number, file_path: string): Promise<string>;
};


const name: types = async (beatmapset, file_path) => {
  const data = await download(`https://osu.ppy.sh/api/v2/beatmapsets/${beatmapset}/download`, file_path);

  return data;
};


export default name;