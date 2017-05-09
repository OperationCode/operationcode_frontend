import React, { Component } from 'react';
import Drawer from 'shared/components/drawer/drawer';
import NavItem from 'shared/components/nav/navItem/navItem';
import PropTypes from 'prop-types';
import styles from './sideNav.css';

class SideNav extends Component {
  render() {
    return (
      <Drawer isVisible={this.props.isVisible}>
        <div className={styles.list}>
          <NavItem className="menuItem" to="https://donorbox.org/operationcode" text="Donate" isExternal />
          <NavItem className="menuItem" to="join" text="Join" />
          <NavItem className="menuItem" notClickable to="about" text="About" />
          <NavItem className="menuItem" notClickable to="programs" text="Programs" />
          <NavItem className="menuItem" notClickable to="involved" text="Get Involved" />
          <NavItem className="menuItem" notClickable to="blog" text="Blog" />
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
