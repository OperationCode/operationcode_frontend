import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
// import config from 'config/environment';
import _ from 'lodash';
import * as CookieHelpers from '../../utils/cookieHelper';

// import SocialLogin from './socialLogin';

function login(code) {
  console.log(code);
  console.log('Here!');
  axios
    .post('http://localhost:3000/api/v1/users/social', {
      // data: code
      user: {
        email: 'v@test.com', // response.profileObj.email,
        first_name: 'F', // response.profileObj.givenName,
        last_name: 'L', // response.profileObj.familyName,
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

const responseGoogle = (response) => {
  console.log(response);
  login(response);
  // SocialLogin.run(response.profileObj.givenName, response.profileObj.familyName, response.profileObj.email, response.tokenObj.login_hint, response);
};
class Google extends React.Component {
  render() {
    return (
      <div>
        <meta name="google-signin-scope" content="profile email" />
        <meta name="google-signin-client_id" content=GOOGLE_ID />
        <script src="https://apis.google.com/js/platform.js" async defer />
        {/* eslint-disable */}
        <GoogleLogin clientId=GOOGLE_ID onSuccess={responseGoogle} onFailure={responseGoogle} />
        {/* eslint-enable */}
      </div>
    );
  }
}

export default Google;
