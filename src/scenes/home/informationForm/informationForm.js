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
    this.previousPage = this.previousPage.bind(this);
    this.onCheckboxLoad = this.onCheckboxLoad.bind(this);
    this.state = {
      error: false,
      isValid: true,
      isDescriptionValid: true,
      success: false,
      identifier: 'false',
      interests: new Set(),
      step: 0
    };
  }

  onCheckboxLoad = () => {
    // Clear the interests once we get to the interests page
    if (this.state.interests.size) {
      const interests = new Set(this.state.interests);
      interests.clear();
      this.setState({ interests });
    }
  }

  // On-Change handler dynamically creates state named after the
  // ID of the changing event, with a value captured by the event itself.
  // Ex. If a form select with ID 'hello' selects value 'greeted'
  // Then state will be updated with key of 'hello' and value of 'greeted'
  onIdentifierStatusChange = (e, value) => {
    this.setState({ [e.target.id]: value });
  }

  // Adds values from checkboxes to a set, eliminating possible repeat values
  onCheckBoxChange = (e) => {
    const interests = new Set(this.state.interests);
    const { value } = e.target;
    if (e.target.checked) {
      interests.add(value);
    } else {
      interests.delete(value);
    }

    this.setState({ interests });
  }

  // make sure isDescriptionValid is false on initialization
  onIdentifierInit = () => {
    this.setState({ isDescriptionValid: false });
  }

  // check if an option was selected: volunteer / veteran
  validateDescription = (value) => {
    const isDescriptionValid = Boolean(value.length);
    this.setState({ isDescriptionValid });
    return isDescriptionValid;
  }

  // Reduces 'step' value by 1, going back one page in the form
  // Unless you are at the first page
  previousPage = () => {
    if (this.state.step < 1) {
      return;
    }

    this.setState({ step: this.state.step -= 1 });
  }

  isFormValid = () => {
    let valid = true;
    if (!this.state.isDescriptionValid) {
      valid = false;
    }

    this.setState({ error: !valid });
    return valid;
  }

  // Patches whatever values that have been captured so far to the DB
  // Then adds 1 to step to progress to the next page.
  saveAndContinue = () => {
    // check if the form is valid before submitting
    if (!this.isFormValid()) {
      return;
    }

    patchBackend('users', {
      user: {
        education_level: this.state.schoolLevel,
        mentor: this.state.mentor,
        scholarship_info: this.state.scholarships,
        employment_status: this.state.workInfo,
        company_name: this.state.company,
        company_role: this.state.role,
        // Convert string to boolean for DB
        volunteer: this.state.identifier === 'true',
        branch_of_service: this.state.branch,
        // Necessary to convert Set to Array for storage in DB
        interests: Array.from(this.state.interests)
      },
    })
      .then(() => {
        this.setState({ step: this.state.step += 1 });
      }).catch(() => {
        this.setState({ error: true });
      });
  }
  // Showstep renders each consecutive 'page' (component) based on user input
  // The form splits based on identifier, which determines whether or not
  // You are military or civillian. If miltitary, it's false. If civillian, true
  // 'Step' state is combined with 'identifier' to determine which component to
  // Serve to the user. The default case, or STEP ONE is the Identifier form.
  showStep = () => {
    const step = this.state.step + this.state.identifier;
    switch (step) {
      // Military STEP 2
      case '1false':
        return (
          <MilitaryInfo
            update={this.onIdentifierStatusChange}
            percent="20"
          />
        );
      // Civillian STEP 2
      case '1true':
        return (
          <WorkInfo
            role={this.state.role}
            company={this.state.company}
            update={this.onIdentifierStatusChange}
            percent="33"
            identifier={this.state.identifier}
          />
        );
      // Civillian STEP 3
      case '2true':
        return (
          <Interests
            update={this.onCheckBoxChange}
            percent="66"
            onLoad={this.onCheckboxLoad}
          />
        );
      // Civillian COMPLETE
      case '3true':
        return (
          <Redirect to="/profile" />
        );
      // Military STEP 3
      case '2false':
        return (
          <WorkInfo
            role={this.state.role}
            company={this.state.company}
            update={this.onIdentifierStatusChange}
            percent="40"
          />
        );
      // Military STEP 4
      case '3false':
        return (
          <SchoolInfo
            update={this.onIdentifierStatusChange}
            percent="60"
          />
        );
      // Military STEP 5
      case '4false':
        return (
          <Interests
            update={this.onCheckBoxChange}
            percent="80"
          />
        );
      // Military COMPLETE
      case '5false':
        return (
          <Redirect to="/profile" />
        );
      // STEP ONE
      default:
        return (
          <Identifier
            update={this.onIdentifierStatusChange}
            validationFunc={e => this.validateDescription(e.target.value)}
            validationErrorMessage="You have to select a value"
            isValid={this.state.isDescriptionValid}
            init={this.onIdentifierInit}
          />
        );
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
          {this.state.error ? <ul className={styles.errorList}>There was an error saving your information, please try again.
                              </ul> : null }
        </div>
      </Section>
    );
  }
}

export default SignupInformation;
