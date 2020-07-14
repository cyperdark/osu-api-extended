[![npm](https://img.shields.io/npm/v/osu-api-extended?style=for-the-badge)](https://www.npmjs.org/package/osu-api-extended)
[![npm bundle size](https://img.shields.io/bundlephobia/min/osu-api-extended?color=green&label=size&style=for-the-badge)](https://www.npmjs.org/package/osu-api-extended)
[![npm](https://img.shields.io/npm/dw/osu-api-extended?style=for-the-badge)](http://npm-stat.com/charts.html?package=osu-api-extended)
![NPM](https://img.shields.io/npm/l/osu-api-extended?style=for-the-badge)
# osu-api-extended

Package for advanced work with "osu" api

## Installation

npm package:
`npm i osu-api-extended`

## Usage
```
const osuApi = require('osu-api-extended'), osu = new osuApi();
osu.key = "key here";

// USE:

osu.beatmap({
  b: 1636879
}).then(data => console.log(data));

// OR

async function name() {
  try {
    let beatmap = await osu.beatmap({ b: 1636879 });
    console.log(beatmap);
  } catch (err) { console.log('name', err); };
};

// Work for every calls!
```

## Calls
```
osu.beatmap({
  b: 2097898
}).then(data => console.log(data));

osu.user({
  u: 4504101
}).then(data => console.log(data));

osu.scores({
  b: 2097898,
  u: 4504101
}).then(data => console.log(data));

osu.best({
  u: 4504101
}).then(data => console.log(data));

osu.recent({
  b: 4504101
}).then(data => console.log(data));

osu.pp_calc({
  id: 4504101
}).then(data => console.log(data));

osu.match({
  m: 62504057
}).then(data => console.log(data));

osu.replay({
  b: 2097898,
  u: WhiteCat,
  mods: 88
}, './replays' <= path to folder. Optional, path will look: ./replays/2097898-WhiteCat.osr
).then(data => console.log(data));

osu.diffFile(2097898, './maps' <= path to folder. Optional, path will look: ./maps/2097898.osu
).then(data => console.log(data));
```

## Calc funcs
```
osu.accuracy(hit300, hit100, hit50, Miss, Geki, Katu, GameMode).then(data => console.log(data));

osu.mods(id or name).then(data => console.log(data));

osu.rank({
  geki: 0,
  katu: 0,
  300: 0,
  100: 0,
  50: 0,
  0: 0,
}, mods, mode).then(data => console.log(data));

Example:
osu.mods(72).then(data => console.log(data)); // return HDDT
osu.mods("HDDT").then(data => console.log(data)); // return 72
osu.rank({
  geki: 0,
  katu: 0,
  300: 1519,
  100: 221,
  50: 42,
  0: 127,
}, 0, 0).then(data => console.log(data)); // return C
```

## Not Supported

Request me functions here: cyperdark#6890

* ~~/api/get_match~~
* ~~/api/get_replay~~