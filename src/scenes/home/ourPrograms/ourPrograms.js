import React from 'react';
import Section from 'shared/components/section/section';
import QuoteBanner from 'shared/components/quoteBanner/quoteBanner';
import MentorshipProgram from './mentorshipProgram/mentorshipProgram';
import MentorVolunteers from './mentorVolunteers/mentorVolunteers';
import GettingStarted from './gettingStarted/gettingStarted';

const OurPrograms = () => (
  <div>
    <QuoteBanner
      author="Winston Churchill"
      quote="We make a living by what we get, we make a life by what we give."
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
