/*
 *
 * LoginForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form/immutable';
import compose from 'recompose/compose';
import { Form, Input } from 'semantic-ui-react';
import { isEmpty } from 'lodash';
import { fromJS } from 'immutable';
import FormField from '../../components/FormField';
import { LOGIN_FORM_NAME } from './constants';

const LoginForm = (props) => {
  const { children, handleSubmit, submitting, submitFailed } = props;
  // console.log(props);
  // console.log(isEmpty(error));
  return (
    <Form
      onSubmit={handleSubmit}
      size="large"
      widths="equal"
      error={submitFailed}
    >
      {React.Children.map(children, (component, index) => {
          return(
            <Form.Field
              key={index}
            >
              <Field
                as={component.type}
                component={FormField}
                { ...component.props}
              />
            </Form.Field>
        )
        })}
      <Form.Button
        content="Submit"
        fluid
        disabled={submitting}
        loading={submitting}
        color="orange"
      />
    </Form>
  );
};

LoginForm.propTypes = {
  children: PropTypes.node,
  handleSubmit: PropTypes.func,
};

// export default LoginForm;

const enhance = compose(
  connect((state, props) => ({
    initialValues: fromJS({
      email: props.data.email,
      password: props.data.password,
    }),
  })),
  reduxForm({
    form: LOGIN_FORM_NAME,
    enableReinitialize: true,
    // validate,
    // asyncValidate,
    // asyncBlurFields: [ 'email', 'password' ]
  }),
);

export default enhance(LoginForm);
