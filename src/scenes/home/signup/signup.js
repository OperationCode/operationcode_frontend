import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import { MENTOR_ANSWERS } from 'shared/constants/status';
import Form from 'shared/components/form/form';
import FormEmail from 'shared/components/form/formEmail/formEmail';
import FormZipCode from 'shared/components/form/formZipCode/formZipCode';
import FormPassword from 'shared/components/form/formPassword/formPassword';
import FormButton from 'shared/components/form/formButton/formButton';
import FormInput from 'shared/components/form/formInput/formInput';
import FormSelect from 'shared/components/form/formSelect/formSelect';
import Section from 'shared/components/section/section';
import config from 'config/environment';
import styles from './signup.css';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailValid: true,
      error: false,
      isValid: true,
      mentor: false,
      password: '',
      passwordConfirm: '',
      passwordValid: true,
      success: false,
      zip: '',
      zipValid: true
    };
  }

  onFirstNameChange = (value) => {
    this.setState({ firstName: value });
  }

  onLastNameChange = (value) => {
    this.setState({ lastName: value });
  }

  onMentorStatusChange = (value) => {
    this.setState({ mentor: value });
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
    if (this.isFormValid()) {
      const { email, zip, password, firstName, lastName, mentor } = this.state;
      axios.post(`${config.backendUrl}/users`, {
        user: {
          first_name: firstName,
          last_name: lastName,
          email,
          zip,
          password,
          mentor
        }
      }).then(() => {
        this.setState({ success: true, error: null });
      }).catch((error) => {
        const data = _.get(error, 'response.data');
        let errorMessage = '';
        if (data) {
          Object.keys(data).forEach((key) => {
            if (data && data.hasOwnProperty(key)) { // eslint-disable-line
              errorMessage += ` ${key}: ${data[key][0]} `;
            }
          });
        }
        this.setState({ error: errorMessage });
      });
    }
  }

  isFormValid = () =>
    this.state.emailValid
    && this.state.zipValid
    && this.state.passwordValid
    && this.state.passwordConfirmValid;

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
          <FormSelect
            id="mentor"
            options={MENTOR_ANSWERS}
            prompt="Would you like to be a mentor?"
            onChange={e => this.onMentorStatusChange(e.target.value)}
          />
          <FormEmail id="email" placeholder="Email" onChange={this.onEmailChange} />
          <FormInput id="firstName" placeholder="First Name" onChange={this.onFirstNameChange} />
          <FormInput id="lastName" placeholder="Last Name" onChange={this.onLastNameChange} />
          <FormZipCode id="zip" placeholder="Zip Code" onChange={this.onZipChange} />
          <FormPassword id="password" placeholder="Password" onChange={this.onPasswordChange} />
          <FormPassword
            id="passwordConfirm" placeholder="Confirm Password"
            onChange={this.onConfirmPasswordChange} validateFunc={this.validatePasswordConfirm}
          />
          {this.state.error ? <ul className={styles.errorList}>There was an error joining Operation Code:
            <li className={styles.errorMessage}>{this.state.error}</li>
          </ul> : null }
          {this.state.success && <Redirect to="/thanks" />}
          <FormButton className={styles.joinButton} text="Join" onClick={this.handleOnClick} theme="red" />
        </Form>
      </Section>
    );
  }
}

export default SignUp;
