/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from 'shared/components/label/label';
import styles from './formInput.css';

class FormInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      isValid: true
    };
  }

  handleChange = (event) => {
    const valid = this.validate(event.target.value);
    this.setState({ text: event.target.value, isValid: valid }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.text, this.state.isValid);
      }
    });
  }

  validate = (text) => {
    if (this.props.validateFunc) {
      return this.props.validateFunc(text);
    } else if (text.length > 0 && this.props.validationRegex) {
      return this.props.validationRegex.test(text);
    } else if (text.length > 0) {
      return true;
    }
    return false;
  }

  revalidate() {
    const valid = this.validate(this.state.text);
    this.setState({ isValid: valid });
  }

  render() {
    return (
      <div className={styles.formInput}>
        {this.props.label && <Label htmlFor={this.props.id}>{this.props.label}</Label>}

        <input
          className={!this.state.isValid && styles.error}
          id={this.props.id}
          type={this.props.inputType}
          value={this.state.text}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        {!this.state.isValid && <span>{this.props.validationErrorMessage}</span>}
      </div>
    );
  }
}

FormInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  validationRegex: PropTypes.instanceOf(RegExp),
  validationErrorMessage: PropTypes.string,
  validateFunc: PropTypes.func,
  onChange: PropTypes.func,
  inputType: PropTypes.string
};

FormInput.defaultProps = {
  label: null,
  placeholder: null,
  validationRegex: null,
  validationErrorMessage: null,
  validateFunc: null,
  onChange: null,
  inputType: "text"
};

export default FormInput;
