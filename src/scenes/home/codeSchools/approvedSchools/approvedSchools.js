import _ from 'lodash';
import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import styles from './approvedSchools.css';

class ApprovedSchools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vaSchools: null
    };

    fetch('https://api.operationcode.org/api/v1/code_schools.json')
    .then(response => response.json()).then(data =>
      this.setState({ vaSchools: this.getApprovedSchools(data) })
    );
  }

  getApprovedSchools = (schools) => {
    let approvedSchools = [];
    schools.forEach((school) => {
      const locations = school.locations.filter(location => location.va_accepted === true);
      if (locations.length > 0) {
        approvedSchools = approvedSchools.concat(locations.map(location =>
          Object.assign({}, _.omit(school, ['locations']), location)));
      }
    });

    return approvedSchools;
  }

  render() {
    console.log(JSON.stringify(this.state.vaSchools, null, 2));
    const vaSchools = !this.state.vaSchools ? null : this.state.vaSchools
      .map(school =>
        (
          <SchoolCard
            key={school.address}
            alt={school.name}
            schoolName={school.name}
            link={school.url}
            schoolAddress={school.address1}
            schoolCity={school.city}
            schoolState={school.state}
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
