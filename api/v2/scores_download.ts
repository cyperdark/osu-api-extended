import { IError, Modes_names } from "../../types";
import { ScoresDownloadResponse } from "../../types/v2/scores_download";
import { download } from "../../utility/request";



export const scores_download = async (params: {
  id: number;
  mode?: Modes_names;
  file_path?: string;
}): Promise<ScoresDownloadResponse | IError> => {
  if (params.id == null) {
    return { error: new Error(`Specify score id`) };
  };


  const url = params.mode ? `https://osu.ppy.sh/api/v2/scores/${params.mode}/${params.id}` : `https://osu.ppy.sh/api/v2/scores/${params.id}`;

  const data = await download(`${url}/download`, params.file_path, {
    _callback: false,
  });


  return data;
};