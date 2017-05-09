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
      showDrawer: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ showDrawer: !this.state.showDrawer });
  }

  render() {
    return (
      <div className={styles.header} >
        <Logo />
        <Burger />
        <TopNav />
        <SideNav isVisible={this.state.showDrawer} />
        <button onClick={this.toggleDrawer}>Click</button>
      </div>
    );
  }
}

export default Header;
