import _ from 'lodash';
import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import styles from './approvedSchools.css';

const gettingSchoolData = fetch('https://api.operationcode.org/api/v1/code_schools.json')
  .then(response => response.json());

class ApprovedSchools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vaSchools: null
    };
  }

  componentWillMount() {
    gettingSchoolData.then((data) => {
      this.setState({ vaSchools: this.getApprovedSchools(data) });
    });
  }

  getApprovedSchools = (schools) => {
    const approvedSchools = [];
    schools.forEach((school) => {
      const locations = school.locations.filter(location => location.va_accepted === true);
      if (locations.length > 0) {
        approvedSchools.push(locations.map(location =>
          Object.assign({}, _.omit(school, ['locations']), location)));
      }
    });

    return approvedSchools;
  }

  render() {
    const vaSchools = !this.state.vaSchools ? null : this.state.vaSchools
      .filter(school => school.locations[0].va_accepted)
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
            GI={school.locations[0].va_accepted ? 'Yes' : 'No'}
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
