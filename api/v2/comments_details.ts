import { IDefaultParams, IError } from "../../types";
import { CommentsDetailsResponse } from "../../types/v2/comments_details";
import { request } from "../../utility/request";



export const comments_details = async (comment_id: string, addons?: IDefaultParams): Promise<CommentsDetailsResponse | IError> => {
  if (comment_id == null) {
    return { error: new Error(`Specify comment id`) };
  };


  const data = await request(`https://osu.ppy.sh/api/v2/comments/${comment_id}`, {
    method: 'GET',
    addons,
  });


  return data;
};