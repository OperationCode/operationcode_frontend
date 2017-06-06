import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import FormInput from 'shared/components/form/formInput/formInput';
import styles from './stateSortedSchools.css';
import stateCodes from '../stateCodes.json';

const gettingSchoolData = fetch('https://api.operationcode.org/api/v1/code_schools.json')
  .then(response => response.json());

class StateSortedSchools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      schools: null,
      schoolsByState: null
    };

    gettingSchoolData.then(data =>
      this.setState({ schools: data })
    );
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
    const schools = [];

    // Return true if input matches state code or name (ex: "CA or California")
    function matchesState(school, input) {
      const stateName = stateCodes[school.state].toUpperCase();
      return school.state.includes(input) || stateName.includes(input);
    }

    this.state.schools.forEach((school) => {
      school.locations.filter(_school => matchesState(_school, userInput)).forEach((location) => {
        schools.push({
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
    });

    return schools;
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

export default StateSortedSchools;
