import { types } from '../../../../types/v2_beatmaps_search';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');

const _mode = [
  'osu',
  'taiko',
  'fruits',
  'mania'
];

const _genre = [
  '',
  'Unspecified',
  'Video Game',
  'Anime',
  'Rock',
  'Pop',
  'Other',
  'Novelty',
  'Hip Hop',
  'Electronic',
  'Metal',
  'Classical',
  'Folk',
  'Jazz',
];

const _language = [
  'English',
  'Chinese',
  'French',
  'German',
  'Italian',
  'Japanese',
  'Korean',
  'Spanish',
  'Swedish',
  'Russian',
  'Polish',
  'Instrumental',
  'Unspecified',
  'Other',
];


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return list of beatmaps',
  params: [
    {
      name: 'object',
      params: [
        {
          type: 'string',
          name: 'query',
          optional: true,
          description: 'search query, song \`\`title\`\` / \`\`artist\`\`, \`\`stars\`\`, \`\`bpm\`\`, \`\`date\`\` and etc.',
        },
        {
          type: 'string',
          name: 'sort',
          optional: true,
          description: '\`\`\`title_desc\`\`\` or \`\`\`title_asc\`\`\` or \`\`\`artist_desc\`\`\` or \`\`\`artist_asc\`\`\` or \`\`\`difficulty_desc\`\`\` or \`\`\`difficulty_asc\`\`\` or \`\`\`updated_desc\`\`\` or \`\`\`updated_asc\`\`\` or \`\`\`ranked_desc\`\`\` or \`\`\`ranked_asc\`\`\` or \`\`\`rating_desc\`\`\` or \`\`\`rating_asc\`\`\` or \`\`\`plays_desc\`\`\` or \`\`\`plays_asc\`\`\` or \`\`\`favourites_desc\`\`\` or \`\`\`favourites_asc\`\`\`',
        },
        {
          type: 'string[]',
          name: 'general',
          optional: true,
          description: '\`\`\`converts\`\`\` or \`\`\`follows\`\`\` or \`\`\`recommended\`\`\` or \`\`\`\`featured_artists\`\`\`\` or \`\`\`\`spotlights\`\`\`\`',
        },
        {
          type: 'string',
          name: 'mode',
          optional: true,
          description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
        },
        {
          type: 'string',
          name: 'section',
          optional: true,
          description: '\`\`\`ranked\`\`\` or \`\`\`qualified\`\`\` or \`\`\`loved\`\`\` or \`\`\`favourites\`\`\` or \`\`\`pending\`\`\` or \`\`\`wip\`\`\` or \`\`\`graveyard\`\`\` or \`\`\`mine\`\`\`',
        },
        {
          type: 'string',
          name: 'genre',
          optional: true,
          description: '\`\`\`Unspecified\`\`\` or \`\`\`Video Game\`\`\` or \`\`\`Anime\`\`\` or \`\`\`Rock\`\`\` or \`\`\`Pop\`\`\` or \`\`\`Other\`\`\` or \`\`\`Novelty\`\`\` or \`\`\`Hip Hop\`\`\` or \`\`\`Electronic\`\`\` or \`\`\`Metal\`\`\` or \`\`\`Classical\`\`\` or \`\`\`Folk\`\`\` or \`\`\`Jazz\`\`\`',
        },
        {
          type: 'string',
          name: 'language',
          optional: true,
          description: '\`\`\`English\`\`\` or \`\`\`Chinese\`\`\` or \`\`\`French\`\`\` or \`\`\`German\`\`\` or \`\`\`Italian\`\`\` or \`\`\`Japanese\`\`\` or \`\`\`Korean\`\`\` or \`\`\`Spanish\`\`\` or \`\`\`Swedish\`\`\` or \`\`\`Russian\`\`\` or \`\`\`Polish\`\`\` or \`\`\`Instrumental\`\`\` or \`\`\`Unspecified\`\`\` or \`\`\`Other\`\`\`',
        },
        {
          type: 'string',
          name: 'include',
          optional: true,
          description: '\`\`\`video\`\`\` or \`\`\`storyboard\`\`\`',
        },
        {
          type: 'string[]',
          name: 'rank',
          optional: true,
          description: '\`\`\`XH\`\`\` or \`\`\`X\`\`\` or \`\`\`SH\`\`\` or \`\`\`S\`\`\` or \`\`\`A\`\`\` or \`\`\`B\`\`\` or \`\`\`C\`\`\` or \`\`\`D\`\`\`',
        },
        {
          type: 'boolean',
          name: 'nfsw',
          optional: true,
          description: '\`\`\`true\`\`\` or \`\`\`false\`\`\`',
        },
        {
          type: 'string',
          name: 'cursor_string',
          optional: true,
          description: 'Pagination cursor'
        },
      ]
    }
  ],
  notes: [
    {
      params: ['nsfw'],
      description: 'Those parameters require to login via lazer',
    }
  ],
};



const name: types = async (filters) => {
  const obj: any = {
  };

  if (filters) {
    if (filters.query) obj.q = filters.query;
    if (filters.general) obj.c = filters.general.toString().split(',').join('.');
    if (filters.mode) obj.m = _mode.indexOf(filters.mode).toString();
    if (filters.section) obj.s = filters.section;
    if (filters.nfsw) obj.nsfw = '';
    else obj.nsfw = false;
    if (filters.genre) obj.g = _genre.indexOf(filters.genre).toString();
    if (filters.language) obj.l = _language.indexOf(filters.language).toString();
    if (filters.include) obj.e = filters.include.toString().split(',').join('.');
    if (filters.rank) obj.r = filters.rank.toString().split(',').join('.');

    if (filters.sort) obj.sort = filters.sort;
    if (filters.cursor_string) obj.cursor_string = filters.cursor_string;
  }
  const data = await request(`beatmapsets/search/`, {
    method: 'GET',
    params: obj,
  });

  // console.log(obj);


  return data;
};


export default name;