import React from 'react';
import GoogleLogin from 'react-google-login';
import SocialLogin from './socialLogin';
import styles from './socialMediaButtons.css';

const responseGoogle = (response) => {
  const login = new SocialLogin();
  console.log(response);
  console.log(SocialLogin);
  login.run(response.profileObj.givenName, response.profileObj.familyName, response.profileObj.email);
};
const Google = () => (
  <div>
    <script src="https://apis.google.com/js/platform.js" async defer />
    <GoogleLogin
      clientId="344751133153-v2h3l08lcrkqjjerftlv450hbe5p2i7b.apps.googleusercontent.com"
      className={[styles.loginButton, styles.googleButton].join(' ')}
      onSuccess={responseGoogle}
    />
  </div>
);

export default Google;
