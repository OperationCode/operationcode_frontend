import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import FormEmail from 'shared/components/form/formEmail/formEmail';
import FormZipCode from 'shared/components/form/formZipCode/formZipCode';
import FormPassword from 'shared/components/form/formPassword/formPassword';
import FormButton from 'shared/components/form/formButton/formButton';
import Section from 'shared/components/section/section';
import styles from './signup.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      zip: '',
      password: '',
      passwordConfirm: '',
      isValid: true,
      emailValid: true,
      zipValid: true,
      passwordValid: true
    };
  }

  onEmailChange = (value, valid) => {
    this.setState({ email: value, emailValid: valid });
  }

  onZipChange = (value, valid) => {
    this.setState({ zip: value, zipValid: valid });
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
    e.preventDefault = true;
  }

  render() {
    return (
      <Section className={styles.signup} title="Join Operation Code">
        <Form className={styles.signupForm}>
          <span>
            Are you ready to deploy your future?  Join Operation Code
            today and launch your career in software development.
            Once you complete the form below you&#8217;ll be invited
            to join our Slack team.  Make sure you stop in and say hi!
          </span>
          <FormEmail id="email" placeholder="Email" onChange={this.onEmailChange} />
          <FormZipCode id="zip" placeholder="Zip Code" onChange={this.onZipChange} />
          <FormPassword id="password" placeholder="Password" onChange={this.onPasswordChange} />
          <FormPassword
            id="passwordConfirm" placeholder="Confirm Password"
            onChange={this.onConfirmPasswordChange} validateFunc={this.validatePasswordConfirm}
          />
          <FormButton className={styles.joinButton} text="Join" onClick={this.handleOnClick} theme="red" />
        </Form>
      </Section>
    );
  }
}

export default SignUp;
