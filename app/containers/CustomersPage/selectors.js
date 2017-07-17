import { createSelector } from 'reselect';

/**
 * Direct selector to the customersPage state domain
 */
const selectCustomersPageDomain = () => (state) => state.get('customersPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CustomersPage
 */

const makeSelectCustomersPage = () => createSelector(
  selectCustomersPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCustomersPage;
export {
  selectCustomersPageDomain,
};
