import React from 'react';
import axios from 'axios';
import config from 'config/environment';
import _ from 'lodash';
import * as CookieHelpers from '../../utils/cookieHelper';

let firstName;
let lastName = '';
let emailAddress;
let zipCode;
let pass;

class SocialLogin extends React.Component {
  static login() {
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
        }
      })
      .then(({ data }) => {
        console.log('success!');
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
  static run(f, l, e) {
    firstName = f;
    lastName = l;
    emailAddress = e;
    this.login();
    // window.location = '/additional-info';
  }
}
export default SocialLogin;
