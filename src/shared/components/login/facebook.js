import React from 'react';
import FacebookLogin from 'react-facebook-login';
import SocialLogin from './socialLogin';

const responseFacebook = (response) => {
  console.log(response);
  const nameArray = response.name.split(' ');
  const firstName = nameArray[0];
  const lastName = nameArray[nameArray.length];
  console.log(firstName);
  console.log(lastName);
  SocialLogin.run(firstName, lastName, response.email);
};

class Facebook extends React.Component {
  render() {
    return (
      <div>
        <script src="https://connect.facebook.net/en_US/sdk.js" async defer />
        <FacebookLogin appId="711044949101273" fields="name,email" callback={responseFacebook} />
      </div>
    );
  }
}

export default Facebook;
