import React, { Component } from 'react';
import Join from 'shared/components/join/join';
import Donate from 'shared/components/donate/donate';
import Section from 'shared/components/section/section';
import HeaderClipMask from 'shared/components/headerClipMask/headerClipMask';
import QuoteBanner from 'shared/components/quoteBanner/quoteBanner';
import Facts from './facts/facts';
import Goals from './goals/goals';
import styles from './families.css';

class Families extends Component {
  render() {
    const quoteProps = {
      author: 'Former First Lady Michelle Obama',
      quote: 'It\'s hard to impress employers who often view a resume with multiple jobs as a red flag rather than as a reality of military life.'
    };

    return (
      <div>
        <Section className={styles.quoteSection} theme="white">
          <HeaderClipMask />
          <QuoteBanner {...quoteProps} />
        </Section>

        <Section className={styles.factsSection}>
          <Facts />
        </Section>

        <Section className={styles.goalsSection} theme="white">
          <Goals />
        </Section>

        <Donate />
        <Join />
      </div>
    );
  }
}

export default Families;
