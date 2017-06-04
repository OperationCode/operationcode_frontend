import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkButton from 'shared/components/linkButton/linkButton';
import Section from 'shared/components/section/section';
import ApprovedSchools from './approvedSchools/approvedSchools';
import PartnerSchools from './partnerSchools/partnerSchools';
import StateSortedSchools from './stateSortedSchools/stateSortedSchools';
// import schools from './schools.json';
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
        <p className={styles.paragraph}> Code schools are accelerated learning programs that will prepare you for a career in software development. <br /> Each school listed below ranges in length, vary in tuition costs, and in programming languages. Desirable from an employer&#39;s standpoint, <br /> code schools are founded by software developers who saw a need for more programmers and aspired to teach the next generation.
        </p>

          <div className={styles.filterButtonDiv}>
            <LinkButton
              text="Code Schools with VA Approval"
              theme="blue"
              link="#schoolsByApproval"
            />
            <LinkButton
              text="Code Schools with Scholarships"
              theme="blue"
              link="#schoolsByScholarship"
            />
            <LinkButton
              text="Code Schools by State"
              theme="blue"
              link="#schoolsByState"
            />
          </div>
        </Section>


        <ApprovedSchools />
        <PartnerSchools />
        <StateSortedSchools />
      </div>
    );
  }
}

// TODO: Current scroll anchors do not work with file structure - Fix 'em

export default CodeSchools;
