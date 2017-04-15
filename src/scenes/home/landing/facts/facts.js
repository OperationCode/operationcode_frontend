import React, { Component } from 'react';
import styles from './facts-styles';
import family3 from '../../../../images/Family-3.jpg';

class Facts extends Component {
  render() {
    return (
      <div style={styles.facts} >
        <div style={styles.factsList}>
          <div style={styles.factsHeading} >
            <h5>The Facts</h5>
          </div>
          <ul>
            <li style={styles.factItem}>
              There are approximately 710,000 active duty spouses, 93% of whom are female.  An additional 500,000 spouses are married to a Reservist or National Guardsman.
            </li>
            <li style={styles.factItem}>
              84% have some college education; 25% hold an undergraduate degree; and 10% hold a postgraduate degree.
            </li>
            <li style={styles.factItem}>
              77% of spouses report that they want or need to work.  38% of military spouses are underemployed, compared to approximately 6% rate for civilian spouses.
            </li>
            <li style={styles.factItem}>
              Only 19% of military spouses have adequate full-time employment.
            </li>
          </ul>
        </div>
        <div style={ styles.factsRight } >
          <img style={ styles.factsImage } src={ family3 } alt="" />
        </div>
      </div>
    );
  }
}

export default Facts;
