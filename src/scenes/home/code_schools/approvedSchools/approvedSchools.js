import React, { Component } from 'react';
import schools from '../schools.json';
import styles from './approvedSchools.css';

class ApprovedSchools extends Component {

  render() {
    return (
      <div>
        <h2>VA Approved Schools</h2>
        <ul>
          <li>School 1</li>
          <li>School 2</li>
          <li>School 3</li>
          <li>School 4</li>
        </ul>

        <hr />

        <h6>
          Require Code School Technical Assistance for state and VA approval?
          <a href="mailto:schools@operationcode.org">Request technical assistance today.</a>
        </h6>
      </div>
    );
  }
}