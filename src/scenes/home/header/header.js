import React, { Component } from 'react';
import styles from './header.css';
import TopNav from './topNav/topNav';
import Logo from './logo/logo';

class Header extends Component {
  render() {
    return (
      <div className={styles.header} >
        <Logo />
        <TopNav />
      </div>
    );
  }
}

export default Header;
