import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'shared/components/section/section';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import FormInput from 'shared/components/form/formInput/formInput';
import styles from './stateSortedSchools.css';
import stateCodes from '../stateCodes.json';

class StateSortedSchools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      schoolsByState: null
    };
  }

  onSearchChange = (value) => {
    if (value.length > 1) {
      // Prevent query with just one character in search field
      this.setState({ query: value });
      this.setState({ schoolsByState: this.searchState(value) });
    } else {
      // Clear results when search field is 1 char or blank
      this.setState({ query: null });
      this.setState({ schoolsByState: null });
    }
  }

  searchState = (string) => {
    const userInput = string.replace(/\w\S*/g, txt => txt.toUpperCase());
    const matchingSchools = [];

    // Return true if thisInput matches thisCampus's state code or name (ex: "CA or California")
    function matchesState(thisInput, thisCampus) {
      try {
        const stateName = stateCodes[thisCampus.state].toUpperCase();
        return thisCampus.state.includes(thisInput) || stateName.includes(thisInput);
      } catch (e) {
        if (e instanceof TypeError) {
          /* eslint-disable no-console */
          console.log('Error: Typo in code_schools.yaml on the back-end under the `state` field');
          console.log(e);
          /* eslint-disable no-console */
          return false;
        }
        // Unknown error issue
        return e;
      }
    }

    this.props.schools.forEach((school) => {
      school.locations.filter(location => matchesState(userInput, location)).forEach((campus) => {
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
            key={school.address}
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
        <FormInput
          placeholder="Start typing a state..."
          onChange={this.onSearchChange}
          id="search"
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
