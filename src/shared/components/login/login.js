import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import PropTypes from 'prop-types';
import config from 'config/environment';
import { Link } from 'react-router-dom';
import styles from './login.css';
import Form from '../form/form';
import Section from '../section/section';
import * as CookieHelpers from '../../utils/cookieHelper';
import FormEmail from '../form/formEmail/formEmail';
import FormInput from '../form/formInput/formInput';
import FormButton from '../form/formButton/formButton';
import SignUpSection from './signUpSection';

require('./login.css');
const queryString = require('query-string');

class Login extends Component {
  state = {
    email: '',
    emailValid: false,
    password: '',
    passwordValid: false,
    authenticated: false,
    errorStatus: -1,
    errorMessage: '',
    error: '',
    sso: null,
    sig: null,
    ssoParamsPresent: false
  };

  componentDidMount = () => {
    this.checkForSsoParams();
  };

  onEmailChange = (value, valid) => {
    this.setState({ email: value, emailValid: valid });
  };

  onPasswordChange = (value, valid) => {
    this.setState({ password: value, passwordValid: valid });
  };

  setErrorMessage = (error) => {
    const errorStatus = _.get(error, ['response', 'status'], -1);
    const errorMessage = _.get(error, 'message');
    this.setState({ errorStatus, errorMessage });
  };

  setSsoParams = () => {
    const parsed = queryString.parse(location.search); //eslint-disable-line

    if (this.state.ssoParamsPresent) {
      this.setState(
        {
          sso: parsed.sso,
          sig: parsed.sig
        },
        this.checkSsoLoggedIn
      );
    }
  };

  // SSO Flow:
  //   * Discourse sends us an SSO token and a signature for that token (shared key)
  //     If those params exist we assume we're doing an SSO login.
  //
  //   Scenario: user not logged in
  //     * If the user is not logged in they enter their creds and we pass along the
  //       token and sig to the backend where it's verified
  //     * If we have a succesful login we redirect back to discourse with our payload and sig
  //     * These values are provided by the backend
  //
  //   Scenario: user logged in
  //     * When the login page mounts we check to see if the user is logged in via props
  //     * If the user is logged in AND this is an SSO request we perform a GET request with
  //       the token and sig
  //     * If the users auth token is valid and the token and sig are valid we redirect back
  //       to discourse with our payload and sig
  //     * These values are provided by the backend
  checkForSsoParams = () => {
    const parsed = queryString.parse(location.search); //eslint-disable-line

    if (parsed.sso && parsed.sig) {
      this.setState({ ssoParamsPresent: true }, this.setSsoParams);
    }
  };

  checkSsoLoggedIn = () => {
    if (this.state.ssoParamsPresent && this.props.isLoggedIn) {
      this.ssoLoggedInRedirect();
    }
  };

  ssoLoggedInRedirect = () => {
    axios
      .get(
        `${config.backendUrl}/sessions/sso?sso=${encodeURI(this.state.sso)}&sig=${this.state.sig}`,
        {
          headers: {
            Authorization: `Bearer ${CookieHelpers.authToken()}`
          }
        }
      )
      .then(({ data }) => {
        window.location = data.redirect_to;
      })
      .catch((error) => {
        this.setErrorMessage(error);
      });
  };

  isFormValid = () => this.state.emailValid && this.state.passwordValid;

  // This is a temp function to ensure we return a URL if the changes to the API
  // aren't in place. It can be removed after operationcode_backend#91 has been deployed
  resolveRedirectUrl = (redirectUrl) => {
    if (redirectUrl) {
      return redirectUrl;
    }
    return '/profile';
  };

  handleOnClick = (e) => {
    e.preventDefault();

    if (this.isFormValid()) {
      axios
        .post(`${config.backendUrl}/sessions`, {
          user: {
            email: this.state.email,
            password: this.state.password
          },
          sso: this.state.sso,
          sig: this.state.sig
        })
        .then(({ data }) => {
          CookieHelpers.setUserAuthCookie(data);
          this.setState({ authenticated: true });
          this.props.updateRootAuthState((history) => {
            if (this.state.ssoParamsPresent) {
              window.location = data.redirect_to;
            } else {
              history.push(this.resolveRedirectUrl(data.redirect_to));
            }
          });
        })
        .catch((error) => {
          this.setErrorMessage(error);
        });
    }
  };

  render() {
    const { errorStatus, errorMessage } = this.state;
    let errorFeedback;
    if (errorStatus === 401) {
      errorFeedback = 'Sorry, you entered an invalid email or password.';
    } else if (errorMessage) {
      errorFeedback = `Login error: ${errorMessage}.`;
    }

    return (
      <div className={styles.gridRow}>
        <Section title="Login" theme="white">
          <Form autoComplete>
            <FormEmail id="email" displayName="Email" label="Email" onChange={this.onEmailChange} />
            <FormInput
              id="password"
              displayName="Password"
              label="Password"
              inputType="password"
              onChange={this.onPasswordChange}
            />
            {errorFeedback && <h2 className={styles.loginError}>{errorFeedback}</h2>}
            <FormButton className={styles.Button} text="Login" onClick={this.handleOnClick} />
            <Link className={styles.resetBtn} to="/reset_password">
              Reset Password
            </Link>
          </Form>
        </Section>

        <SignUpSection />
      </div>
    );
  }
}

Login.propTypes = {
  updateRootAuthState: PropTypes.func,
  isLoggedIn: PropTypes.bool
};

Login.defaultProps = {
  updateRootAuthState: () => {},
  isLoggedIn: false
};

export default Login;
