import { namespace, RequestNamepsace } from "../../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  type: false,
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Return user download quota number?',
  params: [

  ],
};

export interface types {
  (): Promise<response>;
};

export interface response {
  quota_used: number;
}


const name: types = async () => {
  const data = await request(`me/download-quota-check`, {
    method: 'GET',
  });

  return data;
};


export default name;