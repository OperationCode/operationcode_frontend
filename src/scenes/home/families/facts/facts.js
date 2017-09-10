import React, { Component } from 'react';
import Heading from 'shared/components/heading/heading';
import styles from './facts.css';
import family3 from '../../../../images/Family-3.jpg';

class Facts extends Component {
  render() {
    return (
      <div className={styles.facts}>
        <div className={styles.factsList}>
          <div className={styles.factsHeading}>
            <Heading text="The Facts" />
          </div>
          <ul>
            <li className={styles.factItem}>
              There are approximately 710,000 active duty spouses, 93% of whom are female.
                An additional 500,000 spouses are married to a Reservist or National Guardsman.
            </li>
            <li className={styles.factItem}>
              84% have some college education; 25% hold an undergraduate degree;
               and 10% hold a postgraduate degree.
            </li>
            <li className={styles.factItem}>
              77% of spouses report that they want or need to work.
              38% of military spouses are underemployed,
              compared to approximately 6% rate for civilian spouses.
            </li>
            <li className={styles.factItem}>
              Only 19% of military spouses have adequate full-time employment.
            </li>
          </ul>
          <div className={styles.footnote}>
            <span>*Source </span><strong>pointsofflight.org</strong>
          </div>
        </div>
        <div className={styles.factsRight} style={{ backgroundImage: `url(${family3})` }}>{null}</div>
      </div>
    );
  }
}

export default Facts;
