export type Modes_names = 'osu' | 'fruits' | 'mania' | 'taiko';



export type ranking_types = 'charts' | 'country' | 'performance' | 'score';

export type country_names = "United States" | "Russian Federation" | "Germany" | "Poland" | "France" | "Japan" | "Canada" | "Brazil" | "United Kingdom" | "Taiwan" | "South Korea" | "China" | "Australia" | "Indonesia" | "Ukraine" | "Philippines" | "Chile" | "Finland" | "Argentina" | "Netherlands" | "Sweden" | "Singapore" | "Mexico" | "Malaysia" | "Spain" | "Italy" | "Hong Kong" | "Thailand" | "Vietnam" | "Norway" | "Czech Republic" | "Turkey" | "Belarus" | "Austria" | "Belgium" | "Portugal" | "Romania" | "Hungary" | "Denmark" | "Lithuania" | "Kazakhstan" | "New Zealand" | "Peru" | "Switzerland" | "Colombia" | "Israel" | "Estonia" | "Bulgaria" | "Slovakia" | "Greece" | "Latvia" | "Venezuela" | "Serbia" | "Ireland" | "Croatia" | "Saudi Arabia" | "Uruguay" | "South Africa" | "United Arab Emirates" | "Slovenia" | "India" | "Ecuador" | "Morocco" | "Costa Rica" | "Moldova" | "Dominican Republic" | "Brunei" | "Egypt" | "Reunion" | "Macau" | "Tunisia" | "Panama" | "Algeria" | "Mongolia" | "Paraguay" | "Kuwait" | "Puerto Rico" | "Georgia" | "Bolivia" | "El Salvador" | "Qatar" | "Guatemala" | "Luxembourg" | "Uzbekistan" | "Kyrgyzstan" | "North Macedonia" | "Cambodia" | "Bosnia and Herzegovina" | "Iceland" | "Jordan" | "Pakistan" | "Trinidad and Tobago" | "Cyprus" | "Honduras" | "Nicaragua" | "Bahrain" | "Maldives" | "Bangladesh" | "French Polynesia" | "Lebanon" | "Nepal" | "Iraq" | "Guam" | "Azerbaijan" | "Albania" | "Malta" | "Myanmar" | "New Caledonia" | "Oman" | "Iran, Islamic Republic of" | "Armenia" | "Guadeloupe" | "Martinique" | "Jamaica" | "Lao People &#039;s Democratic Republic" | "Sri Lanka" | "Palestinian Territory Occupied" | "Mauritius" | "Syrian Arab Republic" | "Montenegro" | "Faroe Islands" | "Jersey" | "French Guiana" | "Northern Mariana Islands" | "Isle of Man" | "Suriname" | "Belize" | "Barbados" | "Aruba" | "Libya" | "Aland Islands" | "Guernsey" | "Madagascar" | "Sudan" | "Liechtenstein" | "Bahamas" | "Kenya" | "Greenland" | "Bermuda" | "Europe" | "Cote D &#039; Ivoire" | "Guyana" | "Gibraltar" | "Virgin Islands, U.S." | "Andorra" | "Saint Lucia" | "Tajikistan" | "Antigua and Barbuda" | "Senegal" | "Saint Pierre and Miquelon" | "Cook Islands" | "Antarctica" | "Central African Republic" | "Liberia" | "Eritrea";
export type country_codes = "US" | "RU" | "DE" | "PL" | "FR" | "JP" | "CA" | "BR" | "GB" | "TW" | "KR" | "CN" | "AU" | "ID" | "UA" | "PH" | "CL" | "FI" | "AR" | "NL" | "SE" | "SG" | "MX" | "MY" | "ES" | "IT" | "HK" | "TH" | "VN" | "NO" | "CZ" | "TR" | "BY" | "AT" | "BE" | "PT" | "RO" | "HU" | "DK" | "LT" | "KZ" | "NZ" | "PE" | "CH" | "CO" | "IL" | "EE" | "BG" | "SK" | "GR" | "LV" | "VE" | "RS" | "IE" | "HR" | "SA" | "UY" | "ZA" | "AE" | "SI" | "IN" | "EC" | "MA" | "CR" | "MD" | "DO" | "BN" | "EG" | "RE" | "MO" | "TN" | "PA" | "DZ" | "MN" | "PY" | "KW" | "PR" | "GE" | "BO" | "SV" | "QA" | "GT" | "LU" | "UZ" | "KG" | "MK" | "KH" | "BA" | "IS" | "JO" | "PK" | "TT" | "CY" | "HN" | "NI" | "BH" | "MV" | "BD" | "PF" | "LB" | "NP" | "IQ" | "GU" | "AZ" | "AL" | "MT" | "MM" | "NC" | "OM" | "IR" | "AM" | "GP" | "MQ" | "JM" | "LA" | "LK" | "PS" | "MU" | "SY" | "ME" | "FO" | "JE" | "GF" | "MP" | "IM" | "SR" | "BZ" | "BB" | "AW" | "LY" | "AX" | "GG" | "MG" | "SD" | "LI" | "BS" | "KE" | "GL" | "BM" | "EU" | "CI" | "GY" | "GI" | "VI" | "AD" | "LC" | "TJ" | "AG" | "SN" | "PM" | "CK" | "AQ" | "CF" | "LR" | "ER";



export type auth_scopes = (
  'chat.read' |
  'chat.write' |
  'chat.write_manage' |
  'delegate' |
  'forum.write' |
  'friends.read' |
  'identify' |
  'public'
)[];


export type auth_params = ({
  method: 'stable v2';

  client_id: number | string;
  client_secret: string;

  scopes: auth_scopes;
} | {
  method: 'stable v1';

  api_key: string;
} | {
  method: 'lazer'

  login: string;
  password: string;
} | {
  method: 'cli';

  client_id: number | string;
  client_secret: string;

  redirect_url: string;
  state: string;

  scopes: auth_scopes;
});


export type auth_response = {
  access_token: string;
  expires_in: number;
};