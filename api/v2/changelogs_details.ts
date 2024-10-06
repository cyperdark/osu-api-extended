import { IDefaultParams, IError } from "../../types";
import { changelogsDetailsResponse } from "../../types/v2/changelogs_details";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = changelogsDetailsResponse[] & IError;


export const changelogs_details = async (params: {
  stream_name: 'stable40' | 'beta40' | 'cuttingedge' | 'lazer' | 'web';
  build_version: string;
}, addons?: IDefaultParams): Promise<Response> => {
  if (params?.stream_name == null) {
    return handleErrors(new Error(`Specify stream name`)) as Response;
  };

  if (params?.build_version == null) {
    return handleErrors(new Error(`Specify build version`)) as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/changelog/${params.stream_name}/${params.build_version}`, {
    method: 'GET',
    addons,
  });

  if (data.error) return handleErrors(new Error(data.error));

  return data;
};