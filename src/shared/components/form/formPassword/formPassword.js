import React, { Component } from 'react';
import FormInput from '../formInput/formInput';

class FormPassword extends Component {

  render() {
    return (
      <FormInput
        {...this.props}
        inputType="password"
        validationRegex={/^(?=.*[A-Z]).{6,}$/}
        validationErrorMessage="Must be 6 characters long and include a capitalized letter"
      />
    );
  }
}

export default FormPassword;
