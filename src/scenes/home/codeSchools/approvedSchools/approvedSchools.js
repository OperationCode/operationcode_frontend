import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './approvedSchools.css';

class ApprovedSchools extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vaSchools: {}
    };
  }

  render() {
    return (
      <div className={styles.approvedSchools}>
        <h2>VA Approved Schools</h2>
        <ul>
          <li>School Name 1</li>
          <li>School Name 2</li>
          <li>School Name 3</li>
        </ul>

        <hr />

        <h6>
          Require Code School Technical Assistance for state and VA approval?
          <Link to="mailto:schools@operationcode.org">Request technical assistance today.</Link>
        </h6>
      </div>
    );
  }
}

export default ApprovedSchools;
