import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'shared/components/section/section';
// import SchoolCard from 'shared/components/schoolCard/schoolCard';
// import styles from './scholarshipSchools.css';

class ScholarshipSchools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scholarshipSchools: null
    };
  }

  render() {
    return (
      <Section id="scholarshipSchools" title="Scholarship Schools" headingLines={false}>
        <div>fds</div>
      </Section>
    );
  }
}

ScholarshipSchools.propTypes = {
  schools: PropTypes.array.isRequired // eslint-disable-line
};

export default ScholarshipSchools;
