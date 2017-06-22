import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import Idme from 'shared/components/idme/idme';

class Thanks extends Component {

  render() {
    return (
      <Section title="Thanks for joining">
        <span>Thanks for joining operation code. Please check your email for orders.</span>
        <Idme />
      </Section>
    );
  }
}

export default Thanks;
