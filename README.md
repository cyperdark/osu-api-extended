# osu-api-extended

[![npm](https://img.shields.io/npm/v/@aqilcont/osu-api-extended?style=for-the-badge)](https://www.npmjs.org/package/osu-api-extended) [![npm bundle size](https://img.shields.io/bundlephobia/min/@aqilcont/osu-api-extended?color=green&label=size&style=for-the-badge)](https://www.npmjs.org/package/osu-api-extended) [![npm](https://img.shields.io/npm/dw/@aqilcont/osu-api-extended?style=for-the-badge)](http://npm-stat.com/charts.html?package=osu-api-extended) ![NPM](https://img.shields.io/npm/l/@aqilcont/osu-api-extended?style=for-the-badge)

# Usage

## Installation

`npm i osu-api-extended`

### API V1

You can [get your api key here](https://osu.ppy.sh/p/api 'https://osu.ppy.sh/p/api')

```javascript
const { v1 } = require('osu-api-extended')

const main = async () => {
  v1.set_key('YOUR_API_KEY')

  const data = await v1.beatmap.diff(2379651, { mode: 'osu' })
  console.log(data)
}

main()
```

### API V2

You can [create your client here](https://osu.ppy.sh/home/account/edit#oauth 'https://osu.ppy.sh/home/account/edit#oauth')

```javascript
const { v2, auth } = require('osu-api-extended')

const main = async () => {
  // Auth via client
  await auth.login('CLIENT_ID', 'CLIENT_SECRET')

  // Auth via lazer credentials
  await auth.login_lazer('YOUR_LOGIN', 'YOUR_PASSWORD')

  // Auth via oauth2
  await auth.authorize('CLIENT_ID', 'CLIENT_SECRET', 'CALLBACK_URL')

  const data = await v2.beatmap.get(2379651)
  console.log(data)
}

main()
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
  const diff_file = tools.diff_file(2379651, './', '2379651')

  // Calucalute pp for a difficulty
  const pp_calc = tools.pp_calc(2379651)

  // Rank letter form hits
  const rank = tools.rank(300, 5, 10, 0, 0, 0, 'osu')

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

## Endpoints

### API V2

#### `v2.set_token()`

#### `v2.isLogin()`

#### `v2.news()`

<details>
  <summary>Returned data</summary>

```typescript
export interface news_object {
  news_posts: {
    id: number
    author: string
    edit_url: string
    first_image: string
    published_at: string
    updated_at: string
    slug: string
    title: string
    preview: string
  }
  search: {
    cursor: {
      published_at: string
      id: number
    } | null
    limit: number
  }
  cursor: {
    published_at: string
    id: number
  }
}
```

</details>

#### `v2.changelogs.get();`

<details>
  <summary>Returned data</summary>

```typescript
export interface build_object {
  id: number
  version: string
  display_version: string
  users: number
  created_at: string
  update_stream: {
    id: number
    name: string
    display_name: string
    is_featured: boolean
  }
  changelog_entries: {
    id: number
    repository: string
    github_pull_request_id: number
    github_url: string
    url: null | string
    type: string
    category: string
    title: string
    major: boolean
    created_at: string
    github_user: {
      id: number
      display_name: string
      github_url: string
      osu_username: null
      user_id: null
      user_url: null
    }
    message: null | string
    message_html: null | string
  }[]
  versions: {
    next?: {
      id: number
      version: string
      display_version: string
      users: number
      created_at: string
      update_stream: {
        id: number
        name: string
        display_name: string
        is_featured: boolean
      }
    }
    previous: {
      id: number
      version: string
      display_version: string
      users: number
      created_at: string
      update_stream: {
        id: number
        name: string
        display_name: string
        is_featured: boolean
      }
    }
  }
}
```

</details>

#### `v2.changelogs.lookup();`

<details>
  <summary>Returned data</summary>

```typescript
export interface build_object {
  id: number
  version: string
  display_version: string
  users: number
  created_at: string
  update_stream: {
    id: number
    name: string
    display_name: string
    is_featured: boolean
  }
  changelog_entries: {
    id: number
    repository: string
    github_pull_request_id: number
    github_url: string
    url: null | string
    type: string
    category: string
    title: string
    major: boolean
    created_at: string
    github_user: {
      id: number
      display_name: string
      github_url: string
      osu_username: null
      user_id: null
      user_url: null
    }
    message: null | string
    message_html: null | string
  }[]
  versions: {
    next?: {
      id: number
      version: string
      display_version: string
      users: number
      created_at: string
      update_stream: {
        id: number
        name: string
        display_name: string
        is_featured: boolean
      }
    }
    previous: {
      id: number
      version: string
      display_version: string
      users: number
      created_at: string
      update_stream: {
        id: number
        name: string
        display_name: string
        is_featured: boolean
      }
    }
  }
}
```

</details>

#### `v2.changelogs.all();`

<details>
  <summary>Returned data</summary>

```typescript
export interface changelog_object {
  streams: {
    id: number
    name: string
    display_name: string
    is_featured: boolean
    latest_build: {
      id: number
      version: string
      display_version: string
      users: number
      created_at: string
      update_stream: {
        id: number
        name: string
        display_name: string
        is_featured: boolean
      }
    }
    user_count: number
  }[]
  builds: {
    id: number
    version: string
    display_version: string
    users: number
    created_at: string
    update_stream: {
      id: number
      name: string
      display_name: string
      is_featured: boolean
    }
    changelog_entries: {
      id: number
      repository: string
      github_pull_request_id: number
      github_url: string
      url: null | string
      type: string
      category: string
      title: string
      major: boolean
      created_at: string
      github_user: {
        id: number
        display_name: string
        github_url: string
        osu_username: null
        user_id: null
        user_url: null
      }
      message: null | string
      message_html: null | string
    }[]
    versions: {
      next?: {
        id: number
        version: string
        display_version: string
        users: number
        created_at: string
        update_stream: {
          id: number
          name: string
          display_name: string
          is_featured: boolean
        }
      }
      previous: {
        id: number
        version: string
        display_version: string
        users: number
        created_at: string
        update_stream: {
          id: number
          name: string
          display_name: string
          is_featured: boolean
        }
      }
    }
  }
  search: {
    stream: string | null
    from: number | null
    to: number | null
    max_id: number | null
    limit: number
  }
}
```

</details>

#### `v2.beatmaps.get();`

<details>
  <summary>Returned data</summary>

```typescript
export interface beatmaps_object {
  artist: string
  artist_unicode: string
  covers: {
    cover: string
    'cover@2x': string
    card: string
    'card@2x': string
    list: string
    'list@2x': string
    slimcover: string
    'slimcover@2x': string
  }
  creator: string
  favourite_count: number
  hype: null | object
  id: number
  nsfw: boolean
  play_count: number
  preview_url: string
  source: string
  status: string
  title: string
  title_unicode: string
  track_id: null | number
  user_id: number
  video: boolean
  availability: {
    download_disabled: boolean
    more_information: string | null
  }
  bpm: number
  can_be_hyped: boolean
  discussion_enabled: boolean
  discussion_locked: boolean
  is_scoreable: boolean
  last_updated: string
  legacy_thread_url: string
  nominations_summary: {
    current: number
    required: number
  }
  ranked: number
  ranked_date: string
  storyboard: boolean
  submitted_date: string
  tags: string
  has_favourited: boolean
  beatmaps: {
    beatmapset_id: number
    difficulty_rating: number
    id: number
    mode: string
    status: string
    total_length: number
    user_id: number
    version: string
    accuracy: number
    ar: number
    bpm: number
    convert: boolean
    count_circles: number
    count_sliders: number
    count_spinners: number
    cs: number
    deleted_at: string | null
    drain: number
    hit_length: number
    is_scoreable: boolean
    last_updated: string
    mode_int: number
    passcount: number
    playcount: number
    ranked: number
    url: string
    checksum: string
    failtimes: {
      fail: number[]
      exit: number[]
    }
    max_combo?: number
  }[]
  converts: {
    beatmapset_id: number
    difficulty_rating: number
    id: number
    mode: string
    status: string
    total_length: number
    user_id: number
    version: string
    accuracy: number
    ar: number
    bpm: number
    convert: boolean
    count_circles: number
    count_sliders: number
    count_spinners: number
    cs: number
    deleted_at: string | null
    drain: number
    hit_length: number
    is_scoreable: boolean
    last_updated: string
    mode_int: number
    passcount: number
    playcount: number
    ranked: number
    url: string
    checksum: string
    failtimes: {
      fail: number[]
      exit: number[]
    }
    max_combo?: number
  }[]
  description: {
    description: string
  }
  genre: {
    id: number
    name: string
  }
  language: {
    id: number
    name: string
  }
  ratings: number[]
  recent_favourites: {
    avatar_url: string
    country_code: string
    default_group: string
    id: number
    is_active: boolean
    is_bot: boolean
    is_deleted: boolean
    is_online: boolean
    is_supporter: boolean
    last_visit: string
    pm_friends_only: boolean
    profile_colour: string | null
    username: string
    groups?: string[]
  }[]
  user: {
    avatar_url: string
    country_code: string
    default_group: string
    id: number
    is_active: boolean
    is_bot: boolean
    is_deleted: boolean
    is_online: boolean
    is_supporter: boolean
    last_visit: string
    pm_friends_only: boolean
    profile_colour: string | null
    username: string
    groups?: string[]
  }
}
```

</details>

#### `v2.beatmaps.events();`

<details>
  <summary>Returned data</summary>

```typescript
export interface beatmaps_events_object {
  events: {
    id: number
    type: string
    comment: {
      beatmap_discussion_id: number
      beatmap_discussion_post_id: number
    }
    created_at: string
    user_id: number
    beatmapset: {
      artist: string
      artist_unicode: string
      covers: {
        cover: string
        'cover@2x': string
        card: string
        'card@2x': string
        list: string
        'list@2x': string
        slimcover: string
        'slimcover@2x': string
      }
      creator: string
      favourite_count: number
      hype?: {
        current: number
        required: number
      }
      id: number
      nsfw: boolean
      play_count: number
      preview_url: string
      source: string
      status: string
      title: string
      title_unicode: string
      track_id: number | null
      user_id: number
      video: boolean
      user?: {
        avatar_url: string
        country_code: string
        default_group: string
        id: number
        is_active: boolean
        is_bot: boolean
        is_deleted: boolean
        is_online: boolean
        is_supporter: boolean
        last_visit: string
        pm_friends_only: boolean
        profile_colour: string | null
        username: string
        groups?: string[]
      }
    }
    discussion: {
      id: number
      beatmapset_id: number
      beatmap_id: number
      user_id: number
      deleted_by_id: number | null
      message_type: string
      parent_id: number | null
      timestamp: number
      resolved: boolean
      can_be_resolved: boolean
      can_grant_kudosu: boolean
      created_at: string
      updated_at: string
      deleted_at: string | null
      last_post_at: string
      kudosu_denied: boolean
      starting_post: {
        beatmapset_discussion_id: number
        created_at: string
        deleted_at: string | null
        deleted_by_id: number | null
        id: number
        last_editor_id: number | null
        message: string
        system: boolean
        updated_at: string
        user_id: number
      }
    }
  }[]
  reviewsConfig: {
    max_blocks: number
  }
  users: {
    avatar_url: string
    country_code: string
    default_group: string
    id: number
    is_active: boolean
    is_bot: boolean
    is_deleted: boolean
    is_online: boolean
    is_supporter: boolean
    last_visit: string
    pm_friends_only: boolean
    profile_colour: string | null
    username: string
    groups?: string[]
  }[]
}
```

</details>

#### `v2.beatmaps.search();`

<details>
  <summary>Returned data</summary>

```typescript
export interface beatmap_sets_object {
  artist: string
  artist_unicode: string
  covers: {
    cover: string
    'cover@2x': string
    card: string
    'card@2x': string
    list: string
    'list@2x': string
    slimcover: string
    'slimcover@2x': string
  }
  creator: string
  favourite_count: number
  hype: object | null
  id: number
  nsfw: boolean
  play_count: number
  preview_url: string
  source: string
  status: string
  title: string
  title_unicode: string
  track_id: number | null
  user_id: number
  video: boolean
  availability: {
    download_disabled: boolean
    more_information: string | null
  }
  bpm: number
  can_be_hyped: boolean
  discussion_enabled: boolean
  discussion_locked: boolean
  is_scoreable: boolean
  last_updated: string
  legacy_thread_url: string
  nominations_summary: {
    current: number
    required: number
  }
  ranked: number
  ranked_date: string
  storyboard: boolean
  submitted_date: string
  tags: string
  has_favourited: boolean
  beatmaps: {
    beatmapset_id: number
    difficulty_rating: number
    id: number
    mode: string
    status: string
    total_length: number
    user_id: number
    version: string
    accuracy: number
    ar: number
    bpm: number
    convert: boolean
    count_circles: number
    count_sliders: number
    count_spinners: number
    cs: number
    deleted_at: string | null
    drain: number
    hit_length: number
    is_scoreable: boolean
    last_updated: string
    mode_int: number
    passcount: number
    playcount: number
    ranked: number
    url: string
    checksum: string
    failtimes: {
      fail: number[]
      exit: number[]
    }
    max_combo?: number
  }[]
}
```

</details>

#### `v2.beatmap.get();`

<details>
  <summary>Returned data</summary>

```typescript
export interface beatmaps_short_2_object {
  beatmapset_id: number
  difficulty_rating: number
  id: number
  mode: string
  status: string
  total_length: number
  user_id: number
  version: string
  accuracy: number
  ar: number
  bpm: number
  convert: boolean
  count_circles: number
  count_sliders: number
  count_spinners: number
  cs: number
  deleted_at: string | null
  drain: number
  hit_length: number
  is_scoreable: boolean
  last_updated: string
  mode_int: number
  passcount: number
  playcount: number
  ranked: number
  url: string
  checksum: string
  failtimes: {
    fail: number[]
    exit: number[]
  }
  max_combo?: number
  beatmapset: {
    artist: string
    artist_unicode: string
    covers: {
      cover: string
      'cover@2x': string
      card: string
      'card@2x': string
      list: string
      'list@2x': string
      slimcover: string
      'slimcover@2x': string
    }
    creator: string
    favourite_count: number
    hype: null | object
    id: number
    nsfw: boolean
    play_count: string
    preview_url: string
    source: string
    status: string
    title: string
    title_unicode: string
    track_id: null | number
    user_id: number
    video: boolean
    availability: {
      download_disabled: boolean
      more_information: string | null
    }
    bpm: number
    can_be_hyped: boolean
    discussion_enabled: boolean
    discussion_locked: boolean
    is_scoreable: boolean
    last_updated: string
    legacy_thread_url: string
    nominations_summary: {
      current: number
      required: number
    }
    ranked: number
    ranked_date: string
    storyboard: boolean
    submitted_date: string
    tags: string
    has_favourited: boolean
    ratings: number
  }
}
```

</details>

#### `v2.beatmap.search();`

<details>
  <summary>Returned data</summary>

```typescript
export interface beatmaps_short_2_object {
  beatmapset_id: number
  difficulty_rating: number
  id: number
  mode: string
  status: string
  total_length: number
  user_id: number
  version: string
  accuracy: number
  ar: number
  bpm: number
  convert: boolean
  count_circles: number
  count_sliders: number
  count_spinners: number
  cs: number
  deleted_at: string | null
  drain: number
  hit_length: number
  is_scoreable: boolean
  last_updated: string
  mode_int: number
  passcount: number
  playcount: number
  ranked: number
  url: string
  checksum: string
  failtimes: {
    fail: number[]
    exit: number[]
  }
  max_combo?: number
  beatmapset: {
    artist: string
    artist_unicode: string
    covers: {
      cover: string
      'cover@2x': string
      card: string
      'card@2x': string
      list: string
      'list@2x': string
      slimcover: string
      'slimcover@2x': string
    }
    creator: string
    favourite_count: number
    hype: null | object
    id: number
    nsfw: boolean
    play_count: string
    preview_url: string
    source: string
    status: string
    title: string
    title_unicode: string
    track_id: null | number
    user_id: number
    video: boolean
    availability: {
      download_disabled: boolean
      more_information: string | null
    }
    bpm: number
    can_be_hyped: boolean
    discussion_enabled: boolean
    discussion_locked: boolean
    is_scoreable: boolean
    last_updated: string
    legacy_thread_url: string
    nominations_summary: {
      current: number
      required: number
    }
    ranked: number
    ranked_date: string
    storyboard: boolean
    submitted_date: string
    tags: string
    has_favourited: boolean
    ratings: number
  }
}
```

</details>

#### `v2.beatmap.scores.all();`

<details>
  <summary>Returned data</summary>

```typescript
export interface beatmap_scores_all {
  id: number
  user_id: number
  ccuracy: number
  mods: string[]
  score: number
  max_combo: number
  passed: boolean
  perfect: boolean
  statistics: {
    count_50: number
    count_100: number
    count_300: number
    count_geki: number
    count_katu: number
    count_miss: number
  }
  rank: string
  created_at: string
  best_id: number
  pp: number
  mode: string
  mode_int: number
  replay: boolean
  user: {
    avatar_url: string
    country_code: string
    default_group: string
    id: number
    is_active: boolean
    is_bot: boolean
    is_deleted: boolean
    is_online: boolean
    is_supporter: boolean
    last_visit: string
    pm_friends_only: boolean
    profile_colour: string | null
    username: string
    groups?: string[]
    country: {
      code: string
      name: string
    }
    cover: {
      custom_url: string
      url: string
      id: string
    }
  }
}
```

</details>

#### `v2.beatmap.scores.user();`

<details>
  <summary>Returned data</summary>

```typescript
export interface beatmap_scores_user {
  position: number
  score: {
    id: number
    user_id: number
    ccuracy: number
    mods: string[]
    score: number
    max_combo: number
    passed: boolean
    perfect: boolean
    statistics: {
      count_50: number
      count_100: number
      count_300: number
      count_geki: number
      count_katu: number
      count_miss: number
    }
    rank: string
    created_at: string
    best_id: number
    pp: number
    mode: string
    mode_int: number
    replay: boolean
    user: {
      avatar_url: string
      country_code: string
      default_group: string
      id: number
      is_active: boolean
      is_bot: boolean
      is_deleted: boolean
      is_online: boolean
      is_supporter: boolean
      last_visit: string
      pm_friends_only: boolean
      profile_colour: string | null
      username: string
      groups?: string[]
      country: {
        code: string
        name: string
      }
      cover: {
        custom_url: string
        url: string
        id: string
      }
    }
  }
}
```

</details>

#### `v2.scores.users.recent();`

#### `v2.scores.users.best();`

#### `v2.scores.users.firsts();`

#### `v2.scores.users.pinned();`

#### `v2.scores.score.get();`

<details>
  <summary>Returned data</summary>

```typescript
export interface user_scores_object {
  id: number
  user_id: number
  accuracy: number
  mods: string[]
  score: number
  max_combo: number
  passed: boolean
  perfect: boolean
  statistics: {
    count_50: number
    count_100: number
    count_300: number
    count_geki: number
    count_katu: number
    count_miss: number
  }
  rank: string
  created_at: string
  best_id?: null | number
  pp: null | number
  mode: string
  mode_int: number
  replay: boolean
  beatmap: {
    beatmapset_id: number
    difficulty_rating: number
    id: number
    mode: string
    status: string
    total_length: number
    user_id: number
    version: string
    accuracy: number
    ar: number
    bpm: number
    convert: boolean
    count_circles: number
    count_sliders: number
    count_spinners: number
    cs: number
    deleted_at: null | string
    drain: number
    hit_length: number
    is_scoreable: boolean
    last_updated: string
    mode_int: number
    passcount: number
    playcount: number
    ranked: number
    url: string
    checksum: string
  }
  beatmapset: {
    artist: string
    artist_unicode: string
    covers: {
      cover: string
      'cover@2x': string
      card: string
      'card@2x': string
      list: string
      'list@2x': string
      slimcover: string
      'slimcover@2x': string
    }
    creator: string
    favourite_count: number
    hype: null | object
    id: number
    nsfw: boolean
    play_count: number
    preview_url: string
    source: string
    status: string
    title: string
    title_unicode: string
    track_id: number | null
    user_id: number
    video: boolean
  }
  weight?: {
    percentage: number
    pp: number
  }
  rank_global?: number
  user: {
    avatar_url: string
    country_code: string
    default_group: string
    id: number
    is_active: boolean
    is_bot: boolean
    is_deleted: boolean
    is_online: boolean
    is_supporter: boolean
    last_visit: string
    pm_friends_only: boolean
    profile_colour: string | null
    username: string
    groups?: string[]
  }
}
```

</details>

#### `v2.scores.score.download();`

Return file path or Error

</details>

#### `v2.discussions.all();`

<details>
  <summary>Returned data</summary>

```typescript
export interface ds_all_object {
  beatmaps: {
    beatmapset_id: number
    difficulty_rating: number
    id: number
    mode: string
    status: string
    total_length: number
    user_id: number
    version: string
    accuracy: number
    ar: number
    bpm: number
    convert: boolean
    count_circles: number
    count_sliders: number
    count_spinners: number
    cs: number
    deleted_at: null | string
    drain: number
    hit_length: number
    is_scoreable: boolean
    last_updated: string
    mode_int: number
    passcount: number
    playcount: number
    ranked: number
    url: string
    checksum: string
  }[]
  cursor: {
    page: number
    limit: number
  }
  discussions: {
    id: number | null
    beatmapset_id: number | null
    beatmap_id: number | null
    user_id: number | null
    deleted_by_id: number | null
    message_type: string
    parent_id: number | null
    timestamp: string | null
    resolved: boolean
    can_be_resolved: boolean
    can_grant_kudosu: boolean
    created_at: string
    updated_at: string
    deleted_at: string | null
    last_post_at: string
    kudosu_denied: boolean
    beatmapset: {
      artist: string
      artist_unicode: string
      covers: {
        cover: string
        'cover@2x': string
        card: string
        'card@2x': string
        list: string
        'list@2x': string
        slimcover: string
        'slimcover@2x': string
      }
      creator: string
      favourite_count: number
      hype?: {
        current: number
        required: number
      }
      id: number
      nsfw: boolean
      play_count: number
      preview_url: string
      source: string
      status: string
      title: string
      title_unicode: string
      track_id: number | null
      user_id: number
      video: boolean
      user?: {
        avatar_url: string
        country_code: string
        default_group: string
        id: number
        is_active: boolean
        is_bot: boolean
        is_deleted: boolean
        is_online: boolean
        is_supporter: boolean
        last_visit: string
        pm_friends_only: boolean
        profile_colour: string | null
        username: string
        groups?: string[]
      }
    }
    current_user_attributes: {
      vote_score: null
      can_moderate_kudosu: boolean
      can_resolve: boolean
      can_reopen: boolean
      can_destroy: boolean
    }
    starting_post: {
      beatmapset_discussion_id: null
      created_at: string
      deleted_at: string | null
      deleted_by_id: number | null
      id: number | null
      last_editor_id: number | null
      message: string
      system: boolean
      updated_at: string
      user_id: number | null
    }
  }[]
}
```

</details>

#### `v2.discussions.posts();`

<details>
  <summary>Returned data</summary>

```typescript
export interface ds_posts_object {
  beatmapsets: {
    artist: string
    artist_unicode: string
    covers: covers_object
    creator: string
    favourite_count: number
    hype?: {
      current: number
      required: number
    }
    id: number
    nsfw: boolean
    play_count: number
    preview_url: string
    source: string
    status: string
    title: string
    title_unicode: string
    track_id: number | null
    user_id: number
    video: boolean
    user?: user_small
  }[]
  discussions: {
    id: number
    beatmapset_id: number
    beatmap_id: number
    user_id: number
    deleted_by_id: number | null
    message_type: string
    parent_id: number | null
    timestamp: string | null
    resolved: boolean
    can_be_resolved: boolean
    can_grant_kudosu: boolean
    created_at: string
    updated_at: string
    deleted_at: string | null
    last_post_at: string
    kudosu_denied: boolean
  }[]
  cursor: null
  posts: {
    beatmapset_discussion_id: number
    created_at: string
    deleted_at: string | null
    deleted_by_id: number | null
    id: number
    last_editor_id: number | null
    message: string
    system: boolean
    updated_at: string
    user_id: number
  }[]
}
```

</details>

#### `v2.discussions.votes();`

<details>
  <summary>Returned data</summary>

```typescript
export interface ds_votes_object {
  cursor: null
  discussions: {
    id: number
    beatmapset_id: number
    beatmap_id: number
    user_id: number
    deleted_by_id: number | null
    message_type: string
    parent_id: number | null
    timestamp: string | null
    resolved: boolean
    can_be_resolved: boolean
    can_grant_kudosu: boolean
    created_at: string
    updated_at: string
    deleted_at: string | null
    last_post_at: string
    kudosu_denied: boolean
  }[]
  users: {
    avatar_url: string
    country_code: string
    default_group: string
    id: number
    is_active: boolean
    is_bot: boolean
    is_deleted: boolean
    is_online: boolean
    is_supporter: boolean
    last_visit: string
    pm_friends_only: boolean
    profile_colour: string | null
    username: string
    groups?: string[]
  }[]
  votes: {
    beatmapset_discussion_id: number
    created_at: string
    id: number
    score: number
    updated_at: string
    user_id: number
  }[]
}
```

</details>

#### `v2.seasonal_backgrounds();`

<details>
  <summary>Returned data</summary>

```typescript
export interface seasonal_object {
  ends_at: string
  backgrounds: {
    url: string
    user: {
      avatar_url: string
      country_code: string
      default_group: string
      id: number
      is_active: boolean
      is_bot: boolean
      is_deleted: boolean
      is_online: boolean
      is_supporter: boolean
      last_visit: string
      pm_friends_only: boolean
      profile_colour: string | null
      username: string
      groups?: string[]
    }
  }[]
}
```

</details>

#### `v2.wiki();`

<details>
  <summary>Returned data</summary>

```typescript
export interface wiki_object {
  available_locales: string[]
  layout: string
  locale: string
  markdown: string
  path: string
  subtitle: string | null
  tags: string[]
  title: string
}
```

</details>

#### `v2.search();`

<details>
  <summary>Returned data</summary>

```typescript
export interface search_object {
  user?: {
    data: {
      avatar_url: string
      country_code: string
      default_group: string
      id: number
      is_active: boolean
      is_bot: boolean
      is_deleted: boolean
      is_online: boolean
      is_supporter: boolean
      last_visit: string
      pm_friends_only: boolean
      profile_colour: string | null
      username: string
      groups?: string[]
    }[]
  }
  wiki_page?: {
    data: {
      available_locales: string[]
      layout: string
      locale: string
      markdown: string
      path: string
      subtitle: string | null
      tags: string[]
      title: string
    }[]
  }
}
```

</details>

#### `v2.comments.all();`

#### `v2.comments.one();`

<details>
  <summary>Returned data</summary>

```typescript
export interface comments_all_object {
  comments: {
    id: number
    parent_id: number | null
    user_id: number
    pinned: boolean
    replies_count: number
    votes_count: number
    commentable_type: string
    commentable_id: number
    legacy_name: string | null
    created_at: string
    updated_at: string
    deleted_at: string | null
    edited_at: string | null
    edited_by_id: number | null
    message: string
    message_html: string
  }[]
  has_more: boolean
  has_more_id: number | null
  included_comments: {
    id: number
    parent_id: number | null
    user_id: number
    pinned: boolean
    replies_count: number
    votes_count: number
    commentable_type: string
    commentable_id: number
    legacy_name: string | null
    created_at: string
    updated_at: string
    deleted_at: string | null
    edited_at: string | null
    edited_by_id: number | null
    message: string
    message_html: string
  }[]
  pinned_comments: {
    id: number
    parent_id: number | null
    user_id: number
    pinned: boolean
    replies_count: number
    votes_count: number
    commentable_type: string
    commentable_id: number
    legacy_name: string | null
    created_at: string
    updated_at: string
    deleted_at: string | null
    edited_at: string | null
    edited_by_id: number | null
    message: string
    message_html: string
  }[]
  user_votes: []
  user_follow: boolean
  users: {
    avatar_url: string
    country_code: string
    default_group: string
    id: number
    is_active: boolean
    is_bot: boolean
    is_deleted: boolean
    is_online: boolean
    is_supporter: boolean
    last_visit: string
    pm_friends_only: boolean
    profile_colour: string | null
    username: string
    groups?: string[]
  }[]
  sort: string
  cursor: {
    created_at: string
    id: number
  }
  top_level_count: number
  total: number
}
```

</details>

#### `v2.users();`

<details>
  <summary>Returned data</summary>

```typescript
export interface user_rulesets {
  avatar_url: string
  country_code: string
  default_group: string
  id: number
  is_active: boolean
  is_bot: boolean
  is_deleted: boolean
  is_online: boolean
  is_supporter: boolean
  last_visit: string
  pm_friends_only: boolean
  profile_colour: string | null
  username: string
  groups?: string[]
  country: {
    code: string
    name: string
  }
  cover: {
    custom_url: string
    url: string
    id: string
  }
  statistics_rulesets: {
    osu: {
      level: {
        current: number
        progress: number
      }
      global_rank: number
      pp: number
      ranked_score: number
      hit_accuracy: number
      play_count: number
      play_time: number
      total_score: number
      total_hits: number
      maximum_combo: number
      replays_watched_by_others: number
      is_ranked: number
      grade_counts: {
        ss: number
        ssh: number
        s: number
        sh: number
        a: number
      }
    }
    taiko: {
      level: {
        current: number
        progress: number
      }
      global_rank: number
      pp: number
      ranked_score: number
      hit_accuracy: number
      play_count: number
      play_time: number
      total_score: number
      total_hits: number
      maximum_combo: number
      replays_watched_by_others: number
      is_ranked: number
      grade_counts: {
        ss: number
        ssh: number
        s: number
        sh: number
        a: number
      }
    }
    fruits: {
      level: {
        current: number
        progress: number
      }
      global_rank: number
      pp: number
      ranked_score: number
      hit_accuracy: number
      play_count: number
      play_time: number
      total_score: number
      total_hits: number
      maximum_combo: number
      replays_watched_by_others: number
      is_ranked: number
      grade_counts: {
        ss: number
        ssh: number
        s: number
        sh: number
        a: number
      }
    }
    mania: {
      level: {
        current: number
        progress: number
      }
      global_rank: number
      pp: number
      ranked_score: number
      hit_accuracy: number
      play_count: number
      play_time: number
      total_score: number
      total_hits: number
      maximum_combo: number
      replays_watched_by_others: number
      is_ranked: number
      grade_counts: {
        ss: number
        ssh: number
        s: number
        sh: number
        a: number
      }
    }
  }
}
```

</details>

#### `v2.me.data();`

<details>
  <summary>Returned data</summary>

```typescript
export interface user_small {
  avatar_url: string
  country_code: string
  default_group: string
  id: number
  is_active: boolean
  is_bot: boolean
  is_deleted: boolean
  is_online: boolean
  is_supporter: boolean
  last_visit: string
  pm_friends_only: boolean
  profile_colour: string | null
  username: string
  groups?: string[]
  country: {
    code: string
    name: string
  }
  cover: {
    custom_url: string
    url: string
    id: string
  }
  statistics_rulesets: {
    level: {
      current: number
      progress: number
    }
    global_rank: number
    pp: number
    ranked_score: number
    hit_accuracy: number
    play_count: number
    play_time: number
    total_score: number
    total_hits: number
    maximum_combo: number
    replays_watched_by_others: number
    is_ranked: number
    grade_counts: {
      ss: number
      ssh: number
      s: number
      sh: number
      a: number
    }
  }
  support_level: number
  cover_url: string
  discord: string
  has_supported: boolean
  interests: string
  join_date: string
  kudosu: {
    total: number
    available: number
  }
  location: string
  max_blocks: number
  max_friends: number
  occupation: string
  playmode: string
  playstyle: string[]
  post_count: number
  profile_order: string[]
  title: string
  title_url: string
  twitter: string
  website: string
  is_restricted: boolean
  account_history: []
  active_tournament_banner: null
  badges: {
    awarded_at: string
    description: string
    image_url: string
    url: string
  }[]
  beatmap_playcounts_count: number
  comments_count: number
  favourite_beatmapset_count: number
  follower_count: number
  graveyard_beatmapset_count: number
  loved_beatmapset_count: number
  mapping_follower_count: number
  monthly_playcounts: {
    start_date: string
    count: number
  }[]
  page: {
    html: string
    raw: string
  }
  pending_beatmapset_count: number
  previous_usernames: string[]
  ranked_beatmapset_count: number
  replays_watched_counts: {
    start_date: string
    count: number
  }[]
  scores_best_count: number
  scores_first_count: number
  scores_recent_count: number
  user_achievements: {
    achieved_at: string
    achievement_id: number
  }[]
  rankHistory: {
    mode: string
    data: number[]
  }
  rank_history: {
    mode: string
    data: number[]
  }
  ranked_and_approved_beatmapset_count: number
  unranked_beatmapset_count: number
}
```

</details>

#### `v2.me.friends();`

<details>
  <summary>Returned data</summary>

```typescript
export interface user_friends {
  avatar_url: string
  country_code: string
  default_group: string
  id: number
  is_active: boolean
  is_bot: boolean
  is_deleted: boolean
  is_online: boolean
  is_supporter: boolean
  last_visit: string
  pm_friends_only: boolean
  profile_colour: string | null
  username: string
  groups?: string[]
  country: {
    code: string
    name: string
  }
  cover: {
    custom_url: string
    url: string
    id: string
  }
  statistics_rulesets: {
    level: {
      current: number
      progress: number
    }
    global_rank: number
    pp: number
    ranked_score: number
    hit_accuracy: number
    play_count: number
    play_time: number
    total_score: number
    total_hits: number
    maximum_combo: number
    replays_watched_by_others: number
    is_ranked: number
    grade_counts: {
      ss: number
      ssh: number
      s: number
      sh: number
      a: number
    }
  }
  support_level: number
}
```

</details>

#### `v2.user.get();`

<details>
  <summary>Returned data</summary>

```typescript
export interface user_data {
  avatar_url: string
  country_code: string
  default_group: string
  id: number
  is_active: boolean
  is_bot: boolean
  is_deleted: boolean
  is_online: boolean
  is_supporter: boolean
  last_visit: string
  pm_friends_only: boolean
  profile_colour: string | null
  username: string
  groups?: string[]
  country: {
    code: string
    name: string
  }
  cover: {
    custom_url: string
    url: string
    id: string
  }
  statistics_rulesets: {
    level: {
      current: number
      progress: number
    }
    global_rank: number
    pp: number
    ranked_score: number
    hit_accuracy: number
    play_count: number
    play_time: number
    total_score: number
    total_hits: number
    maximum_combo: number
    replays_watched_by_others: number
    is_ranked: number
    grade_counts: {
      ss: number
      ssh: number
      s: number
      sh: number
      a: number
    }
  }
  support_level: number
  cover_url: string
  discord: string
  has_supported: boolean
  interests: string
  join_date: string
  kudosu: {
    total: number
    available: number
  }
  location: string
  max_blocks: number
  max_friends: number
  occupation: string
  playmode: string
  playstyle: string[]
  post_count: number
  profile_order: string[]
  title: string
  title_url: string
  twitter: string
  website: string
  is_restricted: boolean
  account_history: []
  active_tournament_banner: null
  badges: {
    awarded_at: string
    description: string
    image_url: string
    url: string
  }[]
  beatmap_playcounts_count: number
  comments_count: number
  favourite_beatmapset_count: number
  follower_count: number
  graveyard_beatmapset_count: number
  loved_beatmapset_count: number
  mapping_follower_count: number
  monthly_playcounts: {
    start_date: string
    count: number
  }[]
  page: {
    html: string
    raw: string
  }
  pending_beatmapset_count: number
  previous_usernames: string[]
  ranked_beatmapset_count: number
  replays_watched_counts: {
    start_date: string
    count: number
  }[]
  scores_best_count: number
  scores_first_count: number
  scores_recent_count: number
  user_achievements: {
    achieved_at: string
    achievement_id: number
  }[]
  rankHistory: {
    mode: string
    data: number[]
  }
  rank_history: {
    mode: string
    data: number[]
  }
  ranked_and_approved_beatmapset_count: number
  unranked_beatmapset_count: number
}
```

</details>

#### `v2.user.activity();`

<details>
  <summary>Returned data</summary>

```typescript
export interface user_activity_object {
  created_at: string
  createdAt: string
  id: number
  type: string
  scoreRank?: string
  rank?: number
  mode: string
  beatmap: {
    title: string
    url: string
  }
  user: {
    username: string
    url: string
  }
}
```

</details>

#### `v2.user.kudosu();`

<details>
  <summary>Returned data</summary>

```typescript
export interface user_kudosu_object {
  id: number
  action: string
  amount: number
  model: string
  created_at: string
  giver: null
  post: {
    url: string
    title: string
  }
  details: {
    event: string
  }
}
```

</details>

#### `v2.user.beatmaps.loved();`

#### `v2.user.beatmaps.ranked();`

#### `v2.user.beatmaps.pending();`

#### `v2.user.beatmaps.graveyard();`

#### `v2.user.beatmaps.favourite();`

#### `v2.user.beatmaps.most_played();`

<details>
  <summary>Returned data</summary>

```typescript
export interface beatmaps_object {
  artist: string
  artist_unicode: string
  covers: {
    cover: string
    'cover@2x': string
    card: string
    'card@2x': string
    list: string
    'list@2x': string
    slimcover: string
    'slimcover@2x': string
  }
  creator: string
  favourite_count: number
  hype: null | object
  id: number
  nsfw: boolean
  play_count: number
  preview_url: string
  source: string
  status: string
  title: string
  title_unicode: string
  track_id: null | number
  user_id: number
  video: boolean
  availability: {
    download_disabled: boolean
    more_information: string | null
  }
  bpm: number
  can_be_hyped: boolean
  discussion_enabled: boolean
  discussion_locked: boolean
  is_scoreable: boolean
  last_updated: string
  legacy_thread_url: string
  nominations_summary: {
    current: number
    required: number
  }
  ranked: number
  ranked_date: string
  storyboard: boolean
  submitted_date: string
  tags: string
  has_favourited: boolean
  beatmaps: {
    beatmapset_id: number
    difficulty_rating: number
    id: number
    mode: string
    status: string
    total_length: number
    user_id: number
    version: string
    accuracy: number
    ar: number
    bpm: number
    convert: boolean
    count_circles: number
    count_sliders: number
    count_spinners: number
    cs: number
    deleted_at: string | null
    drain: number
    hit_length: number
    is_scoreable: boolean
    last_updated: string
    mode_int: number
    passcount: number
    playcount: number
    ranked: number
    url: string
    checksum: string
    failtimes: {
      fail: number[]
      exit: number[]
    }
    max_combo?: number
  }[]
}
```

</details>

#### `v2.forum.topics.all();`

<details>
  <summary>Returned data</summary>

```typescript
export interface topic_object {
  cursor: {
    id: number
  }
  posts: {
    created_at: string
    deleted_at: string | null
    edited_at: string | null
    edited_by_id: number | null
    forum_id: number
    id: number
    topic_id: number
    user_id: number
    body: {
      html: string
      raw: string
    }
  }[]
  search: {
    limit: number
    sort: string
  }
  topic: {
    created_at: string
    deleted_at: string | null
    first_post_id: number
    forum_id: number
    id: number
    is_locked: boolean
    last_post_id: number
    post_count: number
    title: string
    type: string
    updated_at: string
    user_id: number
  }
}
```

</details>

#### `v2.notifications.all();`

<details>
  <summary>Returned data</summary>

```typescript
export interface notification_all_object {
  notifications: {
    id: number
    name: string
    created_at: string
    object_type: string
    object_id: number
    source_user_id: number
    is_read: boolean
    details: {
      type: string
      title: string
      username: string
      cover_url: string
    }
  }[]
  stacks: {
    category: string
    cursor: {
      id: number
      created_at: string
    } | null
    name: string
    object_type: string
    object_id: number
    total: number
  }[]
  timestamp: string
  types: {
    cursor: {
      id: number
    }
    name: string | null
    total: number
  }[]
  notification_endpoint: string
}
```

</details>

#### `v2.matches.all();`

<details>
  <summary>Returned data</summary>

```typescript
export interface matches_object {
  cursor: {
    match_id: number
  }
  matches: {
    id: number
    start_time: string
    end_time: string | null
    name: string
  }[]
  params: {
    limit: number
    sort: string
  }
}
```

</details>

#### `v2.matches.one();`

<details>
  <summary>Returned data</summary>

```typescript
export interface match_object {
  match: {
    id: number
    start_time: string
    end_time: string | null
    name: string
  }
  events: {
    id: number
    detail: {
      type: string
    }
    timestamp: string
    user_id: number
  }[]
  users: {
    avatar_url: string
    country_code: string
    default_group: string
    id: number
    is_active: boolean
    is_bot: boolean
    is_deleted: boolean
    is_online: boolean
    is_supporter: boolean
    last_visit: string
    pm_friends_only: boolean
    profile_colour: string | null
    username: string
    groups?: string[]
    country: {
      code: string
      name: string
    }
  }[]:
  first_event_id: number
  latest_event_id: number
  current_game_id: number | null
}
```

</details>

#### `v2.rooms.all();`

<details>
  <summary>Returned data</summary>

```typescript
export interface rooms_object {
  id: number
  name: string
  category: string
  type: string
  user_id: number
  starts_at: string
  ends_at: string
  max_attempts: number | null
  participant_count: number
  channel_id: number
  active: boolean
  has_password: boolean
  queue_mode: string
  host: {
    avatar_url: string
    country_code: string
    default_group: string
    id: number
    is_active: boolean
    is_bot: boolean
    is_deleted: boolean
    is_online: boolean
    is_supporter: boolean
    last_visit: string
    pm_friends_only: boolean
    profile_colour: string | null
    username: string
    groups?: string[]
    country: {
      code: string
      name: string
    }
  }
  playlist: {
    id: number
    room_id: number
    beatmap_id: number
    ruleset_id: number
    allowed_mods: {
      acronym: string
      settings: {}
    }[]
    required_mods: {
      acronym: string
      settings: {}
    }[]
    expired: number
    owner_id: number
    beatmap: {
      beatmapset_id: number
      difficulty_rating: number
      id: number
      mode: string
      status: string
      total_length: number
      user_id: number
      version: string
      beatmapset: {
        artist: string
        artist_unicode: string
        covers: {
          cover: string
          'cover@2x': string
          card: string
          'card@2x': string
          list: string
          'list@2x': string
          slimcover: string
          'slimcover@2x': string
        }
        creator: string
        favourite_count: number
        hype: {
          current: number
          required: number
        }
        id: number
        nsfw: boolean
        play_count: number
        preview_url: string
        source: string
        status: string
        title: string
        title_unicode: string
        track_id: number | null
        user_id: number
        video: boolean
      }
      checksum: string
      max_combo: number
    }
  }
  recent_participants: {
    avatar_url: string
    country_code: string
    default_group: string
    id: number
    is_active: boolean
    is_bot: boolean
    is_deleted: boolean
    is_online: boolean
    is_supporter: boolean
    last_visit: string
    pm_friends_only: boolean
    profile_colour: string | null
    username: string
    groups?: string[]
  }[]
}
```

</details>

#### `v2.rooms.one();`

<details>
  <summary>Returned data</summary>

```typescript
export interface room_object {
  id: number
  name: string
  category: string
  type: string
  user_id: number
  starts_at: string
  ends_at: string
  max_attempts: number | null
  participant_count: number
  channel_id: number
  active: boolean
  has_password: boolean
  queue_mode: string
  current_user_score: {
    accuracy: number
    attempts: number
    completed: number
    pp: number
    room_id: number
    total_score: number
    user_id: number
    playlist_item_attempts: []
  }
  host: {
    avatar_url: string
    country_code: string
    default_group: string
    id: number
    is_active: boolean
    is_bot: boolean
    is_deleted: boolean
    is_online: boolean
    is_supporter: boolean
    last_visit: string
    pm_friends_only: boolean
    profile_colour: string | null
    username: string
    groups?: string[]
    country: {
      code: string
      name: string
    }
  }
  playlist: {
    id: number
    room_id: number
    beatmap_id: number
    ruleset_id: number
    allowed_mods: {
      acronym: string
      settings: {}
    }[]
    required_mods: {
      acronym: string
      settings: {}
    }[]
    expired: number
    owner_id: number
    beatmap: {
      beatmapset_id: number
      difficulty_rating: number
      id: number
      mode: string
      status: string
      total_length: number
      user_id: number
      version: string
      beatmapset: {
        artist: string
        artist_unicode: string
        covers: {
          cover: string
          'cover@2x': string
          card: string
          'card@2x': string
          list: string
          'list@2x': string
          slimcover: string
          'slimcover@2x': string
        }
        creator: string
        favourite_count: number
        hype: {
          current: number
          required: number
        }
        id: number
        nsfw: boolean
        play_count: number
        preview_url: string
        source: string
        status: string
        title: string
        title_unicode: string
        track_id: number | null
        user_id: number
        video: boolean
      }
      checksum: string
      max_combo: number
    }
  }
  recent_participants: {
    avatar_url: string
    country_code: string
    default_group: string
    id: number
    is_active: boolean
    is_bot: boolean
    is_deleted: boolean
    is_online: boolean
    is_supporter: boolean
    last_visit: string
    pm_friends_only: boolean
    profile_colour: string | null
    username: string
    groups?: string[]
  }[]
}
```

</details>

#### `v2.rooms.leader();`

<details>
  <summary>Returned data</summary>

```typescript
export interface room_leader_object {
  leaderboard: {
    accuracy: number
    attempts: number
    completed: number
    pp: number
    room_id: number
    total_score: number
    user_id: number
    user: {
      avatar_url: string
      country_code: string
      default_group: string
      id: number
      is_active: boolean
      is_bot: boolean
      is_deleted: boolean
      is_online: boolean
      is_supporter: boolean
      last_visit: string
      pm_friends_only: boolean
      profile_colour: string | null
      username: string
      groups?: string[]
      country: {
        code: string
        name: string
      }
    }
  }[]
  user_score: null
}
```

</details>

#### `v1.beatmap.set();`

#### `v1.beatmap.diff();`

#### `v1.beatmap.user();`

<details>
  <summary>Returned data</summary>

```typescript
export interface beatmap_object {
  id: {
    set: number
    diff: number
  }
  date: {
    submit: string
    update: string
    approved: string
  }
  metadata: {
    artist: {
      original: string
      unicode: string
    }
    title: {
      original: string
      unicode: string
    }
    creator: {
      id: number
      name: string
    }
    favs: number
    rating: number
    source: string
    genre_id: {
      id: number
      name: string
    }
    language_id: {
      id: number
      name: string
    }
    tags: string
  }
  status: {
    id: number
    name: string
  }
  difficulties: {
    id: number
    diff: string
    mode: {
      id: number
      name: string
    }
    file_md5: string
    stats: {
      star: {
        pure: number
        aim: number
        speed: number
      }
      ar: number
      od: number
      cs: number
      hp: number
      bpm: {
        avg: number
      }
      combo: number
      time: {
        full: number
        drain: number
      }
      objects: {
        all: number
        circles: number
        sliders: number
        spinners: number
      }
    }
    plays: number
    pass: number
  }[]
  misc: {
    download_unavailable: boolean
    audio_unavailable: boolean
    storyboard: boolean
    video: boolean
    packs: string
    bg: {
      full: string
      raw: string
      slim: {
        1: string
        2: string
      }
      cover: {
        1: string
        2: string
      }
      card: {
        1: string
        2: string
      }
      list: {
        1: string
        2: string
      }
    }
  }
}
```

</details>

#### `v1.beatmap.scores();`

<details>
  <summary>Returned data</summary>

```typescript
export interface scores_object {
  date: string
  rank: string
  user: {
    id: number
    name: string
  }
  score: {
    total: number
    id: number
  }
  combo: {
    max: number
    full: number
  }
  hits: {
    300: number
    geki: number
    100: number
    katu: number
    50: number
    0: number
  }
  mods: {
    id: number
    name: string
  }
  accuracy: number
  pp: number
  replay: number
}
```

</details>

#### `v1.user.get();`

<details>
  <summary>Returned data</summary>

```typescript
export interface user_object {
  id: number
  name: string
  pp: number
  acc: number
  lvl: number
  join: string
  country: {
    flag: string
    short: string
    full: string
  }
  play: {
    count: number
    time: number
  }
  hits: {
    300: number
    100: number
    50: number
  }
  score: {
    total: number
    ranked: number
  }
  rank: {
    global: number
    country: number
  }
  ranks: {
    ssh: number
    ss: number
    sh: number
    s: number
    a: number
  }
  events: {
    id: {
      diff: number
      set: number
    }
    display: {
      html: string
      pure: string
    }
    date: string
    epicfactor: number
  }[]
}
```

</details>

#### `v1.user.scores.best();`

<details>
  <summary>Returned data</summary>

```typescript
export interface best_object {
  date: string
  beatmap: number
  rank: string
  user: {
    id: number
  }
  score: {
    id: number
    total: number
  }
  combo: {
    max: number
    full: number
  }
  hits: {
    300: number
    geki: number
    100: number
    katu: number
    50: number
    0: number
  }
  mods: {
    id: number
    name: string
  }
  accuracy: number
  pp: number
  replay: number
}
```

</details>

#### `v1.user.scores.recent();`

<details>
  <summary>Returned data</summary>

```typescript
export interface recent_object {
  date: string
  beatmap: number
  rank: string
  user: {
    id: number
  }
  score: {
    total: number
  }
  combo: {
    max: number
    full: number
  }
  hits: {
    300: number
    geki: number
    100: number
    katu: number
    50: number
    0: number
  }
  mods: {
    id: number
    name: string
  }
  accuracy: number
}
```

</details>

#### `v1.match();`

<details>
  <summary>Returned data</summary>

```typescript
export interface match_object {
  match: {
    id: number
    name: string
    time: {
      start: string
      end: string
    }
  }
  games: {
    team: {
      id: number
      name: string
    }
    slot: number
    user: {
      id: number
    }
    score: number
    combo: {
      max: number
      perfect: number
    }
    hits: {
      300: number
      geki: number
      100: number
      katu: number
      50: number
      0: number
    }
    mods: {
      id: number
      name: string
    }
    rank: string
    pass: string
  }[]
}
```

</details>

#### `v1.replay();`

Return file path or Error

#### `mods.id();`

Return id of mods from mods name (HDDT => 72)

#### `mods.name();`

Return mods name from mods id (62 => DT)

#### `tools.accuracy();`

Return accuracy from hits

#### `tools.country();`

<details>
  <summary>Returned data</summary>

```typescript
export interface flags {
  flag: string
  country: string
}
```

</details>

#### `tools.file();`

Return string path to downloaded file

#### `tools.rank();`

Return rank letter from hits

# Dependencies

- [lzma-native](https://www.npmjs.com/package/lzma-native 'https://www.npmjs.com/package/lzma-native'): decompress data from replay
- [node-osr](npmjs.com/package/node-osr 'npmjs.com/package/node-osr'): Working with replay file
- `request.ts` by [AqilCont](https://github.com/AqilCont 'https://github.com/AqilCont')
- [open](npmjs.com/package/open 'npmjs.com/package/open'): open links in browser
