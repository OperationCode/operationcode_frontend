import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import flagIcon from 'images/icons/Flag-Icon.svg';
import roadIcon from 'images/icons/Road-Icon.svg';
import suitcaseIcon from 'images/icons/Suitcase-Icon.svg';
import sharedIcon from 'images/icons/Shared-Icon.svg';
import styles from './membership.css';

class Membership extends Component {
  render() {
    return (

      <Section title="Membership" theme="white">
        <div className={styles.intro}>
          <p>
            Joining Operation Code is easy - and free! Once you&#39;re signed up, you can join us on
            Slack and start enjoying the benefits of your membership:
          </p>
        </div>
        <br />
        <ul className={styles.list}>
          <li>
            <img className={styles.icon} src={sharedIcon} alt="" />
            <span>
              Join veterans, transitioning servicemembers,
              and military spouses. Learn and grow with our open community.
            </span>
          </li>
          <li>
            <img className={styles.icon} src={flagIcon} alt="" />
            <span>
              Access our mentorship and coding channels and jumpstart
              your journey. Learn from senior software engineers with years of experience.
             </span>
          </li>
          <li>
            <img className={styles.icon} src={roadIcon} alt="" />
            <span>
              Learn about opportunities to attend software development conferences
              and coding bootcamps, as part of the Operation Code scholarship program.
             </span>
          </li>
          <li>
            <img className={styles.icon} src={suitcaseIcon} alt="" />
            <span>
              Find job opportunities posted from around the country.
              Receive feedback on your portfolio, side project, or resume.
             </span>
          </li>
        </ul>
      </Section>
    );
  }
}

export default Membership;
