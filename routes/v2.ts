import { beatmaps_events_list } from "../api/v2/beatmaps_events_list";
import beatmaps_lookup from "../api/v2/beatmaps_lookup";
import beatmaps_details from "../api/v2/beatmaps_details";
import beatmaps_download from "../api/v2/beatmaps_download";
import beatmap_packs_list from "../api/v2/beatmap_packs_list";
import beatmap_packs_details from "../api/v2/beatmap_packs_details";
import beatmaps_discussions_list from "../api/v2/beatmaps_discussions_list";
import beatmaps_discussions_posts from "../api/v2/beatmaps_discussions_posts";
import beatmaps_discussions_votes from "../api/v2/beatmaps_discussions_votes";

import beatmaps_actions from "../api/v2/beatmaps_actions";


export const beatmaps = {
  packs: {
    list: beatmap_packs_list,
    details: beatmap_packs_details,
  },
  lookup: beatmaps_lookup,
  details: beatmaps_details,
  events: {
    list: beatmaps_events_list,
  },
  download: beatmaps_download,
  discussions: {
    list: beatmaps_discussions_list,
    posts: beatmaps_discussions_posts,
    votes: beatmaps_discussions_votes,
  },
  actions: beatmaps_actions,
};




import changelogs_list from '../api/v2/changelogs_list';
import changelogs_details from '../api/v2/changelogs_details';


export const changelogs = {
  list: changelogs_list,
  details: changelogs_details,
};




import comments_list from '../api/v2/comments_list';
import comments_details from '../api/v2/comments_details';
import comments_actions from '../api/v2/comments_actions';


export const comments = {
  list: comments_list,
  details: comments_details,
  actions: comments_actions,
};




import users_list from "../api/v2/users_list";
import users_events from "../api/v2/users_events";
import users_details from "../api/v2/users_details";
import users_activity from "../api/v2/users_activity";
import users_beatmaps from "../api/v2/users_beatmaps";
import users_kudosu from "../api/v2/users_kudosu";


export const users = {
  list: users_list,
  kudosu: users_kudosu,
  events: users_events,
  details: users_details,
  beatmaps: users_beatmaps,
  activity: users_activity,
};




import scores_list from "../api/v2/scores_list";
import scores_details from "../api/v2/scores_details";
import scores_download from "../api/v2/scores_download";


export const scores = {
  list: scores_list,
  details: scores_details,
  download: scores_download,
};



import forums_topic_details from '../api/v2/forums_topics_details';
import forums_topics_actions from '../api/v2/forums_topics_actions';

export const forums = {
  topics: {
    details: forums_topic_details,
    actions: forums_topics_actions,
  },
};



import search_all from '../api/v2/search';

export const search = search_all;



import { assets_backgrounds } from "../api/v2/assets_backgrounds";
import { assets_dataFiles } from "../api/v2/assets_dataFiles";


export const assets = {
  backgrounds: assets_backgrounds,
  dataFiles: assets_dataFiles
};



import news_list from "../api/v2/news_list";
import news_details from "../api/v2/news_details";


export const news = {
  list: news_list,
  details: news_details,
};




import notifications_list from '../api/v2/notifications_list';
import notification_actions from '../api/v2/notification_actions';


export const notifications = {
  list: notifications_list,
  actions: notification_actions,
};



import ranking_list from "../api/v2/ranking_list";


export const ranking = {
  list: ranking_list,
};



import spotlights_list from "../api/v2/spotlights_list";


export const spotlights = {
  list: spotlights_list,
};



import wiki_details from "../api/v2/wiki_details";


export const wiki = {
  details: wiki_details,
};



import me_details from "../api/v2/me_details";
import me_friends from "../api/v2/me_friends";
import me_download_quota from "../api/v2/me_download_quota";


export const me = {
  download_quota: me_download_quota,
  friends: me_friends,
  details: me_details,
};



import matches_list from "../api/v2/matches_list";
import matches_details from "../api/v2/matches_details";


export const matches = {
  list: matches_list,
  details: matches_details,
};



import chat_channels_list from "../api/v2/chat_channels_list";
import chat_channels_actions from "../api/v2/chat_channels_actions";

import chat_list from "../api/v2/chat_list";
import chat_messages from "../api/v2/chat_messages";
import chat_updates from "../api/v2/chat_updates";
import chat_details from "../api/v2/chat_details";
import chat_actions from "../api/v2/chat_actions";


export const chat = {
  channels: {
    list: chat_channels_list,
    actions: chat_channels_actions,
  },
  list: chat_list,
  messages: chat_messages,
  updates: chat_updates,
  details: chat_details,
  actions: chat_actions,
};



import session_actions from "../api/v2/session_actions";


export const session = {
  actions: session_actions,
};



import rooms_list from "../api/v2/rooms_list";
import rooms_details from "../api/v2/rooms_details";
import rooms_leaderboard from "../api/v2/rooms_leaderboard";
import rooms_scores from "../api/v2/rooms_scores";


export const rooms = {
  list: rooms_list,
  scores: rooms_scores,
  details: rooms_details,
  leaderboard: rooms_leaderboard,
};