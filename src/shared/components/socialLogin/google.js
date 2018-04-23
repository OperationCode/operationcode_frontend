import React from 'react';
import config from 'config/environment';
import GoogleLogin from 'react-google-login';
import SocialLogin from './socialLogin';
import styles from './socialMediaButtons.css';

const Google = (props) => {
  const responseGoogle = (response) => {
    const login = new SocialLogin(props);
    login.run(
      response.profileObj.givenName,
      response.profileObj.familyName,
      response.profileObj.email
    );
  };

  return (
    <div>
      <script src="https://apis.google.com/js/platform.js" async defer />
      <GoogleLogin
        clientId={`${config.googleKey}`}
        className={[styles.loginButton, styles.googleButton].join(' ')}
        onSuccess={responseGoogle}
      />
    </div>
  );
};

export default Google;
