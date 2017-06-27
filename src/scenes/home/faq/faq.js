import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import styles from './faq.css';

class FAQ extends Component {
  render() {
    return (
      <div>
        <Section title="Frequently Asked Questions" theme="white">
          <div className={styles.container}>
            <div className={styles.accordion}>
              The questions go here
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default FAQ;
