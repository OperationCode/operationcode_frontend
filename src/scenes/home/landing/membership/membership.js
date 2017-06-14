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
              Join our open community. Learn and grow with <b>fellow veterans,
              servicemembers</b>, and <b>military spouses</b>. Work with your peers to
              build <b>open source projects</b>.
            </span>
          </li>
          <li>
            <img className={styles.icon} src={roadIcon} alt="" />
            <span>
              Find new opportunities in the tech industry through our
              <b> scholarship program.</b> Attend <b>software development conferences</b>
              and <b>coding bootcamps</b>, and build the skills of the future.
             </span>
          </li>
          <li>
            <img className={styles.icon} src={flagIcon} alt="" />
            <span>
              Jumpstart your journey. Access our <b>mentorship</b> and coding
              channels, and learn from <b>senior software engineers</b> at
              <b> top-tier tech companies</b> with years of experience.
             </span>
          </li>
          <li>
            <img className={styles.icon} src={suitcaseIcon} alt="" />
            <span>
              Launch your career in the tech industry on our <b>job board</b>.
              Find <b>local and remote jobs</b> all across the country.
              <b>  Get expert feedback</b> on your portfolio, side project, or resume.
             </span>
          </li>
        </ul>
      </Section>
    );
  }
}

export default Membership;
