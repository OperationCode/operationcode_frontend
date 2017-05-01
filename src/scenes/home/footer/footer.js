import React, { Component } from 'react';
import centerLogo from 'images/Medal.svg';
import fbImage from 'images/Facebook.svg';
import ghImage from 'images/GitHub.svg';
import twtImage from 'images/Icon-Twitter.svg';
import liImage from 'images/LinkedIn.svg';
import { Link } from 'react-router-dom';
import styles from './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.left}>
          <div className={styles.contact} >
            <a href="mailto:contact@operationcode.org">contact@operationcode.org</a>
          </div>
          <div className={styles.smContainer}>
            <div className={styles.sm}>
              <img src={twtImage} alt="" />
            </div>
            <div className={styles.sm}>
              <img src={ghImage} alt="" />
            </div>
            <div className={styles.sm}>
              <img src={fbImage} alt="" />
            </div>
            <div className={styles.sm}>
              <img src={liImage} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <img src={centerLogo} alt="" />
        </div>
        <div className={styles.right}>
          <div className={styles.nav} >
            <Link to="about">About&nbsp;Us</Link>
            <Link to="programs">Our&nbsp;Programs</Link>
            <Link to="involved">Our&nbsp;Partners</Link>
            <Link to="involved">Get&nbsp;Involved</Link>
            <Link to="blog">Blog</Link>
            <Link to="contact">Contact</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
