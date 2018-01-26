import React from 'react';
import LinkButton from 'shared/components/linkButton/linkButton';
import styles from './volunteer.css';

const Volunteer = () => (
  <dv className={styles.outerAlt}>
    <div className={styles.wrapper}>
      <div className={styles.half}>
        <h3>Become A Volunteer</h3>
        <ul>
          <li className={styles.check}>Join our community on Slack, and work with new software developers to help grow and mentor them in learning to code and enter the tech industry. Answer questions, participate in mock interviews, and review resumes.</li><br />
          <li className={styles.check}>Lead a squad of new developers in learning new skills in Linux, Python, cloud infrastructure, web development, and more.</li><br />
          <li className={styles.check}>Meet up with a local chapter (or start your own!) and network with other new developers eager to build cool apps and code the future!</li><br />
        </ul>
        <div className={styles.button}>
          <LinkButton text="Volunteer" theme="red" link="/signup" />
        </div>
      </div>
      <div className={styles.half}>
        <img src="http://via.placeholder.com/350x350" alt="placeholder" />
      </div>
    </div>
  </dv>


);

export default Volunteer;
