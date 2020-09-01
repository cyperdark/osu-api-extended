const axios = require("axios");
const path = require("path");
const fs = require("fs");

class Mods {
  constructor() { }

  /**
   * Get mods by id
   * @param {null|Number|Boolean|String} m
   */
  id(m) {
    return new Promise(ex => {
      try {
        let id = m;
        let enabled = [];
        let values = Object.keys(codes).map(a => Number(a));
        for (let i = values.length - 1; i >= 0; i--) {
          if (m >= values[i]) {
            m -= values[i];
            enabled.push(codes[values[i]]);
          }
        }
        let modsText = "";
        enabled.forEach((mod) => modsText += mod);
        let Mods = JSON.parse(fs.readFileSync(path.join(__dirname, 'mod.json'), "utf-8"));
        let convert = Mods.find(m => m.bad == modsText);
        if (convert) ex(convert.good);
        else {
          // if (enabled.length > 1) this.notFound(id, modsText);
          ex((id == 0) ? 'NoMod' : modsText);
        };
      } catch (err) { console.log(`\n\nosu-api-ex | Mods.id => ${m}`, err, '\n\n'); }
    });
  }
  /**
   * Get mods by name
   * @param {null|Number|Boolean|String} m
   */
  name(m) {
    return new Promise(ex => {
      try {
        let name = m.match(/.{1,2}/g);
        let num = 0;
        let values = Object.keys(names).map(a => a);
        for (let i = 0; i < name.length; i++) {
          let find = values.filter(v => v.toLowerCase() == name[i].toLowerCase());
          num += parseInt(names[find]);
        };
        ex(num);
      } catch (err) { console.log(`\n\nosu-api-ex | Mods.name => ${m}`, err, '\n\n'); }
    });
  }
  /**
   * Get mods by id
   * @param {null|Number|Boolean|String} id
   * @param {null|Number|Boolean|String} txt
   */
  notFound(id, txt) {
    return new Promise(async () => {
      try {
        await axios.get(`https://new-mods-osu.glitch.me/add?id=${id}&txt=${txt}`);
      } catch (err) {
        if (err.message.indexOf('status code 429') == -1) console.log(`\n\nosu-api-ex | Mods.name => ${txt}`, err, '\n\n');
      }
    });
  }
}

module.exports = Mods;

let names = {
  NF: 1,
  EZ: 2,
  TD: 4,
  HD: 8,
  HR: 16,
  SD: 32,
  DT: 64,
  RX: 128,
  HT: 256,
  NC: 576,
  FL: 1024,
  AT: 2048,
  SO: 4096,
  AP: 8192,
  PF: 16416,
  '4K': 32768,
  '5K': 65536,
  '6K': 131072,
  '7K': 262144,
  '8K': 524288,
  FI: 1048576,
  RD: 2097152,
  LM: 4194304,
  Target: 8388608,
  '9K': 16777216,
  KeyCoop: 33554432,
  '1K': 67108864,
  '3K': 134217728,
  '2K': 268435456,
  ScoreV2: 536870912,
  LastMod: 107374182
};

let codes = {
  1: 'NF',
  2: 'EZ',
  4: 'TD',
  8: 'HD',
  16: 'HR',
  32: 'SD',
  64: 'DT',
  128: 'RX',
  256: 'HT',
  576: 'NC',
  1024: 'FL',
  2048: 'AT',
  4096: 'SO',
  8192: 'AP',
  16416: 'PF',
  32768: '4K',
  65536: '5K',
  131072: '6K',
  262144: '7K',
  524288: '8K',
  1048576: 'Fl',
  2097152: 'RD',
  4194304: 'LM',
  8388608: 'Target',
  16777216: '9K',
  33554432: 'KeyCoop',
  67108864: '1K',
  134217728: '3K',
  268435456: '2K',
  536870912: 'ScoreV2',
  1073741824: 'LastMod'
};