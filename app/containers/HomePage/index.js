/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import { makeSelectSessionToken } from '../App/selectors';
import { checkUserCredentials } from './actions';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <h1>
        HOME
      </h1>
    );
  }
}

// HomePage.propTypes = {
//   token: PropTypes.string,
//   checkUserCredentials: PropTypes.func,
// };


// const mapStateToProps = createStructuredSelector({
//   token: makeSelectSessionToken(),
// });


// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(HomePage);

export default HomePage;
