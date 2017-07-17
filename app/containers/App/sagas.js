import { take, call, put, select, takeEvery, cancel } from 'redux-saga/effects';
import { push, replace, LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';
import {
  REQUIRE_LOGIN,
} from './constants';

export function* handleSagas(action){
  const { type, payload, error, meta } = action;
  switch(type){
    case REQUIRE_LOGIN: {
      // Check IF token is null and URL is not login
      yield put(push('/login'));
      break;
    }
  }
}



// Individual exports for testing
export function* appSaga(action) {
  // See example in containers/HomePage/sagas.js
  const watcher = yield takeEvery([REQUIRE_LOGIN], handleSagas);
}

// All sagas to be loaded
export default [
  appSaga,
];
