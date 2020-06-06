const fs = require("fs");
const path = require("path");

class Country {
  constructor() { }
  /**
   * Get beatmap data
   * @param {null|Number|Boolean|String} id
   * @return {Object}
   */
  get(id) {
    return new Promise(async ex => {
      try {
        let json = JSON.parse(fs.readFileSync(path.join(__dirname, 'flags.json'), "utf-8"));
        let res = json.filter(f => f.flag == id);
        if (res) ex(res[0].country);
        else ex(`${id} country not support`);
      } catch (err) { console.log(`\n\nosu-api-ex | beatmap => ${JSON.stringify(obj)}`, err, '\n\n'); }
    });
  }
}

module.exports = Country;