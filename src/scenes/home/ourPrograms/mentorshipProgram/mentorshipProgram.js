import React from 'react';
import PropTypes from 'prop-types';
import { FaCheck, FaBan } from 'react-icons/lib/fa';
import Section from 'shared/components/section/section';
import styles from './mentorshipProgram.css';

const MentorshipProgram = ({ fontSize }) => (
  <Section title="Mentorship Program">
    <div className={styles.flexContainer}>
      <div className={styles.featureHeading}>
        <FaCheck size={fontSize} />
        <p>What It Is</p>
      </div>
      <div className={styles.featureDescription}>
        <ul>
          <li>
            A one-on-one session via phone call or Slack aimed at having professional developers
            guide your next steps.
          </li>
          <li>
            Friendly monitoring from a volunteer staff member, encouraging you to keep working
            towards your goal.
          </li>
          <li>An environment of friendly support from developers of many experience levels.</li>
          <li>A phenomenal tool for growth in your journey into the tech industry.</li>
        </ul>
      </div>
    </div>
    <div className={styles.flexContainer}>
      <div className={styles.featureHeading}>
        <FaBan size={fontSize} />
        <p>What It Isn&apos;t</p>
      </div>
      <div className={styles.featureDescription}>
        <ul>
          <li>
            A live &quot;Ask Jeeves&quot; alternative. Mentors are happy to help you, but also
            expect a certain degree of individual effort. Please spend time{' '}
            <a
              href="https://community.operationcode.org/t/the-art-of-asking-questions/121"
              target="_blank"
              rel="noopener noreferrer"
            >
              learning how to ask questions
            </a>{' '}
            and Googling for yourself before going to our volunteers for aid.
          </li>
          <li>
            A guarantee that someone will work with you on a long-term basis. All our mentors work
            on a volunteer basis, taking on mentees as their schedule allows.
          </li>
        </ul>
      </div>
    </div>
  </Section>
);

MentorshipProgram.propTypes = {
  fontSize: PropTypes.number,
};

MentorshipProgram.defaultProps = {
  fontSize: 36,
};

export default MentorshipProgram;
