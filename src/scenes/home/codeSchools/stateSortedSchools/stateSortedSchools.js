import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import FormInput from 'shared/components/form/formInput/formInput';
import styles from './stateSortedSchools.css';

const endpoint = 'https://raw.githubusercontent.com/OperationCode/operationcode_frontend/code-schools-cooper-kyle/src/scenes/home/codeSchools/schools.json';
const gettingSchoolData = fetch(endpoint)
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
    }
  }

  searchState = (string) => {
    const stringFormat = string.replace(/\w\S*/g, txt =>
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
    const schools = [];

    this.state.schools.forEach((school) => {
      // Search non-online locations for input per key stroke
      const locations = school.locations.filter(location => location.state !== undefined)
                                        .filter(location => location.state.includes(stringFormat));

      if (locations.length > 0) {
        const newSchool = Object.assign({}, school);
        newSchool.locations = locations;
        schools.push(newSchool);
      }
    });

    return schools;
  }

  render() {
    const stateSchools = !this.state.schoolsByState ? null : this.state.schoolsByState
      .map(school =>
        (
          <SchoolCard
            schoolName={school.name}
            link={school.url}
            schoolAddress={school.locations[0].address1}
            schoolCity={school.locations[0].city}
            schoolState={school.locations[0].state}
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
