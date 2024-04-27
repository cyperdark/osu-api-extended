import { IDefaultParams, IError } from "../../types";
import { BeatmapsDiscussionsListResponse } from "../../types/v2/beatmaps_discussions_list";
import { request } from "../../utility/request";



export const beatmaps_discussions_list = async (params: {
  only_unresolved?: boolean;
  user?: number;
  beatmap_id?: number;
  beatmapset_id?: number;
  beatmapset_status?: 'all' | 'ranked' | 'qualified' | 'disqualified' | 'never_qualified' | 'loved';
  message_types?: ('suggestion' | 'problem' | 'mapper_note' | 'praise' | 'hype' | 'review' | 'all')[];
  limit?: number;
  sort?: 'id_desc' | 'id_asc';
  cursor_string?: string;
}, addons?: IDefaultParams): Promise<BeatmapsDiscussionsListResponse & IError> => {
  const data = await request(`https://osu.ppy.sh/api/v2/beatmapsets/discussions`, {
    method: 'GET',
    params,
    addons
  });

  return data;
};