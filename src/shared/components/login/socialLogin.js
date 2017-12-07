import React, { Component } from 'react';
import axios from 'axios';
import config from 'config/environment';
import Section from 'shared/components/section/section';
import Form from 'shared/components/form/form';
import FormZipCode from 'shared/components/form/formZipCode/formZipCode';
import FormPassword from 'shared/components/form/formPassword/formPassword';
import FormButton from 'shared/components/form/formButton/formButton';
import styles from 'scenes/home/informationForm/informationForm.css';
import _ from 'lodash';
import * as CookieHelpers from '../../utils/cookieHelper';

class SocialLogin extends Component {
  state = {
    zip: '',
    password: '',
    error: false,
    isLoading: false
  }

  componentWillUnmount() {
    this.onExit();
  }

  onZipChange = (value, valid) => {
    this.setState({ zip: value, zipValid: valid });
  }

  onPasswordChange = (value, valid) => {
    this.setState({ password: value, passwordValid: valid });
  }

  onExit = () => {
    window.localStorage.removeItem('firstname');
    window.localStorage.removeItem('lastname');
    window.localStorage.removeItem('email');
    console.log(window.localStorage.getItem('email'));
  }

  run = (First, Last, Email) => {
    axios
      .post(`${config.backendUrl}/users/exist`, {
        // data: code
        user: {
          email: Email
        }
      })
      .then(({ data }) => {
        console.log('redirect is: ');
        console.log(data.redirect_to);
        window.localStorage.setItem('firstname', `${First}`);
        window.localStorage.setItem('lastname', `${Last}`);
        window.localStorage.setItem('email', `${Email}`);
        if (data.redirect_to === '/social_login') {
          console.log('rendering');
          window.location = data.redirect_to;
        } else {
          this.login();
        }
      }).catch((error) => {
        console.log(error);
        const data = _.get(error, 'response.data');
        let errorMessage = '';
        if (data) {
          Object.keys(data).forEach((key) => {
            if (data && data.hasOwnProperty(key)) { // eslint-disable-line
              errorMessage += ` ${key}: ${data[key][0]} `;
              /* if (errorMessage === ' error: I ') {
                console.log('starting registration...');
                window.location = '/additional-info';
              } */
              console.log(errorMessage);
            }
          });
        }
      });
    // window.location = '/additional-info';
  };
  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["login"] }] */
  login = (Zip, Password) => {
    const firstName = localStorage.getItem('firstname');
    const lastName = localStorage.getItem('lastname');
    const emailAddress = localStorage.getItem('email');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    localStorage.removeItem('email');
    if (emailAddress == null) {
      window.location = '/';
    } else {
      console.log(firstName);
      console.log(lastName);
      console.log(emailAddress);
      console.log(Zip);
      console.log(Password);
      axios
        .post(`${config.backendUrl}/users/social`, {
          // data: code
          user: {
            email: emailAddress,
            first_name: firstName,
            last_name: lastName,
            zip: Zip,
            password: Password
          }
        })
        .then(({ data }) => {
          console.log('success!');
          console.log(data.redirect_to);
          CookieHelpers.setUserAuthCookie(data);
          window.location = data.redirect_to;
        }).catch((error) => {
          console.log(error);
          const data = _.get(error, 'response.data');
          let errorMessage = '';
          if (data) {
            Object.keys(data).forEach((key) => {
              if (data && data.hasOwnProperty(key)) { // eslint-disable-line
                errorMessage += ` ${key}: ${data[key][0]} `;
                console.log(errorMessage);
              }
            });
          }
        });
    }
  };

  handleOnClick = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    if (this.isFormValid()) {
      this.login(this.state.zip, this.state.password);
    } else {
      this.setState({ error: 'Missing required field(s)', isLoading: false });
      this.zipRef.inputRef.revalidate();
      this.passwordRef.inputRef.revalidate();
    }
  };

  isFormValid = () =>
    this.state.zipValid
    && this.state.passwordValid

  render() {
    return (
      <Section className={styles.signup} title="Zipcode and Password Required">
        <Form className={styles.signupForm}>
          <FormZipCode
            id="zip"
            placeholder="Zip Code (Required)"
            onChange={this.onZipChange}
            ref={(child) => { this.zipRef = child; }}
          />
          <FormPassword
            id="password"
            placeholder="Password (Required)"
            onChange={this.onPasswordChange}
            validationRegex={/^(?=.*[A-Z]).{6,}$/}
            validationErrorMessage="Must be 6 characters long and include a capitalized letter"
            ref={(child) => { this.passwordRef = child; }}
          />
          {this.state.error &&
          <ul className={styles.errorList}>There was an error joining Operation Code:
            <li className={styles.errorMessage}>{this.state.error}</li>
          </ul>}
          {this.state.isLoading ? <FormButton className={styles.joinButton} text="Loading..." disabled theme="grey" /> : <FormButton className={styles.joinButton} text="Join" onClick={this.handleOnClick} theme="red" />}
        </Form>
      </Section>
    );
  }
}

export default SocialLogin;
