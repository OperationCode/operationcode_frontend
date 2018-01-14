import React from 'react';
import Section from 'shared/components/section/section';
import IconCard from 'shared/components/iconCard/iconCard';
import styles from './membership.css';

const Membership = () => (
  <Section title="Membership" theme="white">
    <div className={styles.intro}>
      <p>
        Joining Op-Code is Free. If you are just starting out, a senior dev,
        just exploring tech, or miss your buddies, Operation Code is for you.
      </p>
    </div>
    <br />
    <ul className={styles.list}>
      <li>
        <IconCard
          title="Community"
          fontAwesomeIcon="FaGroup"
          iconAboveHeading
          subText="Join our open community. Learn and grow with fellow veterans, servicemembers,
          and military spouses."
        />
      </li>
      <li>
        <IconCard
          title="Growth"
          fontAwesomeIcon="FaRoad"
          iconAboveHeading
          subText="Find new opportunities in the tech industry through our scholarship program.
          Attend conferences and coding bootcamps to build your skills."
        />
      </li>
      <li>
        <IconCard
          title="Connections"
          fontAwesomeIcon="FaFlagCheckered"
          iconAboveHeading
          subText="Jump-start your journey. Gain access to our Slack team to learn from professional
          software engineers with years of experience."
        />
      </li>
      <li>
        <IconCard
          title="Careers"
          fontAwesomeIcon="FaSuitcase"
          iconAboveHeading
          subText="Get expert feedback on your portfolio, side project, or resume. Find local and remote jobs all
          across the country."
        />
      </li>
    </ul>
  </Section>
);

export default Membership;
