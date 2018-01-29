import React, { Component } from 'react';
import { getScholarships } from 'shared/utils/apiHelper';
import Section from 'shared/components/section/section';
import Preview from './preview/preview.js';
import styles from './scholarships.css';

class Scholarships extends Component {
  state = {
    scholarships: null
  };

  componentWillMount() {
    getScholarships().then((data) => {
      this.setState({ scholarships: data });
    });
  }

  render() {
    let schlrshps;
    if (this.state.scholarships === null) {
      // loading
    } else if (this.state.scholarships.length === 0) {
      schlrshps = <p>There are no scholarships available at this time, please check back periodically for more opportunities.</p>;
    } else {
      schlrshps = this.state.scholarships.map(scholarship => <Preview key={scholarship.id} scholarship={scholarship} />);
    }
    return (
      <Section title="Scholarships">
        <div className={styles.container}>
          {schlrshps}
        </div>
      </Section>
    );
  }
}

export default Scholarships;
