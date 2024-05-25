import { IDefaultParams, IError } from "../../types";
import { CommentsDetailsResponse } from "../../types/v2/comments_details";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = CommentsDetailsResponse & IError;


export const comments_details = async (comment_id: string, addons?: IDefaultParams): Promise<Response> => {
  if (comment_id == null) {
    return handleErrors(`Specify comment id`) as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/comments/${comment_id}`, {
    method: 'GET',
    addons,
  });

  if (data.error) return handleErrors(data.error);


  return data;
};