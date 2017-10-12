import React, { Component } from 'react';
import FormInput from '../formInput/formInput';

class FormZipCode extends Component {
  render() {
    return (
      <FormInput
        {...this.props}
        validationRegex={/(^\d{5}$)|(^\d{5}-\d{4}$)/}
        validationErrorMessage="Must be a valid US zip code"
        ref={(child) => { this.inputRef = child; }}
      />
    );
  }
}

export default FormZipCode;
