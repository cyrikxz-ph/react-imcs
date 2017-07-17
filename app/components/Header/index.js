/**
*
* Header
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { Segment, Button, Icon } from 'semantic-ui-react';
import { toggleSidebar as toggleSidebarAction } from '../../containers/App/actions';
// import styled from 'styled-components';


function Header(props) {
  const { toggleSidebar } = props;
  return (
    <Segment inverted color='orange'>
      <Button
        circular
        icon
        color="orange"
        onClick={toggleSidebar}
      >
        <Icon name='sidebar' />
      </Button>
    </Segment>
  );
}

Header.propTypes = {

};

export default connect(
  null,
  {
    toggleSidebar: toggleSidebarAction,
  },
)(Header);
