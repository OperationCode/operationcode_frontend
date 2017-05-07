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
        <h3 className={styles.heading}>Joining Operation Code is easy and free!  Once
          you&#39;re signed up you can join us on Slack and start enjoying the
           benefits of your membership:
        </h3>

        <ul className={styles.list}>
          <li>
            <img className={styles.icon} src={sharedIcon} alt="" />
            <span>
              Join an open community of veterans,
            non-veterans, developers, and learners who you can engage and grow with
            </span>
          </li>
          <li>
            <img className={styles.icon} src={flagIcon} alt="" />
            <span>
              Access our mentors and coding channels to jumpstart
             your journey and start asking questions
             </span>
          </li>
          <li>
            <img className={styles.icon} src={roadIcon} alt="" />
            <span>
            Get notified on oppertunities to attend software develpment
             conferences as part of the Operation Code scholarship program
             </span>
          </li>
          <li>
            <img className={styles.icon} src={suitcaseIcon} alt="" />
            <span>
            Learn about job oppertunities posted from around the country to get
             feedback on your portfolio, side project, or resume
             </span>
          </li>
        </ul>
      </Section>
    );
  }
}

export default Membership;
