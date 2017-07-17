/*
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import { Segment, Grid, Image, Message, Input } from 'semantic-ui-react';
import { makeSelectLoginData, makeSelectLoginError } from './selectors';
import { makeSelectUiLoading } from '../App/selectors';
import { setAppLoading } from '../App/actions';
import { userLogin, checkLoggedIn } from './actions';
import LoginForm from './LoginForm';
import logo from '../../assets/images/login-logo.jpg';
import FormField from '../../components/FormField';

const LoginPageContainer = (props) => (
  <Grid
    centered
    verticalAlign="middle"
  >
    <Grid.Column
      largeScreen="5"
      tablet="10"
      computer="5"
      mobile="15"
    >
      <Segment
        loading={props.loading}
        className="login"
        padded
        color="orange"
        raised
      >
        <Image
          centered
          src={logo} size="medium" shape="circular"
        />
        {props.children}
      </Segment>
      <Message
        style={{ textAlign: 'center' }}
        attached="bottom"
        size="mini"
      >
        Copyright 2017 © Carve Packet Solutions Inc.
      </Message>
    </Grid.Column>
  </Grid>
);

LoginPageContainer.propTypes = {
  children: PropTypes.node,
};

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    // this.props.dispatch(checkLoggedIn());
  }

  componentDidMount() {
    this.props.dispatch(setAppLoading(false));
  }

  handleSubmit = (record) => {
    this.props.dispatch(userLogin(record));
  }

  render() {
    const { loading, error } = this.props;
    return (
      <LoginPageContainer
        loading={loading}>
        <LoginForm
          onSubmit={this.handleSubmit}
          loading={loading}
          error={error}
          {...this.props}
        >
          <Input
            name="email"
            placeholder="Email"
            type="text"
            icon="user"
            iconPosition="left"
            error={true}
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            icon="lock"
            iconPosition="left"
          />
        </LoginForm>
      </LoginPageContainer>
    );
  }
}

LoginPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectLoginError(),
  data: makeSelectLoginData(),
  loading: makeSelectUiLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
