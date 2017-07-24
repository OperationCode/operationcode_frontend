import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Form from 'shared/components/form/form';
import FormEmail from 'shared/components/form/formEmail/formEmail';
import FormButton from 'shared/components/form/formButton/formButton';
import Section from 'shared/components/section/section';
import SignUpLink from 'shared/components/signUpLink/signUpLink';
import config from 'config/environment';
import styles from './resetPassword.css';

class ResetPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailValid: true,
      error: false,
      isValid: true,
      success: false,
    };
  }

  onEmailChange = (value, valid) => {
    this.setState({ email: value, emailValid: valid });
  }

  handleOnClick = (e) => {
    e.preventDefault = true;
    if (this.isFormValid()) {
      axios.post(`${config.backendUrl}/users/passwords/reset`, {
        email: this.state.email
      }).then(() => {
        this.setState({ success: true, error: null });
      }).catch(() => {
        this.setState({ error: 'We were unable to reset the password for this email' });
      });
    }
  }

  isFormValid = () => this.state.emailValid

  render() {
    return (
      <Section className={styles.resetPassword} title="Join Operation Code">
        <Form className={styles.resetPasswordForm}>
          <span>
            {"Forgot your password? No problem! Enter your email below and we'll send you a new one."}
          </span>
          <FormEmail id="email" placeholder="Email" onChange={this.onEmailChange} />
          {this.state.error ? <p className={styles.errorMessage}>{this.state.error}</p> : null }
          {this.state.success && <Redirect to="/login" />}
          <FormButton className={styles.joinButton} text="Reset Password" onClick={this.handleOnClick} theme="red" />
        </Form>
        <SignUpLink />
      </Section>
    );
  }
}

export default ResetPassword;
