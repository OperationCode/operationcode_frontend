import React, { Component } from 'react';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';
import { getScholarship, postBackend } from 'shared/utils/apiHelper';
import { Redirect } from 'react-router-dom';
import Section from 'shared/components/section/section';
import Form from 'shared/components/form/form';
import FormTextArea from 'shared/components/form/formTextArea/formTextArea';
import FormCheckBox from 'shared/components/form/formCheckBox/formCheckBox';
import FormButton from 'shared/components/form/formButton/formButton';
import styles from './scholarshipApplication.css';

class ScholarshipApplication extends Component {
  constructor() {
    super();
    this.state = {
      terms_accepted: false,
      reason: '',
      reasonValid: false,
      scholarship: {},
      success: false,
      error: null
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    getScholarship(id).then((data) => {
      this.setState({ scholarship: data });
    }).catch((failed) => {
      const error = failed.response.data.error;
      this.setState({ error });
    });
  }

  onTextAreaChange = (value) => {
    const valid = value !== '';
    this.setState({
      reason: value,
      reasonValid: valid
    });
  }

  onCheckboxChange = (value) => {
    this.setState({
      terms_accepted: value
    });
  }

  handleOnClick = (e) => {
    e.preventDefault();
    const body = {
      reason: this.state.reason,
      terms_accepted: this.state.terms_accepted,
      scholarship_id: this.state.scholarship.id
    };
    postBackend('scholarship_applications', body).then(() => {
      this.setState({ success: true });
    }).catch((failed) => {
      const error = failed.response.data.error;
      this.setState({ error });
    });
  }

  isFormValid = () =>
    this.state.terms_accepted
    && this.state.reasonValid;

  render() {
    return (
      <Section theme="white">
        <Form className={styles.applicationForm}>
          <h3> {this.state.scholarship.name} </h3>
          <p> {this.state.scholarship.description} </p>
          <p> {this.state.scholarship.location} </p>
          <p className={styles.deadline}>Apply by {dateFormat(this.state.scholarship.close_time, 'fullDate')} </p>
          <div className={styles.title}>Reason for Attending<span className={styles.red}>*</span></div>
          <div className={styles.small_title}>Please write about why you want to attend this conference, and what you hope to get out of it. </div>
          <FormTextArea onChange={this.onTextAreaChange} />
          <div className={styles.title}>Conditions for Acceptance<span className={styles.red}>*</span></div>
          <div className={styles.terms}> {this.state.scholarship.terms} </div>
          <FormCheckBox name="scholarship_application" value="I agree" onChange={this.onCheckboxChange} /><br />
          {this.isFormValid() ? <FormButton text="Submit Application" onClick={this.handleOnClick} /> : <FormButton className={styles.grey_button} text="Submit Application" disabled />}
          {this.state.success && <Redirect to="/success" />}
          <div className={styles.red}>{this.state.error}</div>
        </Form>
      </Section>
    );
  }
}

ScholarshipApplication.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string
    }),
    path: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
};

export default ScholarshipApplication;
