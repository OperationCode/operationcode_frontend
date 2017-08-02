import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormEmail from 'shared/components/form/formEmail/formEmail';
import FormPassword from 'shared/components/form/formPassword/formPassword';
import FormButton from 'shared/components/form/formButton/formButton';
import FormInput from 'shared/components/form/formInput/formInput';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameValid: true,
      email: '',
      emailValid: true,
      password: '',
      passwordValid: true,
      passwordConfirm: '',
      passwordConfirmValid: true
    };
  }

  onNameChange = (value) => {
    this.setState({ name: value });
  }

  onEmailChange = (value, valid) => {
    this.setState({ email: value, emailValid: valid });
  }

  onPasswordChange = (value, valid) => {
    this.setState({ password: value, passwordValid: valid });
  }

  onConfirmPasswordChange = (value, valid) => {
    this.setState({ passwordConfirm: value, passwordConfirmValid: valid });
  }

  validatePasswordConfirm = value =>
    value === '' || value === this.state.password;

  handleClick = (e) => {
    e.preventDefault = true;
    if (this.isFormValid()) {
      const { email, password, name } = this.state;
      this.props.handleClick({ email, password, name });
    }
  }

  isFormValid = () =>
    this.state.emailValid
    && this.state.passwordValid
    && this.state.passwordConfirmValid
    && !!this.state.email.length
    && !!this.state.password.length
    && !!this.state.passwordConfirm.length

  render() {
    return (
      <div>
        <span>
          Are you ready to deploy your future?  Join Operation Code
          today and launch your career in software development.
          Once you complete the form below you&#8217;ll be invited
          to join our Slack team.  Make sure you stop in and say hi!
        </span>
        <FormEmail id="email" placeholder="Email" onChange={this.onEmailChange} />
        <FormInput id="name" placeholder="Name" onChange={this.onNameChange} />
        <FormPassword
          id="password" placeholder="Password"
          onChange={this.onPasswordChange} validationRegex={/^(?=.*[A-Z]).{6,}$/}
          validationErrorMessage="Must be 6 characters long and include a capitalized letter"
        />
        <FormPassword
          id="passwordConfirm" placeholder="Confirm Password"
          onChange={this.onConfirmPasswordChange} validateFunc={this.validatePasswordConfirm}
          validationErrorMessage="Passwords must match"
        />
        <FormButton text="Save and Continue" onClick={this.handleClick} theme="red" />
      </div>
    );
  }
}

Account.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Account;
