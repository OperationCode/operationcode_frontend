import React, { Component } from 'react';
import Drawer from 'shared/components/drawer/drawer';
import NavItem from 'shared/components/nav/navItem/navItem';
import PropTypes from 'prop-types';
import logo from 'images/logos/small-white-logo.png';
import styles from './sideNav.css';

class SideNav extends Component {
  render() {
    return (
      <Drawer isVisible={this.props.isVisible}>
        <div className={styles.content}>
          <div className={styles.header}>
            <span className={styles.close}>&#10006;</span>
            <img className={styles.logo} src={logo} alt="Operation Code logo" />
          </div>
          <div className={styles.list}>
            <NavItem className="menuItem" to="https://donorbox.org/operationcode" text="Donate" isExternal />
            <NavItem className="menuItem" to="join" text="Join" />
            <NavItem className="menuItem" notClickable to="about" text="About" />
            <NavItem className="menuItem" notClickable to="programs" text="Programs" />
            <NavItem className="menuItem" notClickable to="involved" text="Get Involved" />
            <NavItem className="menuItem" notClickable to="blog" text="Blog" />
          </div>
        </div>


      </Drawer>
    );
  }
}

SideNav.propTypes = {
  isVisible: PropTypes.bool,
};

SideNav.defaultProps = {
  isVisible: false,
};

export default SideNav;
