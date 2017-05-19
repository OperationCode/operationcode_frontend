import React, { Component } from 'react';
import Modal from 'shared/components/modal/modal';
import Form from 'shared/components/form/form';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import config from 'config/environment';
import _ from 'lodash';
import FormEmail from 'shared/components/form/formEmail/formEmail';
import FormPassword from 'shared/components/form/formPassword/formPassword';
import FormButton from 'shared/components/form/formButton/formButton';

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
        document.cookie = `token=${data.token}`;
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
      <div>
        <Modal>
          <Form autoComplete>
            <FormEmail displayName="Email" label="Email" onChange={this.onEmailChange} />
            <FormPassword displayName="Password" label="Password" onChange={this.onPasswordChange} />
            {error && <h2>{error}</h2>}
            <FormButton className="Login-btn" text="login" onClick={this.handleOnClick} />
          </Form>
        </Modal>
        {this.state.authenticated && <Redirect to="/mentor-request" />}
      </div>
    );
  }
}

export default Login;
