import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './signUpLink.css';

class SignUpLink extends Component {
  state = {
    btnText: '',
    paragraph: ''
  }
  render() {
    return (
      <div className="signin-container">
        <p>Are you ready to deploy your future?  Join Operation Code
            today and launch your career in software development.
            Once you complete the form below you&#8217;ll be invited
            to join our team on Slack and the <a href="https://community.operationcode.org/" target="_blank" rel="noopener noreferrer">forums</a>.  Make sure you stop in and say hi!
        </p>
        <Link className={styles.btnRed} to="/join">{this.props.btnText}</Link>
      </div>
    );
  }
}


/*
const SignUpLink = ({ text }) => ();
*/

SignUpLink.propTypes = {
  btnText: PropTypes.string
};

SignUpLink.defaultProps = {
  btnText: 'Sign up'
};

export default SignUpLink;
