import React from 'react';
import LinkButton from 'shared/components/linkButton/linkButton';
import commonUrl from 'shared/constants/commonLinks';
import styles from './hero.css';

const hero = () => (
  <div className={styles.heroContainer}>
    <div className={styles.pageHeading}>
      <h1>Deploy the future</h1>
      <p>
        The largest community dedicated to helping military veterans and families launch software
        development careers.
      </p>
      <div className={styles.btnContainer}>
        <LinkButton link="/join" text="JOIN US" theme="red-small" />
        <LinkButton
          isExternal
          link={commonUrl.donateLink}
          text="DONATE"
          theme="bordered-dark-blue-small"
        />
      </div>
    </div>

    <div className={styles.embedContainer}>
      <div className={styles.embedVideo}>
        <iframe
          title="The New Developer - Operation Code - GitHub Universe 2016"
          src="https://www.youtube.com/embed/xN7yMoe38xc?modestbranding=1&start=133&showinfo=0"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <p>Executive Director, David Molina, speaks in San Francisco about Operation Code.</p>
    </div>
  </div>
);

export default hero;
