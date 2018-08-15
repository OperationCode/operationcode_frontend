import React from 'react';
import Section from 'shared/components/section/section';
import IconCard from 'shared/components/iconCard/iconCard';
import styles from './profile.css';

const Profile = () => (
  <Section title="My Profile" theme="gray">
    <div className={styles.profileContainer}>
      <div className={styles.profileContainer__cards}>
        <IconCard
          title="Check for Scholarships"
          fontAwesomeIcon="faGraduationCap"
          url="/scholarships"
        />

        <IconCard
          title="Request a Mentor"
          fontAwesomeIcon="faLifeRing"
          url="http://op.co.de/mentor-request"
        />

        <IconCard
          title="Check for Open Jobs"
          fontAwesomeIcon="faBriefcase"
          url="/jobs"
        />

        <IconCard
          title="Enter our Slack Team"
          fontAwesomeIcon="faSlackHash"
          iconType="brand"
          url="https://operation-code.slack.com/"
        />

        <IconCard title="Update Info" fontAwesomeIcon="faUser" url="/signup-info" />

        <IconCard
          title="Our Programs"
          fontAwesomeIcon="faHandshake"
          url="/our_programs#mentorshipProgram"
        />
      </div>
    </div>
  </Section>
);

export default Profile;
