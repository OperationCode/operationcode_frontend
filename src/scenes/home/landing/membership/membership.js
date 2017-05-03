import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Section from 'shared/components/section/section';
import styles from './membership.css';

class Membership extends Component {
  render() {
    return (

      <Section title="Membership" theme="white">
        <FontAwesome name="flag" className={styles.flag} />
        <h3 className={styles.heading}>Joining Operation Code is easy and free!  Once
          you&#39;re signed up you can join us on Slack and start enjoying the
           benefits of your membership:
        </h3>

        <ul className={styles.list}>
          <li>
            <FontAwesome name="flag-checkered" />
            Join an open community of veterans,
            non-veterans, developers, and learners who you can engage and grow with
          </li>
          <li>
            Access our mentors and coding channels to jumpstart
             your journey and start asking questions
          </li>
          <li>
            Get notified on oppertunities to attend software develpment
             conferences as part of the Operation Code scholarship program
          </li>
          <li>
            Learn about job oppertunities posted from around the country to get
             feedback on your portfolio, side project, or resume
          </li>
        </ul>
      </Section>
    );
  }
}

export default Membership;
