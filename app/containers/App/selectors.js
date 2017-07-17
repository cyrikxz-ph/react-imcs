import { createSelector } from 'reselect';

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};
// UI Domain
const selectUinDomain = () => (state) => state.get('ui');

const makeSelectUiStates = () => createSelector(
  selectUinDomain(),
  (substate) => substate.toJS(),
);
const makeSelectUiLoading = () => createSelector(
  makeSelectUiStates(),
  (substate) => substate.loading,
);

// Sessions Domain
const selectSessionDomain = () => (state) => state.get('session');

const makeSelectSessionStates = () => createSelector(
  selectSessionDomain(),
  (substate) => substate.toJS(),
);

const makeSelectSessionToken = () => createSelector(
  makeSelectSessionStates(),
  (substate) => substate.token,
);

export {
  makeSelectLocationState,
  makeSelectSessionStates,
  makeSelectSessionToken,
  makeSelectUiStates,
  makeSelectUiLoading,
};
