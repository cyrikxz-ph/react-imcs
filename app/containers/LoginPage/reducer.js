/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
// import { addNotification as notify } from 'reapop';
import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_CLEAR,
} from './constants';

const initialState = fromJS({
  error: false,
  data: {
    email: 'aleson.llanes@carvepacket.com',
    password: '1234567890',
  },
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      const { email, password } = action.payload.toJS();
      return state
        .set('error', false)
        .setIn(['data', 'email'], email)
        .setIn(['data', 'password'], password);
    case LOGIN_ERROR:
      return state
        .set('error', true);
    case LOGIN_CLEAR:
      return state
        .set('error', false)
        .setIn(['data', 'email'], '')
        .setIn(['data', 'password'], '');
    default:
      return state;
  }
}

export default loginPageReducer;
