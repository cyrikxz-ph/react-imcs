/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { reducer as notificationsReducer } from 'reapop';
import { LOGIN_SUCCESS } from './containers/LoginPage/constants';
import { LOGOUT_SUCCESS } from './containers/Logout/constants'
import {
  TOGGLE_SIDEBAR,
  SET_SIDEBAR_VISIBILITY,
  SET_APP_LOADING,
 } from './containers/App/constants';

import languageProviderReducer from 'containers/LanguageProvider/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

// function notificationReducers(state = notificaitonInitialState, action){
//     switch (action.type) {
//     /* istanbul ignore next */
//     default:
//       return state;
//   }
// }

// sessionReducer
const sessionInitialState = fromJS({
  token: sessionStorage.getItem('imcs.token'),
  userId: sessionStorage.getItem('imcs.userId'),
});

function sessionReducer(state = sessionInitialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { id, userId } = action.payload.toJS();
      sessionStorage.setItem('imcs.token', id);
      sessionStorage.setItem('imcs.userId', userId);
      return state
        .set('token', id)
        .set('userId', userId)
    case LOGOUT_SUCCESS:
      sessionStorage.removeItem('imcs.token');
      sessionStorage.removeItem('imcs.userId');
      return state
        .set('token', null)
        .set('userId', null);
    case SET_APP_LOADING:
      return state
        .set('loading', action.payload);
    default:
      return state;
  }
}

// uiReducer
const uiInitialState = fromJS({
  sidebarOpen: null,
  loading: true,
});

function uiReducer(state = uiInitialState, action) {
  switch (action.type){
    case TOGGLE_SIDEBAR:
      const { sidebarOpen } = state.toJS();
      return state
        .set('sidebarOpen', !sidebarOpen);
    case SET_SIDEBAR_VISIBILITY:
      return state
        .set('sidebarOpen', action.payload);
    case SET_APP_LOADING:
      return state
        .set('loading', action.payload);
    default:
      return state;
  }
}
/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    session: sessionReducer,
    ui: uiReducer,
    language: languageProviderReducer,
    form: formReducer,
    notifications: notificationsReducer(),
    ...asyncReducers,
  });
}
