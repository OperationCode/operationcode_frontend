import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'shared/components/section/section';
import Select from 'react-select';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import styles from './stateSortedSchools.css';
import stateOptions from './stateOptions';

class StateSortedSchools extends Component {
  state = {
    campusesByState: null,
    selectedStates: null,
    noResults: false
  };

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

    const matchingCampuses = this.props.schools.reduce((acc, campus) => {
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
    if (selectedStates.length > 0) {
      const campusesByState = this.getCampusesByState(selectedStates);
      this.setState({
        campusesByState: this.sortCampuses(campusesByState),
        selectedStates,
        noResults: campusesByState.length === 0
      });
    } else {
      // Clear results when search field is blank
      this.setState({ campusesByState: null, selectedStates: null, noResults: false });
    }
  };

  render() {
    const stateSchools = !this.state.campusesByState
      ? null
      : this.state.campusesByState.map(campus => (
        <SchoolCard
          key={`${Math.random()} + ${campus.name} + ${campus.address}`}
          alt={campus.name}
          schoolName={campus.name}
          link={campus.url}
          schoolAddress={campus.address1}
          schoolCity={campus.city}
          schoolState={campus.state}
          logo={campus.logo}
          GI={campus.va_accepted ? 'Yes' : 'No'}
          fullTime={campus.full_time ? 'Full-Time' : 'Flexible'}
          hardware={campus.hardware_included ? 'Yes' : 'No'}
        />
      ));

    return (
      <Section id="schoolsByState" title="Schools by State" headingLines={false} margin>
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
          {this.state.noResults ? <p>No results found.</p> : stateSchools}
        </div>
      </Section>
    );
  }
}

StateSortedSchools.propTypes = {
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
    url: PropTypes.string
  })).isRequired
};

export default StateSortedSchools;
