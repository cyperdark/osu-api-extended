import { types, response } from '../../../../../types/v2_forums_topic_edit';
import { response as topic_types } from '../../../../../types/v2_forums_topic_details';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Edit your topic and post from the forum',
  params: [
    {
      type: 'number',
      name: 'topic_id',
      optional: false,
      description: 'Topic id',
    },
    {
      name: 'object',
      params: [
        {
          type: 'string',
          name: 'title',
          optional: true,
          description: 'New title',
        },
        {
          type: 'string',
          name: 'body',
          optional: true,
          description: 'New body',
        },
      ],
    },
  ],
  return: 'response',
};


const name: types = async (topic_id, object) => {
  const post: topic_types = await request(`forums/topics/${topic_id}`, {
    method: 'GET',
  });

  const response: any = {};

  if (object.title) {
    const data = await request(`forums/topics/${topic_id}`, {
      method: 'PUT',
      data: JSON.stringify({
        "forum_topic[topic_title]": post.topic.title,
      }),
    });

    response.title = data;
  };

  if (object.body) {
    const data = await request(`forums/posts/${post.topic.first_post_id}`, {
      method: 'PUT',
      data: JSON.stringify({
        body: post.posts[0].body.raw,
      })
    });

    response.body = data;
  };

  return response;
};


export default name;