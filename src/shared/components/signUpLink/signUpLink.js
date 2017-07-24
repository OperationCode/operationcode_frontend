import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SignUpLink extends Component {
  render() {
    return (
      <Link to="/join">{this.props.text}</Link>
    );
  }
}

SignUpLink.propTypes = {
  text: PropTypes.string
};

SignUpLink.defaultProps = {
  text: 'Sign up'
};

export default SignUpLink;
