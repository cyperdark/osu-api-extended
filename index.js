import axios from "axios";
import fs from "fs";

const modes = ['osu', 'taiko', 'fruits', 'mania'];

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
              client_id: 175,
              client_secret: 'Py36H9QIrgxuJfsinn6vcsmueyWgv2fKY65svIVt',
              grant_type: 'client_credentials',
              scope: 'public'
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

      notifications() {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/notifications`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      beatmap(id) {
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
            // let { data } = await this.api.get(`/beatmapsets/${setId}#${modes[mode]}/${diffId}`);
            // console.log(data);
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

      beatmapsets_favourites(id) {
        return new Promise(async ex => {
          try {
            return
            // 2020.12.06 - error 404
            let { data } = await this.api.get(`/beatmapsets/${id}/favourites`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      chat_presence(id) {
        return new Promise(async ex => {
          try {
            return
            // 2020.12.06 - error: 'Invalid scope(s) provided.' 
            let { data } = await this.api.get(`/chat/presence`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      changelog(id) {
        return new Promise(async ex => {
          try {
            let { data } = await this.api.get(`/changelog`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      rooms() {
        return new Promise(async ex => {
          try {
            return
            // 2020.12.06 - error: 404
            let { data } = await this.api.get(`/rooms`);
            ex(data);
          } catch (err) { console.error(err); };
        });
      };

      reports() {
        return new Promise(async ex => {
          try {
            return
            // 2020.12.06 - error: 404
            let { data } = await this.api.get(`/reports`);
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
    }

    let d = new Test();
    await d.login();
    let notifications = await d.notifications();

    fs.writeFileSync('1.json', JSON.stringify(notifications), 'utf-8');
  } catch (err) { console.error(err); };
})();