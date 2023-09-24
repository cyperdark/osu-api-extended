import { request } from "../../../../utility/request";
import { gamemode_names } from "../../../../utility/types";
import mods from '../../../../tools/mods';



export const description = {
  params: [
    {
      type: 'number',
      name: 'user',
      optional: false,
      description: 'id of the user',
    },
    {
      type: 'string',
      name: 'type',
      optional: false,
      description: '\`\`\`recent\`\`\` or \`\`\`best\`\`\` or \`\`\`firsts\`\`\` or \`\`\`pinned\`\`\`',
    },
    {
      name: 'object',
      params: [
        {
          type: 'boolean',
          name: 'include_fails',
          options: false,
          optional: true,
          description: 'Only for \`\`\`recent\`\`\` scores, include scores of failed plays. Set to \`\`\`true\`\`\` to include them. Defaults to \`\`\`false\`\`\`',
        },
        {
          type: 'string',
          name: 'mode',
          optional: true,
          description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
        },
        {
          type: 'number',
          name: 'mods',
          options: false,
          optional: true,
          description: 'Use \`\`\`mods.enums\`\`\` instead of mods id or name',
        },
        {
          type: 'number',
          name: 'limit',
          optional: true,
          description: 'Maximum number of results',
        },
        {
          type: 'string',
          name: 'offset',
          optional: true,
          description: 'Result offset for pagination',
        },
      ]
    },
  ],
};


const name = async (user_id: number, type: 'recent' | 'best' | 'firsts' | 'pinned', object?: {
  include_fails?: boolean,
  mode?: gamemode_names,
  limit?: number,
  offset?: number,
  mods?: number
}) => {
  if (object.include_fails)
    // @ts-ignore
    object.include_fails = object.include_fails == true ? 1 : 0;

  const data = await request(`https://osu.ppy.sh/api/v2/users/${user_id}/scores/${type}`, {
    method: 'GET',
    params: object,
  });

  // check if scores exists. Sometimes there can an error
  if (Array.isArray(data)) {
    const transform = data.map((v, i) => ({
      index: i + 1,
      mods_id: mods.id(v.mods.join('')) || 0,
      ...v
    }));

    if (object?.mods) return transform.filter(r => (r.mods_id & object.mods) > 0);
    return transform;
  };

  return data;
};


export default name;