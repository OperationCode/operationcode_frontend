import React, { Component } from 'react';
import logo from 'images/logos/small-white-logo.png';
import styles from './header.css';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div className={ styles.header } >
        <div className={ styles.logo } >
          <a href="/"><img src={ logo } alt="" height="38px" /></a>
        </div>
        <div className={styles.nav} >
          <Link to="about">About Us</Link>
          <Link to="programs">Our Programs</Link>
          <Link to="involved">Get Involved</Link>
          <Link to="blog">Blog</Link>
          <Link to="donate">Donate</Link>
          <Link to="join">Join</Link>
        </div>
      </div>
    );
  }
}

export default Header;
