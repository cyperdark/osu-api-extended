import { request } from "../../utility/request";
import { IDefaultParams } from "../../types";
import { postData } from "../../tools";


type params = ({
  type: 'mark_as_readed';

  ids: number[];

  identities?: {
    category: string;
    object_id: string
    object_type: string
  }[];

  notifications?: {
    category: string;
    id: number;
    object_id: string;
    object_type: string;
  }[]
});


type Response<T extends params['type']> =
  T extends 'mark_as_readed'
  ? any
  : never;


const name = async <T extends params>(params: T, addons?: IDefaultParams): Promise<any> => {
  const object: string[] = [];
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';


  return 'doesnt work';

  switch (params.type) {
    case 'mark_as_readed':
      url += '/notifications/mark-read';
      method = 'POST';


      // params.ids.forEach((r, index) => object[`identities[${index}][id]`] = r);

      if (Array.isArray(params.notifications)) {
        const formData = postData(params.notifications);

        object.push(formData);
      };

      if (Array.isArray(params.identities)) {
        const formData = postData(params.identities);

        object.push(formData);
      };
      break;
  };


  const data = await request(url, {
    method: method,
    headers: {
      Accept: `application/json`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    // data: JSON.stringify(object),

    data: encodeURI(object.join('&')),
    addons,
  });


  return data as Response<T['type']>;
};


export default name;