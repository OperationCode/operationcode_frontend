import React from 'react';
import config from 'config/environment';
import FacebookLogin from 'react-facebook-login';
import SocialLogin from './socialLogin';
import styles from './socialMediaButtons.css';

const responseFacebook = (response) => {
  const login = new SocialLogin();
  const nameArray = response.name.split(' ');
  const firstName = nameArray[0];
  const lastName = nameArray[nameArray.length];
  login.run(firstName, lastName, response.email);
};

const Facebook = () => (
  <div>
    <script src="https://connect.facebook.net/en_US/sdk.js" async defer />
    <FacebookLogin
      appId={`${config.facebookKey}`}
      fields="name,email"
      cssClass={[styles.loginButton, styles.facebookButton].join(' ')}
      callback={responseFacebook}
    />
  </div>
);

export default Facebook;
