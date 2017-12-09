import React, { Component } from 'react';
import config from 'config/environment';
import FacebookLogin from 'react-facebook-login';
import SocialLogin from './socialLogin';
import styles from './socialMediaButtons.css';

class Facebook extends Component {
  responseFacebook = (response) => {
    const login = new SocialLogin(this.props);
    const nameArray = response.name.split(' ');
    const firstName = nameArray[0];
    const lastName = nameArray[nameArray.length];
    login.run(firstName, lastName, response.email);
  };

  render() {
    return (
      <div>
        <script src="https://connect.facebook.net/en_US/sdk.js" async defer />
        <FacebookLogin
          appId={`${config.facebookKey}`}
          fields="name,email"
          cssClass={[styles.loginButton, styles.facebookButton].join(' ')}
          callback={this.responseFacebook}
        />
      </div>
    );
  }
}
export default Facebook;
