import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'shared/components/section/section';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import styles from './onlineSchools.css';

class OnlineSchools extends Component {
  render() {
    const eSchools = this.props.schools.map(school => (
      <SchoolCard
        key={`${Math.random()} + ${school.name} + ${school.address}`}
        alt={school.name}
        schoolName={school.name}
        link={school.url}
        schoolAddress={school.online_only ? 'Online Only' : 'Online and in'}
        schoolCity={school.city}
        schoolState={school.state}
        logo={school.logo}
        GI={school.va_accepted ? 'Yes' : 'No'}
        fullTime={school.full_time ? 'Full-Time' : 'Flexible'}
        hardware={school.hardware_included ? 'Yes' : 'No'}
      />
    ));
    return (
      <div>
        <Section id="onlineSchools" title="Online Schools" headingLines={false}>
          <p>
            Many programs offer coding schools in a completely digital fashion. <br />Regardless of
            where you are in the world, you can learn how to code through these programs!
          </p>

          <div className={styles.eSchools}>{eSchools}</div>
        </Section>
      </div>
    );
  }
}

OnlineSchools.propTypes = {
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

export default OnlineSchools;
