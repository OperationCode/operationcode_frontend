import React from 'react';
import GoogleLogin from 'react-google-login';
import SocialLogin from './socialLogin';

const responseGoogle = (response) => {
  console.log(response);
  SocialLogin.run(response.profileObj.familyName, response.profileObj.givenName, response.profileObj.email);
};
class Google extends React.Component {
  render() {
    return (
      <div>
        <script src="https://apis.google.com/js/platform.js" async defer />
        {/* eslint-disable */}
        <GoogleLogin clientId='344751133153-v2h3l08lcrkqjjerftlv450hbe5p2i7b.apps.googleusercontent.com' onSuccess={responseGoogle} onFailure={responseGoogle} />
        {/* eslint-enable */}
      </div>
    );
  }
}

export default Google;
