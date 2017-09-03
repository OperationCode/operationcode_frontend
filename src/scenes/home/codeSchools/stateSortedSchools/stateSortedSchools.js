import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'shared/components/section/section';
import Select from 'react-select';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import styles from './stateSortedSchools.css';
import states from './states';

class StateSortedSchools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolsByState: null,
      selectedState: null
    };
  }

  handleSelectChange = (option) => {
    if (option) {
      // Prevent query with just one character in search field
      this.setState({ schoolsByState: this.searchState(option.value) });
      this.setState({ selectedState: option });
    } else {
      // Clear results when search field is 1 char or blank
      this.setState({ schoolsByState: null });
      this.setState({ selectedState: null });
    }
  }

  searchState = (state) => {
    const matchingSchools = [];

    function matchesState(campus) {
      try {
        return campus.state === state;
      } catch (e) {
        if (e instanceof TypeError) {
          /* eslint-disable no-console */
          console.log('Error: Typo in code_schools.yaml on the back-end under the `state` field');
          /* eslint-disable no-console */
          return false;
        }
        // Unknown error issue
        return e;
      }
    }

    this.props.schools.forEach((school) => {
      school.locations.filter(location => matchesState(location)).forEach((campus) => {
        matchingSchools.push({
          name: school.name,
          url: school.url,
          address: campus.address1,
          city: campus.city,
          state: campus.state,
          zip: campus.zip,
          logo: school.logo,
          va_accepted: campus.va_accepted,
          full_time: school.full_time,
          hardware_included: school.hardware_included
        });
      });
    });


    return matchingSchools;
  };

  render() {
    const stateSchools = !this.state.schoolsByState ? null : this.state.schoolsByState
      .map(school =>
        (
          <SchoolCard
            key={`${Math.random()} + ${school.name} + ${school.address}`}
            alt={school.name}
            schoolName={school.name}
            link={school.url}
            schoolAddress={school.address}
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
        id="schoolsByState"
        title="Schools by State"
        theme="white"
        headingLines={false}
        margin
      >

        <Select
          className={styles.select}
          placeholder="Start typing a state..."
          options={states}
          value={this.state.selectedState}
          onChange={this.handleSelectChange}
        />

        <div className={styles.stateSchools}>
          {stateSchools}
        </div>
      </Section>
    );
  }
}

StateSortedSchools.propTypes = {
  schools: PropTypes.array.isRequired // eslint-disable-line
};

export default StateSortedSchools;
