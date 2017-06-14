import React, { Component } from 'react';
import Nav from 'shared/components/nav/nav';
import PropTypes from 'prop-types';
import NavItem from 'shared/components/nav/navItem/navItem';
import styles from './topNav.css';

class TopNav extends Component {

  renderNavItems = () => {
    const { signedIn, mentor } = this.props;
    if (signedIn) {
      if (mentor) {
        return (
          <Nav className={styles.topNav} >
            <NavItem notClickable to="about" text="About" />
            <NavItem notClickable to="programs" text="Programs" />
            <NavItem notClickable to="involved" text="Get Involved" />
            <NavItem notClickable to="blog" text="Blog" />
            <NavItem to="code-schools" text="Code Schools" />
            <NavItem to="https://donorbox.org/operationcode" text="Donate" isExternal />
            <NavItem to="mentors" text="Mentors" />
            <NavItem to="requests" text="Requests" />
            <NavItem to="squads" text="Squads" />
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
          <NavItem to="mentors" text="Mentors" />
          <NavItem to="squads" text="Squads" />
          <button onClick={() => this.props.onLogOutClick()}>Logout</button>
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
      </Nav>
    );
  }

  render() {
    return this.renderNavItems();
  }
}

TopNav.propTypes = {
  mentor: PropTypes.bool,
  onLogOutClick: PropTypes.func,
  signedIn: PropTypes.bool
};

TopNav.defaultProps = {
  onLogOutClick: () => {},
  mentor: false,
  signedIn: false
};

export default TopNav;
