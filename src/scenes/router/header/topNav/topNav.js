import React from 'react';
import PropTypes from 'prop-types';
import styles from './topNav.css';

const TopNav = ({ children }) => (
  <div className={styles.topNav} >
    {children}
  </div>
);

TopNav.propTypes = {
  children: PropTypes.node.isRequired
};

export default TopNav;
