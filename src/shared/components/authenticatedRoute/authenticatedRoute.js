import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default class AuthenticatedRoute extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />;
    }
    return <Route component={this.props.component} {...this.props} />;
  }
}

AuthenticatedRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};
