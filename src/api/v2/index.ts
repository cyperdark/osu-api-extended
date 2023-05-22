
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

import users_groups_list, { description as users_groups_list_desc } from "./routes/users/groups/list";
import { types as users_groups_list_type } from "../../types/v2_users_groups_list";


export type users = {
  details: users_details_type,
  groups: {
    list: users_groups_list_type,
  },
}

export const users: users = {
  details: users_details,
  groups: {
    list: users_groups_list,
  },
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

export const forums: forums = {
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



import assets_seasonalBackgrounds, { description as assets_seasonalBackgrounds_desc } from "./routes/assets/seasonalBackgrounds";
import { types as assets_seasonalBackgrounds_type } from "../../types/v2_assets_seasonalBackgrounds";


export type assets = {
  seasonalBackgrounds: assets_seasonalBackgrounds_type,
};

export const assets: assets = {
  seasonalBackgrounds: assets_seasonalBackgrounds,
};



import changelogs_list, { description as changelogs_list_desc } from "./routes/changelogs/list";
import { types as changelogs_list_type } from "../../types/v2_changelogs_list";

import changelogs_lookup, { description as changelogs_lookup_desc } from "./routes/changelogs/lookup";
import { types as changelogs_lookup_type } from "../../types/v2_changelogs_lookup";

import changelogs_details, { description as changelogs_details_desc } from "./routes/changelogs/details";
import { types as changelogs_details_type } from "../../types/v2_changelogs_details";


export type changelogs = {
  list: changelogs_list_type,
  lookup: changelogs_lookup_type,
  details: changelogs_details_type,
};

export const changelogs: changelogs = {
  list: changelogs_list,
  lookup: changelogs_lookup,
  details: changelogs_details,
};



import comments_list, { description as comments_list_desc } from "./routes/comments/list";
import { types as comments_list_type } from "../../types/v2_comments_list";

import comments_details, { description as comments_details_desc } from "./routes/comments/details";
import { types as comments_details_type } from "../../types/v2_comments_details";

import comments_new, { description as comments_new_desc } from "./routes/comments/new";
import { types as comments_new_type } from "../../types/v2_comments_new";

import comments_edit, { description as comments_edit_desc } from "./routes/comments/edit";
import { types as comments_edit_type } from "../../types/v2_comments_edit";

import comments_remove, { description as comments_remove_desc } from "./routes/comments/remove";
import { types as comments_remove_type } from "../../types/v2_comments_remove";

import comments_vote, { description as comments_vote_desc } from "./routes/comments/vote";
import { types as comments_vote_type } from "../../types/v2_comments_vote";


export type comments = {
  new: comments_new_type,
  edit: comments_edit_type,
  list: comments_list_type,
  vote: comments_vote_type,
  remove: comments_remove_type,
  details: comments_details_type,
};

export const comments: comments = {
  new: comments_new,
  edit: comments_edit,
  list: comments_list,
  vote: comments_vote,
  remove: comments_remove,
  details: comments_details,
};



import site_search, { description as site_search_desc } from "./routes/site/search";
import { types as site_search_type } from "../../types/v2_site_search";

import site_wiki, { description as site_wiki_desc } from "./routes/site/wiki";
import { types as site_wiki_type } from "../../types/v2_site_wiki";

import site_spotlights_list, { description as site_spotlights_list_desc } from "./routes/site/spotlights/list";
import { types as site_spotlights_list_type } from "../../types/v2_site_spotlights_list";

import site_leaderboard_details, { description as site_leaderboard_details_desc } from "./routes/site/leaderboard/details";
import { types as site_leaderboard_details_type } from "../../types/v2_site_leaderboard_details";

import site_news_list, { description as site_news_list_desc } from "./routes/site/news/list";
import { types as site_news_list_type } from "../../types/v2_site_news_list";

import site_news_details, { description as site_news_details_desc } from "./routes/site/news/details";
import { types as site_news_details_type } from "../../types/v2_site_news_details";


export type site = {
  search: site_search_type,
  wiki: site_wiki_type,
  spotlights: {
    list: site_spotlights_list_type,
  },
  leaderboard: {
    details: site_leaderboard_details_type,
  },
  news: {
    list: site_news_list_type,
    details: site_news_details_type,
  },
};

export const site: site = {
  search: site_search,
  wiki: site_wiki,
  spotlights: {
    list: site_spotlights_list,
  },
  leaderboard: {
    details: site_leaderboard_details,
  },
  news: {
    list: site_news_list,
    details: site_news_details,
  },
};



import matches_list, { description as matches_list_desc } from "./routes/matches/list";
import { types as matches_list_type } from "../../types/v2_matches_list";

import matches_details, { description as matches_details_desc } from "./routes/matches/details";
import { types as matches_details_type } from "../../types/v2_matches_details";


export type matches = {
  list: matches_list_type,
  details: matches_details_type,
};

export const matches: matches = {
  list: matches_list,
  details: matches_details,
};



import rooms_list, { description as rooms_list_desc } from "./routes/rooms/list";
import { types as rooms_list_type } from "../../types/v2_rooms_list";


export type rooms = {
  list: rooms_list_type,
};

export const rooms = {
  list: rooms_list,
};



import room_details, { description as room_details_desc } from "./routes/room/details";
import { types as room_details_type } from "../../types/v2_room_details";

import room_leaderboard, { description as room_leaderboard_desc } from "./routes/room/leaderboard";
import { types as room_leaderboard_type } from "../../types/v2_room_leaderboard";


export type room = {
  details: room_details_type,
  leaderboard: room_leaderboard_type,
};

export const room = {
  details: room_details,
  leaderboard: room_leaderboard,
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
    groups: {
      list: users_groups_list_desc,
    },
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
  assets: {
    seasonalBackgrounds: assets_seasonalBackgrounds_desc,
  },
  changelogs: {
    list: changelogs_list_desc,
    lookup: changelogs_lookup_desc,
    details: changelogs_details_desc,
  },
  comments: {
    new: comments_new_desc,
    edit: comments_edit_desc,
    list: comments_list_desc,
    vote: comments_vote_desc,
    remove: comments_remove_desc,
    details: comments_details_desc,
  },
  site: {
    search: site_search_desc,
    wiki: site_wiki_desc,
    spotlights: {
      list: site_spotlights_list_desc,
    },
    leaderboard: {
      details: site_leaderboard_details_desc,
    },
    news: {
      list: site_news_list_desc,
      details: site_news_details_desc,
    },
  },
  matches: {
    list: matches_list_desc,
    details: matches_details_desc,
  },
  rooms: {
    list: rooms_list_desc,
  },
  room: {
    details: room_details_desc,
    leaderboard: room_leaderboard_desc,
  },
};







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