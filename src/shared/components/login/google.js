import React, { Component } from 'react';
import config from 'config/environment';
import GoogleLogin from 'react-google-login';
import SocialLogin from './socialLogin';
import styles from './socialMediaButtons.css';

class Google extends Component {
  responseGoogle = (response) => {
    const login = new SocialLogin(this.props);
    login.run(response.profileObj.givenName, response.profileObj.familyName, response.profileObj.email);
  };

  render() {
    return (
      <div>
        <script src="https://apis.google.com/js/platform.js" async defer />
        <GoogleLogin
          clientId={`${config.googleKey}`}
          className={[styles.loginButton, styles.googleButton].join(' ')}
          onSuccess={this.responseGoogle}
        />
      </div>
    );
  }
}

export default Google;
