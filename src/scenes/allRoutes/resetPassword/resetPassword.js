import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import SignUpLink from 'shared/components/signUpLink/signUpLink';
import RequestToken from './requestToken/requestToken';
import SetPassword from './setPassword/setPassword';
import styles from './resetPassword.css';

const queryString = require('query-string');

class ResetPassword extends Component {
  state = {
    resetPasswordToken: null
  }

  componentDidMount = () => {
    const parsed = queryString.parse(window.location.search);
    this.setState({ resetPasswordToken: parsed.reset_password_token });
  }

  render() {
    return (
      <Section className={styles.resetPassword} title="Reset Password">
        { this.state.resetPasswordToken ? <SetPassword resetPasswordToken={this.state.resetPasswordToken} /> : <RequestToken /> }
        <SignUpLink />
      </Section>
    );
  }
}

export default ResetPassword;
