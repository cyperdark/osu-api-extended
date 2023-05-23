export interface response {
0: string;
1: string;
2: string;
3: string;
4: string;
5: string;
6: string;
7: number;
8: number;
9: number;
10: number;
11: number;
12: number;
13: number;
14: string;
15: string;
16: string;
17: string;
18: string;
19: string;
20: string;
21: string;
22: string;
23: string;
24: string;
25: string;
26: string;
27: string;
28: string;
29: string;
}


export interface types {
  /**
   * Download beatmap set to specified directory
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_beatmap_set_download = await v2.beatmap.set.download(beatmapset, file_path, host_name, no_video, callback);
   *   console.log(v2_beatmap_set_download);
   * };
   * 
   * main();
   * ```
   * @param {number} beatmapset id of the beatmap set
   * @param {string} file_path path to file with their name and extension
   * @param {string} host_name ```osu``` or ```chimu``` or ```beatconnect``` or ```sayobot``` or ```nerinyan``` or 
   * @param {boolean} no_video Download with or without video
   * @param {Function} callback function which is will be triggered on downloading progress
  */
  (beatmapset: number, file_path: string, host_name: 'osu' | 'chimu' | 'beatconnect' | 'sayobot' | 'nerinyan' | '' , no_video: boolean, callback?: Function): Promise<string>;
}
