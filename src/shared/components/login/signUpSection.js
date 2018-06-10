import React from 'react';
import Section from 'shared/components/section/section';
import LinkButton from 'shared/components/linkButton/linkButton';

const SignUpSection = () => (
  <Section title="New user?" theme="white">
    <p>
      Are you ready to deploy your future? Join Operation Code today and launch your career in
      software development. Once you complete the form below, you&#8217;ll be invited to join our
      team on Slack. Make sure you stop in and say hi!
    </p>
    <LinkButton text="Sign Up" theme="red" link="/signup" />
  </Section>
);
export default SignUpSection;
