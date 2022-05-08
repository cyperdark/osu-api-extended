import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  type: false,
  auth: 1,
  title: __filename,
  method: 'GET',
  description: '',
  params: [
    {
      type: 'string',
      name: 'mode',
      optional: true,
      description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
    },
  ],
};

export interface types {
  (mode?: 'osu' | 'fruits' | 'mania' | 'taiko'): Promise<response>;
};

export interface response {
  ask: 'peppy',
}


const name: types = async (mode) => {
  const data = await request(`rooms/${mode}`, {
    method: 'GET',
  });

  return data;
};


export default name;