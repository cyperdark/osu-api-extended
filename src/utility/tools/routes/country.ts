const flags: {
  flag: string,
  country: string,
}[] = [
	{
		flag: "A1",
		country: "Anonymous Proxy",
	},
	{
		flag: "A2",
		country: "Satellite Provider",
	},
	{
		flag: "AD",
		country: "Andorra",
	},
	{
		flag: "AE",
		country: "United Arab Emirates",
	},
	{
		flag: "AF",
		country: "Afghanistan",
	},
	{
		flag: "AG",
		country: "Antigua and Barbuda",
	},
	{
		flag: "AI",
		country: "Anguilla",
	},
	{
		flag: "AL",
		country: "Albania",
	},
	{
		flag: "AM",
		country: "Armenia",
	},
	{
		flag: "AN",
		country: "Netherlands Antilles",
	},
	{
		flag: "AO",
		country: "Angola",
	},
	{
		flag: "AP",
		country: "Asia/Pacific Region",
	},
	{
		flag: "AQ",
		country: "Antarctica",
	},
	{
		flag: "AR",
		country: "Argentina",
	},
	{
		flag: "AS",
		country: "American Samoa",
	},
	{
		flag: "AT",
		country: "Austria",
	},
	{
		flag: "AU",
		country: "Australia",
	},
	{
		flag: "AW",
		country: "Aruba",
	},
	{
		flag: "AX",
		country: "Aland Islands",
	},
	{
		flag: "AZ",
		country: "Azerbaijan",
	},
	{
		flag: "BA",
		country: "Bosnia and Herzegovina",
	},
	{
		flag: "BB",
		country: "Barbados",
	},
	{
		flag: "BD",
		country: "Bangladesh",
	},
	{
		flag: "BE",
		country: "Belgium",
	},
	{
		flag: "BF",
		country: "Burkina Faso",
	},
	{
		flag: "BG",
		country: "Bulgaria",
	},
	{
		flag: "BH",
		country: "Bahrain",
	},
	{
		flag: "BI",
		country: "Burundi",
	},
	{
		flag: "BJ",
		country: "Benin",
	},
	{
		flag: "BL",
		country: "Saint Barthelemy",
	},
	{
		flag: "BM",
		country: "Bermuda",
	},
	{
		flag: "BN",
		country: "Brunei",
	},
	{
		flag: "BO",
		country: "Bolivia",
	},
	{
		flag: "BR",
		country: "Brazil",
	},
	{
		flag: "BS",
		country: "Bahamas",
	},
	{
		flag: "BT",
		country: "Bhutan",
	},
	{
		flag: "BV",
		country: "Bouvet Island",
	},
	{
		flag: "BW",
		country: "Botswana",
	},
	{
		flag: "BY",
		country: "Belarus",
	},
	{
		flag: "BZ",
		country: "Belize",
	},
	{
		flag: "CA",
		country: "Canada",
	},
	{
		flag: "CC",
		country: "Cocos (Keeling) Islands",
	},
	{
		flag: "CD",
		country: "Congo, The Democratic Republic of the",
	},
	{
		flag: "CF",
		country: "Central African Republic",
	},
	{
		flag: "CG",
		country: "Congo",
	},
	{
		flag: "CH",
		country: "Switzerland",
	},
	{
		flag: "CI",
		country: "Cote D'Ivoire",
	},
	{
		flag: "CK",
		country: "Cook Islands",
	},
	{
		flag: "CL",
		country: "Chile",
	},
	{
		flag: "CM",
		country: "Cameroon",
	},
	{
		flag: "CN",
		country: "China",
	},
	{
		flag: "CO",
		country: "Colombia",
	},
	{
		flag: "CR",
		country: "Costa Rica",
	},
	{
		flag: "CU",
		country: "Cuba",
	},
	{
		flag: "CV",
		country: "Cabo Verde",
	},
	{
		flag: "CX",
		country: "Christmas Island",
	},
	{
		flag: "CY",
		country: "Cyprus",
	},
	{
		flag: "CZ",
		country: "Czechia",
	},
	{
		flag: "DE",
		country: "Germany",
	},
	{
		flag: "DJ",
		country: "Djibouti",
	},
	{
		flag: "DK",
		country: "Denmark",
	},
	{
		flag: "DM",
		country: "Dominica",
	},
	{
		flag: "DO",
		country: "Dominican Republic",
	},
	{
		flag: "DZ",
		country: "Algeria",
	},
	{
		flag: "EC",
		country: "Ecuador",
	},
	{
		flag: "EE",
		country: "Estonia",
	},
	{
		flag: "EG",
		country: "Egypt",
	},
	{
		flag: "EH",
		country: "Western Sahara",
	},
	{
		flag: "ER",
		country: "Eritrea",
	},
	{
		flag: "ES",
		country: "Spain",
	},
	{
		flag: "ET",
		country: "Ethiopia",
	},
	{
		flag: "EU",
		country: "Europe",
	},
	{
		flag: "FI",
		country: "Finland",
	},
	{
		flag: "FJ",
		country: "Fiji",
	},
	{
		flag: "FK",
		country: "Falkland Islands (Malvinas)",
	},
	{
		flag: "FM",
		country: "Micronesia, Federated States of",
	},
	{
		flag: "FO",
		country: "Faroe Islands",
	},
	{
		flag: "FR",
		country: "France",
	},
	{
		flag: "FX",
		country: "France, Metropolitan",
	},
	{
		flag: "GA",
		country: "Gabon",
	},
	{
		flag: "GB",
		country: "United Kingdom",
	},
	{
		flag: "GD",
		country: "Grenada",
	},
	{
		flag: "GE",
		country: "Georgia",
	},
	{
		flag: "GF",
		country: "French Guiana",
	},
	{
		flag: "GG",
		country: "Guernsey",
	},
	{
		flag: "GH",
		country: "Ghana",
	},
	{
		flag: "GI",
		country: "Gibraltar",
	},
	{
		flag: "GL",
		country: "Greenland",
	},
	{
		flag: "GM",
		country: "Gambia",
	},
	{
		flag: "GN",
		country: "Guinea",
	},
	{
		flag: "GP",
		country: "Guadeloupe",
	},
	{
		flag: "GQ",
		country: "Equatorial Guinea",
	},
	{
		flag: "GR",
		country: "Greece",
	},
	{
		flag: "GS",
		country: "South Georgia and the South Sandwich Islands",
	},
	{
		flag: "GT",
		country: "Guatemala",
	},
	{
		flag: "GU",
		country: "Guam",
	},
	{
		flag: "GW",
		country: "Guinea-Bissau",
	},
	{
		flag: "GY",
		country: "Guyana",
	},
	{
		flag: "HK",
		country: "Hong Kong",
	},
	{
		flag: "HM",
		country: "Heard Island and McDonald Islands",
	},
	{
		flag: "HN",
		country: "Honduras",
	},
	{
		flag: "HR",
		country: "Croatia",
	},
	{
		flag: "HT",
		country: "Haiti",
	},
	{
		flag: "HU",
		country: "Hungary",
	},
	{
		flag: "ID",
		country: "Indonesia",
	},
	{
		flag: "IE",
		country: "Ireland",
	},
	{
		flag: "IL",
		country: "Israel",
	},
	{
		flag: "IM",
		country: "Isle of Man",
	},
	{
		flag: "IN",
		country: "India",
	},
	{
		flag: "IO",
		country: "British Indian Ocean Territory",
	},
	{
		flag: "IQ",
		country: "Iraq",
	},
	{
		flag: "IR",
		country: "Iran, Islamic Republic of",
	},
	{
		flag: "IS",
		country: "Iceland",
	},
	{
		flag: "IT",
		country: "Italy",
	},
	{
		flag: "JE",
		country: "Jersey",
	},
	{
		flag: "JM",
		country: "Jamaica",
	},
	{
		flag: "JO",
		country: "Jordan",
	},
	{
		flag: "JP",
		country: "Japan",
	},
	{
		flag: "KE",
		country: "Kenya",
	},
	{
		flag: "KG",
		country: "Kyrgyzstan",
	},
	{
		flag: "KH",
		country: "Cambodia",
	},
	{
		flag: "KI",
		country: "Kiribati",
	},
	{
		flag: "KM",
		country: "Comoros",
	},
	{
		flag: "KN",
		country: "Saint Kitts and Nevis",
	},
	{
		flag: "KP",
		country: "Korea, Democratic People's Republic of",
	},
	{
		flag: "KR",
		country: "South Korea",
	},
	{
		flag: "KW",
		country: "Kuwait",
	},
	{
		flag: "KY",
		country: "Cayman Islands",
	},
	{
		flag: "KZ",
		country: "Kazakhstan",
	},
	{
		flag: "LA",
		country: "Lao People's Democratic Republic",
	},
	{
		flag: "LB",
		country: "Lebanon",
	},
	{
		flag: "LC",
		country: "Saint Lucia",
	},
	{
		flag: "LI",
		country: "Liechtenstein",
	},
	{
		flag: "LK",
		country: "Sri Lanka",
	},
	{
		flag: "LR",
		country: "Liberia",
	},
	{
		flag: "LS",
		country: "Lesotho",
	},
	{
		flag: "LT",
		country: "Lithuania",
	},
	{
		flag: "LU",
		country: "Luxembourg",
	},
	{
		flag: "LV",
		country: "Latvia",
	},
	{
		flag: "LY",
		country: "Libya",
	},
	{
		flag: "MA",
		country: "Morocco",
	},
	{
		flag: "MC",
		country: "Monaco",
	},
	{
		flag: "MD",
		country: "Moldova",
	},
	{
		flag: "ME",
		country: "Montenegro",
	},
	{
		flag: "MF",
		country: "Saint Martin",
	},
	{
		flag: "MG",
		country: "Madagascar",
	},
	{
		flag: "MH",
		country: "Marshall Islands",
	},
	{
		flag: "MK",
		country: "North Macedonia",
	},
	{
		flag: "ML",
		country: "Mali",
	},
	{
		flag: "MM",
		country: "Myanmar",
	},
	{
		flag: "MN",
		country: "Mongolia",
	},
	{
		flag: "MO",
		country: "Macau",
	},
	{
		flag: "MP",
		country: "Northern Mariana Islands",
	},
	{
		flag: "MQ",
		country: "Martinique",
	},
	{
		flag: "MR",
		country: "Mauritania",
	},
	{
		flag: "MS",
		country: "Montserrat",
	},
	{
		flag: "MT",
		country: "Malta",
	},
	{
		flag: "MU",
		country: "Mauritius",
	},
	{
		flag: "MV",
		country: "Maldives",
	},
	{
		flag: "MW",
		country: "Malawi",
	},
	{
		flag: "MX",
		country: "Mexico",
	},
	{
		flag: "MY",
		country: "Malaysia",
	},
	{
		flag: "MZ",
		country: "Mozambique",
	},
	{
		flag: "NA",
		country: "Namibia",
	},
	{
		flag: "NC",
		country: "New Caledonia",
	},
	{
		flag: "NE",
		country: "Niger",
	},
	{
		flag: "NF",
		country: "Norfolk Island",
	},
	{
		flag: "NG",
		country: "Nigeria",
	},
	{
		flag: "NI",
		country: "Nicaragua",
	},
	{
		flag: "NL",
		country: "Netherlands",
	},
	{
		flag: "NO",
		country: "Norway",
	},
	{
		flag: "NP",
		country: "Nepal",
	},
	{
		flag: "NR",
		country: "Nauru",
	},
	{
		flag: "NU",
		country: "Niue",
	},
	{
		flag: "NZ",
		country: "New Zealand",
	},
	{
		flag: "O1",
		country: "Other",
	},
	{
		flag: "OM",
		country: "Oman",
	},
	{
		flag: "PA",
		country: "Panama",
	},
	{
		flag: "PE",
		country: "Peru",
	},
	{
		flag: "PF",
		country: "French Polynesia",
	},
	{
		flag: "PG",
		country: "Papua New Guinea",
	},
	{
		flag: "PH",
		country: "Philippines",
	},
	{
		flag: "PK",
		country: "Pakistan",
	},
	{
		flag: "PL",
		country: "Poland",
	},
	{
		flag: "PM",
		country: "Saint Pierre and Miquelon",
	},
	{
		flag: "PN",
		country: "Pitcairn",
	},
	{
		flag: "PR",
		country: "Puerto Rico",
	},
	{
		flag: "PS",
		country: "Palestine, State of",
	},
	{
		flag: "PT",
		country: "Portugal",
	},
	{
		flag: "PW",
		country: "Palau",
	},
	{
		flag: "PY",
		country: "Paraguay",
	},
	{
		flag: "QA",
		country: "Qatar",
	},
	{
		flag: "RE",
		country: "Reunion",
	},
	{
		flag: "RO",
		country: "Romania",
	},
	{
		flag: "RS",
		country: "Serbia",
	},
	{
		flag: "RU",
		country: "Russian Federation",
	},
	{
		flag: "RW",
		country: "Rwanda",
	},
	{
		flag: "SA",
		country: "Saudi Arabia",
	},
	{
		flag: "SB",
		country: "Solomon Islands",
	},
	{
		flag: "SC",
		country: "Seychelles",
	},
	{
		flag: "SD",
		country: "Sudan",
	},
	{
		flag: "SE",
		country: "Sweden",
	},
	{
		flag: "SG",
		country: "Singapore",
	},
	{
		flag: "SH",
		country: "Saint Helena",
	},
	{
		flag: "SI",
		country: "Slovenia",
	},
	{
		flag: "SJ",
		country: "Svalbard and Jan Mayen",
	},
	{
		flag: "SK",
		country: "Slovakia",
	},
	{
		flag: "SL",
		country: "Sierra Leone",
	},
	{
		flag: "SM",
		country: "San Marino",
	},
	{
		flag: "SN",
		country: "Senegal",
	},
	{
		flag: "SO",
		country: "Somalia",
	},
	{
		flag: "SR",
		country: "Suriname",
	},
	{
		flag: "ST",
		country: "Sao Tome and Principe",
	},
	{
		flag: "SV",
		country: "El Salvador",
	},
	{
		flag: "SY",
		country: "Syrian Arab Republic",
	},
	{
		flag: "SZ",
		country: "Eswatini",
	},
	{
		flag: "TC",
		country: "Turks and Caicos Islands",
	},
	{
		flag: "TD",
		country: "Chad",
	},
	{
		flag: "TF",
		country: "French Southern Territories",
	},
	{
		flag: "TG",
		country: "Togo",
	},
	{
		flag: "TH",
		country: "Thailand",
	},
	{
		flag: "TJ",
		country: "Tajikistan",
	},
	{
		flag: "TK",
		country: "Tokelau",
	},
	{
		flag: "TL",
		country: "Timor-Leste",
	},
	{
		flag: "TM",
		country: "Turkmenistan",
	},
	{
		flag: "TN",
		country: "Tunisia",
	},
	{
		flag: "TO",
		country: "Tonga",
	},
	{
		flag: "TR",
		country: "Türkiye",
	},
	{
		flag: "TT",
		country: "Trinidad and Tobago",
	},
	{
		flag: "TV",
		country: "Tuvalu",
	},
	{
		flag: "TW",
		country: "Taiwan",
	},
	{
		flag: "TZ",
		country: "Tanzania, United Republic of",
	},
	{
		flag: "UA",
		country: "Ukraine",
	},
	{
		flag: "UG",
		country: "Uganda",
	},
	{
		flag: "UM",
		country: "United States Minor Outlying Islands",
	},
	{
		flag: "US",
		country: "United States",
	},
	{
		flag: "UY",
		country: "Uruguay",
	},
	{
		flag: "UZ",
		country: "Uzbekistan",
	},
	{
		flag: "VA",
		country: "Holy See (Vatican City State)",
	},
	{
		flag: "VC",
		country: "Saint Vincent and the Grenadines",
	},
	{
		flag: "VE",
		country: "Venezuela",
	},
	{
		flag: "VG",
		country: "Virgin Islands, British",
	},
	{
		flag: "VI",
		country: "Virgin Islands, U.S.",
	},
	{
		flag: "VN",
		country: "Vietnam",
	},
	{
		flag: "VU",
		country: "Vanuatu",
	},
	{
		flag: "WF",
		country: "Wallis and Futuna",
	},
	{
		flag: "WS",
		country: "Samoa",
	},
	{
		flag: "XX",
		country: "",
	},
	{
		flag: "YE",
		country: "Yemen",
	},
	{
		flag: "YT",
		country: "Mayotte",
	},
	{
		flag: "ZA",
		country: "South Africa",
	},
	{
		flag: "ZM",
		country: "Zambia",
	},
	{
		flag: "ZW",
		country: "Zimbabwe",
	},
];

export const description: any = {
  auth: 4,
  title: __filename,
  method: 'GET',
  description: 'Return country name from country code',
  params: [
    {
      type: 'string',
      name: 'flag',
      optional: false,
      description: 'country code',
    },
  ],
};

/**
* 
* @param flag Country code
* @returns {string} Fullname of country
*/
const name = (flag: string): string => {
  const find = flags.find(r => r.flag.toLowerCase() == flag.toLowerCase());

  if (!find) return null;

  return find.country;
};

export default name;
