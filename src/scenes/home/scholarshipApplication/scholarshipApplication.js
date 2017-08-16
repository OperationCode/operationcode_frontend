import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getScholarship } from 'shared/utils/apiHelper';
import Section from 'shared/components/section/section';
import Form from 'shared/components/form/form';
import FormTextArea from 'shared/components/form/formTextArea/formTextArea';
import FormCheckbox from 'shared/components/form/formCheckbox/formCheckbox';
import FormButton from 'shared/components/form/formButton/formButton';
import styles from './scholarshipApplication.css';

class ScholarshipApplication extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      reason: '',
      reasonValid: false,
      scholarship: {}
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    getScholarship(id).then((data) => {
      this.setState({ scholarship: data });
      console.log(this.state.scholarship);
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
      checked: value
    });
  }

  isFormValid = () =>
    this.state.checked
    && this.state.reasonValid;

  render() {
    return (
      <Section theme="white">
        <Form className={styles.applicationForm}>
          <h3> {this.state.scholarship.name} </h3>
          <p> {this.state.scholarship.description} </p>
          <p> {this.state.scholarship.location} </p>
          <div className={styles.title}>Reason for Attending<span className={styles.red}>*</span></div>
          <div className={styles.small_title}>Please write about why you want to attend this conference, and what you hope to get out of it. </div>
          <FormTextArea onChange={this.onTextAreaChange} />
          <div className={styles.title}>Conditions for Acceptance<span className={styles.red}>*</span></div>
          <div className={styles.terms}> {this.state.scholarship.terms} </div>
          <FormCheckbox onChange={this.onCheckboxChange} /><br />
          {this.isFormValid() ? <FormButton text="Submit Application" /> : <FormButton className={styles.grey_button} text="Submit Application" disabled />}
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
