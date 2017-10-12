import React, { Component } from 'react';
import FormInput from '../formInput/formInput';

class FormEmail extends Component {
  render() {
    return (
      <FormInput
        {...this.props}
        validationRegex={/\S+@\S+\.\S+/}
        validationErrorMessage="Must be a valid email"
        ref={(child) => { this.inputRef = child; }}
      />
    );
  }
}

export default FormEmail;
