import React, { Component } from 'react';
import LinkButton from 'shared/components/linkButton/linkButton';
import WhatWeDo from './whatWeDo/whatWeDo';
import styles from './landing.css';

class Landing extends Component {
  render() {
    return (
      <div className={styles.landing}>
        <div className={styles.pageHeading}>
          <h1>The largest community dedicated to helping military veterans and
            families launch their software development careers.</h1>
          <LinkButton text="Join" />
        </div>
        <WhatWeDo />
      </div>
    );
  }
}

export default Landing;
