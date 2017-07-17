/*
 *
 * Logout reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from './constants';

const initialState = fromJS({});

function logoutReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return state;
    default:
      return state;
  }
}

export default logoutReducer;
