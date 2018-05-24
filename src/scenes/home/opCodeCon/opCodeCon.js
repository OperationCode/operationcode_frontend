import React from 'react';
import commonUrl from 'shared/constants/commonLinks';
import LinkButton from 'shared/components/linkButton/linkButton';
import styles from './opCodeCon.css';

const OpCodeCon = () => (
  <div className={styles.hero}>
    <div className={styles.heading}>
      <h1>OpCodeCon</h1>
      <h2>Raleigh, NC</h2>
      <h3 className={styles.red}> Sept 19-20</h3>
      <p>Join us for our inaugural Operation Code Convention!</p>
      <p>Get your tickets and book your room here!</p>
      <LinkButton
        role="button"
        text="Tickets"
        theme="blue"
        link="https://secure.lglforms.com/form_engine/s/tzrVCEdOmZXtQmjkAS63AA?t=1526603770"
        isExternal
      />

      <LinkButton
        role="button"
        text="Rooms"
        theme="blue"
        link="https://www.starwoodmeeting.com/events/start.action?id=1805071198&key=23F9CD12"
        isExternal
      />
      <p>Not able to attend but want to help?</p>
      <p>Contact us for sponsorship information or make a donation!</p>
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
    </div>
  </div>
);

export default OpCodeCon;
