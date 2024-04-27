import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { CommentsActionsNewResponse } from "../../types/v2/comments_actions_new";
import { CommentsActionsEditResponse } from "../../types/v2/comments_actions_edit";
import { CommentsActionsDeleteResponse } from "../../types/v2/comments_actions_delete";
import { CommentsActionsVoteResponse } from "../../types/v2/comments_actions_vote";
import { CommentsActionsUnvoteResponse } from "../../types/v2/comments_actions_unvote";
import { handleErrors } from "../../utility/handleErrors";


type params = ({
  type: 'new';

  commentable_type?: 'news_post' | 'beatmapset';
  id?: number;
  parent_id?: string;

  message?: string;
} | {
  type: 'edit';

  id?: number;
  message?: string;
} | {
  type: 'delete';

  id?: number;
} | {
  type: 'vote';

  id?: number;
} | {
  type: 'unvote';

  id?: number;
});


type Response<T extends params['type']> =
  T extends 'new'
  ? CommentsActionsNewResponse & IError
  : T extends 'edit'
  ? CommentsActionsEditResponse & IError
  : T extends 'delete'
  ? CommentsActionsDeleteResponse & IError
  : T extends 'vote'
  ? CommentsActionsVoteResponse & IError
  : T extends 'unvote'
  ? CommentsActionsUnvoteResponse & IError
  : IError;


export const comments_actions = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']> | { error: string }> => {
  const object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'POST';


  switch (params.type) {
    case 'new':
      url += `/comments`;

      if (params.id == null) {
        return handleErrors(`Specify news id or beatmap set id`) as Response<T['type']>;
      };

      if (params.commentable_type == null) {
        return handleErrors(`Specify commentable_type`) as Response<T['type']>;
      };

      if (params.message == null) {
        return handleErrors(`You forgot to provide message`) as Response<T['type']>;
      };


      object['comment[commentable_type]'] = params.commentable_type;
      object['comment[parent_id]'] = params.parent_id;
      object['comment[commentable_id]'] = params.id;
      object['comment[message]'] = params.message;
      break;

    case 'edit':
      if (params.id == null) {
        return handleErrors(`Specify comment id`) as Response<T['type']>;
      };

      if (params.message == null) {
        return handleErrors(`You forgot to provide message`) as Response<T['type']>;
      };


      url += `/comments/${params.id}`;
      method = 'PUT';

      object['comment[message]'] = params.message;
      break;

    case 'delete':
      if (params.id == null) {
        return handleErrors(`Specify comment id`) as Response<T['type']>;
      };


      url += `/comments/${params.id}`;
      method = 'DELETE';

      break;

    case 'vote':
      if (params.id == null) {
        return handleErrors(`Specify comment id`) as Response<T['type']>;
      };


      url += `/comments/${params.id}/vote`;
      method = 'POST';

      break;

    case 'unvote':
      if (params.id == null) {
        return handleErrors(`Specify comment id`) as Response<T['type']>;
      };


      url += `/comments/${params.id}/vote`;
      method = 'DELETE';

      break;

    default:
      return handleErrors(`Unsupported type: ${(params as any).type}`) as Response<T['type']>;
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons,
  });

  if (data.error) return handleErrors(data.error) as Response<T['type']>;


  return data as Response<T['type']>;
};