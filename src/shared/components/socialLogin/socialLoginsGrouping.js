import React from 'react';
import PropTypes from 'prop-types';
import Facebook from 'shared/components/socialLogin/facebook';
import Google from 'shared/components/socialLogin/google';
import styles from './socialLoginsGrouping.css';

SocialLoginsGrouping.propTypes = {
  className: PropTypes.string,
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
      search: PropTypes.string
    }),
    push: PropTypes.func,
    replace: PropTypes.func
  }).isRequired,
  sendNotification: PropTypes.func.isRequired,
  updateRootAuthState: PropTypes.func
};

SocialLoginsGrouping.defaultProps = {
  className: '',
  updateRootAuthState: () => {}
};

function SocialLoginsGrouping({
  className, history, sendNotification, updateRootAuthState
}) {
  return (
    <div className={`${styles.flexRow} ${className}`}>
      <Google
        sendNotification={sendNotification}
        updateRootAuthState={updateRootAuthState}
        history={history}
      />
      <Facebook
        sendNotification={sendNotification}
        updateRootAuthState={updateRootAuthState}
        history={history}
      />
    </div>
  );
}

export default SocialLoginsGrouping;
