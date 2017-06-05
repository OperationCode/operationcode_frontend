import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkButton from 'shared/components/linkButton/linkButton';
import Section from 'shared/components/section/section';
import ApprovedSchools from './approvedSchools/approvedSchools';
import PartnerSchools from './partnerSchools/partnerSchools';
import OnlineSchools from './onlineSchools/onlineSchools';
import StateSortedSchools from './stateSortedSchools/stateSortedSchools';
import styles from './codeSchools.css';

class CodeSchools extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schools: {}
    };
  }

  render() {
    return (
      <div>
        <Section
          title="Code Schools"
          theme="white"
          margin
        >
          <p>
            Code schools prepare aspiring programmers for new careers in software development.
            <br />
            <br />
            Code schools are accelerated learning programs that will prepare you for a career in
            software development. Each school listed below ranges in length, vary in tuition costs,
            and in programming languages. Desirable from an employer&apos;s standpoint, code schools
            are founded by software developers who saw a need for more programmers and aspired to
            teach the next generation.
            <br />
            <br />
            We encourage you to check out the schools below, do your research, and ask fellow
            software developers in <Link to="https://operation-code.slack.com/">Slack</Link>.
          </p>

          <div className={styles.filterButtonDiv}>
            <LinkButton
              text="Code Schools with VA Approval"
              theme="blue"
              link="#schoolsByApproval"
            />
            <LinkButton
              text="Partner Schools with Scholarships"
              theme="blue"
              link="#schoolsByScholarship"
            />
            <LinkButton
              text="Online Schools"
              theme="blue"
              link="#onlineSchools"
            />
            <LinkButton
              text="Search by State"
              theme="blue"
              link="#schoolsByState"
            />
          </div>
        </Section>

        <ApprovedSchools />
        <PartnerSchools />
        <OnlineSchools />
        <StateSortedSchools />
      </div>
    );
  }
}

export default CodeSchools;
