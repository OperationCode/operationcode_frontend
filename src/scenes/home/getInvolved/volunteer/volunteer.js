import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import LinkButton from 'shared/components/linkButton/linkButton';
import Section from 'shared/components/section/section';
import hackathon1 from 'images/hackathon1.jpg';
import styles from '../getInvolved.css';

const Volunteer = () => (
  <Section title="Become a Volunteer">
    <div className={styles.wrapper}>
      <div className={styles.half}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <FontAwesomeIcon icon={faCheck} size="2x" />
            <p className={styles.itemText}>
              Join our community on Slack, and work with new software developers
              to help grow and mentor them in learning to code and enter the tech
              industry. Answer questions, participate in mock interviews, and
              review resumes.
            </p>
          </li>

          <li className={styles.listItem}>
            <FontAwesomeIcon icon={faCheck} size="2x" />
            <p className={styles.itemText}>
              Lead a squad of new developers in learning new skills in Linux,
              Python, cloud infrastructure, web development, and more.
            </p>
          </li>

          <li className={styles.listItem}>
            <FontAwesomeIcon icon={faCheck} size="2x" />
            <p className={styles.itemText}>
              Meet up with a local chapter (or start your own!) and network with
              other new developers eager to build cool apps and code the future!
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.halfPhotoWrapper}>
        <img
          src={hackathon1}
          alt="Operation Code Members at Operation Spark"
          className={styles.photo}
        />
      </div>
    </div>
    <div className={styles.button}>
      <LinkButton text="Volunteer" theme="red" link="/signup" />
    </div>
  </Section>
);

export default Volunteer;
