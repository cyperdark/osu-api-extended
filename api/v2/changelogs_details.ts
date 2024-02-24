import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";



const name = async (params: {
  stream_name: string;
  build_version: string;
}, addons: IDefaultParams): Promise<any> => {
  const data = await request(`https://osu.ppy.sh/api/v2/changelog/${params.stream_name}/${params.build_version}`, {
    method: 'GET',
    addons,
  });


  return data;
};


export default name;