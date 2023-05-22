
import user_activity, { description as user_activity_desc } from "./routes/user/activity";
import { types as user_activity_type } from "../../types/v2_user_activity";

import user_details, { description as user_details_desc } from "./routes/user/details";
import { types as user_details_type } from "../../types/v2_user_details";

import user_me_details, { description as user_me_details_desc } from "./routes/user/me/details";
import { types as user_me_details_type } from "../../types/v2_user_me_details";

import user_me_friends, { description as user_me_friends_desc } from "./routes/user/me/friends";
import { types as user_me_friends_type } from "../../types/v2_user_me_friends";

import user_me_download_quota, { description as user_me_download_quota_desc } from "./routes/user/me/download/quota";
import { types as user_me_download_quota_type } from "../../types/v2_user_me_download_quota";

import user_beatmaps_category, { description as user_beatmaps_category_desc } from "./routes/user/beatmaps/category";
import { types as user_beatmaps_category_type } from "../../types/v2_user_beatmaps_category";

import user_beatmaps_most_played, { description as user_beatmaps_most_played_desc } from "./routes/user/beatmaps/most_played";
import { types as user_beatmaps_most_played_type } from "../../types/v2_user_beatmaps_most_played";

import user_beatmaps_kudosu, { description as user_beatmaps_kudosu_desc } from "./routes/user/beatmaps/kudosu";
import { types as user_beatmaps_kudosu_type } from "../../types/v2_user_beatmaps_kudosu";


export type user = {
  activity: user_activity_type,
  details: user_details_type,

  beatmaps: {
    kudosu: user_beatmaps_kudosu_type,
    category: user_beatmaps_category_type,
    most_played: user_beatmaps_most_played_type,
  },

  me: {
    details: user_me_details_type,
    friends: user_me_friends_type,
    download: {
      quota: user_me_download_quota_type,
    },
  },
};

export const user: user = {
  activity: user_activity,
  details: user_details,

  beatmaps: {
    kudosu: user_beatmaps_kudosu,
    category: user_beatmaps_category,
    most_played: user_beatmaps_most_played,
  },

  me: {
    details: user_me_details,
    friends: user_me_friends,
    download: {
      quota: user_me_download_quota
    }
  },
};



import users_details, { description as users_details_desc } from "./routes/users/details";
import { types as users_details_type } from "../../types/v2_users_details";


export type users = {
  details: users_details_type,
}

export const users: users = {
  details: users_details,
};



import scores_details, { description as scores_details_desc } from "./routes/scores/details";
import { types as scores_details_type } from "../../types/v2_scores_details";

import scores_download, { description as scores_download_desc } from "./routes/scores/download";
import { types as scores_download_type } from "../../types/v2_scores_download";

import scores_user_category, { description as scores_user_category_desc } from "./routes/scores/user/category";
import { types as scores_user_category_type } from "../../types/v2_scores_user_category";

import scores_user_beatmap, { description as scores_user_beatmap_desc } from "./routes/scores/user/beatmap";
import { types as scores_user_beatmap_type } from "../../types/v2_scores_user_beatmap";

import scores_beatmap, { description as scores_beatmap_desc } from "./routes/scores/beatmap";
import { types as scores_beatmap_type } from "../../types/v2_scores_beatmap";


export type scores = {
  details: scores_details_type,
  download: scores_download_type,

  beatmap: scores_beatmap_type,


  user: {
    category: scores_user_category_type,
    beatmap: scores_user_beatmap_type,
  },
};

export const scores: scores = {
  details: scores_details,
  download: scores_download,

  beatmap: scores_beatmap,

  user: {
    category: scores_user_category,
    beatmap: scores_user_beatmap,
  },
};



import beatmap_id_details, { description as beatmap_id_details_desc } from "./routes/beatmap/id/details";
import { types as beatmap_id_details_type } from "../../types/v2_beatmap_id_details";

import beatmap_id_attributes, { description as beatmap_id_attributes_desc } from "./routes/beatmap/id/attributes";
import { types as beatmap_id_attributes_type } from "../../types/v2_beatmap_id_attributes";

import beatmap_id_lookup, { description as beatmap_id_lookup_desc } from "./routes/beatmap/id/lookup";
import { types as beatmap_id_lookup_type } from "../../types/v2_beatmap_id_lookup";

import beatmap_set_details, { description as beatmap_set_details_desc } from "./routes/beatmap/set/details";
import { types as beatmap_set_details_type } from "../../types/v2_beatmap_set_details";

import beatmap_set_lookup, { description as beatmap_set_lookup_desc } from "./routes/beatmap/set/lookup";
import { types as beatmap_set_lookup_type } from "../../types/v2_beatmap_set_lookup";

import beatmap_set_download, { description as beatmap_set_download_desc } from "./routes/beatmap/set/download";
import { types as beatmap_set_download_type } from "../../types/v2_beatmap_set_download";

import beatmap_set_addToFavourites, { description as beatmap_set_addToFavourites_desc } from "./routes/beatmap/set/addToFavourites";
import { types as beatmap_set_addToFavourites_type } from "../../types/v2_beatmap_set_addToFavourites";

import beatmap_discussions_details, { description as beatmap_discussions_details_desc } from "./routes/beatmap/discussions/details";
import { types as beatmap_discussions_details_type } from "../../types/v2_beatmap_discussions_details";

import beatmap_discussions_posts, { description as beatmap_discussions_posts_desc } from "./routes/beatmap/discussions/posts";
import { types as beatmap_discussions_posts_type } from "../../types/v2_beatmap_discussions_posts";

import beatmap_discussions_votes, { description as beatmap_discussions_votes_desc } from "./routes/beatmap/discussions/votes";
import { types as beatmap_discussions_votes_type } from "../../types/v2_beatmap_discussions_votes";


export type beatmap = {
  id: {
    attributes: beatmap_id_attributes_type,
    lookup: beatmap_id_lookup_type,
    details: beatmap_id_details_type,
  },
  set: {
    lookup: beatmap_set_lookup_type,
    details: beatmap_set_details_type,
    download: beatmap_set_download_type,
    addToFavourites: beatmap_set_addToFavourites_type,
  },
  discussions: {
    votes: beatmap_discussions_votes_type,
    posts: beatmap_discussions_posts_type,
    details: beatmap_discussions_details_type,
  },
};

export const beatmap = {
  id: {
    attributes: beatmap_id_attributes,
    lookup: beatmap_id_lookup,
    details: beatmap_id_details,
  },
  set: {
    lookup: beatmap_set_lookup,
    details: beatmap_set_details,
    download: beatmap_set_download,
    addToFavourites: beatmap_set_addToFavourites,
  },
  discussions: {
    votes: beatmap_discussions_votes,
    posts: beatmap_discussions_posts,
    details: beatmap_discussions_details,
  },
};



import beatmaps_details, { description as beatmaps_details_desc } from "./routes/beatmaps/details";
import { types as beatmaps_details_type } from "../../types/v2_beatmaps_details";

import beatmaps_search, { description as beatmaps_search_desc } from "./routes/beatmaps/search";
import { types as beatmaps_search_type } from "../../types/v2_beatmaps_search";

import beatmaps_events, { description as beatmaps_events_desc } from "./routes/beatmaps/events";
import { types as beatmaps_events_type } from "../../types/v2_beatmaps_events";


export type beatmaps = {
  details: beatmaps_details_type,
  search: beatmaps_search_type,
  events: beatmaps_events_type,
};

export const beatmaps: beatmaps = {
  details: beatmaps_details,
  search: beatmaps_search,
  events: beatmaps_events,
};



import forums_topic_details, { description as forums_topic_details_desc } from "./routes/forums/topic/details";
import { types as forums_topic_details_type } from "../../types/v2_forums_topic_details";

import forums_topic_edit, { description as forums_topic_edit_desc } from "./routes/forums/topic/edit";
import { types as forums_topic_edit_type } from "../../types/v2_forums_topic_edit";

import forums_post_edit, { description as forums_post_edit_desc } from "./routes/forums/post/edit";
import { types as forums_post_edit_type } from "../../types/v2_forums_post_edit";

import forums_topic_new, { description as forums_topic_new_desc } from "./routes/forums/topic/new";
import { types as forums_topic_new_type } from "../../types/v2_forums_topic_new";

import forums_topic_reply, { description as forums_topic_reply_desc } from "./routes/forums/topic/reply";
import { types as forums_topic_reply_type } from "../../types/v2_forums_topic_new";

// import forums_topic_vote, { description as forums_topic_vote_desc } from "./routes/forums/topic/vote";
// import { types as forums_topic_vote_type } from "../../types/v2_forums_topic_details";


export type forums = {
  topic: {
    new: forums_topic_new_type,
    edit: forums_topic_edit_type,
    reply: forums_topic_reply_type,
    // vote: any,
    details: forums_topic_details_type,
  },
  post: {
    edit: forums_post_edit_type,
  }
};

export const forums = {
  topic: {
    new: forums_topic_new,
    edit: forums_topic_edit,
    reply: forums_topic_reply,
    // vote: forums_topic_vote,
    details: forums_topic_details,
  },
  post: {
    edit: forums_post_edit
  },
};




export const description = {
  user: {
    activity: user_activity_desc,
    details: user_details_desc,

    beatmaps: {
      kudosu: user_beatmaps_kudosu_desc,
      category: user_beatmaps_category_desc,
      most_played: user_beatmaps_most_played_desc,
    },

    me: {
      details: user_me_details_desc,
      friends: user_me_friends_desc,
      download: {
        quota: user_me_download_quota_desc,
      },
    },
  },
  users: {
    details: users_details_desc,
  },
  scores: {
    details: scores_details_desc,
    download: scores_download_desc,

    beatmap: scores_beatmap_desc,

    user: {
      category: scores_user_category_desc,
      beatmap: scores_user_beatmap_desc,
    },
  },
  beatmap: {
    id: {
      attributes: beatmap_id_attributes_desc,
      lookup: beatmap_id_lookup_desc,
      details: beatmap_id_details_desc,
    },
    set: {
      lookup: beatmap_set_lookup_desc,
      details: beatmap_set_details_desc,
      download: beatmap_set_download_desc,
      addToFavourites: beatmap_set_addToFavourites_desc,
    },
    discussions: {
      votes: beatmap_discussions_votes_desc,
      posts: beatmap_discussions_posts_desc,
      details: beatmap_discussions_details_desc,
    },
  },
  beatmaps: {
    details: beatmaps_details_desc,
    search: beatmaps_search_desc,
    events: beatmaps_events_desc,
  },
  forums: {
    topic: {
      new: forums_topic_new_desc,
      edit: forums_topic_edit_desc,
      reply: forums_topic_reply_desc,
      // vote: forums_topic_vote_desc,
      details: forums_topic_details_desc,
    },
    post: {
      edit: forums_post_edit_desc,
      // details: forums_topic_details_desc,
    },
  },
};






// import forum_topic_details, { types as forum_topic_details_type, description as forum_topic_details_desc } from "./routes/forum/topic/details";


// export const forum: {
//   topic: {
//     details: forum_topic_details_type,
//   },
// } = {
//   topic: {
//     details: forum_topic_details,
//   },
// };


// import site_search, { types as site_search_type, description as site_search_desc } from "./routes/site/search";
// import site_wiki, { types as site_wiki_type, description as site_wiki_desc } from "./routes/site/wiki";
// import site_spotlights_list, { types as site_spotlights_list_type, description as site_spotlights_list_desc } from "./routes/site/spotlights/list";


// export const site: {
//   search: site_search_type,
//   wiki: site_wiki_type,
//   spotlights: {
//     list: site_spotlights_list_type,
//   },
// } = {
//   search: site_search,
//   wiki: site_wiki,
//   spotlights: {
//     list: site_spotlights_list,
//   },
// };


// import backgrounds_seasonal, { types as backgrounds_seasonal_type, description as backgrounds_seasonal_desc } from "./routes/backgrounds/seasonal";


// export const backgrounds: {
//   seasonal: backgrounds_seasonal_type,
// } = {
//   seasonal: backgrounds_seasonal,
// };


// import news_list, { types as news_list_type, description as news_list_desc } from "./routes/news/list";
// import news_details, { types as news_details_type, description as news_details_desc } from "./routes/news/details";


// export const news: {
//   list: news_list_type,
//   details: news_details_type,
// } = {
//   list: news_list,
//   details: news_details,
// };


// import comments_list, { types as comments_list_type, description as comments_list_desc } from "./routes/comments/list";
// import comments_details, { types as comments_details_type, description as comments_details_desc } from "./routes/comments/details";


// export const comments: {
//   list: comments_list_type,
//   details: comments_details_type,
// } = {
//   list: comments_list,
//   details: comments_details,
// };


// import changelogs_list, { types as changelogs_list_type, description as changelogs_list_desc } from "./routes/changelogs/list";
// import changelogs_lookup, { types as changelogs_lookup_type, description as changelogs_lookup_desc } from "./routes/changelogs/lookup";
// import changelogs_details, { types as changelogs_details_type, description as changelogs_details_desc } from "./routes/changelogs/details";


// export const changelogs: {
//   list: changelogs_list_type,
//   lookup: changelogs_lookup_type,
//   details: changelogs_details_type,
// } = {
//   list: changelogs_list,
//   lookup: changelogs_lookup,
//   details: changelogs_details,
// };


// import ranking_details, { types as ranking_details_type, description as ranking_details_desc } from "./routes/ranking/details";


// export const ranking: {
//   details: ranking_details_type,
// } = {
//   details: ranking_details,
// };


// import matches_list, { types as matches_list_type, description as matches_list_desc } from "./routes/matches/list";
// import matches_details, { types as matches_details_type, description as matches_details_desc } from "./routes/matches/details";


// export const matches: {
//   list: matches_list_type,
//   details: matches_details_type,
// } = {
//   list: matches_list,
//   details: matches_details,
// };


// // import rooms_list, { types as rooms_list_type } from "./routes/rooms/list";
// // import rooms_room_details, { types as rooms_room_details_type } from "./routes/rooms/room/details";
// // import rooms_room_leaderboard, { types as rooms_room_leaderboard_type } from "./routes/rooms/room/leaderboard";
// // import rooms_room_playlist_scores_list, { types as rooms_room_playlist_scores_list_type } from "./routes/rooms/room/playlist/scores/list";
// // import rooms_room_playlist_scores_details, { types as rooms_room_playlist_scores_details_type } from "./routes/rooms/room/playlist/scores/details";
// // import rooms_room_playlist_scores_user, { types as rooms_room_playlist_scores_user_type } from "./routes/rooms/room/playlist/scores/user";


// // export const rooms: {
// //   list: rooms_list_type,
// //   room: {
// //     details: rooms_room_details_type,
// //     leaderboard: rooms_room_leaderboard_type,
// //     playlist: {
// //       scores: {
// //         list: rooms_room_playlist_scores_list_type,
// //         details: rooms_room_playlist_scores_details_type,
// //         user: rooms_room_playlist_scores_user_type,
// //       }
// //     }
// //   }
// // } = {
// //   list: rooms_list,
// //   room: {
// //     details: rooms_room_details,
// //     leaderboard: rooms_room_leaderboard,
// //     playlist: {
// //       scores: {
// //         list: rooms_room_playlist_scores_list,
// //         details: rooms_room_playlist_scores_details,
// //         user: rooms_room_playlist_scores_user,
// //       }
// //     }
// //   }
// // };


// import chat_updates, { types as chat_updates_type, description as chat_updates_desc } from "./routes/chat/updates";
// import chat_presense, { types as chat_presense_type, description as chat_presense_desc } from "./routes/chat/presense";
// import chat_channel_list, { types as chat_channel_list_type, description as chat_channel_list_desc } from "./routes/chat/channels/list";
// import chat_channel_details, { types as chat_channel_details_type, description as chat_channel_details_desc } from "./routes/chat/channels/details";
// import chat_channel_messages_list, { types as chat_channel_messages_list_type, description as chat_channel_messages_list_desc } from "./routes/chat/channels/messages/list";
// import chat_channel_messages_send, { types as chat_channel_messages_send_type, description as chat_channel_messages_send_desc } from "./routes/chat/channels/messages/send";
// import chat_channel_messages_readed, { types as chat_channel_messages_readed_type, description as chat_channel_messages_readed_desc } from "./routes/chat/channels/messages/readed";


// export const chat: {
//   updates: chat_updates_type,
//   presense: chat_presense_type,
//   channel: {
//     list: chat_channel_list_type,
//     details: chat_channel_details_type,
//     messages: {
//       readed: chat_channel_messages_readed_type,
//       list: chat_channel_messages_list_type,
//       send: chat_channel_messages_send_type,
//     },
//   },
// } = {
//   updates: chat_updates,
//   presense: chat_presense,
//   channel: {
//     list: chat_channel_list,
//     details: chat_channel_details,
//     messages: {
//       readed: chat_channel_messages_readed,
//       list: chat_channel_messages_list,
//       send: chat_channel_messages_send,
//     },
//   },
// };


// import notifications_list, { types as notifications_list_type, description as notifications_list_desc } from "./routes/notifications/list";
// import notifications_readed, { types as notifications_readed_type, description as notifications_readed_desc } from "./routes/notifications/readed";


// export const notifications: {
//   list: notifications_list_type,
//   readed: notifications_readed_type,
// } = {
//   list: notifications_list,
//   readed: notifications_readed,
// };


// import group_list, { types as group_list_type, description as group_list_desc } from "./routes/group/list";


// export const group: {
//   list: group_list_type,
// } = {
//   list: group_list,
// };


// // export const desc: {
// //   user_activity: object,
// //   user_details: object,
// //   user_me_details: object,
// //   user_me_friends: object,
// //   user_me_download_quota: object,
// //   user_list: object,
// //   scores_user_category: object,
// //   user_scores_beatmap_best: object,
// //   user_scores_beatmap_all: object,
// //   user_beatmap_category: object,
// //   user_beatmap_most_played: object,
// //   user_beatmap_kudosu: object,
// //   users_list: object,
// //   beatmap_leaderboard: object,
// //   beatmap_list: object,
// //   beatmap_download: object,
// //   beatmap_set: object,
// //   beatmap_diff: object,
// //   beatmap_search: object,
// //   beatmap_events: object,
// //   beatmap_attributes: object,
// //   beatmap_favourites: object,
// //   beatmap_lookup_set: object,
// //   beatmap_lookup_diff: object,
// //   beatmap_discussions_details: object,
// //   beatmap_discussions_posts: object,
// //   beatmap_discussions_votes: object,
// //   scores_details: object,
// //   scores_download: object,
// //   forum_topic_details: object,
// //   site_search: object,
// //   site_wiki: object,
// //   site_spotlights_list: object,
// //   backgrounds_seasonal: object,
// //   news_list: object,
// //   news_details: object,
// //   comments_list: object,
// //   comments_details: object,
// //   changelogs_list: object,
// //   changelogs_lookup: object,
// //   changelogs_details: object,
// //   ranking_details: object,
// //   matches_list: object,
// //   matches_details: object,
// //   chat_updates: object,
// //   chat_presense: object,
// //   chat_channel_list: object,
// //   chat_channel_details: object,
// //   chat_channel_messages_list: object,
// //   chat_channel_messages_send: object,
// //   chat_channel_messages_readed: object,
// //   notifications_list: object,
// //   notifications_readed: object,
// //   group_list: object,
// // } = {
// //   user_activity: user_activity_desc,
// //   user_details: user_details_desc,
// //   user_me_details: user_me_details_desc,
// //   user_me_friends: user_me_friends_desc,
// //   user_me_download_quota: user_me_download_quota_desc,
// //   scores_user_category: scores_user_category_desc,
// //   user_scores_beatmap_all: user_scores_beatmap_all_desc,
// //   user_beatmap_category: user_beatmap_category_desc,
// //   user_beatmap_most_played: user_beatmap_most_played_desc,
// //   user_beatmap_kudosu: user_beatmap_kudosu_desc,
// //   users_list: users_list_desc,
// //   beatmap_leaderboard: beatmap_leaderboard_desc,
// //   beatmap_list: beatmap_list_desc,
// //   beatmap_download: beatmap_download_desc,
// //   beatmap_set: beatmap_set_desc,
// //   beatmap_diff: beatmap_diff_desc,
// //   beatmap_search: beatmap_search_desc,
// //   beatmap_events: beatmap_events_desc,
// //   beatmap_attributes: beatmap_attributes_desc,
// //   beatmap_favourites: beatmap_favourites_desc,
// //   beatmap_lookup_set: beatmap_lookup_set_desc,
// //   beatmap_lookup_diff: beatmap_lookup_diff_desc,
// //   beatmap_discussions_details: beatmap_discussions_details_desc,
// //   beatmap_discussions_posts: beatmap_discussions_posts_desc,
// //   beatmap_discussions_votes: beatmap_discussions_votes_desc,
// //   scores_details: scores_details_desc,
// //   scores_download: scores_download_desc,
// //   forum_topic_details: forum_topic_details_desc,
// //   site_search: site_search_desc,
// //   site_wiki: site_wiki_desc,
// //   site_spotlights_list: site_spotlights_list_desc,
// //   backgrounds_seasonal: backgrounds_seasonal_desc,
// //   news_list: news_list_desc,
// //   news_details: news_details_desc,
// //   comments_list: comments_list_desc,
// //   comments_details: comments_details_desc,
// //   changelogs_list: changelogs_list_desc,
// //   changelogs_lookup: changelogs_lookup_desc,
// //   changelogs_details: changelogs_details_desc,
// //   ranking_details: ranking_details_desc,
// //   matches_list: matches_list_desc,
// //   matches_details: matches_details_desc,
// //   chat_updates: chat_updates_desc,
// //   chat_presense: chat_presense_desc,
// //   chat_channel_list: chat_channel_list_desc,
// //   chat_channel_details: chat_channel_details_desc,
// //   chat_channel_messages_list: chat_channel_messages_list_desc,
// //   chat_channel_messages_send: chat_channel_messages_send_desc,
// //   chat_channel_messages_readed: chat_channel_messages_readed_desc,
// //   notifications_list: notifications_list_desc,
// //   notifications_readed: notifications_readed_desc,
// //   group_list: group_list_desc,
// // } 