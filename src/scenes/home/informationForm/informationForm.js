import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Section from 'shared/components/section/section';
import FormButton from 'shared/components/form/formButton/formButton';
import { patchBackend } from 'shared/utils/apiHelper';
import Identifier from './formComponents/identifier';
import Interests from './formComponents/interests';
import WorkInfo from './formComponents/workInfo';
import SchoolInfo from './formComponents/schoolInfo';
import MilitaryInfo from './formComponents/militaryInfo';
import styles from './informationForm.css';

class SignupInformation extends Component {

  constructor(props) {
    super(props);
    this.onIdentifierStatusChange = this.onIdentifierStatusChange.bind(this);
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
    this.state = {
      error: false,
      isValid: true,
      success: false,
      identifier: 'false',
      interests: new Set(),
      step: 0
    };
  }

  // On-Change handler dynamically creates state named after the
  // ID of the changing event, with a value captured by the event itself.
  // Ex. If a form select with ID 'hello' selects value 'greeted'
  // Then state will be updated with key of 'hello' and value of 'greeted'
  onIdentifierStatusChange = (e, value) => {
    this.setState({ [e.target.id]: value });
  }

  // Adds values from checkboxes to a set, eliminating possible repeat values
  onCheckBoxChange = (value) => {
    this.setState({ interests: this.state.interests.add(value) });
  }

  // Reduces 'step' value by 1, going back one page in the form
  // Unless you are at the first page
  previousPage = () => {
    if (this.state.step < 1) {
      return;
    }
    this.setState({ step: this.state.step -= 1 });
  }

  // Patches whatever values that have been captured so far to the DB
  // Then adds 1 to step to progress to the next page.
  saveAndContinue = () => {
    patchBackend('users', {
      user: {
        education_level: this.state.schoolLevel,
        scholarship_info: this.state.scholarships,
        employment_status: this.state.workInfo,
        company_name: this.state.company,
        company_role: this.state.role,
        volunteer: this.state.identifier,
        branch_of_service: this.state.branch,
        // Necessary to convert Set to Array for storage in DB
        interests: Array.from(this.state.interests)
      },
    });
    this.setState({ step: this.state.step += 1 });
  }
  // Showstep renders each consecutive 'page' (component) based on user input
  // The form splits based on identifier, which determines whether or not
  // You are military or civillian. If miltitary, it's false. If civillian, true
  // 'Step' state is combined with 'identifier' to determine which component to
  // Serve to the user. The default case, or STEP ONE is the Identifier form.
  showStep = () => {
    const step = this.state.step + this.state.identifier;
    switch (step) {
<<<<<<< HEAD
      case '1true':
=======
      // Military STEP 2
      case '1false':
>>>>>>> d012913... Change various elements per code review
        return (
          <MilitaryInfo
            update={this.onIdentifierStatusChange}
            percent={'20'}
          />
        );
<<<<<<< HEAD
      case '1false':
=======
      // Civillian STEP 2
      case '1true':
>>>>>>> d012913... Change various elements per code review
        return (
          <WorkInfo
            role={this.state.role}
            company={this.state.company}
            update={this.onIdentifierStatusChange}
            percent={'33'}
          />
        );
<<<<<<< HEAD
      case '2false':
=======
      // Civillian STEP 3
      case '2true':
>>>>>>> d012913... Change various elements per code review
        return (
          <Interests
            update={this.onCheckBoxChange}
            percent={'66'}
          />
        );
<<<<<<< HEAD
      case '3false':
=======
      // Civillian COMPLETE
      case '3true':
>>>>>>> d012913... Change various elements per code review
        return (
          <Redirect to="/profile" />
        );
<<<<<<< HEAD
      case '2true':
=======
      // Military STEP 3
      case '2false':
>>>>>>> d012913... Change various elements per code review
        return (
          <WorkInfo
            role={this.state.role}
            company={this.state.company}
            update={this.onIdentifierStatusChange}
            percent={'40'}
          />
        );
<<<<<<< HEAD
      case '3true':
=======
      // Military STEP 4
      case '3false':
>>>>>>> d012913... Change various elements per code review
        return (
          <SchoolInfo
            update={this.onIdentifierStatusChange}
            percent={'60'}
          />
        );
<<<<<<< HEAD
      case '4true':
=======
      // Military STEP 5
      case '4false':
>>>>>>> d012913... Change various elements per code review
        return (
          <Interests
            update={this.onCheckBoxChange}
            percent={'80'}
          />
        );
<<<<<<< HEAD
      case '5true':
=======
      // Military COMPLETE
      case '5false':
>>>>>>> d012913... Change various elements per code review
        return (
          <Redirect to="/profile" />
        );
      // STEP ONE
      default:
        return <Identifier update={this.onIdentifierStatusChange} />;
    }
  }

  render() {
    const showStep = this.showStep();
    return (
      <Section title="More Info">
        <p>At Op-Code, we are dedicated to helping our community thrive. In order to do so, we need to collect some information to better serve you. Please take a minute to complete these steps and help us on our mission to code the future. We will never sell or distribute your information.</p>
        {showStep}
        <div className={styles.buttonContainer}>
          <FormButton text="Go Back" onClick={this.previousPage} theme="blue" />
          <FormButton text="Save and Continue" onClick={this.saveAndContinue} theme="red" />
        </div>
      </Section>
    );
  }
}

export default SignupInformation;
