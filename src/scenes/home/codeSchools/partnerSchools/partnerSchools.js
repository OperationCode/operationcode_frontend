import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
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
        id="partnerSchools"
        title="Partnered Schools"
        theme="white"
        headingLines={false}
        margin1
      >
        <p>
          Many code schools around the nation offer military/veterans discounts to make coding education more accessible to our veterans.
          <br />
          We&apos;ve partnered up with those schools in order to help direct veterans to the best code schools around the country.
          <br />
          <br />
          <b>Apply for a scholarship with our partners now and get coding:</b>
        </p>

        <div className={styles.partnerSchools}>
          <SchoolCard
            alt="Bloc Logo"
            schoolName="Bloc"
            link="http://try.bloc.io/operation-code-bootcamp-scholarship/"
            schoolAddress="Online"
            logo="./images/codeSchoolLogos/bloc.jpg"
            GI="No"
            fullTime="Self-Driven"
            hardware="No"
          />
          <SchoolCard
            alt="Coder Camps Logo"
            schoolName="Coder Camps"
            link="http://www.operationcodercamps.com/"
            schoolAddress="Online, Pheonix, Seattle"
            logo="./images/codeSchoolLogos/coder_camps.jpg"
            GI="No"
            fullTime="Full-Time"
            hardware="No"
          />
          <SchoolCard
            alt="Code Platoon Logo"
            schoolName="Code Platoon"
            link="https://www.codeplatoon.org/"
            schoolAddress="Online, Chicago"
            logo="./images/codeSchoolLogos/code_platoon.jpg"
            GI="No"
            fullTime="Full-Time"
            hardware="No"
          />
          <SchoolCard
            alt="Flatiron Logo"
            schoolName="The Flatiron School"
            link="http://flatironschool.com/"
            schoolAddress="11 Broadway, Suite 260"
            schoolCity="New York"
            schoolState="NY"
            logo="./images/codeSchoolLogos/flatiron_school.jpg"
            GI="No"
            fullTime="Full-Time"
            hardware="No"
          />
          <SchoolCard
            alt="Fullstack Academy Logo"
            schoolName="Fullstack Academy"
            link="https://www.fullstackacademy.com/remote-immersive#scholarships"
            schoolAddress="Online, Chicago, New York"
            logo="./images/codeSchoolLogos/fullstack_academy.jpg"
            GI="No"
            fullTime="Full-Time"
            hardware="No"
          />
          <SchoolCard
            alt="Launch School Logo"
            schoolName="Launch School"
            link="https://launchschool.com/blog/operation-code-scholarship/"
            schoolAddress="Online"
            logo="./images/codeSchoolLogos/launch_school.jpg"
            GI="No"
            fullTime="Self-Driven"
            hardware="No"
          />
          <SchoolCard
            alt="Sabio Logo"
            schoolName="Sabio"
            link="http://sabio.la/veterans"
            schoolAddress="400 Corporate Pointe"
            schoolCity="Culver City"
            schoolState="CA"
            logo="./images/codeSchoolLogos/sabio.png"
            GI="Yes"
            fullTime="Full-Time"
            hardware="No"
          />
          <SchoolCard
            alt="Startup Institute Logo"
            schoolName="Startup Institute"
            link="https://www.startupinstitute.com/new-york/"
            schoolAddress="25 Broadway, 10th Floor"
            schoolCity="New York"
            schoolState="NY"
            logo="./images/codeSchoolLogos/startup_institute.jpg"
            GI="No"
            fullTime="Full-Time"
            hardware="No"
          />
          <SchoolCard
            alt="Thinkful Logo"
            schoolName="Thinkful"
            link="http://www.thinkful.com"
            schoolAddress="Online"
            logo="./images/codeSchoolLogos/thinkful.jpg"
            GI="No"
            fullTime="Self-Driven"
            hardware="No"
          />
        </div>

        <div className={styles.noteForSchoolReps}>
          <p>
            Are you a code school seeking a partnership with Operation Code?
            <br />
            <a href="mailto:staff@operationcode.org">
              Reach out to us!
            </a>
          </p>
        </div>
      </Section>
    );
  }
}

export default PartnerSchools;
