import React from 'react';
import commonUrl from 'shared/constants/commonLinks';
import LinkButton from 'shared/components/linkButton/linkButton';
import styles from './opCodeCon.css';

const OpCodeCon = () => (
  <div className={styles.hero}>
    <div className={styles.heading}>
      <h3>Join us for our inaugural Operation Code Convention!</h3>
      <h3>Contact us for sponsorship information or make a donation!</h3>
      <LinkButton
        role="button"
        text="Sponsor"
        theme="red"
        link="mailto:elish@operationcode.org"
        isExternal
      />

      <LinkButton
        role="button" text="Donate" theme="red" link={commonUrl.donateLink}
        isExternal
      />
      {/* <p>Check back for more information.</p> */}
    </div>
  </div>
);

export default OpCodeCon;
