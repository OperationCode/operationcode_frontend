import React from 'react';
import Section from 'shared/components/section/section';
import Form from 'shared/components/form/form';
import FormZipCode from 'shared/components/form/formZipCode/formZipCode';
import FormPassword from 'shared/components/form/formPassword/formPassword';
import FormButton from 'shared/components/form/formButton/formButton';
import styles from 'scenes/home/informationForm/informationForm.css';
import SocialLogin from './socialLogin';

class AdditionalInfo extends React.Component {
  state = {
    zip: '',
    password: ''
  }
  onZipChange = (value, valid) => {
    this.setState({ zip: value, zipValid: valid });
  }

  onPasswordChange = (value, valid) => {
    this.setState({ password: value, passwordValid: valid });
  }
  handleOnClick = (e) => {
    e.preventDefault();
    console.log('Here!');
    SocialLogin.zip = this.state.zip;
    SocialLogin.password = this.state.zip;
    SocialLogin.register();
  };
  render() {
    return (
      <Section className={styles.signup} title="Zipcode and Password Required">
        <Form className={styles.signupForm}>
          <FormZipCode
            id="zip"
            placeholder="Zip Code (Required)"
            onChange={this.onZipChange}
            ref={(child) => { this.zipRef = child; }}
          />
          <FormPassword
            id="password"
            placeholder="Password (Required)"
            onChange={this.onPasswordChange}
            validationRegex={/^(?=.*[A-Z]).{6,}$/}
            validationErrorMessage="Must be 6 characters long and include a capitalized letter"
            ref={(child) => { this.passwordRef = child; }}
          />
          <FormButton className={styles.joinButton} text="Join" onClick={this.handleOnClick} theme="red" />
        </Form>
      </Section>
    );
  }
}

export default AdditionalInfo;
