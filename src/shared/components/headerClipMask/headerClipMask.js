import React, { Component } from 'react';
import styles from './headerClipMask.css';

class HeaderClipMask extends Component {
  render() {
    return (
      <div>
        <svg className={styles.maskLeft} x="0px" y="0px" viewBox="0 0 612 97" style={{ enableBackground: 'new 0 0 612 97' }}>
          <path d="M614.8,97H0V0C0,0,317.7,97,614.8,97z" />
        </svg>
        <svg className={styles.maskRight} x="0px" y="0px" viewBox="0 0 612 97" style={{ enableBackground: 'new 0 0 612 97' }}>
          <path d="M0,97h615V0C615,0,297.1,97,0,97z" />
        </svg>
      </div>
    );
  }
}

export default HeaderClipMask;
