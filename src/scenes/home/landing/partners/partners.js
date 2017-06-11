import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import apexLogo from 'images/partnerLogos/apex_systems_logo.jpg';
import githubLogo from 'images/partnerLogos/github_logo.jpg';
import dockerLogo from 'images/partnerLogos/docker_logo.jpg';
import oreillyLogo from 'images/partnerLogos/oreilly_logo.jpg';
import hackerrankLogo from 'images/partnerLogos/hackerrank_logo.jpg';
import styles from './partners.css';


class Partners extends Component {
  render() {
    return (
      <Section
        title="Partners"
        theme="white"
        margin
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
            <a href="https://apexsystems.com/">
              <img src={apexLogo} alt="Apex Systems" width="200" />
            </a>
          </div>
          <div>
            <a href="https://github.com/">
              <img src={githubLogo} alt="GitHub" width="200" />
            </a>
          </div>
          <div>
            <a href="https://docker.com/">
              <img src={dockerLogo} alt="Docker" width="200" />
            </a>
          </div>
          <div>
            <a href="https://oreilly.com/">
              <img src={oreillyLogo} alt="O&apos;Reilly Media" width="200" />
            </a>
          </div>
          <div>
            <a href="https://hackerrank.com/">
              <img src={hackerrankLogo} alt="HackerRank" width="200" />
            </a>
          </div>
        </div>
      </Section>
    );
  }
}

export default Partners;
