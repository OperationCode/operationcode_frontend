import React, { Component } from 'react';
import styles from './header.css';
import TopNav from './topNav/topNav';
import Logo from './logo/logo';
import Burger from './burger/burger';

class Header extends Component {
  render() {
    return (
      <div className={styles.header} >
        <Logo />
        <Burger />
        <TopNav />
      </div>
    );
  }
}

export default Header;
