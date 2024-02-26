import { request } from "../../utility/request";
import { IDefaultParams } from "../../types";


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
  T extends 'difficulty'
  ? any
  : T extends 'difficulties'
  ? any
  : never;


const name = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']> | { error: string }> => {
  const object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'POST';


  switch (params.type) {
    case 'new':
      url += `/comments`;

      if (params.commentable_type) object['comment[commentable_type]'] = params.commentable_type;
      if (params.parent_id) object['comment[parent_id]'] = params.parent_id;
      if (params.id) object['comment[commentable_id]'] = params.id;
      if (params.message) object['comment[message]'] = params.message;
      break;

    case 'edit':
      url += `/comments/${params.id}`;
      method = 'PUT';

      object['comment[message]'] = params.message;
      break;

    case 'delete':
      url += `/comments/${params.id}`;
      method = 'DELETE';

      break;

    case 'vote':
      url += `/comments/${params.id}/vote`;
      method = 'POST';

      break;

    case 'unvote':
      url += `/comments/${params.id}/vote`;
      method = 'DELETE';

      break;
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons,
  });


  return data as Response<T['type']>;
};


export default name;