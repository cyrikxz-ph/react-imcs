/*
 *
 * Logout
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectSessionStates } from '../App/selectors';
import { userLogout as userLogoutAction } from './actions';

export class Logout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { token } = this.props.session;
    this.props.dispatch(userLogoutAction(token));
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  session: makeSelectSessionStates(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
