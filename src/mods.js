const fs = require("fs");
const path = require("path");
const axios = require("axios");

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
}

function mods(m) {
  const enabled = [];

  let values = Object.keys(codes).map(a => Number(a));
  for (let i = values.length - 1; i >= 0; i--) {
    if (m >= values[i]) {
      m -= values[i];
      enabled.push(codes[values[i]]);
    };
  };
  let modsText = "";
  enabled.forEach((mod, ind) => modsText += mod);
  switch (modsText) {
    case "FLHD": modsText = "HDFL"; break;
    case "DTHDEZ": modsText = "EZHDDT"; break;
    case "DTEZ": modsText = "EZDT"; break;
    case "DTHD": modsText = "HDDT"; break;
    case "HDTD": modsText = "TDHD"; break;
    case "NCHD": modsText = "HDNC"; break;
    case "NCHRHD": modsText = "HDNCHR"; break;
    case "SDHRHDTD": modsText = "TDHDHRSD"; break;
    case "HRHDTD": modsText = "TDHDHR"; break;
    case "HRHD": modsText = "HDHR"; break;
    case "DTHRHD": modsText = "HDDTHR"; break;
    case "FLHRHD": modsText = "HDHRFL"; break;
    case "DTHRHDNF": modsText = "NFHDDTHR"; break;
    case "DTHDTD": modsText = "TDHDDT"; break;
    case "SDHRHD": modsText = "HDHRSD"; break;
    case "SDHD": modsText = "HDSD"; break;
    case "PFHD": modsText = "HDPF"; break;
    case "FLDTTD": modsText = "TDDTFL"; break;
    case "FLNCHRHD": modsText = "HDNCHRFL"; break;
    case "FLDTHR": modsText = "DTHRFL"; break;
    case "FLTD": modsText = "TDFL"; break;
    case "FLDTHRHD": modsText = "HDDTHRFL"; break;
    case "FLNCHR": modsText = "NCHRFL"; break;
    case "PFDTHD": modsText = "HDDTPF"; break;
    case "FLEZ": modsText = "EZFL"; break;
    case "FLDTHDEZ": modsText = "EZHDDTFL"; break;
    case "FLDTHD": modsText = "HDDTFL"; break;
    case "FLNC": modsText = "NCFL"; break;
    case "FLNCHD": modsText = "NCHDFL"; break;
    case "TDEZ": modsText = "EZTD"; break;
    case "HDNF": modsText = "NFHD"; break;
    case "NCHDTD": modsText = "TDHDNC"; break;

    default: modsText;
      enw(m, modsText);
      break;
  };
  return modsText;
};

async function enw(id, txt) {
  try {
    let axi = await axios.get(`https://new-mods-osu.glitch.me/add?id=${id}&txt=${txt}`);
    console.log(axi.data.status);
  } catch (err) { console.log("m/enw", err); };
};

module.exports = mods;