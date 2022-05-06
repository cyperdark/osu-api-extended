import user_activity, { types as user_activity_type } from "./routes/user/activity";
import user_details, { types as user_details_type } from "./routes/user/details";
import user_me_details, { types as user_me_details_type } from "./routes/user/me-details";
import user_me_friends, { types as user_me_friends_type } from "./routes/user/friends";
// import user_me_download_quota, { types as user_me_download_quota_type } from "./routes/user-me-download-quota";
import user_list, { types as user_list_type } from "./routes/user/list";
import user_scores_category, { types as user_scores_category_type } from "./routes/user/scores";
import user_scores_beatmap, { types as user_scores_beatmap_type } from "./routes/user/scores-beatmap";
import user_scores_beatmap_all, { types as user_scores_beatmap_all_type } from "./routes/user/scores-beatmap-all";
import user_beatmap_category, { types as user_beatmap_category_type } from "./routes/user/beatmaps-category";
import user_beatmap_category_most, { types as user_beatmap_category_most_type } from "./routes/user/beatmaps-most-played";
import user_beatmap_kudosu, { types as user_beatmap_kudosu_type } from "./routes/user/beatmaps-kudosu";


export const user: {
  activity: user_activity_type,
  details: user_details_type,
  me: {
    details: user_me_details_type,
    friends: user_me_friends_type,
    // download: {
    //   quota: user_me_download_quota_type,
    // },
  },
  list: user_list_type,
  scores: {
    category: user_scores_category_type,
    beatmap: {
      best: user_scores_beatmap_type,
      all: user_scores_beatmap_all_type,
    }
  },
  beatmaps: {
    category: user_beatmap_category_type,
    most_played: user_beatmap_category_most_type,
    kudosu: user_beatmap_kudosu_type,
  },
} = {
  activity: user_activity,
  details: user_details,
  me: {
    details: user_me_details,
    friends: user_me_friends,
    // download: {
    //   quota: user_me_download_quota
    // }
  },
  list: user_list,
  scores: {
    category: user_scores_category,
    beatmap: {
      best: user_scores_beatmap,
      all: user_scores_beatmap_all,
    }
  },
  beatmaps: {
    category: user_beatmap_category,
    most_played: user_beatmap_category_most,
    kudosu: user_beatmap_kudosu,
  }
};


import beatmap_leaderboard, { types as beatmap_leaderboard_type } from "./routes/beatmap/leaderboard";
import beatmap_list, { types as beatmap_list_type } from "./routes/beatmap/list";
import beatmap_download, { types as beatmap_download_type } from "./routes/beatmap/download";
import beatmap_set, { types as beatmap_set_type } from "./routes/beatmap/set";
import beatmap_diff, { types as beatmap_diff_type } from "./routes/beatmap/diff";
import beatmap_search, { types as beatmap_search_type } from "./routes/beatmap/search";
import beatmap_events, { types as beatmap_events_type } from "./routes/beatmap/events";
import beatmap_lookup_set, { types as beatmap_lookup_set_type } from "./routes/beatmap/lookup/set";
// import beatmap_lookup_diff, { types as beatmap_lookup_diff_type } from "./routes/beatmap/lookup/diff";
import beatmap_discussions_details, { types as beatmap_discussions_details_type } from "./routes/beatmap/discussions/details";
import beatmap_discussions_posts, { types as beatmap_discussions_posts_type } from "./routes/beatmap/discussions/posts";
import beatmap_discussions_votes, { types as beatmap_discussions_votes_type } from "./routes/beatmap/discussions/votes";


export const beatmap: {
  leaderboard: beatmap_leaderboard_type,
  list: beatmap_list_type,
  download: beatmap_download_type,
  set: beatmap_set_type,
  diff: beatmap_diff_type,
  search: beatmap_search_type,
  events: beatmap_events_type,
  lookup: {
    set: beatmap_lookup_set_type,
    // diff: beatmap_lookup_diff_type,
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
  lookup: {
    set: beatmap_lookup_set,
    // diff: beatmap_lookup_diff,
  },
  discussions: {
    details: beatmap_discussions_details,
    posts: beatmap_discussions_posts,
    votes: beatmap_discussions_votes,
  },
};


import scores_id, { types as scores_id_type } from "./routes/scores/id";
import scores_download, { types as scores_download_type } from "./routes/scores/download";


export const scores: {
  id: scores_id_type,
  download: scores_download_type,
} = {
  id: scores_id,
  download: scores_download,
};


import forum_topics_get, { types as forum_topics_get_type } from "./routes/forum/topics/get";


export const forum: {
  topics: {
    get: forum_topics_get_type,
  },
} = {
  topics: {
    get: forum_topics_get,
  },
};


import site_search, { types as site_search_type } from "./routes/site/search";
import site_wiki, { types as site_wiki_type } from "./routes/site/wiki";
import site_spotlights, { types as site_spotlights_type } from "./routes/site/spotlights";


export const site: {
  search: site_search_type,
  wiki: site_wiki_type,
  spotlights: {
    list: site_spotlights_type,
  },
} = {
  search: site_search,
  wiki: site_wiki,
  spotlights: {
    list: site_spotlights,
  },
};


import backgrounds_seasonal, { types as backgrounds_seasonal_type } from "./routes/backgrounds/seasonal";


export const backgrounds: {
  seasonal: backgrounds_seasonal_type,
} = {
  seasonal: backgrounds_seasonal,
};


import news_list, { types as news_list_type } from "./routes/news/list";
import news_details, { types as news_details_type } from "./routes/news/details";


export const news: {
  list: news_list_type,
  details: news_details_type,
} = {
  list: news_list,
  details: news_details,
};


import comments_list, { types as comments_list_type } from "./routes/comments/list";
import comments_details, { types as comments_details_type } from "./routes/comments/details";


export const comments: {
  list: comments_list_type,
  details: comments_details_type,
} = {
  list: comments_list,
  details: comments_details,
};


import changelogs_list, { types as changelogs_list_type } from "./routes/changelogs/list";
import changelogs_lookup, { types as changelogs_lookup_type } from "./routes/changelogs/lookup";
import changelogs_details, { types as changelogs_details_type } from "./routes/changelogs/details";


export const changelogs: {
  list: changelogs_list_type,
  lookup: changelogs_lookup_type,
  details: changelogs_details_type,
} = {
  list: changelogs_list,
  lookup: changelogs_lookup,
  details: changelogs_details,
};


import ranking_details, { types as ranking_details_type } from "./routes/ranking/details";


export const ranking: {
  details: ranking_details_type,
} = {
  details: ranking_details,
};


import matches_list, { types as matches_list_type } from "./routes/matches/list";
import matches_details, { types as matches_details_type } from "./routes/matches/details";


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


import chat_updates, { types as chat_updates_type } from "./routes/chat/updates";
import chat_presence, { types as chat_presence_type } from "./routes/chat/presence";
import chat_channels_list, { types as chat_channels_list_type } from "./routes/chat/channels/list";
import chat_channels_details, { types as chat_channels_details_type } from "./routes/chat/channels/details";
import chat_channels_messages, { types as chat_channels_messages_type } from "./routes/chat/channels/messages";


export const chat: {
  updates: chat_updates_type,
  list: chat_presence_type,
  channels: {
    list: chat_channels_list_type,
    details: chat_channels_details_type,
    messages: chat_channels_messages_type,
  },
} = {
  updates: chat_updates,
  list: chat_presence,
  channels: {
    list: chat_channels_list,
    details: chat_channels_details,
    messages: chat_channels_messages,
  },
};


import notifications_list, { types as notifications_list_type } from "./routes/notifications/list";


export const notifications: {
  list: notifications_list_type,
} = {
  list: notifications_list,
};