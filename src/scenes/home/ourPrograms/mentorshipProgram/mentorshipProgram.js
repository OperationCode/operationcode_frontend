import React from 'react';
import { FaCheck, FaBan } from 'react-icons/lib/fa';
import styles from './mentorshipProgram.css';

const MentorshipProgram = () => (
  <div>
    <div className={styles.flexContainer}>
      <div className={styles.featureHeading}>
        <FaCheck size={36} style={styles.iconStyle} />
        <p>What It Is</p>
      </div>
      <div className={styles.featureDescription}>
        <ul>
          <li>A set of scheduled phone calls or video conferences aimed at having professional developers guide your next steps.</li>
          <li>A friendly monitoring from a volunteer staff, encouraging you to keep prodding away at your goal.</li>
          <li>An environment of pure, unscheduled, and friendly support from developers of many experience levels.</li>
          <li>A phenomenal tool for growth in your journey into the tech industry.</li>
        </ul>
      </div>
    </div>
    <div className={styles.flexContainer}>
      <div className={styles.featureHeading}>
        <FaBan size={36} />
        <p>What It Isn&apos;t</p>
      </div>
      <div className={styles.featureDescription}>
        <ul>
          <li>A live &quot;Ask Jeeves&quot; alternative. Mentors are happy to help you, but also expert a certain degree of individual effort. Please spend time <a href="https://community.operationcode.org/t/the-art-of-asking-questions/121" target="_blank" rel="noopener noreferrer">learning how to ask questions</a> and Googling for yourself before going to our volunteers for aid.</li>
          <li>A guarantee that someone will work with you long-term. All our mentors are are volunteers, taking on mentees based on scheduled availability.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default MentorshipProgram;
