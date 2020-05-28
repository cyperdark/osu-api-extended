const fs = require("fs");
const path = require("path");

module.exports = (id) => {
  let json = JSON.parse(fs.readFileSync(path.join(__dirname, 'flags.json'), "utf-8"));
  let res = json.filter(f => f.flag == id);
  if (res) return res[0].country;
  else return `${id} country not support`;
};