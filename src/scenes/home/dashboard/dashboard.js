import React, { Component } from 'react';
import LinkButton from 'shared/components/linkButton/linkButton';
import Section from 'shared/components/section/section';

class Dashboard extends Component {
  render() {
    return (

      <Section title="What would you like to do?" theme="white">
        <LinkButton text="Request Help" theme="blue" link="/mentor-request" />
        <LinkButton text="Join a Squad" theme="blue" link="/squads" />
        <LinkButton text="View Mentors" theme="blue" link="/mentors" />
      </Section>
    );
  }
}

export default Dashboard;
