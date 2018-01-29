import React from 'react';
import { Link } from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';
import SocialMedia from 'shared/components/socialMedia/socialMedia';
import centerLogo from 'images/icons/Medal-Icon.svg';
import styles from './footer.css';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.outerFooterGroupSocial}>
        <div className={styles.email} >
          <a href="mailto:contact@operationcode.org">contact@operationcode.org</a>
        </div>
        <SocialMedia />
      </div>
      <div className={styles.logo}>
        <img src={centerLogo} alt="Operation Code Logo" />
        <p className={styles.copyright}>
          Copyright {`${(new Date()).getUTCFullYear()} `}
          <br className={styles.copyrightLineBreak} />
          Operation Code™
        </p>
      </div>
      <div className={styles.outerFooterGroupLinks}>
        <div className={styles.blockGroup} >
          <Link to="/about">About</Link>
          <Link to="/press">Press</Link>
          <Link to="/branding">Branding</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/team">Team</Link>
        </div>
        <div className={styles.blockGroup}>
          <a href="https://github.com/OperationCode/operationcode_frontend/issues/new" target="_blank" rel="noopener noreferrer">Report A Bug</a>
          <a href="https://smile.amazon.com/ch/47-4247572" target="_blank" rel="noopener noreferrer">Amazon Smile</a>
          <Link to="/contact">Contact</Link>
          <a href="https://www.iubenda.com/privacy-policy/8174861" target="_blank" rel="noopener noreferrer">Privacy</a>
          <Link to="/terms">Terms of Service</Link>
        </div>
        <ScrollUpButton />
      </div>
    </div>
  </div>
);

export default Footer;
