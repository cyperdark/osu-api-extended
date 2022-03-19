import {
  _news, _changelogs, _beatmaps, _beatmap, _scores, _discussions, _seasonal, _wiki, _search, _comments, _users, _me, _user, _forum, _notifications, _matches, _rooms,
  _mode, _genre, _language
} from "../../types/v2";
import { namespace, download } from "../../utility/request";
import { RequestNamepsace } from "../../types/request";

import * as Auth from "../../utility/auth";

const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');

/**
 * @deprecated Since version 1.0. Will be deleted in version 3.0. Use bar instead.
 */
export const login_lazer = () => {
  throw new Error("New authorization method\nhttps://github.com/cyperdark/osu-api-extended/blob/master/changes/2.1.2.md\n\n");
  }

/**
 * @deprecated Since version 1.0. Will be deleted in version 3.0. Use bar instead.
 */
export const login = () => {
  throw new Error("New authorization method\nhttps://github.com/cyperdark/osu-api-extended/blob/master/changes/2.1.2.md\n\n");
}

/**
 * @deprecated Since version 1.0. Will be deleted in version 3.0. Use bar instead.
 */
export const authorize = () => {
  throw new Error("New authorization method\nhttps://github.com/cyperdark/osu-api-extended/blob/master/changes/2.1.2.md\n\n");
}



// News
export const news: _news = async (obj = {}) => {
  const data = await request(`news`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${Auth.cache_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    params: {
      limit: obj.limit,
      year: obj.year,
      'cursor[published_at]': obj.cursorPublished,
      'cursor[_id]': obj.cursorId,
    }
  });

  return data;
};

// Changelogs
export const changelogs: _changelogs = {
  all: async (obj = {}) => {
    const data = await request(`changelog`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: obj,
    });

    return data;
  },
  get: async (stream, build) => {
    const data = await request(`changelog/${stream}/${build}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });

    return data;
  },
  lookup: async (changelog, obj = {}) => {
    const data = await request(`changelog/${changelog}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: obj,
    });

    return data;
  },
};

// Seasonal backgrounds
export const seasonal_backgrounds: _seasonal = async () => {
  const data = await request(`seasonal-backgrounds`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${Auth.cache_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });

  return data;
};

// Wiki search
export const wiki: _wiki = async (language, path) => {
  const data = await request(`wiki/${language}/${path}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${Auth.cache_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });

  return data;
};

// Search
export const search: _search = async (obj = {}) => {
  const data = await request(`search`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${Auth.cache_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    params: obj,
  });

  return data;
};


// Beatmaps
export const beatmaps: _beatmaps = {
  get: async (id) => {
    const data = await request(`beatmapsets/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return data;
  },
  events: async (obj = {}) => {
    const data = await request(`beatmapsets/events`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: obj,
    });

    return data;
  },
  search: async (obj = {}) => {
    const oobj: any = {
      q: obj.query,
      c: obj?.general,
      m: _mode.indexOf(obj?.mode),
      s: obj?.section,
      g: _genre.indexOf(obj?.genre),
      l: _language.indexOf(obj?.language),
      e: obj?.include,
      r: obj?.rank,
      nsfw: undefined,
    };
    if (!obj?.nfsw) oobj.nsfw = 0;

    const data = await request(`beatmapsets/search`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: oobj,
    });

    return data;
  },
};

// Beatmap
export const beatmap: _beatmap = {
  get: async (id) => {
    const data = await request(`beatmaps/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return data;
  },
  search: async (obj = {}) => {
    const data = await request('beatmaps/lookup', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: {
        checksum: obj.checksum,
        filename: obj.filename,
        id: obj.diff_id,
      },
    });

    return data;
  },
  scores: {
    all: async (beatmap, obj = {}) => {
      const data = await request(`beatmaps/${beatmap}/scores`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Auth.cache_token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: { mode: obj.mode, mods: obj.mods },
      });

      return data;
    },
    user: async (beatmap, user, obj = {}) => {
      const data = await request(`beatmaps/${beatmap}/scores/users/${user}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Auth.cache_token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: { mode: obj.mode, mods: obj.mods }
      });

      return data;
    },
    user_all: async (beatmap, user, mode) => {
      const data = await request(`beatmaps/${beatmap}/scores/users/${user}/all`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Auth.cache_token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: { mode }
      });

      return data;
    },
  },
};

// Discussions
export const discussions: _discussions = {
  all: async (obj = {}) => {
    const data = await request(`beatmapsets/discussions`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: obj,
    });

    return data;
  },
  posts: async (obj = {}) => {
    const data = await request(`beatmapsets/discussions/posts`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: obj,
    });

    return data;
  },
  votes: async (obj = {}) => {
    const data = await request(`beatmapsets/discussions/votes`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: obj,
    });

    return data;
  },
};


// Scores
export const scores: _scores = {
  users: {
    recent: async (user, obj = {}) => {
      const data = await request(`users/${user}/scores/recent`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Auth.cache_token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: obj,
      });

      return data;
    },
    best: async (user, obj = {}) => {
      const data = await request(`users/${user}/scores/best`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Auth.cache_token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: obj,
      });

      return data;
    },
    firsts: async (user, obj = {}) => {
      const data = await request(`users/${user}/scores/firsts`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Auth.cache_token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: obj,
      });

      return data;
    },
  },
  score: {
    get: async (mode, score_id) => {
      const data = await request(`scores/${mode}/${score_id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Auth.cache_token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      });

      return data;
    },
    download: async (mode, score_id, file_path) => {
      const data = await download(`https://osu.ppy.sh/api/v2/scores/${mode}/${score_id}/download`, file_path, {
        headers: {
          Authorization: `Bearer ${Auth.cache_token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      });

      return data;
    },
  }
};


// Comments
export const comments: _comments = {
  all: async (obj = {}) => {
    const data = await request(`comments`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: obj,
    });

    return data;
  },
  one: async (comment) => {
    const data = await request(`comments/${comment}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });

    return data;
  },
};


// Users
export const me: _me = {
  data: async (mode) => {
    const data = await request(`me/${mode}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });

    return data;
  },
  download_quota: async () => {
    throw new Error("Currently unavailable");

    const data = await request(`me/download-quota-check`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });

    return data;
  },
  friends: async () => {
    const data = await request(`friends`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });

    return data;
  }
};

export const users: _users = async (ids = []) => {
  if (ids.length == 0) throw new Error("Add users in list");

  const data = await request(`users`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${Auth.cache_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    params: { ids },
  });

  return data;
};

export const user: _user = {
  get: async (user, mode, key?) => {
    const data = await request(`users/${user}/${mode}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: { key },
    });

    return data;
  },
  activity: async (user, obj = {}) => {
    const data = await request(`users/${user}/recent_activity`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: obj,
    });

    return data;
  },
  kudosu: async (user, obj = {}) => {
    const data = await request(`users/${user}/kudosu`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: obj,
    });

    return data;
  },
  beatmaps: {
    loved: async (user, obj = {}) => {
      const data = await request(`users/${user}/beatmapsets/loved`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Auth.cache_token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: obj,
      });

      return data;
    },
    ranked: async (user, obj = {}) => {
      const data = await request(`users/${user}/beatmapsets/ranked`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Auth.cache_token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: obj,
      });

      return data;
    },
    pending: async (user, obj = {}) => {
      const data = await request(`users/${user}/beatmapsets/pending`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Auth.cache_token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: obj,
      });

      return data;
    },
    graveyard: async (user, obj = {}) => {
      const data = await request(`users/${user}/beatmapsets/graveyard`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Auth.cache_token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: obj,
      });

      return data;
    },
    favourite: async (user, obj = {}) => {
      const data = await request(`users/${user}/beatmapsets/favourite`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Auth.cache_token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: obj,
      });

      return data;
    },
    most_played: async (user, obj = {}) => {
      const data = await request(`users/${user}/beatmapsets/most_played`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Auth.cache_token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: obj,
      });

      return data;
    },
  }
};


// Forum
export const forum: _forum = {
  topics: {
    all: async (topic, obj = {}) => {
      const data = await request(`forums/topics/${topic}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Auth.cache_token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: obj,
      });

      return data;
    },
  },
};


// Notifications
export const notifications: _notifications = {
  all: async (max_id?) => {
    const data = await request(`notifications`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: { max_id },
    });

    return data;
  },
};


// Matches
export const matches: _matches = {
  all: async () => {
    const data = await request(`matches`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });

    return data;
  },
  one: async (match: string) => {
    const data = await request(`matches/${match}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });

    return data;
  }
};


// Rooms
export const rooms: _rooms = {
  all: async () => {
    const data = await request(`rooms`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });

    return data;
  },
  one: async (room_id: number) => {
    const data = await request(`rooms/${room_id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });

    return data;
  },
  leader: async (room_id: number) => {
    const data = await request(`rooms/${room_id}/leaderboard`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.cache_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });

    return data;
  }
};