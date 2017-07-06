import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import styles from './history.css';

class History extends Component {
  render() {
    return (
      <Section title="Our History" theme="white">
        <p className={styles.paragraph}>
          The history slider will go here
        </p>
      </Section>
    );
  }
}

export default History;
