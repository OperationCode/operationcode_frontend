import React, { Component } from 'react';
import Button from '../../linkButton/linkButton';

class SignUpSection extends Component {
  render() {
    return (
      <div className="signin-container">
        <p>Are you ready to deploy your future?  Join Operation Code
            today and launch your career in software development.
            Once you complete the form below you&#8217;ll be invited
            to join our team on Slack and the <a href="https://community.operationcode.org/" target="_blank" rel="noopener noreferrer">forums</a>.  Make sure you stop in and say hi!
        </p>
        <Button theme="red-large-centered" to="/join" text="Sign up" />
      </div>
    );
  }
}

export default SignUpSection;
