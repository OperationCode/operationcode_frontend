import React from 'react';
import Drawer from 'shared/components/drawer/drawer';
import NavItem from 'shared/components/nav/navItem/navItem';
import PropTypes from 'prop-types';
import logo from 'images/logos/small-white-logo.png';
import styles from './sideNav.css';

const SideNav = (props) => {
  const { isVisible, onClose } = props;

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Drawer isVisible={isVisible}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <a className={styles.close} href="/" onClick={handleCloseClick}>&#10006;</a>
          </div>
          <a className={styles.logoWrapper} href="/">
            <img className={styles.logo} src={logo} alt="Operation Code logo" />
          </a>
        </div>
        <div className={styles.list}>
          <NavItem
            className="menuItem"
            to="https://donorbox.org/operationcode"
            text="Donate"
            isExternal
            onClick={handleCloseClick}
          />
          <NavItem
            className="menuItem"
            to="join" text="Join"
            onClick={handleCloseClick}
          />
          <NavItem
            className="menuItem"
            notClickable to="about"
            text="About" onClick={handleCloseClick}
          />
          <NavItem
            className="menuItem"
            notClickable to="programs"
            text="Programs" onClick={handleCloseClick}
          />
          <NavItem
            className="menuItem"
            notClickable to="involved"
            text="Get Involved" onClick={handleCloseClick}
          />
          <NavItem
            className="menuItem"
            notClickable to="blog"
            text="Blog"
            onClick={handleCloseClick}
          />
        </div>
      </div>
    </Drawer>
  );
};

SideNav.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

SideNav.defaultProps = {
  isVisible: false,
};

export default SideNav;
