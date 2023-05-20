import { types } from '../../../../types/v2_beatmaps_events';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return list of beatmaps events (Nominations, bubbles and etc)',
  params: [
    {
      name: 'object',
      params: [
        {
          type: 'string/number',
          name: 'user',
          optional: true,
          description: 'id of the user',
        },
        {
          type: 'string[]',
          name: 'types',
          optional: true,
          description: '\`\`\`nominate\`\`\` or \`\`\`qualify\`\`\` or \`\`\`rank\`\`\` or \`\`\`love\`\`\` or \`\`\`nomination_reset\`\`\` or \`\`\`nomination_reset_received\`\`\` or \`\`\`disqualify\`\`\` or \`\`\`remove_from_loved\`\`\` or \`\`\`kudosu_gain\`\`\` or \`\`\`kudosu_lost\`\`\` or \`\`\`genre_edit\`\`\` or \`\`\`language_edit\`\`\` or \`\`\`nsfw_toggle\`\`\` or \`\`\`offset_edit\`\`\` or \`\`\`issue_resolve\`\`\` or \`\`\`issue_reopen\`\`\` or \`\`\`beatmap_owner_change\`\`\` or \`\`\`kudosu_allow\`\`\` or \`\`\`kudosu_deny\`\`\` or \`\`\`approve\`\`\` or \`\`\`kudosu_recalculate\`\`\` or \`\`\`discussion_delete\`\`\` or \`\`\`discussion_restore\`\`\` or \`\`\`discussion_post_delete\`\`\` or \`\`\`discussion_post_restore\`\`\`',
        },
        {
          type: 'string',
          name: 'min_date',
          optional: true,
          description: 'Date from',
        },
        {
          type: 'string',
          name: 'max_date',
          optional: true,
          description: 'Date to',
        },
      ],
    }
  ],
};



const name: types = async (obj) => {
  const data = await request(`beatmapsets/events`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;