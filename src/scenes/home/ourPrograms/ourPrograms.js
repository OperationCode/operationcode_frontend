import React from 'react';
import QuoteBanner from 'shared/components/quoteBanner/quoteBanner';
import MentorshipProgram from './mentorshipProgram/mentorshipProgram';
import MentorVolunteers from './mentorVolunteers/mentorVolunteers';
import GettingStarted from './gettingStarted/gettingStarted';
import HeroBanner from 'shared/components/heroBanner/heroBanner';

const OurPrograms = () => (
  <div>
    <HeroBanner />
    <QuoteBanner
      author="Winston Churchill"
      quote="We make a living by what we get, we make a life by what we give."
    />
    <MentorshipProgram />
    <MentorVolunteers />
    <GettingStarted />
  </div>
);

export default OurPrograms;
