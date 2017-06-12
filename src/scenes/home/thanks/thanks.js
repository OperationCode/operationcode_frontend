import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section from 'shared/components/section/section';

class Thanks extends Component {
  render() {
    return (
      <Section title="Thanks for joining">
        <span>Thanks for joining operation code™.  Please check your email for orders.</span>
        <Link to="/home">Get Started</Link>
      </Section>
    );
  }
}

export default Thanks;
