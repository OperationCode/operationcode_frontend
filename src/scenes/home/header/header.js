import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './header.css';
import TopNav from './topNav/topNav';
import SideNav from './sideNav/sideNav';
import Logo from './logo/logo';
import Burger from './burger/burger';

class Header extends Component {

  state = {
    isSideNavVisible: false
  }

  toggleDrawer = () => this.setState({ isSideNavVisible: !this.state.isSideNavVisible });

  render() {
    const { mentor, signedIn } = this.props;
    const classes = classNames({
      [`${styles.header}`]: true,
      [`${styles.transparent}`]: this.props.transparent
    });
    return (
      <div className={classes} >
        <Logo />
        <Burger onClick={this.toggleDrawer} />
        <TopNav
          onLogOutClick={this.props.logOut}
          signedIn={signedIn}
          mentor={mentor}
        />
        <SideNav
          isVisible={this.state.isSideNavVisible}
          onClose={this.toggleDrawer}
          onLogOutClick={this.props.logOut}
          signedIn={signedIn}
          mentor={mentor}
        />
      </div>
    );
  }
}

Header.propTypes = {
  transparent: PropTypes.bool,
  logOut: PropTypes.func,
  signedIn: false,
  mentor: false
};

Header.defaultProps = {
  transparent: false,
  logOut: () => {},
  signedIn: false,
  mentor: true
};

export default Header;
