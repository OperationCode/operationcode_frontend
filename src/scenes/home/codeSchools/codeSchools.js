import omit from 'lodash/omit';
import React, { Component } from 'react';
import axios from 'axios';
import LinkButton from 'shared/components/linkButton/linkButton';
import Section from 'shared/components/section/section';
import ApprovedSchools from './approvedSchools/approvedSchools';
import PartnerSchools from './partnerSchools/partnerSchools';
import OnlineSchools from './onlineSchools/onlineSchools';
import MoocSchools from './moocSchools/moocSchools';
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
    axios
      .get('https://api.operationcode.org/api/v1/code_schools.json')
      .then((response) => {
        const schools = response.data.reduce((acc, school) => {
          school.locations.forEach((location) => {
            acc.push(Object.assign({}, omit(school, ['locations']), location));
          });
          return acc;
        }, []);
        this.setState({ schools });
      })
      .catch(() => this.setState({ errorResponse: true }));
  }

  render() {
    return (
      <div>
        <Section title="Code Schools" theme="white">
          <p>
            Code schools are accelerated learning programs that will prepare you for a career in
            software development. <br />Each school listed below ranges in length, vary in tuition
            costs, and in programming languages. <br />Desirable from an employer&apos;s standpoint,
            code schools are founded by software developers who saw a need <br />for more
            programmers and aspired to teach the next generation.
            <br />
            <br />
            We encourage you to check out the schools below, do your research, and ask fellow
            techies in our Slack Community.
          </p>

          <div className={styles.filterButtonDiv}>
            <LinkButton link="approvedSchools" text="VA-Approved Schools" theme="blue" scrollLink />
            <LinkButton link="partnerSchools" text="Partnered Schools" theme="blue" scrollLink />
            <LinkButton link="onlineSchools" text="Online Schools" theme="blue" scrollLink />
            <LinkButton link="schoolsByState" text="Search by State" theme="blue" scrollLink />
          </div>
        </Section>
        {this.state.errorResponse && (
          <p className={styles.codeschoolError}>
            Whoops! Something went wrong… please check back later.
            <br />
          </p>
        )}
        {this.state.schools && (
          <ApprovedSchools
            schools={this.state.schools.filter(school => school.va_accepted === true)}
          />
        )}
        <PartnerSchools />
        {this.state.schools && (
          <OnlineSchools
            schools={this.state.schools.filter(school => school.has_online === true)}
          />
        )}
        <MoocSchools />
        {this.state.schools && <StateSortedSchools schools={this.state.schools} />}
      </div>
    );
  }
}

export default CodeSchools;
