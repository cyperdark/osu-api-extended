import { types } from '../../../../../types/v2_forums_topic_new';
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
      name: 'forum_id',
      optional: false,
      description: 'Forum id',
    },
    {
      name: 'object',
      params: [
        {
          type: 'string',
          name: 'title',
          optional: false,
          description: 'Title of the topic',
        },
        {
          type: 'string',
          name: 'body',
          optional: false,
          description: 'Body of the topic',
        },
      ],
    },
    {
      name: 'poll',
      params: [
        {
          type: 'string',
          name: 'title',
          optional: false,
          description: 'Title of the poll.',
        },
        {
          type: 'string[]',
          name: 'options',
          optional: false,
          description: 'Newline-separated list of voting options. BBCode is supported.',
        },
        {
          type: 'boolean',
          name: 'hide_results',
          optional: true,
          description: 'Hide results of the poll until voting period ends',
        },
        {
          type: 'number',
          name: 'length_days',
          optional: true,
          description: 'Number of days for voting period. 0 means the voting will never ends (default: 0). This parameter is required if hide_results option is enabled.',
        },
        {
          type: 'number',
          name: 'max_options',
          optional: true,
          description: 'This is the number of options each user may select when voting.',
        },
        {
          type: 'boolean',
          name: 'vote_change',
          optional: true,
          description: 'Enable this to allow user to change their votes (default: false).',
        },
      ],
    },
  ],
  return: 'response',
};


const name: types = async (forum_id, object, poll) => {
  const obj: any = { forum_id };
  if (object.title) obj.title = object.title;
  if (object.body) obj.body = object.body;

  if (poll != null) obj.with_poll = true;

  if (poll) {
    if (poll.title) obj['forum_topic_poll[title]'] = poll.title;
    if (poll.options) obj['forum_topic_poll[options]'] = poll.options.toString().split(',').join('%0D%0A');
    if (poll.hide_results) obj['forum_topic_poll[hide_results]'] = poll.hide_results;
    if (poll.length_days) obj['forum_topic_poll[length_days]'] = poll.length_days;
    if (poll.max_options) obj['forum_topic_poll[max_options]'] = poll.max_options;
    if (poll.vote_change) obj['forum_topic_poll[vote_change]'] = poll.vote_change;
  };

  const data = await request(`forums/topics`, {
    method: 'POST',
    data: JSON.stringify(obj),
  });

  return data;
};


export default name;