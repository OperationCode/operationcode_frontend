import React, { Component } from 'react';
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
    return (
      <div className={styles.header} >
        <Logo />
        <Burger onClick={this.toggleDrawer} />
        <TopNav />
        <SideNav isVisible={this.state.isSideNavVisible} onClose={this.toggleDrawer} />
      </div>
    );
  }
}

export default Header;
