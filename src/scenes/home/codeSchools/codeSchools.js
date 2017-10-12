import React, { Component } from 'react';
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
      schools: null
    };
  }

  componentWillMount() {
    return fetch('https://api.operationcode.org/api/v1/code_schools.json').then(response =>
      response.json().then((data) => {
        this.setState({ schools: data });
      }));
  }

  render() {
    return (
      <div>
        <Section
          title="Code Schools"
          theme="white"
        >
          <p>
            Code schools are accelerated learning programs that will prepare you for a career in
            software development. <br />Each school listed below ranges in length, vary in tuition costs,
            and in programming languages. <br />Desirable from an employer&apos;s standpoint, code schools
            are founded by software developers who saw a need <br />for more programmers and aspired to
            teach the next generation.
            <br />
            <br />
            We encourage you to check out the schools below, do your research, and ask fellow
            software developers in Slack or our <a href="https://community.operationcode.org/" target="_blank" rel="noopener noreferrer">forums</a>.
          </p>

          <div className={styles.filterButtonDiv}>
            <LinkButton
              link="approvedSchools"
              text="VA-Approved Schools"
              theme="blue"
              scrollLink
            />
            <LinkButton
              link="partnerSchools"
              text="Partnered Schools"
              theme="blue"
              scrollLink
            />
            <LinkButton
              link="onlineSchools"
              text="Online Schools"
              theme="blue"
              scrollLink
            />
            <LinkButton
              link="schoolsByState"
              text="Search by State"
              theme="blue"
              scrollLink
            />
          </div>
        </Section>

        {this.state.schools && <ApprovedSchools schools={this.state.schools} />}
        {this.state.schools && <PartnerSchools schools={this.state.schools} />}
        {this.state.schools && <OnlineSchools schools={this.state.schools} />}
        {this.state.schools && <StateSortedSchools schools={this.state.schools} />}
      </div>
    );
  }
}

export default CodeSchools;
