import { IError, Modes_names } from "../../types";
import { ScoresDownloadResponse } from "../../types/v2/scores_download";
import { handleErrors } from "../../utility/handleErrors";
import { download } from "../../utility/request";


type Response = ScoresDownloadResponse & IError;


export const scores_download = async (params: {
  id: number;
  mode?: Modes_names;
  file_path?: string;
}): Promise<Response> => {
  if (params.id == null) {
    return handleErrors(`Specify score id`) as Response;
  };


  const url = params.mode ? `https://osu.ppy.sh/api/v2/scores/${params.mode}/${params.id}` : `https://osu.ppy.sh/api/v2/scores/${params.id}`;

  const data = await download(`${url}/download`, params.file_path, {
    _callback: false,
  });

  if (data.error) return handleErrors(data.error);


  return data;
};