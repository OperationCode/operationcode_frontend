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
import styles from './login.css';

require('./login.css');

class Login extends Component {

  state = {
    email: '',
    emailValid: false,
    password: '',
    passwordValid: false,
    authenticated: false,
    error: '',
    isMentor: false
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
        this.setState({
          isMentor: data.user.mentor,
          authenticated: true
        });
      }).catch((response) => {
        const error = _.get(response, 'response.data.error');
        this.setState({ error });
      });
    }
  }

  render() {
    const { error, isMentor } = this.state;
    const signinRedirect = isMentor ? '/requests' : '/dashboard';
    return (
      <Section title="Login" theme="white">
        {this.state.authenticated && <Redirect to={signinRedirect} />}
        <Form autoComplete>
          <FormEmail displayName="Email" label="Email" onChange={this.onEmailChange} />
          <FormPassword displayName="Password" label="Password" onChange={this.onPasswordChange} />
          {error && <h2>{error}</h2>}
          <FormButton className={styles.Button} text="login" onClick={this.handleOnClick} />
        </Form>
      </Section>
    );
  }
}

export default Login;
