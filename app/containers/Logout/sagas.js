import { take, call, put, select, takeEvery, cancel } from 'redux-saga/effects';
import { push, replace, LOCATION_CHANGE } from 'react-router-redux';
import { logoutUser } from '../../services/api';
import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from './constants';
import {
  REQUIRE_LOGIN,
  SET_APP_LOADING,
} from '../App/constants';

export function* handleLogout(action) {
  const { type, payload, error, meta } = action;

  yield put({ type: SET_APP_LOADING });

  switch (type) {
    case LOGOUT_REQUEST: {
      try{
        const params = {
          access_token: payload
        };

        const response = yield call(logoutUser, params);
        yield put({ type: LOGOUT_SUCCESS });
        yield put({ type: REQUIRE_LOGIN });

      } catch(e){
        // const error = e.response.data.error;
        console.log(e);
        yield put({ type: LOGOUT_FAILED, error });
        yield put(replace('/'));
      }
      break;
    }
  }
}

// Individual exports for testing
export function* logoutSaga() {
  // See example in containers/HomePage/sagas.js
  const watcher = yield takeEvery(LOGOUT_REQUEST, handleLogout);

  // // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  logoutSaga,
];
