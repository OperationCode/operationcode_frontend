import React from 'react';
import LinkButton from 'shared/components/linkButton/linkButton';
import commonUrl from 'shared/constants/commonLinks';
import styles from './hero.css';

const hero = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.heading}>Deploy the Future</h1>
      <p className={styles.description}>
        We&apos;re the largest community dedicated to helping military veterans and families launch
        software development careers.
      </p>
      <div className={styles.btnContainer}>
        <LinkButton link="/join" text="Join Us" theme="red-small" />
        <LinkButton isExternal link={commonUrl.donateLink} text="Donate" theme="blue-small" />
      </div>
    </header>

    <div className={styles.embedContainer}>
      <div className={styles.embedVideo}>
        <iframe
          title="The New Developer - Operation Code - GitHub Universe 2016"
          src="https://www.youtube.com/embed/xN7yMoe38xc?rel=0&showinfo=0&modestbranding=0&start=78&end=275"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <p className={styles.embedCaption}>
        Executive Director, David Molina, speaks in San Francisco about Operation Code.
      </p>
    </div>
  </div>
);

export default hero;
