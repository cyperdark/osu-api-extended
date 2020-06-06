![npm](https://img.shields.io/npm/v/osu-api-extended?style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/min/osu-api-extended?color=green&label=size&style=for-the-badge)
![npm](https://img.shields.io/npm/dw/osu-api-extended?style=for-the-badge)
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

## Help
```
osu.help.(name).then(data => console.log(data));
```
### Name:
* beatmap
* user
* scores
* best
* recent
* pp_calc

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
```

## Calc funcs
```
osu.accuracy(hit300, hit100, hit50, Miss, Geki, Katu, GameMode).then(data => console.log(data));

osu.mods(id or name).then(data => console.log(data));

Example:
osu.mods(72).then(data => console.log(data)); // return HDDT
osu.mods("HDDT").then(data => console.log(data)); // return 72
```

## Not Supported

* /api/get_match
* /api/get_replay