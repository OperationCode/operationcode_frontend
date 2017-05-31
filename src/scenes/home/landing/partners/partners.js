import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import apexPartnerImage from 'images/partners/apex.jpg';
import styles from './partners.css';


class Partners extends Component {
  render() {
    return (
      <Section className={styles.partnersSection} theme="white">
        <Section title="Partners" className={styles.partnersLeft} theme="white">
          <div className={styles.partners}>
            <p>
              Thanks to our partners, our all-volunteer organization at
              Operation Code continues to serve the military community.
              We are deeply grateful to the leadership of these
              organizations that are supporting our mission.
            </p>
          </div>
        </Section>
        <Section className={styles.partnersRight} theme="white">
          <p><img src={apexPartnerImage} alt="Apex" className={styles.apexLogo} /></p>
          <p> GitHub </p>
          <p> Docker </p>
        </Section>
      </Section>
    );
  }
}

export default Partners;
