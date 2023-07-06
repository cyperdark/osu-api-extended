import { types } from '../../../../../types/v2_site_spotlights_list';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return list of spotlights',
  params: [
  ],
};


const name: types = async () => {
  const data = await request(`spotlights`, {
    method: 'GET',
  });

  if (data.spotlights) return data.spotlights;
  return data;
};


export default name;