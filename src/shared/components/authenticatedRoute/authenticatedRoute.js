import React from 'react';
import SocialLogin from 'shared/components/login/socialLogin';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = (props) => {
  console.log(props);
  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }
  if (props.sendNotification && props.updateRootAuthState) {
    return <Route render={() => (<SocialLogin updateRootAuthState={props.updateRootAuthState} sendNotification={props.sendNotification} />)} isAUth={props.isAuth} route={props.path} />;
  }
  return <Route component={props.component} {...props} />;
};

AuthenticatedRoute.propTypes = {
  sendNotification: PropTypes.func.isRequired,
  updateRootAuthState: PropTypes.func,
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};

AuthenticatedRoute.defaultProps = {
  updateRootAuthState: () => {}
};

export default AuthenticatedRoute;
