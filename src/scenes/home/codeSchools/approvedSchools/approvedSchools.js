import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import styles from './approvedSchools.css';

// const endpoint = 'https://api.operationcode.org/api/v1/code_schools.json';
const endpoint = 'https://raw.githubusercontent.com/OperationCode/operationcode_frontend/code-schools-cooper-kyle/src/scenes/home/codeSchools/schools.json';
const gettingSchoolData = fetch(endpoint)
  .then(response => response.json());

class ApprovedSchools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vaSchools: null
    };

    gettingSchoolData.then(data =>
      this.setState({ vaSchools: data })
    );
  }

  render() {
    const vaSchools = !this.state.vaSchools ? null : this.state.vaSchools
      .filter(school => school.va_accepted)
      .map(school =>
        (
          <SchoolCard
            key={school.name}
            alt={school.name}
            schoolName={school.name}
            link={school.url}
            schoolAddress={school.locations[0].address1}
            schoolCity={school.locations[0].city}
            schoolState={school.locations[0].state}
            logo={school.logo}
            GI={school.va_accepted ? 'Yes' : 'No'}
            fullTime={school.full_time ? 'Full-Time' : 'Flexible'}
            hardware={school.hardware_included ? 'Yes' : 'No'}
          />
        )
      );

    return (
      <Section
        title="VA-Approved Schools"
        headingLines={false}
        margin
      >
        <div className={styles.vaSchools}>
          {vaSchools}
        </div>

        <div className={styles.noteForSchoolReps}>
          <p>
            Are you a code school seeking state and/or VA approval?
            <br />
            <a href="mailto:staff@operationcode.org">
              Request technical assistance today.
            </a>
          </p>
        </div>
      </Section>
    );
  }
}

export default ApprovedSchools;
