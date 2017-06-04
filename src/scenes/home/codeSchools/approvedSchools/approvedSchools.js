import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section from 'shared/components/section/section';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import styles from './approvedSchools.css';


const endpoint = 'https://raw.githubusercontent.com/OperationCode/operationcode_frontend/code-schools-cooper-kyle/src/scenes/home/codeSchools/schools.json';
// const endpoint = 'https://api.operationcode.org/api/v1/code_schools.json';
const gettingSchoolData = fetch(endpoint)
  .then(response => response.json());


class ApprovedSchools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vaSchools: null
    };

    gettingSchoolData.then(data =>
      this.setState({ vaSchools: data.va_approved })
    );
  }

  render() {
    const vaSchools = !this.state.vaSchools ? null : this.state.vaSchools.map(s =>
                        (
                          <SchoolCard
                            schoolName={s.name}
                            schoolAddress={s.address1}
                            schoolCity={s.city}
                            schoolState={s.state}
                          />
                        )
                      );
    return (
      <Section
        title="VA-Approved Schools"
        headingLines={false}
        margin
      >
        <div className={styles.vaSchools}>
          {vaSchools}
        </div>

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
