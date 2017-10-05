import React from 'react';
import PropTypes from 'prop-types';
import logo from 'images/logos/small-white-logo.png';
import Drawer from 'shared/components/drawer/drawer';
import styles from './sideNav.css';

const SideNav = (props) => {
  const { isVisible } = props;

  return (
    <Drawer isVisible={isVisible}>
      <div className={styles.content}>
        <div className={styles.header}>
          <a href="/">
            <img className={styles.logo} src={logo} alt="Operation Code logo" />
          </a>
          <a className={styles.close} href="/" onClick={props.onClose}>&#10006;</a>
        </div>
        <div className={styles.list}>
          {props.children}
        </div>
      </div>
    </Drawer>
  );
};

SideNav.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

SideNav.defaultProps = {
  isVisible: false,
  onClose: () => {}
};

export default SideNav;
