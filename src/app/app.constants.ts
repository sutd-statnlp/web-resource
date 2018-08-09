import { environment } from '../environments/environment';

export const DEBUG_INFO_ENABLED: boolean = environment.debugInfoEnabled;
export const API_URL = environment.apiUrl;
export const API_KEY = environment.apiKey;

export const API_DISCUSSION_ALL_URL = `${API_URL}/values/discussion-all!A1%3AL40?key=${API_KEY}`;
export const API_DISCUSSION_RECENT_URL = `${API_URL}/values/discussion-recent!A1%3AL8?key=${API_KEY}`;
export const API_DISCUSSION_SPECIAL_URL = `${API_URL}/values/discussion-special!A1%3AL8?key=${API_KEY}`;
export const API_DISCUSSION_KEYWORD_URL = `${API_URL}/values/discussion-keyword!A1%3AL8?key=${API_KEY}`;

export const API_PAPER_ALL_URL = `${API_URL}/values/paper-all!A1%3AL40?key=${API_KEY}`;
export const API_PAPER_RECENT_URL = `${API_URL}/values/paper-recent!A1%3AL8?key=${API_KEY}`;
export const API_PAPER_SPECIAL_URL = `${API_URL}/values/paper-special!A1%3AL8?key=${API_KEY}`;
export const API_PAPER_KEYWORD_URL = `${API_URL}/values/paper-keyword!A1%3AL8?key=${API_KEY}`;
export const API_PAPER_NEW_URL = `${API_URL}/values/paper-new!A1%3AL8?key=${API_KEY}`;

export const CACHE_MAX_AGE = 28800000;
