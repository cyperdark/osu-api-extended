import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { ForumsTopicsActionsCreateResponse } from "../../types/v2/forums_topics_actions_create";
import { ForumsTopicsActionsReplyResponse } from "../../types/v2/forums_topics_actions_reply";
import { ForumsTopicsActionsEditTopicResponse } from "../../types/v2/forums_topics_actions_edit_topic";
import { ForumsTopicsActionsEditPostResponse } from "../../types/v2/forums_topics_actions_edit_post";


type params = ({
  type: 'create';
  forum_id: number;

  title: string;
  message: string;

  enable_poll: boolean;
  poll?: {
    allow_vote_change?: boolean;
    hide_results?: boolean;

    title: string;
    options: string[];

    max_votes_per_user?: number;
    duration_days?: number;
  };
} | {
  type: 'reply';

  post_id: number;
  message: string;
} | {
  type: 'edit_post';

  post_id: number;
  message: string;
} | {
  type: 'edit_topic';

  topic_id?: number;
  post_id?: number;

  title?: string;
  message?: string;
});


type Response<T extends params['type']> =
  T extends 'create'
  ? ForumsTopicsActionsCreateResponse | IError
  : T extends 'reply'
  ? ForumsTopicsActionsReplyResponse | IError
  : T extends 'edit_post'
  ? ForumsTopicsActionsEditPostResponse | IError
  : T extends 'edit_topic'
  ? ForumsTopicsActionsEditTopicResponse | IError
  : IError;


export const forums_topics_actions = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  let object: any = {};
  const body: any[] = [];

  let urls = [];
  let methods = [];
  const fields = [];


  switch (params.type) {
    case 'create':
      if (params.forum_id == null) {
        return { error: new Error(`Specify forum id`) } as Response<T['type']>;
      };

      if (params.title == null) {
        return { error: new Error(`Specify title`) } as Response<T['type']>;
      };

      if (params.message == null) {
        return { error: new Error(`Specify message`) } as Response<T['type']>;
      };


      urls.push(`https://osu.ppy.sh/api/v2/forums/topics`);
      methods.push('POST');

      object['forum_id'] = params.forum_id;

      object['title'] = params.title;
      object['body'] = params.message;


      if (params.enable_poll != null) object['with_poll'] = params.enable_poll;
      if (params.enable_poll != true) {
        body.push(object);
        break;
      };


      object['forum_topic_poll[vote_change]'] = params.poll.allow_vote_change;
      object['forum_topic_poll[hide_results]'] = params.poll.hide_results;

      object['forum_topic_poll[title]'] = params.poll.title;
      object['forum_topic_poll[options]'] = params.poll.options;

      object['forum_topic_poll[max_options]'] = params.poll.max_votes_per_user;
      object['forum_topic_poll[length_days]'] = params.poll.duration_days;

      body.push(object);
      break;

    case 'reply':
      if (params.post_id == null) {
        return { error: new Error(`Specify post id`) } as Response<T['type']>;
      };

      if (params.message == null) {
        return { error: new Error(`Specify message`) } as Response<T['type']>;
      };


      urls.push(`https://osu.ppy.sh/api/v2/forums/topics/${params.post_id}/reply`);
      methods.push('POST');

      object['body'] = params.message;

      body.push(object);
      break;

    case 'edit_post':
      if (params.post_id == null) {
        return { error: new Error(`Specify post id`) } as Response<T['type']>;
      };

      if (params.message == null) {
        return { error: new Error(`Specify message`) } as Response<T['type']>;
      };


      urls.push(`https://osu.ppy.sh/api/v2/forums/posts/${params.post_id}`);
      methods.push('PATCH');

      object['body'] = params.message;

      body.push(object);
      break;

    case 'edit_topic':
      if (params.topic_id && (params.title != null && params.title != '')) {
        if (params.topic_id == null) {
          return { error: new Error(`Specify topic id`) } as Response<T['type']>;
        };

        if (params.title == null) {
          return { error: new Error(`Specify title`) } as Response<T['type']>;
        };


        urls.push(`https://osu.ppy.sh/api/v2/forums/topics/${params.topic_id}`);
        methods.push('PUT');

        object = {
          forum_topic: {
            'topic_title': params.title,
          },
        };

        body.push(object);
        fields.push('topic');

        object = {};
      };


      if (params.post_id && (params.message != null && params.message != '')) {
        if (params.post_id == null) {
          return { error: new Error(`Specify post id`) } as Response<T['type']>;
        };

        if (params.message == null) {
          return { error: new Error(`Specify message`) } as Response<T['type']>;
        };


        urls.push(`https://osu.ppy.sh/api/v2/forums/posts/${params.post_id}`);
        methods.push('PUT');

        object['body'] = params.message;

        body.push(object);
        fields.push('post');

        object = {};
      };
      break;

    default:
      return { error: new Error(`Unsupported type: ${(params as any).type}`) } as Response<T['type']>;
  };


  const results: any[] = [];
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];

    const data = await request(url, {
      method: methods[i],
      // params: object,
      // params: body[i],
      data: JSON.stringify(body[i]),
      addons,
    });

    results.push(data);
  };


  if (params.type == 'edit_topic') {
    let result = fields.map((r, index) => ({ [r]: results[index] }));
    if (result[0].error) return result[0].error as Response<T['type']>;
    return result[0].topic as Response<T['type']>;
  };


  if (results[0].error) return results[0].error as Response<T['type']>;
  return results[0] as Response<T['type']>;
};