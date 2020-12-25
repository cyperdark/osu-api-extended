# osu-api-extended

[![npm](https://img.shields.io/npm/v/osu-api-extended?style=for-the-badge)](https://www.npmjs.org/package/osu-api-extended) [![npm bundle size](https://img.shields.io/bundlephobia/min/osu-api-extended?color=green&label=size&style=for-the-badge)](https://www.npmjs.org/package/osu-api-extended) [![npm](https://img.shields.io/npm/dw/osu-api-extended?style=for-the-badge)](http://npm-stat.com/charts.html?package=osu-api-extended) ![NPM](https://img.shields.io/npm/l/osu-api-extended?style=for-the-badge)

# Features

- [x] api v1
- [x] api v2
- [x] TypeScript support
- [x] Openable replay file

# Installation

`npm i osu-api-extended`

# Usage

## Links

- [Get your api key here](https://osu.ppy.sh/p/api 'api key')
- [Create your client here](https://osu.ppy.sh/home/account/edit#oauth)

## Initialization

```javascript
const { V1, V2, mods, tools } = require('../dist/index');
const v1 = new V1('YOUR_OSU_KEY');
const v2 = new V2('YOUR_CLIENT_ID', 'YOUR_CLIENT_SECRET');
```

## API v1

```javascript
(async () => {
  try {
    let beatmap = await v1.beatmap({ b: 2632763 });
    console.log(beatmap.date.update);
  } catch (err) {
    console.error(err);
  }
})();
```

#### TypeScript support

![https://i.imgur.com/VXKhD3q.gif](https://i.imgur.com/VXKhD3q.gif)

## API v2

```javascript
(async () => {
  try {
    await v2.login();
    let beatmap = await v2.beatmap(2632763);
    console.log(beatmap);
  } catch (err) {
    console.error(err);
  }
})();
```

#### TypeScript support

![https://i.imgur.com/PmeIIzY.gif](https://i.imgur.com/PmeIIzY.gif)

# Endpoints

## Api v1

### `v1.beatmap();`

Get beatmap data

### `v1.best();`

Get user best scores

### `v1.match();`

Get match data

### `v1.recent();`

Get recent user scores

### `v1.replay();`

Download replay file of the score

### `v1.scores();`

Get scores of user ob beatmap

### `v1.user();`

Get user data

-------

## Api v2

### `v2.news();`

Get recent news

### `v2.changelog();`

Get changelogs

### `v2.rankings();`

Get rankings

### `v2.spotlights();`

Get spotlights

### `v2.seasonal_backgrounds();`

Get seasonal backgrounds

### `v2.beatmap();`

Get beatmap data

### `v2.beatmap_scores();`

Get scores of beatmap

### `v2.beatmapset();`

Get beatmapset data

### `v2.beatmaps_events();`

Get beatmaps events

### `v2.beatmaps_search();`

Get recent beatmap events

### `v2.user();`

Get user data

### `v2.user_recent_activity();`

Get recent user activity

### `v2.user_scores();`

Get recent | best | firsts scores of user

### `v2.user_beatmaps();`

Get user beatmaps

### `v2.user_kudosu();`

Get user kudosu

-------

## Tools

### `tools.country();`

Get country name by code

### `tools.accuracy();`

Calculate accuracy from hits

### `tools.diffFile();`

Download beatmap file

### `tools.calc();`

Remote pp calculation (std only)

### `tools.rank();`

Calculate rank from hits

-------

## Mods

### `mods.id();`

Get name of mods from id

### `mods.name();`

Get id of mods from name

------

# Dependencies

- [node-osr](https://www.npmjs.com/package/node-osr) for reading replay file
- [axios](https://www.npmjs.com/package/axios)

