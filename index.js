const fs = require('fs');
const axios = require('axios');

const modes = ['osu', 'taiko', 'fruits', 'mania'];
const rankingType = ['performance', 'country', 'score', 'charts'];
const scoresType = ['best', 'firsts', 'recent'];
const userBmType = ['favourite', 'graveyard', 'loved', 'most_played', 'ranked_and_approved', 'unranked'];

(async () => {
  try {
    class Test {
      constructor(client_id, client_secret) {
        this.client_id = client_id;
        this.client_secret = client_secret;

        this.access_token = '';
        this.expires_in = '';

        this.api = '';

        this.oauth = axios.create({
          baseURL: 'https://osu.ppy.sh/oauth/',
          method: 'post',
          timeout: 7e3
        });
      };

      login() {
        return new Promise(async ex => {
          try {
            let { data: { access_token, expires_in } } = await this.oauth.post('token', {
              grant_type: "authorization_code",
              client_id: 175,
              client_secret: 'Py36H9QIrgxuJfsinn6vcsmueyWgv2fKY65svIVt',
              grant_type: 'client_credentials',
              scope: 'public',
              code: 'code'
            });

            this.access_token = access_token;
            this.expires_in = expires_in;

            this.api = axios.create({
              baseURL: 'https://osu.ppy.sh/api/v2/',
              headers: {
                Authorization: `Bearer ${this.access_token}`,
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              timeout: 7e3
            });
            ex(true);
          } catch (err) { console.error(err); };
        });
      };

      news() {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/news`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      changelog() {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/changelog`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      rankings(mode, type) {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/rankings/${modes[mode]}/${rankingType[type]}`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      spotlights() {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/spotlights`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      seasonal_backgrounds() {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/seasonal-backgrounds`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      beatmaps(id) {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/beatmaps/${id}`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      beatmapset(id) {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/beatmapsets/${id}`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      beatmaps_scores(id) {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/beatmaps/${id}/scores`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      beatmapsets_events() {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/beatmapsets/events`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      beatmapsets_search() {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/beatmapsets/search/`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      user(id, mode) {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/users/${id}${mode ? `/${mode}` : ''}`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      users_recent_activity(id, obj) {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/users/${id}/recent_activity`, { params: obj });
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      users_scores(id, type, obj) {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/users/${id}/scores/${scoresType[type]}`, { params: obj });
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      users_beatmaps(id, type, obj) {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/users/${id}/beatmapsets/${userBmType[type]}`, { params: obj });
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      users_kudosu(id) {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/users/${id}/kudosu`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };











      notifications(max_id) {
        return new Promise(async ex => {
          try {
            // return ex({ error: 'Invalid scope(s) provided.' });
            let { data } = await this.api.get(`/notifications`, { params: { max_id } });
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      beatmapsets_favourites(id) {
        return new Promise(async ex => {
          try {
            // return ex({ error: 'Invalid scope(s) provided.' });
            let { data } = await this.api.post(`/beatmapsets/${id}/favourites`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      chat_presence() {
        return new Promise(async ex => {
          try {
            // return ex({ error: 'Invalid scope(s) provided.' });
            let { data } = await this.api.get(`/chat/presence`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      reports() {
        return new Promise(async ex => {
          try {
            // return ex({ error: 'Invalid scope(s) provided.' });
            let { data } = await this.api.post(`/reports`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      rooms() {
        return new Promise(async ex => {
          try {
            // return ex({ error: 'Invalid scope(s) provided.' });
            let { data } = await this.api.post(`/rooms`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      scores() {
        return new Promise(async ex => {
          try {
            // return ex({ error: '404' });
            let { data } = await this.api.get(`/scores`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      beatmaps_lookup() {
        return new Promise(async ex => {
          try {
            // return ex({ error: '404' });
            let { data } = await this.api.get(`/beatmaps/lookup`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      beatmapsets_lookup() {
        return new Promise(async ex => {
          try {
            // return ex({ error: '404' });
            let { data } = await this.api.get(`/beatmapsets/lookup`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      beatmapsets_download(id) {
        return new Promise(async ex => {
          try {
            // return ex({ error: 'Invalid scope(s) provided.' });
            let { data } = await this.api.get(`/beatmapsets/${id}/download`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      friends() {
        return new Promise(async ex => {
          try {
            // return ex({ authentication: 'basic' });
            let { data } = await this.api.get(`/friends`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      me_dl_quota() {
        return new Promise(async ex => {
          try {
            // return ex({ authentication: 'basic' });
            let { data } = await this.api.get(`/me/download-quota-check`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      me() {
        return new Promise(async ex => {
          try {
            // return ex({ authentication: 'basic' });
            let { data } = await this.api.get(`/me`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      users(id) {
        return new Promise(async ex => {
          try {
            // return ex({ error: 'Invalid scope(s) provided.' });
            if (id.length > 49) return 'Up to 50 users can be requested at once';
            let { data } = await this.api.get(`/users`, { params: { 'ids': id } });
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

    }

    let d = new Test();
    await d.login();
    // // // let notifications = await d.notifications();
    // let rankings = await d.rankings(0, 0);
    // let spotlights = await d.spotlights();
    // let beatmapsets_events = await d.beatmapsets_events();
    // // // let beatmapsets_favourites = await d.beatmapsets_favourites(1295544);
    // // // let chat_presence = await d.chat_presence();
    // let changelog = await d.changelog();
    // // // let reports = await d.reports();
    // // // let rooms = await d.rooms();
    // let seasonal_backgrounds = await d.seasonal_backgrounds();
    // // // let scores = await d.scores();
    // let beatmaps_scores = await d.beatmaps_scores(2688100);
    // // // let beatmaps_lookup = await d.beatmaps_lookup();
    // let beatmaps = await d.beatmaps(2688100);
    // let beatmapsets_search = await d.beatmapsets_search();
    // // // let beatmapsets_lookup = await d.beatmapsets_lookup();
    // // // let beatmapsets_download = await d.beatmapsets_download(1295544);
    // let beatmapset = await d.beatmapset(1295544);
    // // // let friends = await d.friends();
    // // // let me_dl_quota = await d.me_dl_quota();
    // let news = await d.news();
    // // // let me = await d.me();
    // let users_kudosu = await d.users_kudosu(9893708);
    // let users_scores = await d.users_scores(9893708, 0);
    // let users_beatmaps = await d.users_beatmaps(9893708, 0);
    // let users_recent_activity = await d.users_recent_activity(9893708);
    // let user = await d.user(9893708);
    // // // let users = await d.users([9893708, 4504101]);
  } catch (err) { console.error(err); };
})();