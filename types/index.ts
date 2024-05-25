export type IDefaultParams = {
  legacy_only?: boolean;
  apiVersion?: '20240130' | '99999999' | null | '';
  /**
   * Only use it if you want to use user authKey to perform requests on their behave
   */
  authKey?: string;
  timeout_ms?: number;

  /**
   * If request returns `authentication: 'basic', it wont try to refresh session
   */
  ignoreSessionRefresh?: boolean
};


export type Modes_names = 'osu' | 'fruits' | 'mania' | 'taiko';

export type ranking_types = 'charts' | 'country' | 'performance' | 'score';

export type country_names = "United States" | "Russian Federation" | "Germany" | "Poland" | "France" | "Japan" | "Canada" | "Brazil" | "United Kingdom" | "Taiwan" | "South Korea" | "China" | "Australia" | "Indonesia" | "Ukraine" | "Philippines" | "Chile" | "Finland" | "Argentina" | "Netherlands" | "Sweden" | "Singapore" | "Mexico" | "Malaysia" | "Spain" | "Italy" | "Hong Kong" | "Thailand" | "Vietnam" | "Norway" | "Czech Republic" | "Turkey" | "Belarus" | "Austria" | "Belgium" | "Portugal" | "Romania" | "Hungary" | "Denmark" | "Lithuania" | "Kazakhstan" | "New Zealand" | "Peru" | "Switzerland" | "Colombia" | "Israel" | "Estonia" | "Bulgaria" | "Slovakia" | "Greece" | "Latvia" | "Venezuela" | "Serbia" | "Ireland" | "Croatia" | "Saudi Arabia" | "Uruguay" | "South Africa" | "United Arab Emirates" | "Slovenia" | "India" | "Ecuador" | "Morocco" | "Costa Rica" | "Moldova" | "Dominican Republic" | "Brunei" | "Egypt" | "Reunion" | "Macau" | "Tunisia" | "Panama" | "Algeria" | "Mongolia" | "Paraguay" | "Kuwait" | "Puerto Rico" | "Georgia" | "Bolivia" | "El Salvador" | "Qatar" | "Guatemala" | "Luxembourg" | "Uzbekistan" | "Kyrgyzstan" | "North Macedonia" | "Cambodia" | "Bosnia and Herzegovina" | "Iceland" | "Jordan" | "Pakistan" | "Trinidad and Tobago" | "Cyprus" | "Honduras" | "Nicaragua" | "Bahrain" | "Maldives" | "Bangladesh" | "French Polynesia" | "Lebanon" | "Nepal" | "Iraq" | "Guam" | "Azerbaijan" | "Albania" | "Malta" | "Myanmar" | "New Caledonia" | "Oman" | "Iran, Islamic Republic of" | "Armenia" | "Guadeloupe" | "Martinique" | "Jamaica" | "Lao People &#039;s Democratic Republic" | "Sri Lanka" | "Palestinian Territory Occupied" | "Mauritius" | "Syrian Arab Republic" | "Montenegro" | "Faroe Islands" | "Jersey" | "French Guiana" | "Northern Mariana Islands" | "Isle of Man" | "Suriname" | "Belize" | "Barbados" | "Aruba" | "Libya" | "Aland Islands" | "Guernsey" | "Madagascar" | "Sudan" | "Liechtenstein" | "Bahamas" | "Kenya" | "Greenland" | "Bermuda" | "Europe" | "Cote D &#039; Ivoire" | "Guyana" | "Gibraltar" | "Virgin Islands, U.S." | "Andorra" | "Saint Lucia" | "Tajikistan" | "Antigua and Barbuda" | "Senegal" | "Saint Pierre and Miquelon" | "Cook Islands" | "Antarctica" | "Central African Republic" | "Liberia" | "Eritrea";
export type country_codes = "US" | "RU" | "DE" | "PL" | "FR" | "JP" | "CA" | "BR" | "GB" | "TW" | "KR" | "CN" | "AU" | "ID" | "UA" | "PH" | "CL" | "FI" | "AR" | "NL" | "SE" | "SG" | "MX" | "MY" | "ES" | "IT" | "HK" | "TH" | "VN" | "NO" | "CZ" | "TR" | "BY" | "AT" | "BE" | "PT" | "RO" | "HU" | "DK" | "LT" | "KZ" | "NZ" | "PE" | "CH" | "CO" | "IL" | "EE" | "BG" | "SK" | "GR" | "LV" | "VE" | "RS" | "IE" | "HR" | "SA" | "UY" | "ZA" | "AE" | "SI" | "IN" | "EC" | "MA" | "CR" | "MD" | "DO" | "BN" | "EG" | "RE" | "MO" | "TN" | "PA" | "DZ" | "MN" | "PY" | "KW" | "PR" | "GE" | "BO" | "SV" | "QA" | "GT" | "LU" | "UZ" | "KG" | "MK" | "KH" | "BA" | "IS" | "JO" | "PK" | "TT" | "CY" | "HN" | "NI" | "BH" | "MV" | "BD" | "PF" | "LB" | "NP" | "IQ" | "GU" | "AZ" | "AL" | "MT" | "MM" | "NC" | "OM" | "IR" | "AM" | "GP" | "MQ" | "JM" | "LA" | "LK" | "PS" | "MU" | "SY" | "ME" | "FO" | "JE" | "GF" | "MP" | "IM" | "SR" | "BZ" | "BB" | "AW" | "LY" | "AX" | "GG" | "MG" | "SD" | "LI" | "BS" | "KE" | "GL" | "BM" | "EU" | "CI" | "GY" | "GI" | "VI" | "AD" | "LC" | "TJ" | "AG" | "SN" | "PM" | "CK" | "AQ" | "CF" | "LR" | "ER";

export type beatmap_statuses = 'any' | 'ranked' | 'qualified' | 'loved' | 'favourites' | 'pending' | 'wip' | 'graveyard' | 'mine';
export type beatmap_category = 'converts' | 'follows' | 'recommended' | 'featured_artists' | 'spotlights';
export type beatmap_sorting = 'title_desc' | 'title_asc' | 'artist_desc' | 'artist_asc' | 'difficulty_desc' | 'difficulty_asc' | 'updated_desc' | 'updated_asc' | 'ranked_desc' | 'ranked_asc' | 'rating_desc' | 'rating_asc' | 'plays_desc' | 'plays_asc' | 'favourites_desc' | 'favourites_asc';
export type beatmap_genres = 'Unspecified' | 'Video Game' | 'Anime' | 'Rock' | 'Pop' | 'Other' | 'Novelty' | 'Hip Hop' | 'Electronic' | 'Metal' | 'Classical' | 'Folk' | 'Jazz';
export type beatmap_languages = 'Any' | 'English' | 'Chinese' | 'French' | 'German' | 'Italian' | 'Japanese' | 'Korean' | 'Spanish' | 'Swedish' | 'Russian' | 'Polish' | 'Instrumental' | 'Unspecified' | 'Other';
export type beatmap_ranks = 'XH' | 'X' | 'SH' | 'S' | 'A' | 'B' | 'C' | 'D';
export type beatmap_extra = 'storyboard' | 'video';

export type beatmap_events_types = 'nominate' | 'qualify' | 'rank' | 'love' | 'nomination_reset' | 'nomination_reset_received' | 'disqualify' | 'remove_from_loved' | 'kudosu_gain' | 'kudosu_lost' | 'genre_edit' | 'language_edit' | 'nsfw_toggle' | 'offset_edit' | 'issue_resolve' | 'issue_reopen' | 'beatmap_owner_change' | 'kudosu_allow' | 'kudosu_deny' | 'approve' | 'kudosu_recalculate' | 'discussion_delete' | 'discussion_restore' | 'discussion_post_delete' | 'discussion_post_restor';


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
  method: 'v2';

  client_id: number | string;
  client_secret: string;

  timeout?: number;
  tokenPath?: string;

  scopes: auth_scopes;
} | {
  method: 'v1';

  api_key: string;

  timeout?: number;
  tokenPath?: string;
} | {
  method: 'lazer';

  login: string;
  password: string;

  timeout?: number;
  tokenPath?: string;
} | {
  method: 'cli';

  client_id: number | string;
  client_secret: string;

  redirect_url: string;
  state: string;

  timeout?: number;
  tokenPath?: string;

  scopes: auth_scopes;
});


export type auth_response = {
  token_type: string;
  access_token: string;
  expires_in: number;
};

export interface lazer_auth_response extends auth_response {
  refresh_token: string;
};

export type IBeatmapPackType = 'standard' | 'featured' | 'tournament' | 'loved' | 'chart' | 'theme' | 'artist';


export type IError = { error: Error };