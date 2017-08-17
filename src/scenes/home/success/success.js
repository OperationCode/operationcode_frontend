import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import { Link } from 'react-router-dom';
// import styles from './success.css';

class Success extends Component {
  render() {
    return (
      <Section title="Success!">
        <h2>You have submitted your Scholarship Application. We will reach out to you to schedule a time to chat.</h2>
        <Link to="scholarships">Back to Scholarships</Link>
      </Section>
    );
  }
}

export default Success;
