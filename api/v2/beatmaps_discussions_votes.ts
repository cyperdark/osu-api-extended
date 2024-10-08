import { IDefaultParams, IError } from "../../types";
import { BeatmapsDiscussionsVotesResponse } from "../../types/v2/beatmaps_discussions_votes";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";



export const beatmaps_discussions_votes = async (params: {
  discussion_id?: number;
  sort?: 'id_desc' | 'id_asc';
  score?: '1' | '-1';

  user?: number;
  receiver?: number;

  limit?: number;
  cursor_string?: string;
}, addons?: IDefaultParams): Promise<BeatmapsDiscussionsVotesResponse & IError> => {
  if (params?.discussion_id) {
    // @ts-ignore
    params.beatmapset_discussion_id = params.discussion_id;
    delete params.discussion_id;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/beatmapsets/discussions/votes`, {
    method: 'GET',
    params,
    addons
  });

  if (data.error) return handleErrors(new Error(data.error));

  return data;
};