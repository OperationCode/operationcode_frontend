import React, { Component } from 'react';
import Section from 'shared/components/section/section';
// import styles from './team.css';

class Team extends Component {
  render() {
    return (
      <div>
        <h1>
          This is the header section
        </h1>
        <Section
          title="Mission"
        />
      </div>
    );
  }
}

export default Team;
