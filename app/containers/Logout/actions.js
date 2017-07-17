/*
 *
 * Logout actions
 *
 */

import {
  LOGOUT_REQUEST,
} from './constants';

export function userLogout(token) {
  return {
    type: LOGOUT_REQUEST,
    payload: token
  };
}
