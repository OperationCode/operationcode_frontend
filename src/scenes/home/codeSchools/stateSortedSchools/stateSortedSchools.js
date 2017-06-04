import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import FormInput from 'shared/components/form/formInput/formInput';
// import styles from './stateSortedSchools.css';

class StateSortedSchools extends Component {
  constructor(props) {
    super(props);

    this.state = {
      by_state: {}
    };
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
        />
      </Section>
    );
  }
}

export default StateSortedSchools;
