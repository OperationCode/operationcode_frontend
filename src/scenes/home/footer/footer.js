import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from 'shared/components/socialMedia/socialMedia';
import centerLogo from 'images/icons/Medal-Icon.svg';
import styles from './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.outerFooterGroups}>
            <div className={styles.email} >
              <a href="mailto:contact@operationcode.org">contact@operationcode.org</a>
            </div>
            <SocialMedia />
          </div>
          <div className={styles.logo}>
            <img src={centerLogo} alt="Operation Code Logo" />
            <p className={styles.copyright}>
              Copyright 2017 {' '}
              <br className={styles.copyrightLineBreak} />
              Operation Code™
            </p>
          </div>
          <div className={styles.outerFooterGroups}>
            {/* TODO: Uncomment when links are implemented */}
            <div className={styles.blockGroup} >
              <Link to="/faq">FAQ</Link>
              <Link to="/team">Team</Link>
              {/*
              <Link to="/programs">Our Programs</Link>
              <Link to="/involved">Our Partners</Link>
              */}
            </div>
            <div className={styles.blockGroup} >
              {/* TODO: Uncomment when links are implemented */}
              {/* <Link to="/involved">Get Involved</Link>
              <Link to="/blog">Blog</Link> */}
              <Link to="/contact">Contact</Link>
              <a href="https://www.iubenda.com/privacy-policy/8174861" target="_blank" rel="noopener noreferrer">Privacy</a>
              <a href="https://smile.amazon.com/ch/47-4247572" target="_blank" rel="noopener noreferrer">Amazon Smile</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
