import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from 'shared/components/label/label';
import styles from './formZipCode.css';

class FormZipCode extends Component {
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
    const validationRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;  // US zip code regex from: http://stackoverflow.com/a/160583/4585393

    if (text.length > 0) {
      this.setState({ isValid: text.match(validationRegex) });
    } else {
      this.setState({ isValid: true });
    }
  }

  render() {
    return (
      <div className={styles.formZipCode}>
        {this.props.label && <Label htmlFor={this.props.id}>{this.props.displayName}</Label>}
        <input
          autoComplete="off"
          id={this.props.id}
          type="text"
          value={this.state.text}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        { !this.state.isValid && <span>Must be a valid US zip code</span>}
      </div>
    );
  }
}

FormZipCode.propTypes = {
  label: PropTypes.bool,
  displayName: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired
};

FormZipCode.defaultProps = {
  displayName: null,
  label: true,
  placeholder: null
};

export default FormZipCode;
