/**
*
* Layout
*
*/

import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import Sidemenu from '../Sidemenu';
import { makeSelectUiStates, makeSelectSessionToken } from '../../containers/App/selectors';

class Layout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children, token, ui: { loading }} = this.props;
    const isUserLoggedIn = !!token;
    return (
      <div>
        { ! isUserLoggedIn && children }
        { isUserLoggedIn &&
            <Segment.Group style={{height: '100%'}}>
              <Header
              />
              <Sidemenu>
                {children}
              </Sidemenu>
            </Segment.Group> }
      </div>
    );
  }
}

Layout.propTypes = {
  childeren: PropType.node,
  token: PropType.string,
  ui: PropType.object,
};

const mapStateToProps = createStructuredSelector({
  token: makeSelectSessionToken(),
  ui: makeSelectUiStates(),
});

export default connect(
  mapStateToProps,
)(Layout);
