import React from 'react';
import { GoogleLogin } from 'react-google-login';
import SocialLogin from './socialLogin';

const responseGoogle = (response) => {
  console.log(response.profileObj.name);
  SocialLogin.run(response.profileObj.givenName, response.profileObj.familyName, response.profileObj.email, response.tokenObj.login_hint);
};

let profile;
let idToken;

class Google extends React.Component {
  static onSignIn(googleUser) {
    console.log('Here!');
    profile = googleUser.getBasicProfile();
    console.log(profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log(profile.getName());
    console.log(profile.getImageUrl());
    console.log(profile.getEmail()); // This is null if the 'email' scope is not present.
    idToken = googleUser.getAuthResponse().id_token;
    console.log(idToken);
  }

  render() {
    return (
      <div>
        <meta name="google-signin-scope" content="profile email" />
        <meta name="google-signin-client_id" content="344751133153-v2h3l08lcrkqjjerftlv450hbe5p2i7b.apps.googleusercontent.com" />
        <script src="https://apis.google.com/js/platform.js" async defer />
        <GoogleLogin clientId="344751133153-v2h3l08lcrkqjjerftlv450hbe5p2i7b.apps.googleusercontent.com" buttonText="Login" onSuccess={responseGoogle} onFailure={responseGoogle} />
      </div>
    );
  }
}

export default Google;
