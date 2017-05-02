import React, { Component } from 'react';
import centerLogo from 'images/Medal.svg';
import { Link } from 'react-router-dom';
import SocialMedia from 'shared/components/socialMedia/socialMedia';
import styles from './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={`${styles.block} ${styles.contactLinks}`}>
            <div className={styles.email} >
              <a href="mailto:contact@operationcode.org">contact@operationcode.org</a>
            </div>
            <SocialMedia />
          </div>
          <div className={styles.logo}>
            <img src={centerLogo} alt="" />
          </div>
          <div className={`${styles.block} ${styles.pageLinks}`}>
            <div className={styles.blockGroup} >
              <Link to="about">About&nbsp;Us</Link>
              <Link to="programs">Our&nbsp;Programs</Link>
              <Link to="involved">Our&nbsp;Partners</Link>
            </div>
            <div className={styles.blockGroup} >
              <Link to="involved">Get&nbsp;Involved</Link>
              <Link to="blog">Blog</Link>
              <Link to="contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
