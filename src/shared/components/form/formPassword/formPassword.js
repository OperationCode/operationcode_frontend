import React, { Component } from 'react';
import FormInput from '../formInput/formInput';

class FormPassword extends Component {

  render() {
    return (
      <FormInput
        {...this.props}
        inputType="password"
      />
    );
  }
}

export default FormPassword;
