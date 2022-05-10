import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  type: false,
  auth: 1,
  title: __filename,
  method: 'POST',
  description: 'Added specified beatmapset to favourite list',
  params: [
    {
      type: 'number',
      name: 'beatmapset_id',
      optional: false,
      description: 'id of the beatmap set',
    },
    {
      type: 'string',
      name: 'action',
      optional: false,
      description: '\`\`\`favourite\`\`\` or \`\`\`unfavourite\`\`\`',
    },
  ],
};

export interface types {
  (beatmapset_id: number, action: 'favourite' | 'unfavourite'): Promise<response[]>;
};

export interface response {
  favourite_count: number;
}


const name: types = async (beatmapset_id, action) => {
  const data = await request(`beatmapsets/${beatmapset_id}/favourites`, {
    method: 'POST',
    params: { action }
  });

  return data;
};


export default name;