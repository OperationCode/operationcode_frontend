import React from 'react';
import Section from 'shared/components/section/section';
import LinkButton from 'shared/components/linkButton/linkButton';
import apexLogo from 'images/partnerLogos/apex_systems_logo.png';
import githubLogo from 'images/partnerLogos/github_logo.png';
import dockerLogo from 'images/partnerLogos/docker_logo.png';
import oracleLogo from 'images/partnerLogos/oracle_logo.png';
import oreillyLogo from 'images/partnerLogos/oreilly_logo.png';
import hackerrankLogo from 'images/partnerLogos/hackerrank_logo.png';
import styles from './partners.css';

const Partners = () => (
  <Section
    title="Partners"
    theme="gray"
  >
    <div className={styles.partners}>
      <p>
        Operation Code and our all-volunteer team offers our
        programs and services through the generous support
        of our partners. Their support, made via either
        financial contributions or in-kind donations,
        demonstrate their commitment to veterans,
        servicemembers, and military spouses.
        We are deeply grateful to the leadership of the
        organizations that are supporting our mission.
      </p>
    </div>

    <div className={styles.partnerLogos}>
      <div>
        <a href="https://apexsystems.com/" target="_blank" rel="noopener noreferrer">
          <img src={apexLogo} alt="Apex Systems" />
        </a>
      </div>
      <div>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" />
        </a>
      </div>
      <div>
        <a href="https://docker.com/" target="_blank" rel="noopener noreferrer">
          <img src={dockerLogo} alt="Docker" />
        </a>
      </div>
      <div>
        <a href="https://oreilly.com/" target="_blank" rel="noopener noreferrer">
          <img src={oreillyLogo} alt="O&apos;Reilly Media" />
        </a>
      </div>
      <div>
        <a href="https://hackerrank.com/" target="_blank" rel="noopener noreferrer">
          <img src={hackerrankLogo} alt="HackerRank" />
        </a>
      </div>
      <div>
        <a href="https://oracle.com/" target="_blank" rel="noopener noreferrer">
          <img src={oracleLogo} alt="Oracle" />
        </a>
      </div>
    </div>

    <div className={styles.partners}>
      <p className={styles.contactUs}>
        We are always looking for organizations who are interested in working with us!
      </p>
      <LinkButton
        text="Contact Us"
        link="mailto:partnerships@operationcode.org"
        isExternal
      />
    </div>
  </Section>
);

export default Partners;
