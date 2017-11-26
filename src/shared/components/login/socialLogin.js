import React from 'react';
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

let firstName;
let lastName = '';
let emailAddress;
let zipCode;
let pass;

class SocialLogin extends React.Component {
  state = {
    zip: '',
    password: ''
  }
  run(f, l, e) {
    firstName = f;
    lastName = l;
    emailAddress = e;
    axios
      .post(`${config.backendUrl}/users/exist`, {
        // data: code
        user: {
          email: emailAddress
        }
      })
      .then(({ data }) => {
        console.log('redirect is: ');
        console.log(data.redirect_to);
        if (data.redirect_to === '/additional-info') {
          console.log('rendering');
          window.localStorage.setItem("firstname", `${f}`);
          window.localStorage.setItem("lastname", `${l}`);
          window.localStorage.setItem("email", `${e}`);
          window.location = '/social-login';
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
  }
  onZipChange = (value, valid) => {
    this.setState({ zip: value, zipValid: valid });
  }
  onPasswordChange = (value, valid) => {
    this.setState({ password: value, passwordValid: valid });
  }
  login(z,p) {
    firstName = localStorage.getItem("firstname");
    lastName = localStorage.getItem("lastname");
    emailAddress = localStorage.getItem("email");
    zipCode = z;
    pass = p;
    console.log(firstName);
    console.log(lastName);
    console.log(emailAddress);
    console.log(zipCode);
    console.log(pass);
    axios
      .post(`${config.backendUrl}/users/social`, {
        // data: code
        user: {
          email: emailAddress,
          first_name: firstName,
          last_name: lastName,
          zip: zipCode,
          password: pass
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
  handleOnClick = (e) => {
    e.preventDefault();
    this.login(this.state.zip, this.state.password);
  };
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
          <FormButton className={styles.joinButton} text="Join" onClick={this.handleOnClick} theme="red" />
        </Form>
      </Section>
    );
  }
}
export default SocialLogin;
