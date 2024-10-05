Migration from `v2` to `v3`

```diff
-v2.user.activity(user, { limit, offset });
+v2.users.activity({ id; limit?; offset?; });
```

```diff
-v2.user.details(user, mode?, key?);
+v2.users.details({ user?; mode?; key? });
```

```diff
-v2.user.beatmaps.kudosu(user, { limit?; offset?; });
+v2.users.kudosu({ id; limit?; offset?; });
```

```diff
-v2.user.beatmaps.category(user, type, { limit?; offset?; });
+v2.users.beatmaps({ type; id; limit?; offset?; });
```

```diff
-v2.user.beatmaps.most_played(user, { limit?; offset?; });
+v2.users.beatmaps({ type: 'most_played'; id; limit?; offset?; });
```

```diff
-v2.user.me.details(mode?);
+v2.me.details({ mode? });
```

```diff
-v2.user.me.friends();
+v2.me.friends();
```

```diff
-v2.user.me.download.quota();
+v2.me.download_quota();
```

```diff
-v2.users.details(ids);
+v2.users.list({ ids; include_variants?; });
```

```diff
-v2.users.events({ sort?; cursor_string?; type?; });
+v2.users.events({ sort?; cursor_string?; type?; });
```

```diff
-v2.users.groups.list(id)
+v2.groups.details({ id });
```

```diff
-v2.scores.details(score_id, mode);
+v2.scores.details({ id; mode?; });
```

```diff
-v2.scores.download(score_id, mode, file_path);
+v2.scores.download({ id; mode?; file_path?; });
```

```diff
-v2.scores.beatmap(beatmap, { mode?; mods?; type?; });
+v2.scores.list({ type: 'leaderboard'; leaderboard_type?; beatmap_id; mods?; });
```

```diff
-v2.scores.user.category(user, type, { include_fails?; mode?; mods?; limit?; offset?; });
+v2.scores.list({ type: 'user_best' | 'user_firsts' | 'user_recent' | 'user_pinned'; user_id; include_fails?; offset?; limit?; });
```

```diff
-v2.scores.user.beatmap(beatmap, user?, { mode?; mods?; best_only?; });
+v2.scores.list({ type: 'user_beatmap_best' | 'user_beatmap_all' beatmap_id; user_id; mods?; });
```

```diff
-v2.beatmap.id.attributes(beatmap_id, { mods?; ruleset?; ruleset_id?; });
+v2.beatmaps.lookup({ type: 'attributes', id; mods?; mode?; });
```

```diff
-v2.beatmap.id.lookup({ id?; checksum?; filename?; });
+v2.beatmaps.lookup({ type: 'difficulty', id?; checksum?; filename?; });
```

```diff
-v2.beatmap.id.details(beatmap);
+v2.beatmaps.details({ type: 'difficulty', id });
```

```diff
-v2.beatmap.set.lookup(beatmap_id);
+v2.beatmaps.lookup({ type: 'set', id });
```

```diff
-v2.beatmap.set.details(beatmapset);
+v2.beatmaps.details({ type: 'set', id });
```

```diff
-v2.beatmap.set.download(beatmapset, file_path, host_name, no_video, callback?);
+v2.beatmaps.download({ type: 'set'; id; host; file_path; no_video?; overwrite?; progress_track_fn?; });
```

```diff
-v2.beatmap.set.addToFavourites(beatmapset_id, action);
// not working for some reason
+v2.beatmaps.actions;
```

```diff
-v2.beatmap.discussions.votes({ beatmapset_discussion_id?; limit?; page?; receiver?; score?; sort?; user?; });
+v2.beatmaps.discussions.votes({ discussion_id?; sort?; score?; user?; receiver?; limit?; cursor_string?; });
```

```diff
-v2.beatmap.discussions.posts({ beatmapset_discussion_id?; limit?; page?; sort?; types?; user?; });
+v2.beatmaps.discussions.posts({ discussion_id?; sort?; types?; user?; limit?; cursor_string?; });
```

```diff
-v2.beatmap.discussions.details({ beatmap_id?; beatmapset_id?; beatmapset_status?; limit?; message_types?; only_unresolved?; page?; sort?; user?; });
+v2.beatmaps.discussions.list({ only_unresolved?; user?; beatmap_id?; beatmapset_id?; beatmapset_status?; message_types?; limit?; sort?; cursor_string?; });
```

```diff
-v2.beatmaps.details(ids);
+v2.beatmaps.lookup({ type: 'difficulties'; ids; })
```

```diff
-v2.beatmaps.search({ query?; sort?; general?; mode?; section?; genre?; language?; include?; rank?; nfsw?; played?; cursor_string?; });
+v2.search({ type: 'beatmaps'; _played?; _nsfw?; query?; mode?; status?; category?; genre?; language?; achieved_rank?; extra?; sort?; cursor_string?; });
```

```diff
-v2.beatmaps.events({ user?; types?; min_date?; max_date?; });
+v2.beatmaps.events.list({ user?; types?; min_date?; max_date?; });
```

```diff
-v2.forums.topic.new(forum_id, { title; body; }, { title; options; hide_results?; length_days?; max_options?; vote_change?; });
+v2.forums.topics.actions({ type: 'create'; forum_id; title; message; enable_poll; poll?: { allow_vote_change?; hide_results?; title; options; max_votes_per_user?; duration_days?; });
```

```diff
-v2.forums.topic.edit(topic_id, { title? body? });
+v2.forums.topics.actions({ type: 'edit_topic', topic_id?; post_id?; title?; message?; });
```

```diff
-v2.forums.topic.reply(topic_id, body);
+v2.forums.topics.actions({ type: 'reply', post_id; message; });
```

```diff
-v2.forums.topic.details(topic, { cursor_string?; sort?; limit?; start?; end?; });
+v2.forums.topics.details({ id; start_id?; end_id?; limit?; sort?; cursor_string?; });
```

```diff
-v2.forums.post.edit(post_id, body);
+v2.forums.topics.actions({ type: 'edit_post'; post_id; message });
```

```diff
-v2.assets.seasonalBackgrounds();
+v2.assets.backgrounds({ type: 'seasonal' });
```

```diff
-v2.changelogs.list({ from?; to?; max_id?; stream?; message_formats?; });
+v2.changelogs.list({ type: 'all'; from_build?; to_build?; stream_name?; max_id?; message_formats?; });
```

```diff
-v2.changelogs.lookup(changelog, { key; message_formats;});
+v2.changelogs.list({ type: 'lookup'; message_formats; changelog; key; });
```

```diff
-v2.changelogs.details(stream, build);
+v2.changelogs.details({ stream_name; build_version; });
```

```diff
-v2.comments.new({ commentable_id?; commentable_type?; message?; parent_id?; });
+v2.comments.actions({ type: 'new', commentable_type; id; parent_id?; message; });
```

```diff
-v2.comments.edit(comment_id, message);
+v2.comments.actions({ type: 'edit', id; message; });
```

```diff
-v2.comments.list({ commentable_type?; commentable_id?; cursor: { id?; created_at?; }; parent_id?; sort?; });
+v2.comments.list({ type?; id?; parent_id?; after_id?; cursor?: { id; created_at; }; sort?; });
```

```diff
-v2.comments.vote(comment_id: number, type: boolean);
+v2.comments.actions({ type: 'vote'; id; });
+v2.comments.actions({ type: 'unvote'; id; });
```

```diff
-v2.comments.remove(comment_id);
+v2.comments.actions({ type: 'delete'; id; });
```

```diff
-v2.comments.details(comment);
+v2.comments.details(comment_id);
```

```diff
-v2.site.search({ mode?; query?; page?; });
+v2.search({ type: 'site'; location?; query?; page?; });
```

```diff
-v2.site.wiki(language, path);
+v2.wiki.details({ locale; path_name; });
```

```diff
-v2.site.spotlights.list();
+v2.spotlights.list();
```

```diff
-v2.site.ranking.details(mode, type, { country?; "cursor[page]"?; filter?; spotlight?; variant?; });
+v2.ranking.list({ type;  spotlight_id?; filter?; mode?; county_code?; page?; variant?; });
```

```diff
-v2.site.news.list({ limit?; year?; cursorPublished?; cursorId?; });
+v2.news.list({ from_year?; limit?; cursor_string?; });
```

```diff
-v2.site.news.details(news, key);
+v2.news.detals({ news_id; key; });
```

```diff
-v2.matches.list();
+v2.matches.list({ limit?; sort?; after_id?; });
```

```diff
-v2.matches.details(match);
+v2.matches.details({ match_id });
```

```diff
-v2.rooms.list(mode, { category?; limit?; season_id?; type_group?; });
+v2.rooms.list({ type?; status?; query?; limit?; sort?; cursor_string?; });
```

```diff
-v2.room.details(room_id);
+v2.rooms.details({ id });
```

```diff
-v2.room.leaderboard(room_id);
+v2.rooms.leaderboard({ id; limit?; });
```

```diff
-v2.notifications.list(max_id);
+v2.notifications.list({ max_id; unread_only; });
```

```diff
-v2.chat.new(target_id, message, is_action?, uuid?);
+v2.chat.actions({ type: 'new'; is_action; user_id; message; uuid?; });
```

```diff
-v2.chat.updates({ history_since?; includes?; since; });
+v2.chat.updates({ after_id?; includes?; history_since?; });
```

```diff
-v2.chat.channels.list();
+v2.chat.channels.list();
// they are the same
```

```diff
-v2.chat.channels.join(channel_id, user_id)
+v2.chat.channels.actions({ type: 'join'; channel_id; user_id; });
```

```diff
-v2.chat.channels.leave(channel_id, user_id);
+v2.chat.channels.actions({ type: 'leave'; channel_id; user_id; });
```

```diff
-v2.chat.channels.details(channel?);
+v2.chat.details({ channel_id });
```

```diff
-v2.chat.channels.messages.list(channel_id, { limit?; since?; until?; });
+v2.chat.messages({ channel_id:; limit?; since?; until?; return_object?; });
```

```diff
-v2.chat.channels.messages.send(channel_id, message, is_action);
+v2.chat.channels.actions({ type: 'send'; is_action; channel_id; message; });
```

```diff
-v2.chat.channels.messages.markAsReaded(channel_id?, message_id?);
+v2.chat.channels.actions({ type: 'read'; channel_id; message; });
```
