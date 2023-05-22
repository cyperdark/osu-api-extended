import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  type: false,
  auth: 1,
  title: __filename,
  method: 'POST',
  description: 'This endpoint allows you to mark notifications read',
  params: [
    {
      type: 'number array',
      name: 'ids',
      optional: false,
      description: '\`\`\`id\`\`\` of notifications to be marked as read',
    },
  ],
};

export interface types {
  (ids: number[]): Promise<response[]>;
};

export interface response {
}



const name: types = async (ids) => {
  const obj: any = {};

  ids.forEach((r, index) => obj[`identities[${index}][object_id]`] = r);

  const data = await request(`notifications/mark-read`, {
    method: 'POST',
    data: JSON.stringify(obj)
  });

  return data;
};


export default name;