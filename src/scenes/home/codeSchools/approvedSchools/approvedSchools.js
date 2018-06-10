import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'shared/components/section/section';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import styles from './approvedSchools.css';

class ApprovedSchools extends Component {
  render() {
    const vaSchools = this.props.schools.map(school => (
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
      <Section id="approvedSchools" title="VA-Approved Schools" headingLines={false}>
        <div className={styles.vaSchools}>{vaSchools}</div>

        <div className={styles.noteForSchoolReps}>
          <p>
            Are you a code school seeking state and/or VA approval?
            <br />
            <a href="mailto:staff@operationcode.org">Request technical assistance today.</a>
          </p>
        </div>
      </Section>
    );
  }
}

ApprovedSchools.propTypes = {
  schools: PropTypes.arrayOf(PropTypes.shape({
    created_at: PropTypes.string,
    full_time: PropTypes.bool,
    hardware_included: PropTypes.bool,
    has_online: PropTypes.bool,
    id: PropTypes.number,
    logo: PropTypes.string,
    name: PropTypes.string,
    notes: PropTypes.string,
    online_only: PropTypes.bool,
    updated_at: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

export default ApprovedSchools;
