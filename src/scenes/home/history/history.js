import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import QuoteBanner from 'shared/components/quoteBanner/quoteBanner';
import Timeline from './timeline/timeline';
// import styles from './history.css';

class History extends Component {
  render() {
    return (
      <div>
        <QuoteBanner
          author="Collin Powell"
          quote="There are no secrets to success. It is the result of preparation, hard work, learning from failure."
        />

        <Section
          title="History"
          theme="white"
          headingLines={false}
        >
          <Timeline />
        </Section>
      </div>
    );
  }
}

export default History;
