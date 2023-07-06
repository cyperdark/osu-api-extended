import { types } from '../../../../../types/v2_beatmap_set_addToFavourites';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 0,
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
      type: 'boolean',
      name: 'action',
      optional: false,
      description: 'true/false',
    },
  ],
};



const name: types = async (beatmapset_id, action) => {
  let _action = '';

  if (action == true) _action = 'favourite';
  if (action == false) _action = 'unfavourite';

  const data = await request(`beatmapsets/${beatmapset_id}/favourites`, {
    method: 'POST',
    params: { action: _action }
  });

  return data;
};


export default name;