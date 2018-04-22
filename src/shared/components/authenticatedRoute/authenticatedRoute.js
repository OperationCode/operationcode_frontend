import React from 'react';
import SocialLogin from 'shared/components/login/socialLogin';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = (props) => {
  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }
  if (props.sendNotification && props.updateRootAuthState) {
    return (
      <Route
        render={() => (
          <SocialLogin
            updateRootAuthState={props.updateRootAuthState}
            sendNotification={props.sendNotification}
            history={props.history}
          />
        )} isAUth={props.isAuth} route={props.path}
      />);
  }
  return <Route component={props.component} {...props} />;
};

AuthenticatedRoute.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string,
    block: PropTypes.func,
    createHref: PropTypes.func,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    length: PropTypes.number,
    listen: PropTypes.func,
    location: PropTypes.shape({
      key: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
    push: PropTypes.func,
    replace: PropTypes.func,
  }),
  sendNotification: PropTypes.func,
  updateRootAuthState: PropTypes.func,
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};

AuthenticatedRoute.defaultProps = {
  history: null,
  sendNotification: null,
  updateRootAuthState: () => {},
};

export default AuthenticatedRoute;
