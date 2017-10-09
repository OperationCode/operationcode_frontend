import React from 'react';
import { FaClockO, FaHandScissorsO } from 'react-icons/lib/fa';
import styles from './volunteerChars.css';

const VolunteerCharacteristics = () => (
  <div>
    <p>All of our mentors posses 3 characteristics</p>
    <div className={styles.characteristics}>
      <p><FaClockO size={24} /><strong>Availability: </strong>They are willing to set aside time to help you.</p>
    </div>
    <div className={styles.characteristics}>
      <p><FaHandScissorsO size={24} /><strong>Expert Knowledge: </strong>Each mentor is a subject matter expert in their choosen field with year of experience. We will curate your specific request to a mentor that knows your field.</p>
    </div>
    <div className={styles.characteristics}>
      <p><FaHandScissorsO size={24} /><strong>Trustworthiness: </strong>Our mentors are honest with you, even when the truth is hard to hear. Your mentor will support you to achieve your goal. Expect a leader not a cheerleader.</p>
    </div>
  </div>
);

export default VolunteerCharacteristics;
