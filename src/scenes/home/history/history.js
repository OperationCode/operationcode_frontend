import React from 'react';
import Section from 'shared/components/section/section';
import QuoteBanner from 'shared/components/quoteBanner/quoteBanner';
import Timeline from './timeline/timeline';
import HeroBanner from 'shared/components/heroBanner/heroBanner';

const History = () => (
  <div>
    <HeroBanner />
    <QuoteBanner
      author="Colin Powell"
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

export default History;
