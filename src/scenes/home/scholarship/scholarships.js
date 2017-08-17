import React, { Component } from 'react';
import { getScholarships } from 'shared/utils/apiHelper';
import { Link } from 'react-router-dom';
import Section from 'shared/components/section/section';
import styles from './scholarships.css';

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
    const schlrshps = this.state.scholarships.map(scholarship => <Link to={`scholarships/${scholarship.id}/apply`} key={scholarship.id} className={styles.link} >{scholarship.name}</Link>);
    return (
      <Section>
        <h3>Scholarships</h3>
        {schlrshps}
      </Section>
    );
  }
}

export default Scholarships;
