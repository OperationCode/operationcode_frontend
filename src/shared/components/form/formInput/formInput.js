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
    this.setState({ text: event.target.value });
    this.validate(event.target.value);
    if (this.props.onChange) {
      this.props.onChange(this.state.text, this.state.isValid);
    }
  }

  validate = (text) => {
    if (this.props.validateFunc) {
      this.setState({ isValid: this.props.validateFunc(text) });
    } else if (text.length > 0) {
      this.setState({ isValid: text.match(this.props.validationRegex) });
    } else {
      this.setState({ isValid: true });
    }
  }

  render() {
    return (
      <div className={styles.formInput}>
        {this.props.label && <Label htmlFor={this.props.id}>{this.props.label}</Label>}
        <input
          id={this.props.id}
          type="text"
          value={this.state.text}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        { !this.state.isValid && <span>{this.props.validationErrorMessage}</span>}
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
  onChange: PropTypes.func
};

FormInput.defaultProps = {
  label: null,
  placeholder: null,
  validationRegex: null,
  validationErrorMessage: null,
  validateFunc: null,
  onChange: null
};

export default FormInput;
