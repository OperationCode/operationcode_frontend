import React, { Component } from 'react';
import axios from 'axios';
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
      schools: null,
      errorResponse: false
    };
  }

  componentDidMount() {
    const temporaryAddons = [
      {
        name: 'Skill Distillery',
        email: 'n/a',
        url: 'https://skilldistillery.com/',
        full_time: true,
        hardware_included: false,
        has_online: false,
        online_only: false,
        logo:
          'https://raw.githubusercontent.com/OperationCode/operationcode_frontend/master/src/images/codeSchoolLogos/skill_distillery.png',
        locations: [
          {
            address1: '7400 East Orchard Road',
            address2: null,
            city: 'Greenwood Village',
            state: 'CO',
            va_accepted: true,
            zip: 80111
          }
        ]
      },
      {
        name: 'devCodeCamp',
        email: 'hello@devcodecamp.com',
        url: 'https://devcodecamp.com/',
        full_time: true,
        hardware_included: false,
        has_online: false,
        online_only: false,
        logo:
          'https://raw.githubusercontent.com/OperationCode/operationcode_frontend/master/src/images/codeSchoolLogos/devcodecamp.png',
        locations: [
          {
            address1: '313 North Plankinton Avenue',
            address2: null,
            city: 'Milwaukee',
            state: 'WI',
            va_accepted: true,
            zip: 53203
          }
        ]
      }
    ];

    axios
      .get('https://api.operationcode.org/api/v1/code_schools.json')
      .then(response =>
        this.setState({ schools: [...response.data, ...temporaryAddons] }))
      .catch(() => this.setState({ errorResponse: true }));
  }

  render() {
    return (
      <div>
        <Section title="Code Schools" theme="white">
          <p>
            Code schools are accelerated learning programs that will prepare you
            for a career in software development. <br />Each school listed below
            ranges in length, vary in tuition costs, and in programming
            languages. <br />Desirable from an employer&apos;s standpoint, code
            schools are founded by software developers who saw a need <br />for
            more programmers and aspired to teach the next generation.
            <br />
            <br />
            We encourage you to check out the schools below, do your research,
            and ask fellow techies in our Slack Community.
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
        {this.state.errorResponse && (
          <p className={styles.codeschoolError}>
            Whoops! Something went wrong… please check back later.
            <br />
          </p>
        )}
        {this.state.schools && <ApprovedSchools schools={this.state.schools} />}
        <PartnerSchools schools={this.state.schools} />
        {this.state.schools && <OnlineSchools schools={this.state.schools} />}
        {this.state.schools && (
          <StateSortedSchools schools={this.state.schools} />
        )}
      </div>
    );
  }
}

export default CodeSchools;
