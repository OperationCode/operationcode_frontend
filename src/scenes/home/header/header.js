import React, { Component } from 'react';
import logo from '../../images/logos/small-white-logo.png';
import styles from './header-styles';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div style={ styles.header } >
        <div style={ styles.logo } >
          <a href="/"><img src={ logo } alt="" height="38px" /></a>
        </div>
        <div style={styles.nav} >
          <Link style={styles.navItem} to="about">About Us</Link>
          <Link style={styles.navItem} to="programs">Our Programs</Link>
          <Link style={styles.navItem} to="involved">Get Involved</Link>
          <Link style={styles.navItem} to="blog">Blog</Link>
          <Link style={styles.navItem} to="donate">Donate</Link>
          <Link style={styles.navItem} to="join">Join</Link>
        </div>
      </div>
    );
  }
}

export default Header;
