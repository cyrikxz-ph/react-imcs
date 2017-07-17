/**
*
* FormField
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
// import styled from 'styled-components';

export default function FormField({ input, label, meta: { touched, error, warning }, as: As = Input, ...props }) {
  function handleChange(e, { value }) {
    return input.onChange(value);
  }
  return (
    <div>
      <label htmlFor={input.name}>{label}</label>
      <As {...input} value={input.value} {...props} onChange={handleChange} error={touched && error} />
      {touched && (warning && <span>{warning}</span>)}
    </div>
  );
}

FormField.propTypes = {
  as: PropTypes.any,
  input: PropTypes.any,
  label: PropTypes.any,
  name: PropTypes.string,
  meta: PropTypes.any,
};
