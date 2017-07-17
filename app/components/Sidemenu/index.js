/**
*
* Sidemenu
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import { makeSelectUiStates } from '../../containers/App/selectors';
// import styled from 'styled-components';


function Sidemenu(props) {
  const { children, ui: { sidebarOpen }, userLogOut } = props;

  const handleItemClick = (e) => {
    console.log('clicked');
  }

  return (
    <Sidebar.Pushable as={Segment}
      style={{height: '100%'}} >
      <Sidebar as={Menu} animation='push' width='thin' visible={sidebarOpen} icon='labeled' vertical >
        <Menu.Item name='dashboard' active onClick={handleItemClick} >
          <Icon name='dashboard' />
          Dashboard
        </Menu.Item>
        <Menu.Item
          name='customers'
          as={Link} to="/customers" >
          <Icon name='address book outline' />
          Customers
        </Menu.Item>
        <Menu.Item name='transacitons' onClick={handleItemClick} >
          <Icon name='qrcode' />
          Transactions
        </Menu.Item>
        <Menu.Item name='inventory' onClick={handleItemClick} >
          <Icon name='cubes' />
          Products & Inventory
        </Menu.Item>
        <Menu.Item
          name='logout'
          as={Link} to="/logout" >
          <Icon name='sign out' />
          Logout
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher>
          {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}

Sidemenu.propTypes = {

};

const mapStateToProps = createStructuredSelector({
  ui: makeSelectUiStates(),
});

export default connect(
  mapStateToProps,
)(Sidemenu);
