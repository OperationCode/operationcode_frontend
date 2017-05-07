import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import styles from './partners.css';

class Partners extends Component {
  render() {
    return (
      <Section className={styles.partnersSection} >
        <Section title="Partners" className={styles.partnersLeft}>
          <div className={styles.partners}>
            <p> In-kind donations from the startup and developer community
             allow Operation Code to focus on our mission.
             We are deeply grateful for these companies, entrepreneurs
              and developers who have our back. </p>
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
