import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section from 'shared/components/section/section';
import styles from './partnerSchools.css';

class PartnerSchools extends Component {
  constructor(props) {
    super(props);

    this.state = {
      partner_schools: {}
    };
  }

  render() {
    return (
      <Section
        title="Partners With Scholarships"
        theme="white"
        headingLines={false}
        margin
      >
        <p>
          Many code schools around the nation offer military/veterans discounts to make coding
          education more accessible to those who&apos;ve worn the uniform and served our country.
          We&apos;ve partnered up with those schools in order to help direct veterans to the best
          code schools around the country. <b>Apply for a scholarship with our partners now and
          get coding:</b>
        </p>

        <div className={styles.noteForSchoolReps}>
          <p>
            Are you a code school seeking a partnership with Operation Code?
            <br />
            <Link to="mailto:staff@operationcode.org" role="button">
              Reach out to us!
            </Link>
          </p>
        </div>
      </Section>
    );
  }
}

export default PartnerSchools;
