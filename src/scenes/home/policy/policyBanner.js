import React from 'react';
import styles from './policyBanner.css';

const policyPageLink = '/policy';

// replace commented out bannertext below with new text if this component is needed for reuse in the future

const PolicyBanner = () => (
  <div className={styles.banner}>
    <h4 className={styles.bannerText}>
      {/* On April 19, 2018, we&apos;re heading to Washington, D.C. to modernize the G.I. Bill.{' '} */}
      <a href={policyPageLink} className={styles.bannerLink}>
        Click here for details!
      </a>
    </h4>
  </div>
);

export default PolicyBanner;

