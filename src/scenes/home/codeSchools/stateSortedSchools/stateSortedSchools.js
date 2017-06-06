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
      schoolsByState: null,
      schools: null
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
      schools.push(school.locations.filter(location => matchesState(location, userInput)));
    });

    return schools;
  };

  render() {
    console.log(this.state.schoolsByState);
    const stateSchools = !this.state.schoolsByState ? null : this.state.schoolsByState
      .map(school =>
        (
          <SchoolCard
            key={school.name}
            alt={school.name}
            schoolName={school.name}
            link={school.url}
            schoolAddress={'school.locations[0].address1'}
            schoolCity={'school.locations[0].city'}
            schoolState={'school.locations[0].state'}
            logo={school.logo}
            GI={'Yes'}
            // GI={school.locations[0].va_accepted ? 'Yes' : 'No'}
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
