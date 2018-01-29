import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from 'shared/components/form/form';
import FormPassword from 'shared/components/form/formPassword/formPassword';
import FormButton from 'shared/components/form/formButton/formButton';
import config from 'config/environment';
import styles from './setPassword.css';

class RequestToken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordConfirm: '',
      passwordConfirmValid: true,
      error: false,
      isValid: true,
      success: false,
    };
  }

  onPasswordChange = (value, valid) => {
    this.setState({ password: value, passwordValid: valid });
  }

  onConfirmPasswordChange = (value, valid) => {
    this.setState({ passwordConfirm: value, passwordConfirmValid: valid });
  }

  validatePasswordConfirm = value =>
    value === '' || value === this.state.password;

  handleOnClick = (e) => {
    e.preventDefault();
    if (this.isFormValid()) {
      axios.patch(`${config.backendHost}/users/password`, {
        user: {
          reset_password_token: this.props.resetPasswordToken,
          password: this.state.password
        }
      }).then(() => {
        this.setState({ success: true, error: null });
      }).catch(() => {
        this.setState({ error: 'We were unable to set the password for this email' });
      });
    }
  }

  isFormValid = () => this.state.passwordValid && this.state.passwordConfirmValid

  render() {
    return (
      <Form className={styles.setPasswordForm}>
        <FormPassword
          id="password" placeholder="Password"
          onChange={this.onPasswordChange} validationRegex={/^(?=.*[A-Z]).{6,}$/}
          validationErrorMessage="Must be 6 characters long and include a capitalized letter"
        />
        <FormPassword
          id="passwordConfirm" placeholder="Confirm Password"
          onChange={this.onConfirmPasswordChange} validateFunc={this.validatePasswordConfirm}
          validationErrorMessage="Passwords must match"
        />
        {this.state.error ? <p className={styles.errorMessage}>{this.state.error}</p> : null }
        {this.state.success && <Redirect to="/login" />}
        <FormButton className={styles.joinButton} text="Set Password" onClick={this.handleOnClick} theme="red" />
      </Form>
    );
  }
}

RequestToken.propTypes = {
  resetPasswordToken: PropTypes.string.isRequired
};

export default RequestToken;
