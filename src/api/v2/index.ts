
import user_activity, { description as user_activity_desc } from "./routes/user/activity";
import user_details, { description as user_details_desc } from "./routes/user/details";
import user_me_details, { description as user_me_details_desc } from "./routes/user/me/details";
import user_me_friends, { description as user_me_friends_desc } from "./routes/user/me/friends";
import user_me_download_quota, { description as user_me_download_quota_desc } from "./routes/user/me/download/quota";
import user_beatmaps_category, { description as user_beatmaps_category_desc } from "./routes/user/beatmaps/category";
import user_beatmaps_most_played, { description as user_beatmaps_most_played_desc } from "./routes/user/beatmaps/most_played";
import user_beatmaps_kudosu, { description as user_beatmaps_kudosu_desc } from "./routes/user/beatmaps/kudosu";

export const user = {
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
import users_groups_list, { description as users_groups_list_desc } from "./routes/users/groups/list";

export const users = {
  details: users_details,
  groups: {
    list: users_groups_list,
  },
};



import scores_details, { description as scores_details_desc } from "./routes/scores/details";
import scores_download, { description as scores_download_desc } from "./routes/scores/download";
import scores_user_category, { description as scores_user_category_desc } from "./routes/scores/user/category";
import scores_user_beatmap, { description as scores_user_beatmap_desc } from "./routes/scores/user/beatmap";
import scores_beatmap, { description as scores_beatmap_desc } from "./routes/scores/beatmap";

export const scores = {
  details: scores_details,
  download: scores_download,

  beatmap: scores_beatmap,

  user: {
    category: scores_user_category,
    beatmap: scores_user_beatmap,
  },
};



import beatmap_id_details, { description as beatmap_id_details_desc } from "./routes/beatmap/id/details";
import beatmap_id_attributes, { description as beatmap_id_attributes_desc } from "./routes/beatmap/id/attributes";
import beatmap_id_lookup, { description as beatmap_id_lookup_desc } from "./routes/beatmap/id/lookup";
import beatmap_set_details, { description as beatmap_set_details_desc } from "./routes/beatmap/set/details";
import beatmap_set_lookup, { description as beatmap_set_lookup_desc } from "./routes/beatmap/set/lookup";
import beatmap_set_download, { description as beatmap_set_download_desc } from "./routes/beatmap/set/download";
import beatmap_set_addToFavourites, { description as beatmap_set_addToFavourites_desc } from "./routes/beatmap/set/addToFavourites";
import beatmap_discussions_details, { description as beatmap_discussions_details_desc } from "./routes/beatmap/discussions/details";
import beatmap_discussions_posts, { description as beatmap_discussions_posts_desc } from "./routes/beatmap/discussions/posts";
import beatmap_discussions_votes, { description as beatmap_discussions_votes_desc } from "./routes/beatmap/discussions/votes";

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
import beatmaps_search, { description as beatmaps_search_desc } from "./routes/beatmaps/search";
import beatmaps_events, { description as beatmaps_events_desc } from "./routes/beatmaps/events";

export const beatmaps = {
  details: beatmaps_details,
  search: beatmaps_search,
  events: beatmaps_events,
};



import forums_topic_details, { description as forums_topic_details_desc } from "./routes/forums/topic/details";
import forums_topic_edit, { description as forums_topic_edit_desc } from "./routes/forums/topic/edit";
import forums_post_edit, { description as forums_post_edit_desc } from "./routes/forums/post/edit";
import forums_topic_new, { description as forums_topic_new_desc } from "./routes/forums/topic/new";
import forums_topic_reply, { description as forums_topic_reply_desc } from "./routes/forums/topic/reply";
// import forums_topic_vote, { description as forums_topic_vote_desc } from "./routes/forums/topic/vote";
//

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



import assets_seasonalBackgrounds, { description as assets_seasonalBackgrounds_desc } from "./routes/assets/seasonalBackgrounds";

export const assets = {
  seasonalBackgrounds: assets_seasonalBackgrounds,
};



import changelogs_list, { description as changelogs_list_desc } from "./routes/changelogs/list";
import changelogs_lookup, { description as changelogs_lookup_desc } from "./routes/changelogs/lookup";
import changelogs_details, { description as changelogs_details_desc } from "./routes/changelogs/details";

export const changelogs = {
  list: changelogs_list,
  lookup: changelogs_lookup,
  details: changelogs_details,
};



import comments_list, { description as comments_list_desc } from "./routes/comments/list";
import comments_details, { description as comments_details_desc } from "./routes/comments/details";
import comments_new, { description as comments_new_desc } from "./routes/comments/new";
import comments_edit, { description as comments_edit_desc } from "./routes/comments/edit";
import comments_remove, { description as comments_remove_desc } from "./routes/comments/remove";
import comments_vote, { description as comments_vote_desc } from "./routes/comments/vote";

export const comments = {
  new: comments_new,
  edit: comments_edit,
  list: comments_list,
  vote: comments_vote,
  remove: comments_remove,
  details: comments_details,
};



import site_search, { description as site_search_desc } from "./routes/site/search";
import site_wiki, { description as site_wiki_desc } from "./routes/site/wiki";
import site_spotlights_list, { description as site_spotlights_list_desc } from "./routes/site/spotlights/list";
import site_leaderboard_details, { description as site_leaderboard_details_desc } from "./routes/site/leaderboard/details";
import site_news_list, { description as site_news_list_desc } from "./routes/site/news/list";
import site_news_details, { description as site_news_details_desc } from "./routes/site/news/details";

export const site = {
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
import matches_details, { description as matches_details_desc } from "./routes/matches/details";
export const matches = {
  list: matches_list,
  details: matches_details,
};



import rooms_list, { description as rooms_list_desc } from "./routes/rooms/list";

export const rooms = {
  list: rooms_list,
};



import room_details, { description as room_details_desc } from "./routes/room/details";
import room_leaderboard, { description as room_leaderboard_desc } from "./routes/room/leaderboard";

export const room = {
  details: room_details,
  leaderboard: room_leaderboard,
};



import notifications_list, { description as notifications_list_desc } from "./routes/notifications/list";
import notifications_markAsReaded, { description as notifications_markAsReaded_desc } from "./routes/notifications/markAsReaded";

export const notifications = {
  list: notifications_list,
  // markAsReaded: notifications_markAsReaded, // TODO:
};



import chat_channels_list, { description as chat_channels_list_desc } from "./routes/chat/channels/list";
import chat_channels_details, { description as chat_channels_details_desc } from "./routes/chat/channels/details";
import chat_channels_join, { description as chat_channels_join_desc } from "./routes/chat/channels/join";
import chat_channels_leave, { description as chat_channels_leave_desc } from "./routes/chat/channels/leave";
import chat_new, { description as chat_new_desc } from "./routes/chat/new";
import chat_updates, { description as chat_updates_desc } from "./routes/chat/updates";
import chat_channels_messages_list, { description as chat_channels_messages_list_desc } from "./routes/chat/channels/messages/list";
import chat_channels_messages_send, { description as chat_channels_messages_send_desc } from "./routes/chat/channels/messages/send";
import chat_channels_messages_markAsReaded, { description as chat_channels_messages_markAsReaded_desc } from "./routes/chat/channels/messages/markAsReaded";

export const chat = {
  new: chat_new,
  updates: chat_updates,
  channels: {
    list: chat_channels_list,
    join: chat_channels_join,
    leave: chat_channels_leave,
    details: chat_channels_details,
    messages: {
      list: chat_channels_messages_list,
      send: chat_channels_messages_send,
      markAsReaded: chat_channels_messages_markAsReaded,
    }
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
  notifications: {
    list: notifications_list_desc,
    markAsReaded: notifications_markAsReaded_desc,
  },
  chat: {
    new: chat_new_desc,
    updates: chat_updates_desc,
    channels: {
      list: chat_channels_list_desc,
      join: chat_channels_join_desc,
      leave: chat_channels_leave_desc,
      details: chat_channels_details_desc,
      messages: {
        list: chat_channels_messages_list_desc,
        send: chat_channels_messages_send_desc,
        markAsReaded: chat_channels_messages_markAsReaded_desc,
      }
    },
  },
};