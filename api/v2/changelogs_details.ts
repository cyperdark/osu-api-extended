import { IDefaultParams, IError } from "../../types";
import { changelogsDetailsResponse } from "../../types/v2/changelogs_details";
import { request } from "../../utility/request";



export const changelogs_details = async (params: {
  stream_name: string;
  build_version: string;
}, addons?: IDefaultParams): Promise<changelogsDetailsResponse[] | IError> => {
  if (params.stream_name == null) {
    return { error: new Error(`Specify stream name`) };
  };

  if (params.build_version == null) {
    return { error: new Error(`Specify build version`) };
  };


  const data = await request(`https://osu.ppy.sh/api/v2/changelog/${params.stream_name}/${params.build_version}`, {
    method: 'GET',
    addons,
  });


  return data;
};