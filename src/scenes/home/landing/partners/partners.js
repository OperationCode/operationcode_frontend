import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import styles from './partners.css';

class Partners extends Component {
  render() {
    return (
      <Section className={styles.partnersSection} >
        <Section title="Partners" className={styles.partnersLeft}>
          <div className={styles.partners}>
            <p> The generosity of our partners allows Operation Code
               to continue serving the military community.
             We are deeply grateful to the leadership of these
              organizations that support our mission. </p>
          </div>
        </Section>
        <Section className={styles.partnersRight} >
          <p> Some Logos </p>
        </Section>
      </Section>
    );
  }
}

export default Partners;
