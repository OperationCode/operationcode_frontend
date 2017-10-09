import React from 'react';
// import styles from './steps.css';
import TimelineEvent from '../../history/timelineEvent/timelineEvent';
import styles from '../../history/timeline/timeline.css';

const Steps = () => (
  <div className={styles.timeline}>
    <div className={styles.segment}>
      <div className={styles.date}>
        <h3>Step 0</h3>
      </div>

      <div className={styles.vertLine}>
        <div className={styles.line} />
        <div className={styles.bubble} />
      </div>

      <div className={styles.timelineEvent}>
        <TimelineEvent
          title="Identify your Needs"
          content={['The first step to getting a mentor is to decide that you need one. If you have a specific question, perhaps try asking in our Slack or Discussion forums. You can also turn to stackoverflow.com and ofcourse good. If you need something little more involved move on to Step 1.']}
        />
      </div>
    </div>
    <div className={styles.segment}>
      <div className={styles.date}>
        <h3>Step 1</h3>
      </div>

      <div className={styles.vertLine}>
        <div className={styles.line} />
        <div className={styles.bubble} />
      </div>

      <div className={styles.timelineEvent}>
        <TimelineEvent
          title="Request a Mentor"
          content={['Navigate over to your profile in Operation Code and click the Request a Mentor button. You will be asked for a bit of information so we can best pair you up with the right mentor. It can take upto two weeks so please be patient. Once your mentor contacts you, agree upon a time and method for 30 minute meeting.']}
        />
      </div>
    </div>
    <div className={styles.segment}>
      <div className={styles.date}>
        <h3>Step 2</h3>
      </div>

      <div className={styles.vertLine}>
        <div className={styles.line} />
        <div className={styles.bubble} />
      </div>

      <div className={styles.timelineEvent}>
        <TimelineEvent
          title="Your first Meeting"
          content={['Your first meeting will accomplish a few things.', <ol><li>Determine if you and your mentor are good culture fit.</li><li>Outline a problem and determine your action</li></ol>]}
        />
      </div>
    </div>
  </div>
);

export default Steps;
