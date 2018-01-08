import React, { Component } from 'react';
import FormInput from '../formInput/formInput';

class FormEmail extends Component {
  render() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (
      <FormInput
        {...this.props}
        validationRegex={re}
        validationErrorMessage="Must be a valid email"
        ref={(child) => { this.inputRef = child; }}
      />
    );
  }
}

export default FormEmail;
