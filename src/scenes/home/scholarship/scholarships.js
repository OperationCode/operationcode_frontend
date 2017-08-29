import React, { Component } from 'react';
import { getScholarships } from 'shared/utils/apiHelper';
import Section from 'shared/components/section/section';
import Preview from './preview/preview.js';
// import styles from './scholarships.css';

class Scholarships extends Component {
  constructor() {
    super();
    this.state = {
      scholarships: []
    };
  }

  componentWillMount() {
    getScholarships().then((data) => {
      this.setState({ scholarships: data });
    });
  }

  render() {
    let schlrshps;
    if (this.state.scholarships.length !== 0) {
      schlrshps = this.state.scholarships.map(scholarship => <div key={scholarship.id} > <Preview scholarship={scholarship} /> </div>);
    } else {
      schlrshps = 'There are no scholarships available at this time, please check back periodically for more opportunities.';
    }
    return (
      <Section>
        <h3>Open Scholarships</h3>
        {schlrshps}
      </Section>
    );
  }
}

export default Scholarships;
