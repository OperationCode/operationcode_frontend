import React, { Component } from 'react';
// import axios from 'axios';
// import { Redirect } from 'react-router-dom';
// import _ from 'lodash';
import Section from 'shared/components/section/section';
import FormButton from 'shared/components/form/formButton/formButton';
// import config from 'config/environment';
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
    this.state = {
      error: false,
      isValid: true,
      success: false,
      step: 0
    };
  }

  onIdentifierStatusChange = (e, value) => {
    this.setState({ [e.target.id]: value });
  }

  saveAndContinue = () => {
    this.setState({ step: this.state.step += 1 });
    /*
    axios.patch(`${config.backendHost}/users/password`, {
      user: {
        reset_password_token: this.props.resetPasswordToken,
        password: this.state.password
      }
    }).then(() => {
      this.setState({ step: this.state.step + 1 });
    }).catch(() => {
      this.setState({ error: 'We were unable to set the password for this email' });
    });
    */
  }

  showStep = () => {
    const step = this.state.step + this.state.identifier;
    switch (step) {
      case '1mil':
        return (
          <MilitaryInfo
            update={this.onIdentifierStatusChange}
            percent={'25'}
          />
        );
      case '1civ':
        return (
          <WorkInfo
            role={this.state.role}
            company={this.state.company}
            update={this.onIdentifierStatusChange}
            percent={'50'}
          />
        );
      case '2civ':
        return (
          <Interests
            percent={'75'}
          />
        );
      case '3civ':
        return (
          <p>next steps section</p>
        );
      case '2mil':
        return (
          <WorkInfo
            role={this.state.role}
            company={this.state.company}
            update={this.onIdentifierStatusChange}
            percent={'50'}
          />
        );
      case '3mil':
        return (
          <SchoolInfo
            update={this.onIdentifierStatusChange}
            percent={'75'}
          />
        );
      case '4mil':
        return (
          <p> tags section </p>
        );
      case '5mil':
        return (
          <p> next steps section </p>
        );
      default:
        return <Identifier update={this.onIdentifierStatusChange} />;
    }
  }

  render() {
    const showStep = this.showStep();
    return (
      <Section className={styles.signup} title="More Info">
        <p>At Op-Code, we really need more information to make this all work. Please take a minute to complete these steps.</p>
        {showStep}
        <FormButton className={styles.joinButton} text="Save and Continue" onClick={this.saveAndContinue} theme="red" />
      </Section>
    );
  }
}

export default SignupInformation;
