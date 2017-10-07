import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = (props) => {
  if (!props.isLoggedIn) {
    return <Redirect to="/login" />;
  }
  return <Route component={props.component} {...props} />;
};

AuthenticatedRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

export default AuthenticatedRoute;
