import React, { Component } from 'react';
import Scholarship from './scholarship';

class ScholarshipList extends Component {
  constructor() {
    super();
    this.state = {
      scholarships: [
        {
          id: 1,
          name: 'War Heroes',
          description: '$20,000 for bootcamp of your choice',
          location: 'Austin, TX',
        },
        {
          id: 2,
          name: 'Vetinarians for Veterans',
          description: '$15,000 for bootcamp of your choice',
          location: 'San Francisco, CA',
        },
        {
          id: 3,
          name: 'Generic Name',
          description: '$17,000 for bootcamp of your choice',
          location: 'New York, New York',
        }
      ]
    };
  }

  render() {
    const scholarships = this.state.scholarships.map(scholarship => <Scholarship key={scholarship.id} scholarship={scholarship} />);
    return (
      <div>
        {scholarships}
      </div>
    );
  }
}

export default ScholarshipList;
