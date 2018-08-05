import React from 'react';
import civicX from '../../../../images/civic-x.png';
import styles from './civicXBadge.css';

function CivicXBadge() {
  return (
    <div>
      <a href="http://cvcx.org/veterans-solutions-lab/">
        <img
          alt="Operation Code is a graduate of the CivicX Accelerator."
          className={styles.civic}
          src={civicX}
        />
      </a>
    </div>
  );
}

export default CivicXBadge;
