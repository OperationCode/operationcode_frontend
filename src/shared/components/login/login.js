import Section from 'shared/components/section/section';
import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import axios from 'axios';
import PropTypes from 'prop-types';
import config from 'config/environment';
import _ from 'lodash';
import * as CookieHelpers from 'shared/utils/cookieHelper';
import FormEmail from 'shared/components/form/formEmail/formEmail';
import FormInput from 'shared/components/form/formInput/formInput';
import FormButton from 'shared/components/form/formButton/formButton';
import styles from './login.css';

require('./login.css');

class Login extends Component {

  state = {
    email: '',
    emailValid: false,
    password: '',
    passwordValid: false,
    authenticated: false,
    error: ''
  }

  onEmailChange = (value, valid) => {
    this.setState({ email: value, emailValid: valid });
  }

  onPasswordChange = (value, valid) => {
    this.setState({ password: value, passwordValid: valid });
  }

  isFormValid = () => this.state.emailValid && this.state.passwordValid

  handleOnClick = (e) => {
    e.preventDefault = true;
    if (this.isFormValid()) {
      axios.post(`${config.backendUrl}/sessions`, {
        user: {
          email: this.state.email,
          password: this.state.password
        }
      }).then(({ data }) => {
        CookieHelpers.setUserAuthCookie(data);
        this.setState({ authenticated: true });
        this.props.updateRootAuthState((history) => {
          history.push('/');
        });
      }).catch((response) => {
        const error = _.get(response, 'message');
        this.setState({ error });
      });
    }
  }

  render() {
    let { error } = this.state;
    if (error === 'Request failed with status code 401') {
      error = 'Sorry, you entered an invalid email or password.';
    } else if (error) {
      error = `Login error: ${error}.`;
    }

    return (
      <Section title="Login" theme="white">
        <Form autoComplete>
          <FormEmail displayName="Email" label="Email" onChange={this.onEmailChange} />
          <FormInput displayName="Password" label="Password" inputType="password" onChange={this.onPasswordChange} />
          {error && <h2 className={styles.loginError}>{error}</h2>}
          <FormButton className={styles.Button} text="Login" onClick={this.handleOnClick} />
        </Form>
      </Section>
    );
  }
}


Login.propTypes = {
  updateRootAuthState: PropTypes.func
};

Login.defaultProps = {
  updateRootAuthState: () => {}
};


export default Login;
