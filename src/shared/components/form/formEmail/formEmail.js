import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from 'shared/components/label/label';
import styles from './formEmail.css';

class FormEmail extends Component {

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
    const validationRegex = /\S+@\S+\.\S+/; // simple email regex from: http://stackoverflow.com/a/9204568/4585393

    if (text.length > 0) {
      this.setState({ isValid: text.match(validationRegex) });
    } else {
      this.setState({ isValid: true });
    }
  }

  render() {
    return (
      <div className={styles.formEmail}>
        {this.props.label && <Label htmlFor={this.props.id}>{this.props.displayName}</Label>}
        <input
          autoComplete="off"
          id={this.props.id}
          type="email"
          value={this.state.text}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        { !this.state.isValid && <span>Must be a valid email</span>}
      </div>
    );
  }
}

FormEmail.propTypes = {
  label: PropTypes.bool,
  displayName: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired
};

FormEmail.defaultProps = {
  displayName: null,
  label: true,
  placeholder: null
};

export default FormEmail;
