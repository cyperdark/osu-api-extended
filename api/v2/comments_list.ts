import { IDefaultParams, IError } from "../../types";
import { CommentsListResponse } from "../../types/v2/comments_list";
import { request } from "../../utility/request";



export const comments_list = async (params: {
  type?: 'news_post' | 'beatmapset' | 'Build';
  id?: string;

  parent_id?: string;
  after_id?: string;

  cursor?: {
    id: number;
    created_at: string;
  };
  sort?: 'new' | 'old' | 'top';
}, addons?: IDefaultParams): Promise<CommentsListResponse | IError> => {
  const data = await request(`https://osu.ppy.sh/api/v2/comments`, {
    method: 'GET',
    params: {
      after: params.after_id,
      commentable_type: params.type,
      commentable_id: params.id,
      'cursor[id]': params.cursor?.id,
      'cursor[created_at]': params.cursor?.created_at,
      parent_id: params.parent_id,
      sort: params.sort,
    },
    addons,
  });


  return data;
};