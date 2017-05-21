import Section from 'shared/components/section/section';
import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import config from 'config/environment';
import _ from 'lodash';
import FormEmail from 'shared/components/form/formEmail/formEmail';
import FormPassword from 'shared/components/form/formPassword/formPassword';
import FormButton from 'shared/components/form/formButton/formButton';
import Cookies from 'universal-cookie';
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

  setUserAuthCookie = ({ token, user }) => {
    const cookies = new Cookies();
    cookies.set('token', token, { path: '/' });
    cookies.set('firstName', user.first_name, { path: '/' });
    cookies.set('lastName', user.last_name, { path: '/' });
    cookies.set('slackName', user.slack_name, { path: '/' });
    cookies.set('mentor', user.mentor, { path: '/' });
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
        this.setUserAuthCookie(data);
        this.setState({ authenticated: true });
      }).catch((response) => {
        const error = _.get(response, 'response.data.error');
        this.setState({ error });
      });
    }
  }

  render() {
    const { error } = this.state;
    return (
      <Section title="Login" theme="white">
        {this.state.authenticated && <Redirect to="/mentor-request" />}
        <Form autoComplete>
          <FormEmail displayName="Email" placeholder="Email" onChange={this.onEmailChange} />
          <FormPassword displayName="Password" placeholder="Password" onChange={this.onPasswordChange} />
          {error && <h2>{error}</h2>}
          <FormButton className={styles.Button} text="login" onClick={this.handleOnClick} />
        </Form>
      </Section>
    );
  }
}

export default Login;
