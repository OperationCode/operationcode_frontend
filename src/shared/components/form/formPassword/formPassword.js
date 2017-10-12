import React, { Component } from 'react';
import FormInput from '../formInput/formInput';

class FormPassword extends Component {
  render() {
    return (
      <FormInput
        {...this.props}
        inputType="password"
        ref={(child) => { this.inputRef = child; }}
      />
    );
  }
}

export default FormPassword;
