/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const SET_AUTH_DATA = 'app/SET_AUTH_DATA';

export const SET_APP_LOADING = 'app/SET_APP_LOADING';

export const TOGGLE_SIDEBAR = 'app/TOGGLE_SIDEBAR';
export const SET_SIDEBAR_VISIBILITY = 'app/SET_SIDEBAR_VISIBILITY';

export const CHECK_CREDENTIALS = 'app/CHECK_CREDENTIALS';
export const REQUIRE_LOGIN = 'app/REQUIRE_LOGIN';
// export const CHECK_CREDENTIALS = 'app/CHECK_CREDENTIALS';
