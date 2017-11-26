import React from 'react';
import Section from 'shared/components/section/section';
import QuoteBanner from 'shared/components/quoteBanner/quoteBanner';
import MentorshipProgram from './mentorshipProgram/mentorshipProgram';
import MentorVolunteers from './mentorVolunteers/mentorVolunteers';
import GettingStarted from './gettingStarted/gettingStarted';

const OurPrograms = () => (
  <div>
    <QuoteBanner
      author="The Smart Guy"
      quote="Here is a quote about the awesome stuff."
    />
    <Section title="Mentorship Program">
      <MentorshipProgram />
    </Section>
    <Section title="Our Mentor Volunteers">
      <MentorVolunteers />
    </Section>
    <Section title="Getting Started">
      <GettingStarted />
    </Section>
  </div>
);

export default OurPrograms;
