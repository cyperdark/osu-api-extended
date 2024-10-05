import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { handleErrors } from "../../utility/handleErrors";
import { GroupsDetailsResponse } from "../../types/v2/groups_details";


type Response = GroupsDetailsResponse & IError;


export const groups_details = async (params: {
  id: '4' | '7' | '11' | '16' | '22' | '28' | '31' | '32'
}, addons?: IDefaultParams): Promise<Response> => {
  if (params?.id == null) {
    return handleErrors(new Error(`Specify group id`)) as Response;
  };

  const data = await request(`https://osu.ppy.sh/groups/${params.id}`, {
    method: 'GET',
    addons
  });

  if (data.error) return handleErrors(new Error(data.error));


  try {
    const parse_group = JSON.parse(data.split('<script id="json-group" type="application/json">')[1].split('</script>')[0]);
    const parse_users = JSON.parse(data.split('<script id="json-users" type="application/json">')[1].split('</script>')[0]);


    parse_group.users = parse_users;
    return parse_group;
  } catch (error) {
    return handleErrors(error as any);
  };
};