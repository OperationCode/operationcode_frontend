import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import FormInput from 'shared/components/form/formInput/formInput';
// import styles from './stateSortedSchools.css';

const endpoint = 'https://raw.githubusercontent.com/OperationCode/operationcode_frontend/code-schools-cooper-kyle/src/scenes/home/codeSchools/schools.json';
const gettingSchoolData = fetch(endpoint)
  .then(response => response.json());


class StateSortedSchools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      stateList: null,
      by_state: null
    };

    gettingSchoolData.then(data =>
      this.setState({ by_state: data.by_state })
    );
  }

  onSearchChange = (value) => {
    const regex = new RegExp(value, 'gi');
    const arr = this.state.by_state.match(regex);
    this.setState({ stateList: arr });
      // this.setState({ query: value });
  }

  render() {
    return (
      <Section
        id="schoolsByState"
        title="Schools by State"
        headingLines={false}
        margin
      >
        <FormInput
          placeholder="Start typing a state..."
          onChange={this.onSearchChange}
        />
      </Section>
    );
  }
}

export default StateSortedSchools;
