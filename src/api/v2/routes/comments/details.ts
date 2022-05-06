import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (comment: number): Promise<{
    comments: {
      id: number;
      parent_id: number;
      user_id: number;
      pinned: boolean;
      replies_count: number;
      votes_count: number;
      commentable_type: string;
      commentable_id: number;
      legacy_name: string;
      created_at: string;
      updated_at: string;
      deleted_at: string;
      edited_at: string;
      edited_by_id: number;
      message: string;
      message_html: string;
    }[];
    has_more: boolean;
    has_more_id: number;
    included_comments: {
      id: number;
      parent_id: number;
      user_id: number;
      pinned: boolean;
      replies_count: number;
      votes_count: number;
      commentable_type: string;
      commentable_id: number;
      legacy_name: string;
      created_at: string;
      updated_at: string;
      deleted_at: string;
      edited_at: string;
      edited_by_id: number;
      message: string;
      message_html: string;
    }[];
    pinned_comments: [];
    user_votes: [];
    user_follow: boolean;
    users: {
      avatar_url: string;
      country_code: string;
      default_group: string;
      id: number;
      is_active: boolean;
      is_bot: boolean;
      is_deleted: boolean;
      is_online: boolean;
      is_supporter: boolean;
      last_visit: string;
      pm_friends_only: boolean;
      profile_colour: string;
      username: string;
    }[];
    sort: string;
    cursor: {
      votes_count: number;
      created_at: string;
      id: number;
    };
    commentable_meta: {
      id: number;
      type: string;
      title: string;
      url: string;
      owner_id: number;
      owner_title: string;
    }[];
  }>;
};


const name: types = async (comment) => {
  const data = await request(`comments/${comment}`, {
    method: 'GET',
  });

  return data;
};


export default name;