import { download, namespace, RequestNamepsace } from "../../../../utility/request";


export interface types {
  (score_id: number, mode: 'osu' | 'fruits' | 'mania' | 'taiko', file_path: string): Promise<string>;
};


const name: types = async (score_id, mode, file_path) => {
  const data = await download(`https://osu.ppy.sh/api/v2/scores/${mode}/${score_id}/download`, file_path);

  return data;
};


export default name;