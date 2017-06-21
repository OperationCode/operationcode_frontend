import React, { Component } from 'react';
import Nav from 'shared/components/nav/nav';
import PropTypes from 'prop-types';
import NavItem from 'shared/components/nav/navItem/navItem';
import styles from './topNav.css';

class TopNav extends Component {

  renderNavItems = () => {
    const { signedIn } = this.props;
    if (signedIn) {
      return (
        <Nav className={styles.topNav} >
          <NavItem notClickable to="about" text="About" />
          <NavItem notClickable to="programs" text="Programs" />
          <NavItem notClickable to="involved" text="Get Involved" />
          <NavItem notClickable to="blog" text="Blog" />
          <NavItem to="code-schools" text="Code Schools" />
          <NavItem to="https://donorbox.org/operationcode" text="Donate" isExternal />
          <NavItem to="profile" text="Profile" />
          <button className="navItem" onClick={() => this.props.onLogOutClick()}>Logout</button>
        </Nav>
      );
    }
    return (
      <Nav className={styles.topNav} >
        <NavItem notClickable to="about" text="About" />
        <NavItem notClickable to="programs" text="Programs" />
        <NavItem notClickable to="involved" text="Get Involved" />
        <NavItem notClickable to="blog" text="Blog" />
        <NavItem to="code-schools" text="Code Schools" />
        <NavItem to="https://donorbox.org/operationcode" text="Donate" isExternal />
        <NavItem to="join" text="Join" />
        <NavItem to="login" text="Login" />
      </Nav>
    );
  }

  render() {
    return this.renderNavItems();
  }
}

TopNav.propTypes = {
  onLogOutClick: PropTypes.func,
  signedIn: PropTypes.bool
};

TopNav.defaultProps = {
  onLogOutClick: () => {},
  signedIn: false
};

export default TopNav;
