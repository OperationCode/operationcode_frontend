import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './header.css';
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
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ isSideNavVisible: !this.state.isSideNavVisible });
  }

  render() {
    const classes = classNames({
      [`${styles.header}`]: true,
      [`${styles.transparent}`]: this.props.transparent
    });
    return (
      <div className={classes} >
        <Logo />
        <Burger onClick={this.toggleDrawer} />
        <TopNav />
        <SideNav isVisible={this.state.isSideNavVisible} onClose={this.toggleDrawer} />
      </div>
    );
  }
}

Header.propTypes = {
  transparent: PropTypes.bool
};

Header.defaultProps = {
  transparent: false
};

export default Header;
