import React from 'react';
import { FaClockO, FaGroup, FaHandPeaceO } from 'react-icons/lib/fa';
import styles from './mentorVolunteers.css';

const MentorVolunteers = () => (
  <div>
    <p>
      All of our mentors possess <u>3 characteristics</u>:
    </p>
    <br />
    <div className={styles.characteristics}>
      <div className={styles.iconContainer}>
        <FaClockO size={75} />
      </div>
      <p>
        <strong>Availability:</strong> They are willing to set aside time to help you.
      </p>
    </div>

    <br />

    <div className={styles.characteristics}>
      <div className={styles.iconContainer}>
        <FaGroup size={75} />
      </div>
      <p>
        <strong>Expert Knowledge:</strong> Each mentor is a subject matter expert in their choosen
        field with year of experience. We will curate your specific request to a mentor that knows
        your field.
      </p>
    </div>

    <br />

    <div className={styles.characteristics}>
      <div className={styles.iconContainer}>
        <FaHandPeaceO size={75} />
      </div>
      <p>
        <strong>Trustworthiness:</strong> Our mentors are honest with you, even when it&apos;s the
        hard truth. Expect a helpful and critical leader, not a cheerleader.
      </p>
    </div>
  </div>
);

export default MentorVolunteers;
