import React from 'react';
import Section from 'shared/components/section/section';
import QuoteBanner from 'shared/components/quoteBanner/quoteBanner';
import MentorshipProgram from './mentorshipProgram/mentorshipProgram';
import MentorVolunteers from './mentorVolunteers/mentorVolunteers';
import Steps from './steps/steps';

import styles from './ourPrograms.css';

const OurPrograms = () => (
  <div>
    <QuoteBanner
      author="The Smart Guy"
      quote="Here is a quote about the awesome stuff."
    />
    <Section title="Mentorship Program">
      <div className={styles.container}>
        <MentorshipProgram />
      </div>
    </Section>
    <Section title="Our Mentor Volunteers">
      <div className={styles.container}>
        <MentorVolunteers />
      </div>
    </Section>
    <Section title="Getting Started">
      <div className={styles.container}>
        <Steps />
      </div>
    </Section>
  </div>
);

export default OurPrograms;
