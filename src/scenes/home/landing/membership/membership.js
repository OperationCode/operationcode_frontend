import React from 'react';
import Section from 'shared/components/section/section';
import IconCard from 'shared/components/iconCard/iconCard';
import styles from './membership.css';

const Membership = () => (
  <Section title="Membership" theme="white">
    <div className={styles.intro}>
      <p>
        Joining Op-Code is Free. If you are just starting out, a senior dev, just exploring tech, or miss your buddies, Operation Code is for you.
      </p>
    </div>
    <br />
    <ul className={styles.list}>
      <li>
        <IconCard
          title="Community" fontAwesomeIcon="FaGroup" iconAboveHeading
          subText="Join our open community. Learn and grow with fellow veterans, servicemembers,
          and military spouses. Work with your peers to build open source projects."
        />
      </li>
      <li>
        <IconCard
          title="Growth" fontAwesomeIcon="FaRoad" iconAboveHeading
          subText="Find new opportunities in the tech industry through our scholarship program.
          Attend software development conferences and coding bootcamps, and build the skills of the future."
        />
      </li>
      <li>
        <IconCard
          title="Connections" fontAwesomeIcon="FaFlagCheckered" iconAboveHeading
          subText="Jumpstart your journey. Access our mentorship and coding channels, and learn from senior
          software engineers at top-tier tech companies with years of experience."
        />
      </li>
      <li>
        <IconCard
          title="Careers" fontAwesomeIcon="FaSuitcase" iconAboveHeading
          subText="Launch your career in the tech industry on our job board. Find local and remote jobs all
          across the country. Get expert feedback on your portfolio, side project, or resume."
        />
      </li>
    </ul>
  </Section>
);

export default Membership;
