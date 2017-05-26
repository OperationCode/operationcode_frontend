import React, { Component } from 'react';
import Nav from 'shared/components/nav/nav';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';
import NavItem from 'shared/components/nav/navItem/navItem';
import styles from './topNav.css';

class TopNav extends Component {
  propTypes = {
    handleLogOut: PropTypes.func
  };

  defaultProps = {
    handleLogOut: () => {}
  };

  state = {
    signedIn: false,
    mentor: false
  }

  componentWillMount() {
    const cookies = new Cookies();
    this.setState({ mentor: !!cookies.get('mentor'), signedIn: !!cookies.get('token') });
  }

  renderNavItems = () => {
    if (this.state.signedIn) {
      if (this.state.mentor) {
        return (
          <Nav className={styles.topNav} >
            <NavItem notClickable to="about" text="About" />
            <NavItem notClickable to="programs" text="Programs" />
            <NavItem notClickable to="involved" text="Get Involved" />
            <NavItem notClickable to="blog" text="Blog" />
            <NavItem to="https://donorbox.org/operationcode" text="Donate" isExternal />
            <NavItem to="mentors" text="Mentors" />
            <NavItem to="requests" text="Requests" />
            <NavItem to="squads" text="Squads" />
            <NavItem to="logout" text="Logout" onClick={this.props.handleLogOut} />
          </Nav>
        );
      }
      return (
        <Nav className={styles.topNav} >
          <NavItem notClickable to="about" text="About" />
          <NavItem notClickable to="programs" text="Programs" />
          <NavItem notClickable to="involved" text="Get Involved" />
          <NavItem notClickable to="blog" text="Blog" />
          <NavItem to="https://donorbox.org/operationcode" text="Donate" isExternal />
          <NavItem to="mentors" text="Mentors" />
          <NavItem to="squads" text="Squads" />
          <NavItem to="logout" text="Logout" onClick={this.props.handleLogOut} />
        </Nav>
      );
    }
    return (
      <Nav className={styles.topNav} >
        <NavItem notClickable to="about" text="About" />
        <NavItem notClickable to="programs" text="Programs" />
        <NavItem notClickable to="involved" text="Get Involved" />
        <NavItem notClickable to="blog" text="Blog" />
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

export default TopNav;
