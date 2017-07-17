import {
  TOGGLE_SIDEBAR,
  SET_SIDEBAR_VISIBILITY,
  CHECK_CREDENTIALS,
  SET_APP_LOADING,
  REQUIRE_LOGIN,
} from './constants';

export function toggleSidebar(){
  return {
    type: TOGGLE_SIDEBAR,
  }
};

export function setSidebarVisibility(isOpen) {
  return {
    type: SET_SIDEBAR_VISIBILITY,
    payload: isOpen,
  };
}

export function setAppLoading(status) {
  return {
    type: SET_APP_LOADING,
    payload: status,
  };
}

export function requireLogin(pathname){
  return {
    type: REQUIRE_LOGIN,
    payload: pathname,
  };
}
