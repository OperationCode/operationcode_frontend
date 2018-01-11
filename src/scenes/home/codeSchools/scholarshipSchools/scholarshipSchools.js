import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'shared/components/section/section';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import styles from './scholarshipSchools.css';

class ScholarshipSchools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scholarshipSchools: null
    };
  }

  handleOnClick = (school) => {
    this.props.showModal(school);
  }

  render() {
    return (
      <Section id="scholarshipSchools" title="Scholarship Schools" headingLines={false}>
        <div className={styles.scholarshipSchools}>
          <SchoolCard
            alt="RMOTR Logo"
            schoolName="RMOTR"
            link="http://try.bloc.io/operation-code-bootcamp-scholarship/"
            schoolAddress="Online"
            logo="./images/codeSchoolLogos/rmotr.jpg"
            GI="No"
            fullTime="Self-Driven"
            hardware="No"
            noLink
            onSchoolClicked={this.handleOnClick}
            description="RMOTR is offering online coursework in Python to the Operation Code community! Full and partial scholarships are available. Python is a skill in high demand right now, especially for data science roles - and it's useful for anyone seeking to learn more about coding and the tech industry."
          />
          <SchoolCard
            alt="Fullstack Academy Logo"
            schoolName="Fullstack Academy"
            link=""
            schoolAddress="Online"
            logo="./images/codeSchoolLogos/fullstack_academy.jpg"
            GI="No"
            fullTime="Self-Driven"
            hardware="No"
            noLink
            onSchoolClicked={this.handleOnClick}
            description="Fullstack Academy is offering three scholarships for their Web Development Remote Immersive, to the veteran and military community! They are also providing 10 free scholarships to their Remote Bootcamp Prep course."
          />
          <SchoolCard
            alt="Startup Institute Logo"
            schoolName="Startup Institute"
            link="http://go.startupinstitute.com/partners/operation-code/"
            schoolAddress="Online"
            logo="./images/codeSchoolLogos/startup_institute.jpg"
            GI="No"
            fullTime="Self-Driven"
            hardware="No"
            noLink
            onSchoolClicked={this.handleOnClick}
            description="Startup Institute is offering the Operation Code community in Boston and NYC a $2,000 Veterans Scholarship to attend their full- and part-time programs! They’ll also donate $1,000 to Operation Code for every member who completes their program curriculum and requirements."
          />
          <SchoolCard
            alt="Bloc Logo"
            schoolName="Bloc"
            link="http://try.bloc.io/operation-code-bootcamp-scholarship/"
            schoolAddress="Online"
            logo="./images/codeSchoolLogos/bloc.jpg"
            GI="No"
            fullTime="Self-Driven"
            hardware="No"
            noLink
            onSchoolClicked={this.handleOnClick}
            description=""
          />
          <SchoolCard
            alt="Galvanize Logo"
            schoolName="Galvanize"
            link=""
            schoolAddress="Online"
            logo="./images/codeSchoolLogos/galvanize.jpg"
            GI="No"
            fullTime="Self-Driven"
            hardware="No"
            noLink
            onSchoolClicked={this.handleOnClick}
            description="Galvanize is now accepting the GI Bill for their web development and data science programs in Denver, CO"
          />
          <SchoolCard
            alt="Inventive.io Logo"
            schoolName="Inventive.io"
            link="https://inventive.io/"
            schoolAddress="Online"
            logo="./images/codeSchoolLogos/deqwcde.jpg"
            GI="No"
            fullTime="Self-Driven"
            hardware="No"
            noLink
            onSchoolClicked={this.handleOnClick}
            description="Inventive.io self funds full ride scholarships for veterans and women. Every 10th paid student opens a scholarship slot!"
          />
          <SchoolCard
            alt="edX Logo"
            schoolName="edX"
            schoolAddress="Online"
            logo="./images/moocLogos/edx.jpg"
            GI="No"
            fullTime="Self-Driven"
            hardware="No"
            noLink
            link=""
            onSchoolClicked={this.handleOnClick}
            description="edX has extended a special limited time 20% discount on verified certificates to the Operation Code community. To take advantage of the discount, enter the code EDXOC20 at check out. Visit edx.org and start learning today!"
          />
        </div>
      </Section>
    );
  }
}

ScholarshipSchools.propTypes = {
  schools: PropTypes.array.isRequired, // eslint-disable-line
  showModal: PropTypes.func.isRequired
};

export default ScholarshipSchools;
