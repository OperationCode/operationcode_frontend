import React, { Component } from 'react';
import Nav from 'shared/components/nav/nav';
import NavItem from 'shared/components/nav/navItem/navItem';
import styles from './topNav.css';

class TopNav extends Component {
  render() {
    return (
      <Nav className={styles.topNav} >
        <NavItem to="about" text="About Us" />
        <NavItem to="programs" text="Our Programs" />
        <NavItem to="involved" text="Get Involved" />
        <NavItem to="blog" text="Blog" />
        <NavItem to="donate" text="Donate" />
        <NavItem to="join" text="Join" />
      </Nav>
    );
  }
}

export default TopNav;
