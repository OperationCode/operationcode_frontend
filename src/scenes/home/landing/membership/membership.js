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
            <a href="https://operation-code.slack.com/" target="_blank" rel="noopener noreferrer">Slack</a> or our <a href="https://community.operationcode.org/" target="_blank" rel="noopener noreferrer">forums</a> and start enjoying the benefits of your membership:
          </p>
        </div>
        <br />
        <ul className={styles.list}>
          <li>
            <img className={styles.icon} src={sharedIcon} alt="" />
            <h5>Community</h5>
            <span>
              Join our open community. Learn and grow with fellow veterans,
              servicemembers, and military spouses. Work with your peers to
              build open source projects.
            </span>
          </li>
          <li>
            <img className={styles.icon} src={roadIcon} alt="" />
            <h5>Growth</h5>
            <span>
              Find new opportunities in the tech industry through our
              scholarship program. Attend software development conferences
              and coding bootcamps, and build the skills of the future.
             </span>
          </li>
          <li>
            <img className={styles.icon} src={flagIcon} alt="" />
            <h5>Connections</h5>
            <span>
              Jumpstart your journey. Access our mentorship and coding
              channels, and learn from senior software engineers at
              top-tier tech companies with years of experience.
             </span>
          </li>
          <li>
            <img className={styles.icon} src={suitcaseIcon} alt="" />
            <h5>Careers</h5>
            <span>
              Launch your career in the tech industry on our job board.
              Find local and remote jobs all across the country.
              Get expert feedback on your portfolio, side project, or resume.
             </span>
          </li>
        </ul>
      </Section>
    );
  }
}

export default Membership;
