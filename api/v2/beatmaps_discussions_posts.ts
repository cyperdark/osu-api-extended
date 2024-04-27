import { IDefaultParams, IError } from "../../types";
import { BeatmapsDiscussionsListResponse } from "../../types/v2/beatmaps_discussions_list";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";



export const beatmaps_discussions_posts = async (params: {
  discussion_id?: number;
  sort?: 'id_desc' | 'id_asc';
  types?: ('first' | 'reply' | 'system')[];
  user?: number;

  limit?: number;
  cursor_string?: string;
}, addons?: IDefaultParams): Promise<BeatmapsDiscussionsListResponse & IError> => {
  if (params.discussion_id) {
    // @ts-ignore
    params.beatmapset_discussion_id = params.discussion_id;
    delete params.discussion_id;
  };

  if (Array.isArray(params.types)) {
    // @ts-ignore
    params['types[]'] = params.types;
    delete params.types;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/beatmapsets/discussions/posts`, {
    method: 'GET',
    params,
    addons
  });

  if (data.error) return handleErrors(data.error);

  return data;
};