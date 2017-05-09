import React, { Component } from 'react';
import Nav from 'shared/components/nav/nav';
import NavItem from 'shared/components/nav/navItem/navItem';
import styles from './topNav.css';

class TopNav extends Component {
  render() {
    return (
      <Nav className={styles.topNav} >
        <NavItem notClickable to="about" text="About" />
        <NavItem notClickable to="programs" text="Programs" />
        <NavItem notClickable to="involved" text="Get Involved" />
        <NavItem notClickable to="blog" text="Blog" />
        <NavItem to="https://donorbox.org/operationcode" text="Donate" isExternal />
        <NavItem to="join" text="Join" />
      </Nav>
    );
  }
}

export default TopNav;
