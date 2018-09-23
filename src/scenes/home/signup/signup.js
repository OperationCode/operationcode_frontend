import React, { Component } from 'react';
import axios from 'axios';
import getVal from 'lodash/get';
import PropTypes from 'prop-types';
import * as CookieHelpers from 'shared/utils/cookieHelper';

import Form from 'shared/components/form/form';
import FormEmail from 'shared/components/form/formEmail/formEmail';
import FormZipCode from 'shared/components/form/formZipCode/formZipCode';
import FormPassword from 'shared/components/form/formPassword/formPassword';
import FormButton from 'shared/components/form/formButton/formButton';
import FormInput from 'shared/components/form/formInput/formInput';
import Section from 'shared/components/section/section';
import SocialLoginsGrouping from 'shared/components/socialLogin/socialLoginsGrouping';
import config from 'config/environment';
import styles from './signup.css';

class SignUp extends Component {
  static propTypes = {
    history: PropTypes.shape({
      action: PropTypes.string,
      block: PropTypes.func,
      createHref: PropTypes.func,
      go: PropTypes.func,
      goBack: PropTypes.func,
      goForward: PropTypes.func,
      length: PropTypes.number,
      listen: PropTypes.func,
      location: PropTypes.shape({
        key: PropTypes.string,
        pathname: PropTypes.string,
        search: PropTypes.string
      }),
      push: PropTypes.func,
      replace: PropTypes.func
    }).isRequired,
    sendNotification: PropTypes.func.isRequired,
    updateRootAuthState: PropTypes.func
  };

  static defaultProps = {
    updateRootAuthState: () => {}
  };

  state = {
    email: '',
    emailValid: false,
    error: false,
    isValid: true,
    isLoading: false,
    mentor: false,
    password: '',
    passwordConfirm: '',
    passwordValid: false,
    success: false,
    zip: '',
    zipValid: false
  };

  onFirstNameChange = (value) => {
    this.setState({ firstName: value });
  };

  onLastNameChange = (value) => {
    this.setState({ lastName: value });
  };

  onIdentifierStatusChange = (value) => {
    this.setState({ identifier: value });
  };

  onEmailChange = (value, valid) => {
    this.setState({ email: value.toLowerCase(), emailValid: valid });
  };

  onZipChange = (value, valid) => {
    this.setState({ zip: value, zipValid: valid });
  };

  onPasswordChange = (value, valid) => {
    this.setState({ password: value, passwordValid: valid });
  };

  onConfirmPasswordChange = (value, valid) => {
    this.setState({ passwordConfirm: value, passwordConfirmValid: valid });
  };

  validatePasswordConfirm = value => value === this.state.password;

  handleOnClick = (e) => {
    e.preventDefault();

    this.setState({ isLoading: true });

    if (this.isFormValid()) {
      const {
        email, zip, password, firstName, lastName, identifier
      } = this.state;
      axios
        .post(`${config.apiUrl}/users`, {
          user: {
            first_name: firstName,
            last_name: lastName,
            email,
            zip,
            password,
            identifier
          }
        })
        .then(({ data }) => {
          window.location = '/signup-info';
          CookieHelpers.setUserAuthCookie(data);
          this.setState({ isLoading: false });
        })
        .catch((error) => {
          const data = getVal(error, 'response.data');
          let errorMessage = '';
          if (data) {
            /* eslint-disable */
            Object.keys(data).forEach(key => {
              if (data && data.hasOwnProperty(key)) {
                errorMessage += ` ${key}: ${data[key][0]} `;
              }
            });
            /* eslint-enable */
          }
          this.props.sendNotification(
            'error',
            'Error',
            'Please try registering again. Contact one of our staff if this problem persists.'
          );
          this.setState({ error: errorMessage, isLoading: false });
        });
    } else {
      this.setState({ error: 'Missing required field(s)', isLoading: false });
      this.emailRef.inputRef.revalidate();
      this.firstNameRef.revalidate();
      this.lastNameRef.revalidate();
      this.zipRef.inputRef.revalidate();
      this.passwordRef.inputRef.revalidate();
      this.passwordConfirmRef.inputRef.revalidate();
    }
  };

  isFormValid = () =>
    this.state.emailValid &&
    this.state.zipValid &&
    this.state.passwordValid &&
    this.state.passwordConfirmValid;

  render() {
    return (
      <Section className={styles.signup} title="Join Operation Code">
        <Form className={styles.signupForm}>
          <span>
            Are you ready to deploy your future? Our community supports active duty and veterans
            transitioning into the tech industry, but spouses, family members, tech professionals,
            volunteers and sponsors are also welcome. Join Operation Code today and launch your
            career in tech. Once you complete the form below, you&#8217;ll be invited to join our
            team on Slack. Make sure you stop in and say hi!
          </span>
          <FormEmail
            id="email"
            placeholder="Email (Required)"
            onChange={this.onEmailChange}
            ref={(child) => {
              this.emailRef = child;
            }}
          />
          <FormInput
            id="firstName"
            placeholder="First Name (Required)"
            onChange={this.onFirstNameChange}
            ref={(child) => {
              this.firstNameRef = child;
            }}
          />
          <FormInput
            id="lastName"
            placeholder="Last Name (Required)"
            onChange={this.onLastNameChange}
            ref={(child) => {
              this.lastNameRef = child;
            }}
          />
          <FormZipCode
            id="zip"
            placeholder="Zip Code (Required)"
            onChange={this.onZipChange}
            ref={(child) => {
              this.zipRef = child;
            }}
          />
          <FormPassword
            id="password"
            placeholder="Password (Required)"
            onChange={this.onPasswordChange}
            validationRegex={/^(?=.*[A-Z]).{6,}$/}
            validationErrorMessage="Must be 6 characters long and include a capitalized letter"
            ref={(child) => {
              this.passwordRef = child;
            }}
          />
          <FormPassword
            id="passwordConfirm"
            placeholder="Confirm Password (Required)"
            onChange={this.onConfirmPasswordChange}
            validateFunc={this.validatePasswordConfirm}
            validationErrorMessage="Passwords must match"
            ref={(child) => {
              this.passwordConfirmRef = child;
            }}
          />
          {this.state.error && (
            <ul className={styles.errorList}>
              There was an error joining Operation Code:
              <li className={styles.errorMessage}>{this.state.error}</li>
            </ul>
          )}
          {this.state.isLoading ? (
            <FormButton className={styles.joinButton} text="Loading..." disabled theme="grey" />
          ) : (
            <FormButton
              className={styles.joinButton}
              text="Join"
              onClick={this.handleOnClick}
              theme="red"
            />
          )}
        </Form>

        <div className={styles.socialLogins}>
          <p>Or join via Google or Facebook:</p>
          <SocialLoginsGrouping
            history={this.props.history}
            sendNotification={this.props.sendNotification}
            updateRootAuthState={this.props.updateRootAuthState}
          />
        </div>
      </Section>
    );
  }
}

export default SignUp;
