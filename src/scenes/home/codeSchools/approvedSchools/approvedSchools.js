import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section from 'shared/components/section/section';
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
      <Section
        title="VA-Approved Schools"
        headingLines={false}
        margin
      >
        <div className={styles.noteForSchoolReps}>
          <p>
            Are you a code school seeking state and/or VA approval?
            <br />
            <Link to="mailto:staff@operationcode.org" role="button">
              Request technical assistance today.
            </Link>
          </p>
        </div>
      </Section>
    );
  }
}

export default ApprovedSchools;
