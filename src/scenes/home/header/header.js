import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './header.css';
import NavItem from './navItem/navItem';
import TopNav from './topNav/topNav';
import SideNav from './sideNav/sideNav';
import Logo from './logo/logo';
import Burger from './burger/burger';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isSideNavVisible: false
    };
    this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
  }

  handleToggleDrawer(e) {
    e.preventDefault();
    this.setState({ isSideNavVisible: !this.state.isSideNavVisible });
  }

  renderNavContents(signedIn, mentor, onClick) {
    return (
      <span>
        <NavItem to="/about" text="About" onClick={onClick} />
        <NavItem to="/code_schools" text="Code Schools" onClick={onClick} />
        <NavItem to="/jobs" text="Job Board" onClick={onClick} />
        <NavItem to="https://opencollective.com/operationcode#support" text="Donate" onClick={onClick} isExternal />
        {signedIn && <NavItem to="https://op.co.de/mentor-request" text="Request Help" onClick={onClick} isExternal />}
        {signedIn ? <NavItem to="/profile" text="Profile" onClick={onClick} />
          : <NavItem to="/join" text="Join" onClick={onClick} />}
        {signedIn ? <NavItem to="/" text="Logout" onClick={this.props.logOut} />
          : <NavItem to="/login" text="Login" onClick={onClick} />}
      </span>
    );
  }

  render() {
    const { mentor, signedIn } = this.props;
    const classes = classNames({
      [`${styles.header}`]: true,
      [`${styles.transparent}`]: this.props.transparent
    });
    return (
      <div className={classes} >
        <Logo />
        <Burger onClick={this.handleToggleDrawer} />
        <TopNav>
          {this.renderNavContents(signedIn, mentor)}
        </TopNav>
        <SideNav
          isVisible={this.state.isSideNavVisible}
          onClose={this.handleToggleDrawer}
        >
          {this.renderNavContents(signedIn, mentor, this.handleToggleDrawer)}
        </SideNav>
      </div>
    );
  }
}

Header.propTypes = {
  transparent: PropTypes.bool,
  logOut: PropTypes.func,
  signedIn: PropTypes.bool,
  mentor: PropTypes.bool
};

Header.defaultProps = {
  transparent: false,
  logOut: () => {},
  signedIn: false,
  mentor: false
};

export default Header;
