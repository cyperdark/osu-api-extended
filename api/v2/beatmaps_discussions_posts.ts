import { IDefaultParams } from "../../types";
import { BeatmapsDiscussionsListResponse } from "../../types/v2/beatmaps_discussions_list";
import { request } from "../../utility/request";



const name = async (params: {
  discussion_id?: number;
  sort?: 'id_desc' | 'id_asc';
  types?: ('first' | 'reply' | 'system')[];
  user?: number;

  limit?: number;
  cursor_string?: string;
}, addons?: IDefaultParams): Promise<BeatmapsDiscussionsListResponse> => {
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

  return data;
};


export default name;