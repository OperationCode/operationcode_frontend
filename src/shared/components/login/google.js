import React from 'react';
import config from 'config/environment';
import GoogleLogin from 'react-google-login';
// import SocialLogin from './socialLogin';
import styles from './socialMediaButtons.css';

const responseGoogle = (response) => {
  console.log(response);
  // const login = new SocialLogin();
  // login.run(response.profileObj.givenName, response.profileObj.familyName, response.profileObj.email);
};
const Google = props => (
  <div>
    <script src="https://apis.google.com/js/platform.js" async defer />
    <GoogleLogin
      clientId={`${config.googleKey}`}
      className={[styles.loginButton, styles.googleButton].join(' ')}
      onSuccess={responseGoogle}
    />
    <script src={console.log(props)} /> {/* I'm trying to get these props up into responseGoogle, I can't just pass them into responseGoogle as an argument beacuse that breaks the response from google's api */}
  </div>
);

export default Google;
