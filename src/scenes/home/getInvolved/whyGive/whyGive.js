import React from 'react';
import LinkButton from 'shared/components/linkButton/linkButton';
import styles from './whyGive.css';

const WhyGive = () => (
  <div className={styles.wrapper}>
    <div className={styles.half}>
      <img src="http://via.placeholder.com/350x350" alt="placeholder" />
    </div>
    <div className={styles.half}>
      <h3>Why give to Operation Code?</h3>
      <ul>
        <li className={styles.check}>To provide veterans, transitioning servicemembers, and military spouses with transformative educational experiences</li>
        <li className={styles.check}>To advocate for more diversity and opportunity in the tech industry</li>
        <li className={styles.check}>To enable our mission to reach more members of the military community</li>
        <li className={styles.check}>Scholarship funding for comp sci education, industry certification</li>
        <li className={styles.check}>Sending veterans to conferences and major tech industry events</li>
        <li className={styles.check}>Building more tech communities near military installations</li>
      </ul>
      <div className={styles.button}>
        <LinkButton text="Donate" theme="red" link="https://opencollective.com/operationcode#support" isExternal />
      </div>
    </div>
  </div>

);

export default WhyGive;
