import React from 'react';
import axios from 'axios';
import config from 'config/environment';
import _ from 'lodash';
import * as CookieHelpers from '../../utils/cookieHelper';

let firstName; // response.profileObj.givenName,
let lastName; // response.profileObj.familyName,
let email; // response.profileObj.email,
let zip;
let password; // response.tokenObj.login_hint,
let identifier;
let response;

class SocialLogin extends React.Component {
  static login() {
    console.log(firstName);
    console.log('Here!');
    axios
      .post(`${config.backendUrl}/auth/google_oauth2/callback`, {
        data: response
        /* user: {
          email: 'v@test.com', // response.profileObj.email,
          social_password: 'Password123', // response.tokenObj.login_hint,
        } */
      })
      .then(({ data }) => {
        console.log('Success!');
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
              /* if (errorMessage === ' error: I ') {
                console.log('starting registration...');
                window.location = '/additional-info';
              } */
              console.log(errorMessage);
            }
          });
        }
      });
  }
  static register() {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(zip);
    console.log(identifier);
    console.log(password);
    console.log('Here!');
    axios
      .post(`${config.backendUrl}/users`, {
        user: {
          first_name: 'F', // response.profileObj.givenName,
          last_name: 'L', // response.profileObj.familyName,
          email: 'v@test.com', // response.profileObj.email,
          zip: '',
          password: 'Password', // response.tokenObj.login_hint,
          identifier: ''
        }
      })
      .then(({ data }) => {
        console.log('Success!');
        CookieHelpers.setUserAuthCookie(data);
        window.location = '/signup-info';
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
  static run(f, l, e, p, r) {
    firstName = f;
    lastName = l;
    email = e;
    password = p;
    response = r;
    this.login();
  }
}
export default SocialLogin;
