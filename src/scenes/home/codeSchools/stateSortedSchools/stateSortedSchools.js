import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'shared/components/section/section';
import Select from 'react-select';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import styles from './stateSortedSchools.css';
import stateOptions from './stateOptions';

class StateSortedSchools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campusesByState: null,
      selectedStates: null
    };
  }

  getCampusesByState = (selectedStates) => {
    function matchesCampus(state, campus) {
      try {
        return state.value === campus.state;
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

    const campuses = this.props.schools.reduce((acc, school) => {
      school.locations.forEach((location) => {
        acc.push({
          name: school.name,
          url: school.url,
          address: location.address1,
          city: location.city,
          state: location.state,
          zip: location.zip,
          logo: school.logo,
          va_accepted: location.va_accepted,
          full_time: school.full_time,
          hardware_included: school.hardware_included
        });
      });
      return acc;
    }, []);

    const matchingCampuses = campuses.reduce((acc, campus) => {
      const matchingState = selectedStates.some(state => matchesCampus(state, campus));
      if (matchingState) {
        acc.push(campus);
      }
      return acc;
    }, []);

    return matchingCampuses;
  };

  sortCampuses = campuses => campuses.sort((a, b) => a.state.localeCompare(b.state));

  handleSelectChange = (selectedStates) => {
    if (selectedStates) {
      const campusesByState = this.getCampusesByState(selectedStates);
      const sortedCampusesByState = this.sortCampuses(campusesByState);
      this.setState({ campusesByState: sortedCampusesByState });
      this.setState({ selectedStates });
    } else {
      // Clear results when search field is blank
      this.setState({ campusesByState: null });
      this.setState({ selectedStates: null });
    }
  };

  render() {
    const stateSchools = !this.state.campusesByState ? null : this.state.campusesByState
      .map(campus =>
        (
          <SchoolCard
            key={`${Math.random()} + ${campus.name} + ${campus.address}`}
            alt={campus.name}
            schoolName={campus.name}
            link={campus.url}
            schoolAddress={campus.address}
            schoolCity={campus.city}
            schoolState={campus.state}
            logo={campus.logo}
            GI={campus.va_accepted ? 'Yes' : 'No'}
            fullTime={campus.full_time ? 'Full-Time' : 'Flexible'}
            hardware={campus.hardware_included ? 'Yes' : 'No'}
          />
        ));

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
          options={stateOptions}
          value={this.state.selectedStates}
          autoBlur
          autosize
          multi
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
