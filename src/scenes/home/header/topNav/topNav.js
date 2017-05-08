import React, { Component } from 'react';
import Nav from 'shared/components/nav/nav';
import NavItem from 'shared/components/nav/navItem/navItem';
import styles from './topNav.css';

class TopNav extends Component {
  render() {
    return (
      <Nav className={styles.topNav} >
        <NavItem notClickable to="about" text="        " />
        <NavItem notClickable to="programs" text="            " />
        <NavItem notClickable to="involved" text="            " />
        <NavItem notClickable to="blog" text="    " />
        <NavItem to="https://donorbox.org/operationcode" text="Donate" isExternal />
        <NavItem to="join" text="Join" />
      </Nav>
    );
  }
}

// TODO:
// Replace empty spaces within text properties to match link content
// Remove notClickable property as routes are implemented

export default TopNav;
