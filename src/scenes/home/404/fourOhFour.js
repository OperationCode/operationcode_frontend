import React, { Component } from 'react';
import styles from './fourOhFour.css';

export default class FourOhFour extends Component {

  render() {
    return (
      <div className={styles.FourOhFour}>
        <div className={styles.bg}>
          <h1 className={styles.title}>404!</h1>
          <p className={styles.paragraph}>You definitely weren&apos;t supposed to see this...</p>
        </div>
      </div>
    );
  }
}

