import React, { Component } from 'react';
import FormInput from '../formInput/formInput';

function zipCodeValidator(input) {
  return (input.length !== 0 && input.trim().length !== 0);
}

class FormZipCode extends Component {
  render() {
    return (
      <FormInput
        {...this.props}
        validateFunc={zipCodeValidator}
        validationErrorMessage="Must enter a valid zip code"
        ref={(child) => { this.inputRef = child; }}
      />
    );
  }
}

export default FormZipCode;
