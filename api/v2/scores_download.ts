import { Modes_names } from "../../types";
import { download } from "../../utility/request";



const name = async (params: {
  id: number;
  mode?: Modes_names;
  file_path?: string;
}) => {
  let url = params.mode ? `https://osu.ppy.sh/api/v2/scores/${params.mode}/${params.id}` : `https://osu.ppy.sh/api/v2/scores/${params.id}`;


  const data = await download(`${url}/download`, params.file_path, {
    _callback: false,
  });


  return data;
};


export default name;