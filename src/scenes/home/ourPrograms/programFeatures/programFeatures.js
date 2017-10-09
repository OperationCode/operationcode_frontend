import React from 'react';
import { FaCheck, FaBan } from 'react-icons/lib/fa';
import styles from './programFeatures.css';

const ProgramFeatures = () => (
  <div>
    <div className={styles.flexContainer}>
      <div className={styles.featureHeading}>
        <FaCheck size={36} style={styles.iconStyle} />
        <p>What it is</p>
      </div>
      <div className={styles.featureDescription}>
        <ul>
          <li>After 30 mins call or video chat to determine your needs, build a rapport and potentionally create a plan to work together for a period of time neccessary to achieve your goal.</li>
          <li>A phenomenal growth to aid in your growth as a software developer.</li>
        </ul>
      </div>
    </div>
    <div className={styles.flexContainer}>
      <div className={styles.featureHeading}>
        <FaBan size={36} />
        <p>What it isn&apos;t</p>
      </div>
      <div className={styles.featureDescription}>
        <ul>
          <li>A live ask Jeeves alternative - mentor are happy to help you, but expect you to also help yourself through the use of google and other online resources.</li>
          <li>A gurantee that someone will work with you long term. All our mentors are are volunteers and take on menteer based on scheduled availability.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default ProgramFeatures;
