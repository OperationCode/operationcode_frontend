import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import LinkButton from 'shared/components/linkButton/linkButton';
import styles from './thanks.css';

class Thanks extends Component {

  render() {
    return (
      <Section title="Thanks for joining">
        <h2>Thanks for joining operation code. Please check your email for orders.
        Set up your user profile and verify your military affiliation!</h2>
        <div className={styles.profileButton}>
          <LinkButton link="/profile" text="Click to set up your user profile!" />
        </div>
      </Section>

    );
  }
}

export default Thanks;
