import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from 'shared/components/label/label';
import styles from '../dataFormItem/dataFormItem.css';

class FormPassword extends Component {
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
  }

  validate = (text) => {
    // todo: update regex if/when we decide to update password validation rules
    const validationRegex = /^(?=.*[A-Z]).{5,}$/;
    this.setState({ isValid: text.match(validationRegex) });
  }

  render() {
    return (
      <div className={styles.dataFormItem}>
        {this.props.label && <Label htmlFor={this.props.id}>{this.props.displayName}</Label>}
        <input
          id={this.props.id}
          type={this.props.type}
          value={this.state.text}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        { !this.state.isValid && <span>Must be 6 characters long and incude a capitalized letter</span>}
      </div>
    );
  }
}

FormPassword.propTypes = {
  label: PropTypes.bool,
  displayName: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired
};

FormPassword.defaultProps = {
  displayName: null,
  label: true,
  placeholder: null,
  type: 'text'
};

export default FormPassword;
