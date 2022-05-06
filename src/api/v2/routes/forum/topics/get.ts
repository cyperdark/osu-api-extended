import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (topic: number, obj: {
    cursor_string?: string,
    sort?: 'id_asc' | 'id_desc',
    limit?: number,
    start?: string,
    end?: string,
  }): Promise<{
    posts: {
      created_at: string;
      deleted_at: string;
      edited_at: string;
      edited_by_id: number;
      forum_id: number;
      id: number;
      topic_id: number;
      user_id: number;
      body: {
        html: string;
        raw: string;
      };
    }[];
    search: {
      limit: number;
      sort: string;
    };
    topic: {
      created_at: string;
      deleted_at: string;
      first_post_id: number;
      forum_id: number;
      id: number;
      is_locked: boolean;
      last_post_id: number;
      post_count: number;
      title: string;
      type: string;
      updated_at: string;
      user_id: number;
      poll?: {
        allow_vote_change: boolean;
        ended_at: string;
        hide_incomplete_results: boolean;
        last_vote_at: string;
        max_votes: number;
        started_at: string;
        title: {
          bbcode: string;
          html: string;
        };
        total_vote_count: number;
        options: {
          id: number;
          text: {
            bbcode: string;
            html: string;
          };
          vote_count: number;
        }[];
      } | null;
    };
    cursor: {
      id: number;
    };
    cursor_string: string;
  }>;
};


const name: types = async (topic, obj) => {
  const data = await request(`forums/topics/${topic}`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;