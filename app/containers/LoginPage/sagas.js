import { take, call, put, select, takeEvery, cancel } from 'redux-saga/effects';
import { push, replace, LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';
import { startSubmit, stopSubmit } from 'redux-form';
import { makeSelectSessionStates } from '../App/selectors';
import { loginUser } from '../../services/api';

import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_CLEAR,
  LOGIN_CHECK_USER,
} from './constants';

export function* handleLogin(action) {

  const { type, payload, error, meta } = action;

  switch (type) {
    case LOGIN_CHECK_USER: {
      const { token } = yield select(makeSelectSessionStates());

      if (!!token){
        yield put(replace('/'));
      }
      break;
    }
    case LOGIN_REQUEST: {
      try {
          // yield put({ type: USER_LOGIN_LOADING });
          yield put(startSubmit(meta.form));
          const userCredential = yield call(loginUser, payload);
          // console.log("Credentials: ",userCredential);
          // const authPayload = yield call(authClient, AUTH_LOGIN, payload);
          yield put({ type: LOGIN_SUCCESS, payload: fromJS(userCredential.data) });
          yield put(stopSubmit(meta.form));
          yield put(push('/'));
      } catch (e) {
        const error = e.response.data.error;
        // yield put({ type: 'ADD_NOTIFICATION' , payload: {message: 'you clicked on the button', status: 'success'}});
        yield put({ type: LOGIN_ERROR, error });
        yield put({ type: LOGIN_CLEAR });
        yield put(stopSubmit(meta.form, error));
        // const errorMessage = typeof e === 'string'
        //     ? e
        //     : (typeof e === 'undefined' || !e.message ? 'aor.auth.sign_in_error' : e.message);
        // yield put(showNotification(errorMessage, 'warning'));
      }
      break;
    }
  }

}

// Individual exports for testing
export function* loginSaga(action) {
  // See example in containers/HomePage/sagas.js
  const watcher = yield takeEvery([LOGIN_REQUEST, LOGIN_CHECK_USER], handleLogin);

  // // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  loginSaga,
];
