import React from 'react';
import commonUrl from 'shared/constants/commonLinks';
import LinkButton from 'shared/components/linkButton/linkButton';
import styles from './opCodeCon.css';

const OpCodeCon = () => (
  <div className={styles.hero}>
    <div className={styles.heading}>
      <h1>OpCodeCon</h1>
      <h3>Join us for our inaugural Operation Code Convention!</h3>
      <p>September 19th-20th, 2018</p>
      <p>Raleigh Convention Center, Raleigh, NC</p>
      <p>
        <a href="mailto:eilish@operationcode.org" className={styles.textLink}>
          Contact us
        </a>{' '}
        for sponsorship information.
      </p>
      <LinkButton
        role="button"
        text="Donate"
        theme="red"
        link={commonUrl.donateLink}
        isExternal
      />
      {/* <p>Check back for more information.</p> */}
    </div>
  </div>
);

export default OpCodeCon;
