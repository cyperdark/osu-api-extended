import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (params: {
  commentable_type?: 'news_post' | 'beatmapset';

  after_id: string;

  commentable_id?: string;
  cursor?: {
    id: number;
    created_at: string;
  };
  parent_id?: string,
  sort?: 'new' | 'old' | 'top';
}, addons?: IDefaultParams) => {
  const object = {
    after: params.after_id,
    commentable_type: params.commentable_type,
    commentable_id: params.commentable_id,
    'cursor[id]': params.cursor?.id,
    'cursor[created_at]': params.cursor?.created_at,
    parent_id: params.parent_id,
    sort: params.sort,
  };


  const data = await request(`https://osu.ppy.sh/api/v2/comments`, {
    method: 'GET',
    params: object,
    addons,
  });


  return data;
};


export default name;