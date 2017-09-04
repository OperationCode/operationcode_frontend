import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'shared/components/section/section';
import Select from 'react-select';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import styles from './stateSortedSchools.css';
import stateChoices from './states';

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
        acc.push(location);
      });
      return acc;
    }, []);

    const matchingCampuses = campuses.reduce((acc, campus) => {
      const matchingState = selectedStates.some(state => matchesCampus(state, campus));
      if (matchingState) {
        acc.push({
          name: campus.name,
          url: campus.url,
          address: campus.address1,
          city: campus.city,
          state: campus.state,
          zip: campus.zip,
          logo: campus.logo,
          va_accepted: campus.va_accepted,
          full_time: campus.full_time,
          hardware_included: campus.hardware_included
        });
      }
      return acc;
    }, []);

    return matchingCampuses;
  };

  handleSelectChange = (selectedStates) => {
    if (selectedStates) {
      // Prevent query with just one character in search field
      this.setState({ campusesByState: this.getCampusesByState(selectedStates) });
      this.setState({ selectedStates });
    } else {
      // Clear results when search field is 1 char or blank
      this.setState({ campusesByState: null });
      this.setState({ selectedStates: null });
    }
  }

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
          options={stateChoices}
          value={this.state.selectedStates}
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
