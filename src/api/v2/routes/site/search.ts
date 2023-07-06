import { types } from '../../../../types/v2_site_search';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Searches users and wiki pages.',
  params: [
    {
      name: 'object',
      params: [
        {
          type: 'string',
          name: 'mode',
          optional: true,
          description: '\`\`\`all\`\`\` or \`\`\`user\`\`\` or \`\`\`wiki_page\`\`\`',
        },
        {
          type: 'string',
          name: 'query',
          optional: true,
          description: 'Search keyword',
        },
        {
          type: 'number',
          name: 'page',
          optional: true,
          description: 'Search result page. Ignored for mode all',
        },
      ],
    }
  ],
  return: 'response',
};



const name: types = async (obj) => {
  const data = await request(`search`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;