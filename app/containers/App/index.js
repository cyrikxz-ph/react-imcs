/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-wybo';
import { createStructuredSelector } from 'reselect';
import Layout from '../../components/Layout';
import { makeSelectSessionToken, makeSelectUiStates } from './selectors';
import {
  setSidebarVisibility,
  setAppLoading,
  requireLogin,
} from './actions';

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    token: PropTypes.string,
  }

  componentWillMount() {
    const { dispatch, token, router } = this.props;
    const { pathname } = router.getCurrentLocation();
    // console.log(this.props.router.getCurrentLocation());
    dispatch(setAppLoading(true));
    if (!!!token) {
      dispatch(requireLogin(pathname));
    }
    dispatch(setSidebarVisibility(true));
  }

  render() {
    return (
      <Layout>
        {React.Children.toArray(this.props.children)}
        <NotificationsSystem theme={theme} />
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  token: makeSelectSessionToken(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
