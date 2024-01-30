# osu-api-extended

[![](https://img.shields.io/npm/v/osu-api-extended?color=AD745F&style=for-the-badge)](https://www.npmjs.org/package/osu-api-extended)
[![](https://img.shields.io/bundlephobia/min/@aqilcont/osu-api-extended?color=5FAE89&label=size&style=for-the-badge)](https://www.npmjs.org/package/osu-api-extended)
[![](https://img.shields.io/npm/dm/osu-api-extended?color=625FAD&style=for-the-badge)](https://npm-stat.com/charts.html?package=osu-api-extended)
![](https://img.shields.io/npm/l/osu-api-extended?color=AD5F8C&style=for-the-badge)

# Usage

## [Documentation](https://github.com/cyperdark/osu-api-extended/wiki)

## Installation

```
npm i osu-api-extended
```

```
yarn install osu-api-extended
```

```
pnpm install osu-api-extended
```

<br>
<h2 align="center">IF SOME ENDPOINTS NOT WORKING, dm me in discord: cyperdark#6890</h2>
<br>
<br>

<h2 align="center">You need to login only once on application start (auto renew token for v2)</h2>

### API V1

You can [get your api key here](https://osu.ppy.sh/p/api 'https://osu.ppy.sh/p/api')

```javascript
const { v1, auth } = require('osu-api-extended')

const main = async () => {
  auth.set_v1(api_key)

  const data = await v1.beatmap.diff(1256136)
  console.log(data)
}

main()
```

### API V2

You can [create your client here](https://osu.ppy.sh/home/account/edit#oauth 'https://osu.ppy.sh/home/account/edit#oauth')

```javascript
const { v2, auth } = require('osu-api-extended')

const main = async () => {
  const SCOPE_LIST = ['public', ...];

  // Auth via client
  await auth.login('CLIENT_ID', 'CLIENT_SECRET', SCOPE_LIST);

  // Auth via lazer credentials
  await auth.login_lazer('YOUR_LOGIN', 'YOUR_PASSWORD');

  // Auth via oauth2
  await auth.authorize_cli('CLIENT_ID', 'CLIENT_SECRET', 'CALLBACK_URL', SCOPE_LIST);

  const data = await v2.beatmap.id.details(1256136)
  console.log(data)
}

main()
```

### V2 Auth users via page

```javascript
const { v2, auth } = require('osu-api-extended');

// code example for redirect page
const redirect_page = async () => {
  const SCOPE_LIST = ['public', ...];

  const url = auth.build_url('CLIENT_ID', 'CLIENT_CALLBACK_URL', SCOPE_LIST);
  return url;
};

const callback_page = async () => {
  const user_data = await auth.authorize(code, 'GAMEMODE', 'CLIENT_ID', 'CLIENT_SECRET', 'CLIENT_CALLBACK_URL');
  return user_data;
};

```

### V2 Discord auth helpers

```javascript
// discord bot auth | REQUEIRE TO HAVE A SITE WHERE YOU'LL REDIRECT USERS AFTER AUTH
const discord_auth_link = async () => {
  const SCOPE_LIST = ['public', ...];

  const url = auth.build_url('CLIENT_ID', 'CLIENT_CALLBACK_URL', SCOPE_LIST, 'DICSORD_USER_ID');
  return url;
};

const discord_callback_page = async (code, state) => {
  const user_data = await auth.authorize(code, 'GAMEMODE', 'CLIENT_ID', 'CLIENT_SECRET', 'CLIENT_CALLBACK_URL');

  return {
    discord_user_id: state,
    user_data
  };
};

```

### Tools

```javascript
const { tools } = require('osu-api-extended')

const main = async () => {
  // Accuracy from hits
  const accuracy = tools.accuracy(300, 5, 10, 0, 0, 0, 'osu')

  // Country name from country code
  const country_name = tools.country('RU')

  // Download difficulty file
  const diff_file = tools.download.difficulty(2379651, './', '2379651')

  // Calucalute pp for a difficulty
  const pp_calc = tools.pp_calc(2379651)

  // Rank letter from hits
  const rank = tools.rank(
    {
      geki: 236,
      katu: 43,
      300: 640,
      100: 54,
      50: 5,
      0: 15
    },
    'osu'
  )

  console.log({ accuracy, country_name, diff_file, pp_calc, rank })
}

main()
```

### Mods

```javascript
const { mods } = require('osu-api-extended')

const main = async () => {
  // Mods name from mods id
  const name = mods.name(64) // DT

  // Mods id from mods name
  const id = mods.id('HDDT') // 72

  console.log({ name, id })
}

main()
```

# Dependencies

- [lzma-native](https://www.npmjs.com/package/lzma-native 'https://www.npmjs.com/package/lzma-native'): decompress data from replay
- [node-osr](npmjs.com/package/node-osr 'npmjs.com/package/node-osr'): Working with replay file
- `request.ts` by [AqilCont](https://github.com/AqilCont 'https://github.com/AqilCont')
