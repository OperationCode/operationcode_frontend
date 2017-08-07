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
      interests: new Set(),
      step: 0
    };
  }

  onIdentifierStatusChange = (e, value) => {
    this.setState({ [e.target.id]: value });
  }

  onCheckBoxChange = (value) => {
    this.setState({ interests: this.state.interests.add(value) });
  }

  previousPage = () => {
    if (this.state.step < 1) {
      return;
    }
    this.setState({ step: this.state.step -= 1 });
  }

  saveAndContinue = () => {
    patchBackend('users', {
      user: {
        education_level: this.state.schoolLevel,
        scholarships: this.state.scholarships,
        employment_status: this.state.workInfo,
        company_name: this.state.company,
        company_role: this.state.role,
        volunteer: this.state.identifier,
        branch_of_service: this.state.branch,
        interests: [...this.state.interests]
      }
    });
    this.setState({ step: this.state.step += 1 });
  }

  showStep = () => {
    const step = this.state.step + this.state.identifier;
    switch (step) {
      case '1true':
        return (
          <MilitaryInfo
            update={this.onIdentifierStatusChange}
            percent={'20'}
          />
        );
      case '1false':
        return (
          <WorkInfo
            role={this.state.role}
            company={this.state.company}
            update={this.onIdentifierStatusChange}
            percent={'33'}
          />
        );
      case '2false':
        return (
          <Interests
            update={this.onCheckBoxChange}
            percent={'66'}
          />
        );
      case '3false':
        return (
          <Redirect to="/thanks" />
        );
      case '2true':
        return (
          <WorkInfo
            role={this.state.role}
            company={this.state.company}
            update={this.onIdentifierStatusChange}
            percent={'40'}
          />
        );
      case '3true':
        return (
          <SchoolInfo
            update={this.onIdentifierStatusChange}
            percent={'60'}
          />
        );
      case '4true':
        return (
          <Interests
            update={this.onCheckBoxChange}
            percent={'80'}
          />
        );
      case '5true':
        return (
          <Redirect to="/thanks" />
        );
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
