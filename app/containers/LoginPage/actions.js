/*
 *
 * LoginPage actions
 *
 */

import {
  LOGIN_REQUEST,
  LOGIN_FORM_NAME,
  LOGIN_CHECK_USER,
} from './constants';

export function userLogin(data) {
  return {
    type: LOGIN_REQUEST,
    payload: data,
    meta: {
      form: LOGIN_FORM_NAME,
    },
  };
}

export function checkLoggedIn() {
  return {
    type: LOGIN_CHECK_USER,
  };
}
