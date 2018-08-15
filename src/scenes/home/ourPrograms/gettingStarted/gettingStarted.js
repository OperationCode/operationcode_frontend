import React from 'react';
import Section from 'shared/components/section/section';
import TimelineEvent from '../../history/timelineEvent/timelineEvent';
import styles from './gettingStarted.css';

const step1 = (
  <p>
    The first step to getting a mentor is to decide that you need one. If you
    have a specific question, perhaps try asking in our Slack. You can also turn
    to stackoverflow.com. If you need something a little more involved, move on
    to Step 1.
  </p>
);

const step2 = (
  <p>
    Navigate over to your profile in Operation Code and click the &apos;Request a
    Mentor&apos; button. You&apos;ll be asked for a bit of information so we can
    best pair you up with the right mentor. Once your mentor contacts you, agree
    upon a time and method for a 30 minute meeting.
  </p>
);

const step3 = (
  <div>
    <p>Your first meeting will accomplish a few things</p>
    <ol>
      <li>Determine if you and your mentor are good culture fit.</li>
      <li>Outline a problem and determine your action</li>
    </ol>
  </div>
);

const GettingStarted = () => (
  <Section title="Getting Started">
    <div className={styles.timeline}>
      <div className={styles.segment}>
        <div className={styles.stepNumber}>
          <h3>1</h3>
        </div>

        <div className={styles.vertLine}>
          <div className={styles.line} />
          <div className={styles.bubble} />
        </div>

        <div className={styles.timelineEvent}>
          <TimelineEvent title="Identify your Needs" content={step1} />
        </div>
      </div>
      <div className={styles.segment}>
        <div className={styles.stepNumber}>
          <h3>2</h3>
        </div>

        <div className={styles.vertLine}>
          <div className={styles.line} />
          <div className={styles.bubble} />
        </div>

        <div className={styles.timelineEvent}>
          <TimelineEvent title="Request a Mentor" content={step2} />
        </div>
      </div>
      <div className={styles.segment}>
        <div className={styles.stepNumber}>
          <h3>3</h3>
        </div>

        <div className={styles.vertLine}>
          <div className={styles.line} />
          <div className={styles.bubble} />
        </div>

        <div className={styles.timelineEvent}>
          <TimelineEvent title="Your first Meeting" content={step3} />
        </div>
      </div>
    </div>
  </Section>
);

export default GettingStarted;
