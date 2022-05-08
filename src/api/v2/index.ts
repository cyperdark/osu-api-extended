import user_activity, { types as user_activity_type, description as user_activity_desc } from "./routes/user/activity";
import user_details, { types as user_details_type, description as user_details_desc } from "./routes/user/details";
import user_me_details, { types as user_me_details_type, description as user_me_details_desc } from "./routes/user/me/details";
import user_me_friends, { types as user_me_friends_type, description as user_me_friends_desc } from "./routes/user/me/friends";
import user_me_download_quota, { types as user_me_download_quota_type, description as user_me_download_quota_desc } from "./routes/user/me/download/quota";
import user_list, { types as user_list_type, description as user_list_desc } from "./routes/user/list";
import user_scores_category, { types as user_scores_category_type, description as user_scores_category_desc } from "./routes/user/scores/category";
import user_scores_beatmap_best, { types as user_scores_beatmap_best_type, description as user_scores_beatmap_best_desc } from "./routes/user/scores/beatmap/best";
import user_scores_beatmap_all, { types as user_scores_beatmap_all_type, description as user_scores_beatmap_all_desc } from "./routes/user/scores/beatmap/all";
import user_beatmap_category, { types as user_beatmap_category_type, description as user_beatmap_category_desc } from "./routes/user/beatmaps/category";
import user_beatmap_most_played, { types as user_beatmap_most_played_type, description as user_beatmap_most_played_desc } from "./routes/user/beatmaps/most_played";
import user_beatmap_kudosu, { types as user_beatmap_kudosu_type, description as user_beatmap_kudosu_desc } from "./routes/user/beatmaps/kudosu";


export const user: {
  activity: user_activity_type,
  details: user_details_type,
  me: {
    details: user_me_details_type,
    friends: user_me_friends_type,
    download: {
      quota: user_me_download_quota_type,
    },
  },
  list: user_list_type,
  scores: {
    category: user_scores_category_type,
    beatmap: {
      best: user_scores_beatmap_best_type,
      all: user_scores_beatmap_all_type,
    }
  },
  beatmaps: {
    category: user_beatmap_category_type,
    most_played: user_beatmap_most_played_type,
    kudosu: user_beatmap_kudosu_type,
  },
} = {
  activity: user_activity,
  details: user_details,
  me: {
    details: user_me_details,
    friends: user_me_friends,
    download: {
      quota: user_me_download_quota
    }
  },
  list: user_list,
  scores: {
    category: user_scores_category,
    beatmap: {
      best: user_scores_beatmap_best,
      all: user_scores_beatmap_all,
    }
  },
  beatmaps: {
    category: user_beatmap_category,
    most_played: user_beatmap_most_played,
    kudosu: user_beatmap_kudosu,
  }
};


import beatmap_leaderboard, { types as beatmap_leaderboard_type, description as beatmap_leaderboard_desc } from "./routes/beatmap/leaderboard";
import beatmap_list, { types as beatmap_list_type, description as beatmap_list_desc } from "./routes/beatmap/list";
import beatmap_download, { types as beatmap_download_type, description as beatmap_download_desc } from "./routes/beatmap/download";
import beatmap_set, { types as beatmap_set_type, description as beatmap_set_desc } from "./routes/beatmap/set";
import beatmap_diff, { types as beatmap_diff_type, description as beatmap_diff_desc } from "./routes/beatmap/diff";
import beatmap_search, { types as beatmap_search_type, description as beatmap_search_desc } from "./routes/beatmap/search";
import beatmap_events, { types as beatmap_events_type, description as beatmap_events_desc } from "./routes/beatmap/events";
import beatmap_attributes, { types as beatmap_attributes_type, description as beatmap_attributes_desc } from "./routes/beatmap/attributes";
import beatmap_favourites, { types as beatmap_favourites_type, description as beatmap_favourites_desc } from "./routes/beatmap/favourites";
import beatmap_lookup_set, { types as beatmap_lookup_set_type, description as beatmap_lookup_set_desc } from "./routes/beatmap/lookup/set";
import beatmap_lookup_diff, { types as beatmap_lookup_diff_type, description as beatmap_lookup_diff_desc } from "./routes/beatmap/lookup/diff";
import beatmap_discussions_details, { types as beatmap_discussions_details_type, description as beatmap_discussions_details_desc } from "./routes/beatmap/discussions/details";
import beatmap_discussions_posts, { types as beatmap_discussions_posts_type, description as beatmap_discussions_posts_desc } from "./routes/beatmap/discussions/posts";
import beatmap_discussions_votes, { types as beatmap_discussions_votes_type, description as beatmap_discussions_votes_desc } from "./routes/beatmap/discussions/votes";


export const beatmap: {
  leaderboard: beatmap_leaderboard_type,
  list: beatmap_list_type,
  download: beatmap_download_type,
  set: beatmap_set_type,
  diff: beatmap_diff_type,
  search: beatmap_search_type,
  events: beatmap_events_type,
  attributes: beatmap_attributes_type,
  favourites: beatmap_favourites_type,
  lookup: {
    set: beatmap_lookup_set_type,
    diff: beatmap_lookup_diff_type,
  },
  discussions: {
    details: beatmap_discussions_details_type,
    posts: beatmap_discussions_posts_type,
    votes: beatmap_discussions_votes_type,
  },
} = {
  leaderboard: beatmap_leaderboard,
  list: beatmap_list,
  download: beatmap_download,
  set: beatmap_set,
  diff: beatmap_diff,
  search: beatmap_search,
  events: beatmap_events,
  attributes: beatmap_attributes,
  favourites: beatmap_favourites,
  lookup: {
    set: beatmap_lookup_set,
    diff: beatmap_lookup_diff,
  },
  discussions: {
    details: beatmap_discussions_details,
    posts: beatmap_discussions_posts,
    votes: beatmap_discussions_votes,
  },
};


import scores_details, { types as scores_details_type, description as scores_details_desc } from "./routes/scores/details";
import scores_download, { types as scores_download_type, description as scores_download_desc } from "./routes/scores/download";


export const scores: {
  details: scores_details_type,
  download: scores_download_type,
} = {
  details: scores_details,
  download: scores_download,
};


import forum_topic_details, { types as forum_topic_details_type, description as forum_topic_details_desc } from "./routes/forum/topic/details";


export const forum: {
  topic: {
    details: forum_topic_details_type,
  },
} = {
  topic: {
    details: forum_topic_details,
  },
};


import site_search, { types as site_search_type, description as site_search_desc } from "./routes/site/search";
import site_wiki, { types as site_wiki_type, description as site_wiki_desc } from "./routes/site/wiki";
import site_spotlights_list, { types as site_spotlights_list_type, description as site_spotlights_list_desc } from "./routes/site/spotlights/list";


export const site: {
  search: site_search_type,
  wiki: site_wiki_type,
  spotlights: {
    list: site_spotlights_list_type,
  },
} = {
  search: site_search,
  wiki: site_wiki,
  spotlights: {
    list: site_spotlights_list,
  },
};


import backgrounds_seasonal, { types as backgrounds_seasonal_type, description as backgrounds_seasonal_desc } from "./routes/backgrounds/seasonal";


export const backgrounds: {
  seasonal: backgrounds_seasonal_type,
} = {
  seasonal: backgrounds_seasonal,
};


import news_list, { types as news_list_type, description as news_list_desc } from "./routes/news/list";
import news_details, { types as news_details_type, description as news_details_desc } from "./routes/news/details";


export const news: {
  list: news_list_type,
  details: news_details_type,
} = {
  list: news_list,
  details: news_details,
};


import comments_list, { types as comments_list_type, description as comments_list_desc } from "./routes/comments/list";
import comments_details, { types as comments_details_type, description as comments_details_desc } from "./routes/comments/details";


export const comments: {
  list: comments_list_type,
  details: comments_details_type,
} = {
  list: comments_list,
  details: comments_details,
};


import changelogs_list, { types as changelogs_list_type, description as changelogs_list_desc } from "./routes/changelogs/list";
import changelogs_lookup, { types as changelogs_lookup_type, description as changelogs_lookup_desc } from "./routes/changelogs/lookup";
import changelogs_details, { types as changelogs_details_type, description as changelogs_details_desc } from "./routes/changelogs/details";


export const changelogs: {
  list: changelogs_list_type,
  lookup: changelogs_lookup_type,
  details: changelogs_details_type,
} = {
  list: changelogs_list,
  lookup: changelogs_lookup,
  details: changelogs_details,
};


import ranking_details, { types as ranking_details_type, description as ranking_details_desc } from "./routes/ranking/details";


export const ranking: {
  details: ranking_details_type,
} = {
  details: ranking_details,
};


import matches_list, { types as matches_list_type, description as matches_list_desc } from "./routes/matches/list";
import matches_details, { types as matches_details_type, description as matches_details_desc } from "./routes/matches/details";


export const matches: {
  list: matches_list_type,
  details: matches_details_type,
} = {
  list: matches_list,
  details: matches_details,
};


// import rooms_list, { types as rooms_list_type } from "./routes/rooms/list";
// import rooms_room_details, { types as rooms_room_details_type } from "./routes/rooms/room/details";
// import rooms_room_leaderboard, { types as rooms_room_leaderboard_type } from "./routes/rooms/room/leaderboard";
// import rooms_room_playlist_scores_list, { types as rooms_room_playlist_scores_list_type } from "./routes/rooms/room/playlist/scores/list";
// import rooms_room_playlist_scores_details, { types as rooms_room_playlist_scores_details_type } from "./routes/rooms/room/playlist/scores/details";
// import rooms_room_playlist_scores_user, { types as rooms_room_playlist_scores_user_type } from "./routes/rooms/room/playlist/scores/user";


// export const rooms: {
//   list: rooms_list_type,
//   room: {
//     details: rooms_room_details_type,
//     leaderboard: rooms_room_leaderboard_type,
//     playlist: {
//       scores: {
//         list: rooms_room_playlist_scores_list_type,
//         details: rooms_room_playlist_scores_details_type,
//         user: rooms_room_playlist_scores_user_type,
//       }
//     }
//   }
// } = {
//   list: rooms_list,
//   room: {
//     details: rooms_room_details,
//     leaderboard: rooms_room_leaderboard,
//     playlist: {
//       scores: {
//         list: rooms_room_playlist_scores_list,
//         details: rooms_room_playlist_scores_details,
//         user: rooms_room_playlist_scores_user,
//       }
//     }
//   }
// };


import chat_updates, { types as chat_updates_type, description as chat_updates_desc } from "./routes/chat/updates";
import chat_presense, { types as chat_presense_type, description as chat_presense_desc } from "./routes/chat/presense";
import chat_channel_list, { types as chat_channel_list_type, description as chat_channel_list_desc } from "./routes/chat/channels/list";
import chat_channel_details, { types as chat_channel_details_type, description as chat_channel_details_desc } from "./routes/chat/channels/details";
import chat_channel_messages_list, { types as chat_channel_messages_list_type, description as chat_channel_messages_list_desc } from "./routes/chat/channels/messages/list";
import chat_channel_messages_send, { types as chat_channel_messages_send_type, description as chat_channel_messages_send_desc } from "./routes/chat/channels/messages/send";
import chat_channel_messages_readed, { types as chat_channel_messages_readed_type, description as chat_channel_messages_readed_desc } from "./routes/chat/channels/messages/readed";


export const chat: {
  updates: chat_updates_type,
  presense: chat_presense_type,
  channel: {
    list: chat_channel_list_type,
    details: chat_channel_details_type,
    messages: {
      readed: chat_channel_messages_readed_type,
      list: chat_channel_messages_list_type,
      send: chat_channel_messages_send_type,
    },
  },
} = {
  updates: chat_updates,
  presense: chat_presense,
  channel: {
    list: chat_channel_list,
    details: chat_channel_details,
    messages: {
      readed: chat_channel_messages_readed,
      list: chat_channel_messages_list,
      send: chat_channel_messages_send,
    },
  },
};


import notifications_list, { types as notifications_list_type, description as notifications_list_desc } from "./routes/notifications/list";
import notifications_readed, { types as notifications_readed_type, description as notifications_readed_desc } from "./routes/notifications/readed";


export const notifications: {
  list: notifications_list_type,
  readed: notifications_readed_type,
} = {
  list: notifications_list,
  readed: notifications_readed,
};


import group_list, { types as group_list_type, description as group_list_desc } from "./routes/group/list";


export const group: {
  list: group_list_type,
} = {
  list: group_list,
};


export const desc: {
  user_activity: object,
  user_details: object,
  user_me_details: object,
  user_me_friends: object,
  user_me_download_quota: object,
  user_list: object,
  user_scores_category: object,
  user_scores_beatmap_best: object,
  user_scores_beatmap_all: object,
  user_beatmap_category: object,
  user_beatmap_most_played: object,
  user_beatmap_kudosu: object,
  beatmap_leaderboard: object,
  beatmap_list: object,
  beatmap_download: object,
  beatmap_set: object,
  beatmap_diff: object,
  beatmap_search: object,
  beatmap_events: object,
  beatmap_attributes: object,
  beatmap_favourites: object,
  beatmap_lookup_set: object,
  beatmap_lookup_diff: object,
  beatmap_discussions_details: object,
  beatmap_discussions_posts: object,
  beatmap_discussions_votes: object,
  scores_details: object,
  scores_download: object,
  forum_topic_details: object,
  site_search: object,
  site_wiki: object,
  site_spotlights_list: object,
  backgrounds_seasonal: object,
  news_list: object,
  news_details: object,
  comments_list: object,
  comments_details: object,
  changelogs_list: object,
  changelogs_lookup: object,
  changelogs_details: object,
  ranking_details: object,
  matches_list: object,
  matches_details: object,
  chat_updates: object,
  chat_presense: object,
  chat_channel_list: object,
  chat_channel_details: object,
  chat_channel_messages_list: object,
  chat_channel_messages_send: object,
  chat_channel_messages_readed: object,
  notifications_list: object,
  notifications_readed: object,
  group_list: object,
} = {
  user_activity: user_activity_desc,
  user_details: user_details_desc,
  user_me_details: user_me_details_desc,
  user_me_friends: user_me_friends_desc,
  user_me_download_quota: user_me_download_quota_desc,
  user_list: user_list_desc,
  user_scores_category: user_scores_category_desc,
  user_scores_beatmap_best: user_scores_beatmap_best_desc,
  user_scores_beatmap_all: user_scores_beatmap_all_desc,
  user_beatmap_category: user_beatmap_category_desc,
  user_beatmap_most_played: user_beatmap_most_played_desc,
  user_beatmap_kudosu: user_beatmap_kudosu_desc,
  beatmap_leaderboard: beatmap_leaderboard_desc,
  beatmap_list: beatmap_list_desc,
  beatmap_download: beatmap_download_desc,
  beatmap_set: beatmap_set_desc,
  beatmap_diff: beatmap_diff_desc,
  beatmap_search: beatmap_search_desc,
  beatmap_events: beatmap_events_desc,
  beatmap_attributes: beatmap_attributes_desc,
  beatmap_favourites: beatmap_favourites_desc,
  beatmap_lookup_set: beatmap_lookup_set_desc,
  beatmap_lookup_diff: beatmap_lookup_diff_desc,
  beatmap_discussions_details: beatmap_discussions_details_desc,
  beatmap_discussions_posts: beatmap_discussions_posts_desc,
  beatmap_discussions_votes: beatmap_discussions_votes_desc,
  scores_details: scores_details_desc,
  scores_download: scores_download_desc,
  forum_topic_details: forum_topic_details_desc,
  site_search: site_search_desc,
  site_wiki: site_wiki_desc,
  site_spotlights_list: site_spotlights_list_desc,
  backgrounds_seasonal: backgrounds_seasonal_desc,
  news_list: news_list_desc,
  news_details: news_details_desc,
  comments_list: comments_list_desc,
  comments_details: comments_details_desc,
  changelogs_list: changelogs_list_desc,
  changelogs_lookup: changelogs_lookup_desc,
  changelogs_details: changelogs_details_desc,
  ranking_details: ranking_details_desc,
  matches_list: matches_list_desc,
  matches_details: matches_details_desc,
  chat_updates: chat_updates_desc,
  chat_presense: chat_presense_desc,
  chat_channel_list: chat_channel_list_desc,
  chat_channel_details: chat_channel_details_desc,
  chat_channel_messages_list: chat_channel_messages_list_desc,
  chat_channel_messages_send: chat_channel_messages_send_desc,
  chat_channel_messages_readed: chat_channel_messages_readed_desc,
  notifications_list: notifications_list_desc,
  notifications_readed: notifications_readed_desc,
  group_list: group_list_desc,
} 