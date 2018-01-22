import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import axios from 'axios';
import PropTypes from 'prop-types';
import config from 'config/environment';
import Form from 'shared/components/form/form';
import FormEmail from 'shared/components/form/formEmail/formEmail';
import FormButton from 'shared/components/form/formButton/formButton';
import styles from './emailSignup.css';

class EmailSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailValid: false,
      success: false,
      isLoading: false,
    };
  }

  onEmailChange = (value, valid) => {
    this.setState({ email: value.toLowerCase(), emailValid: valid });
  };
  /* eslint-disable */
  handleOnClick = e => {
    e.preventDefault();

    this.setState({ isLoading: true });

    if (this.isFormValid()) {
      const { email } = this.state;
      axios
        .post(`${config.backendUrl}/email_list_recipients`, `email=${email}`)
        .then(() => {
          this.setState({
            isLoading: false,
            success: true,
          });
          this.props.sendNotification('success', 'Success', 'Welcome to our E-mail list!');
        })
        .catch(() => {
          this.props.sendNotification(
            'error',
            'Error',
            'Please try signing up again. Contact one of our staff if this problem persists.'
          );
          this.setState({ isLoading: false });
        });
    } else {
      this.setState({ error: 'Missing required field(s)', isLoading: false });
    }
  };

  isFormValid = () => this.state.emailValid;

  render() {
    return (
      <Section
        title="Sign Up For Our Mailing List"
        className={styles.emailSignup}
        theme="white"
        headingLines={false}
      >
        <p className={styles.emailSignupText}>
          Keep up to date with everything Operation Code. We proimse we won&#39;t spam you or sell
          your information.
        </p>
        <Form className={styles.emailListForm}>
          <div className={styles.emailInput}>
            <FormEmail id="email" placeholder="Email" onChange={this.onEmailChange} />
          </div>
          {this.state.error && (
            <ul className={styles.errorList}>
              There was an error joining the mailing list:
              <li className={styles.errorMessage}>{this.state.error}</li>
            </ul>
          )}
          {this.state.isLoading ? (
            <FormButton className={styles.joinButton} text="Loading..." disabled theme="grey" />
          ) : (
            <FormButton
              className={styles.joinButton}
              text="Sign Up"
              onClick={this.handleOnClick}
              theme="blue"
            />
          )}
        </Form>
      </Section>
    );
  }
}

EmailSignup.propTypes = {
  sendNotification: PropTypes.func.isRequired,
};

export default EmailSignup;
