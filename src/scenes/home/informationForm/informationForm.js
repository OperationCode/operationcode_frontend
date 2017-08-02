import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { IDENTIFIERS } from 'shared/constants/status';
import _ from 'lodash';
import Section from 'shared/components/section/section';
import config from 'config/environment';
import styles from './signup.css';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      isValid: true,
      identifier: '',
      success: false,
      step: '1'
    };
  }

  onIdentifierStatusChange = (value) => {
    this.setState({ identifier: value });
  }

  showStep = () => {
    switch (this.state.step) {
      case 1:
        return <AccountFields fieldValues={fieldValues}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues} />
      case 2:
        return <SurveyFields fieldValues={fieldValues}
                             nextStep={this.nextStep}
                             previousStep={this.previousStep}
                             saveValues={this.saveValues} />
      case 3:
        return <Confirmation fieldValues={fieldValues}
                             previousStep={this.previousStep}
                             submitRegistration={this.submitRegistration} />
      case 4:
        return <Success fieldValues={fieldValues} />
      default:
        return <Identifier />
    }
  }

  handleOnClick = (e) => {
    e.preventDefault = true;
    if (this.isFormValid()) {
      const { email, zip, password, firstName, lastName, identifier } = this.state;
      axios.post(`${config.backendUrl}/users`, {
        user: {
          first_name: firstName,
          last_name: lastName,
          email,
          zip,
          password,
          identifier
        }
      }).then(() => {
        this.setState({ success: true, error: null });
      }).catch((error) => {
        const data = _.get(error, 'response.data');
        let errorMessage = '';
        if (data) {
          Object.keys(data).forEach((key) => {
            if (data && data.hasOwnProperty(key)) { // eslint-disable-line
              errorMessage += ` ${key}: ${data[key][0]} `;
            }
          });
        }
        this.setState({ error: errorMessage });
      });
    }
  }

  render() {
    const showStep = this.showStep();
    return (
      <Section className={styles.signup} title="More Info">
        <p>At Op-Code, we really need more information to make this all work. Please take a minute to complete these steps.</p>
        {showStep}
      </Section>
    );
  }
}

export default SignUp;
