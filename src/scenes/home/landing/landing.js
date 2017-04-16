import React, { Component } from 'react';
import styles from './landing.css';
import JumboQuote from './jumboQuote/jumboQuote';
import Facts from './facts/facts';

class Landing extends Component {
  render() {
    return (
      <div className={styles.landing}>
        <JumboQuote />
        <Facts />
      </div>
    );
  }
}

export default Landing;