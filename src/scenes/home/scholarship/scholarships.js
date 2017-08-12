import React, { Component } from 'react';
import axios from 'axios';
import config from 'config/environment.js';
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
    this.getScholarships();
  }

  getScholarships = () => {
    axios.get(`${config.backendUrl}/scholarships`)
      .then((response) => {
        this.setState({ scholarships: response.data });
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    let schlrshps;
    if (this.state.scholarships.length > 0) {
      schlrshps = this.state.scholarships.map(scholarship => <div key={scholarship.id}><Link to={`scholarships/${scholarship.id}`} >{scholarship.name}</Link></div>);
    }
    return (
      <div>
        {schlrshps}
      </div>
    );
  }
}

export default Scholarships;
