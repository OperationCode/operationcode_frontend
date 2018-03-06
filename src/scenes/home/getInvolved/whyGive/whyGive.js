import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import LinkButton from 'shared/components/linkButton/linkButton';
import Dinner1 from 'images/benefit_dinner_2017_1.jpg';
import styles from './whyGive.css';

const WhyGive = () => (
  <div className={styles.wrapper}>
    <div className={styles.half}>
      <img src={Dinner1} alt="Benefit Dinner 2017" className={styles.photo} />
    </div>
    <div className={styles.half}>
      <h3>Why give to Operation Code?</h3>
      <p>
        <FontAwesomeIcon icon={faCheck} size="2x" />
        To provide veterans, transitioning servicemembers, and military spouses
        with transformative educational experiences
      </p>
      <p>
        <FontAwesomeIcon icon={faCheck} size="2x" />
        To advocate for more diversity and opportunity in the tech industry
      </p>
      <p>
        <FontAwesomeIcon icon={faCheck} size="2x" />
        To enable our mission to reach more members of the military community
      </p>
      <p>
        <FontAwesomeIcon icon={faCheck} size="2x" />
        Scholarship funding for comp sci education, industry certification
      </p>
      <p>
        <FontAwesomeIcon icon={faCheck} size="2x" />
        Sending veterans to conferences and major tech industry events
      </p>
      <p>
        <FontAwesomeIcon icon={faCheck} size="2x" />
        Building more tech communities near military installations
      </p>
      <div className={styles.button}>
        <LinkButton
          text="Donate"
          theme="red"
          link="https://opencollective.com/operationcode#support"
          isExternal
        />
      </div>
    </div>
  </div>
);

export default WhyGive;
