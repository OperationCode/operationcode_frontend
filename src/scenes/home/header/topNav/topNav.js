import React from 'react';
import PropTypes from 'prop-types';
import styles from './topNav.css';

const TopNav = props => (
  <div className={styles.topNav} >
    {props.children}
  </div>
);

TopNav.propTypes = {
  children: PropTypes.node.isRequired
};

export default TopNav;
