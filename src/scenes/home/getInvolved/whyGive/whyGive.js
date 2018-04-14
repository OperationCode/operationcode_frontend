import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import LinkButton from 'shared/components/linkButton/linkButton';
import Section from 'shared/components/section/section';
import Dinner1 from 'images/benefit_dinner_2017_1.jpg';
import styles from '../getInvolved.css';

const WhyGive = () => (
  <Section title="Why give to Operation Code?" theme="white">
    <div className={styles.wrapper}>
      <div className={styles.half}>
        <img src={Dinner1} alt="Benefit Dinner 2017" className={styles.photo} />
      </div>
      <div className={styles.half}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <FontAwesomeIcon icon={faCheck} size="2x" />
            <p className={styles.itemText}>
              To provide veterans, transitioning servicemembers, and military
              spouses with transformative educational experiences
            </p>
          </li>

          <li className={styles.listItem}>
            <FontAwesomeIcon icon={faCheck} size="2x" />
            <p className={styles.itemText}>
              To advocate for more diversity and opportunity in the tech
              industry
            </p>
          </li>

          <li className={styles.listItem}>
            <FontAwesomeIcon icon={faCheck} size="2x" />
            <p className={styles.itemText}>
              To enable our mission to reach more members of the military
              community
            </p>
          </li>

          <li className={styles.listItem}>
            <FontAwesomeIcon icon={faCheck} size="2x" />
            <p className={styles.itemText}>
              Scholarship funding for comp sci education, industry certification
            </p>
          </li>

          <li className={styles.listItem}>
            <FontAwesomeIcon icon={faCheck} size="2x" />
            <p className={styles.itemText}>
              Sending veterans to conferences and major tech industry events
            </p>
          </li>

          <li className={styles.listItem}>
            <FontAwesomeIcon icon={faCheck} size="2x" />
            <p className={styles.itemText}>
              Building more tech communities near military installations
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.button}>
      <LinkButton
        text="Donate"
        theme="red"
        link="https://opencollective.com/operationcode#support"
        isExternal
      />
    </div>
  </Section>
);

export default WhyGive;
