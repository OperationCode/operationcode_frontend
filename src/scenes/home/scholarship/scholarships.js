import React, { Component } from 'react';
import { getScholarships } from 'shared/utils/apiHelper';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

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
    if (this.state.scholarships.length > 0) {
      schlrshps = this.state.scholarships.map(scholarship => <div key={scholarship.id}><Link to={`scholarships/${scholarship.id}/apply`} >{scholarship.name}</Link></div>);
    }
    return (
      <div>
        {schlrshps}
      </div>
    );
  }
}

export default Scholarships;
