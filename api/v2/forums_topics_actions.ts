import { request } from "../../utility/request";
import { IDefaultParams } from "../../types";


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

  topic_id: number;
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
  T extends 'difficulty'
  ? any
  : T extends 'difficulties'
  ? any
  : never;


const name = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  let object: any = {};
  const body: any[] = [];

  let urls = [];
  let methods = [];
  const fields = [];


  switch (params.type) {
    case 'create':
      urls.push(`https://osu.ppy.sh/api/v2/forums/topics`);
      methods.push('POST');

      object['forum_id'] = params.forum_id;

      object['title'] = params.title;
      object['body'] = params.message;


      object['with_poll'] = params.enable_poll;
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
      urls.push(`https://osu.ppy.sh/api/v2/forums/topics/${params.topic_id}/reply`);
      methods.push('POST');

      object['body'] = params.message;

      body.push(object);
      break;

    case 'edit_post':
      urls.push(`https://osu.ppy.sh/api/v2//forums/posts/${params.post_id}`);
      methods.push('PUT');

      object['body'] = params.message;

      body.push(object);
      break;

    case 'edit_topic':
      if (params.topic_id && (params.title != null && params.title != '')) {
        // @ts DOESNT WORK
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
        urls.push(`https://osu.ppy.sh/api/v2/forums/posts/${params.post_id}`);
        methods.push('PUT');

        object['body'] = params.message;

        body.push(object);
        fields.push('post');

        object = {};
      };
      break;
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
    return result as Response<T['type']>;
  };

  return results[0] as Response<T['type']>;
};


export default name;