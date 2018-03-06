import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faClock, faHandPeace } from '@fortawesome/fontawesome-free-regular';
import { faUsers } from '@fortawesome/fontawesome-free-solid';
import Section from 'shared/components/section/section';
import styles from './mentorVolunteers.css';

const MentorVolunteers = () => (
  <Section title="Our Mentor Volunteers">
    <p>
      All of our mentors possess <u>3 characteristics</u>:
    </p>

    <div className={styles.iconList}>
      <div className={styles.characteristics}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faClock} size="4x" />
        </div>
        <p>
          <strong>Availability:</strong> They are willing to set aside time to
          help you.
        </p>
      </div>

      <div className={styles.characteristics}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faUsers} size="4x" />
        </div>
        <p>
          <strong>Expert Knowledge:</strong> Each mentor is a subject matter
          expert in their choosen field with years of experience. We will curate
          your specific request to a mentor that knows your field.
        </p>
      </div>

      <div className={styles.characteristics}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faHandPeace} size="4x" />
        </div>
        <p>
          <strong>Trustworthiness:</strong> Our mentors are honest with you,
          even when it&apos;s the hard truth. Expect a helpful and critical
          leader, not a cheerleader.
        </p>
      </div>
    </div>
  </Section>
);

export default MentorVolunteers;
