import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'shared/components/section/section';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import styles from './approvedSchools.css';

class ApprovedSchools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vaSchools: null
    };
  }

  componentWillMount() {
    this.setState({ vaSchools: this.loadSchools() });
  }

  loadSchools() {
    let approvedSchools = [];
    this.props.schools.forEach((school) => {
      const locations = school.locations.filter(location => location.va_accepted === true);
      if (locations.length > 0) {
        approvedSchools = approvedSchools.concat(locations.map(location =>
          Object.assign({}, _.omit(school, ['locations']), location)));
      }
    });

    return approvedSchools;
  }

  render() {
    const vaSchools = this.state.vaSchools
      .map(school =>
        (
          <SchoolCard
            key={`${Math.random()} + ${school.name} + ${school.address}`}
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
        ));

    return (
      <Section
        id="approvedSchools"
        title="VA-Approved Schools"
        headingLines={false}
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

ApprovedSchools.propTypes = {
  schools: PropTypes.array.isRequired // eslint-disable-line
};

export default ApprovedSchools;
