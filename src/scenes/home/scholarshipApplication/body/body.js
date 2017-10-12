import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { postBackend } from 'shared/utils/apiHelper';
import FormTextArea from 'shared/components/form/formTextArea/formTextArea';
import FormCheckBox from 'shared/components/form/formCheckBox/formCheckBox';
import FormButton from 'shared/components/form/formButton/formButton';
import styles from './body.css';

class Body extends Component {
  constructor() {
    super();
    this.state = {
      terms_accepted: false,
      reason: '',
      reasonValid: false,
      error: null
    };
  }

  onTextAreaChange = (value) => {
    const valid = value !== '';
    this.setState({
      reason: value,
      reasonValid: valid
    });
  }

  onCheckboxChange = (event) => {
    this.setState({
      terms_accepted: event.target.checked
    });
  }

  handleOnClick = (e) => {
    e.preventDefault();
    const body = {
      reason: this.state.reason,
      terms_accepted: this.state.terms_accepted,
      scholarship_id: this.props.scholarship_id
    };
    postBackend('scholarship_applications', body).then(() => {
      this.props.onSuccess();
    }).catch((failed) => {
      const { error } = failed.response.data;
      this.setState({ error });
    });
  }

  isValid = () =>
    this.state.terms_accepted
    && this.state.reasonValid;

  render() {
    return (
      <div>
        <div className={styles.title}>Reason for Attending<span className={styles.red}> *</span></div>
        <FormTextArea onChange={this.onTextAreaChange} placeHolder="Please write about why you want to attend this conference, and what you hope to get out of it." />
        <div className={styles.title}>Conditions for Acceptance<span className={styles.red}> *</span></div>
        <div className={styles.terms}> {this.props.scholarship_terms} </div>
        <FormCheckBox name="scholarship_application" value="I agree" checked={this.state.terms_accepted} onChange={this.onCheckboxChange} checkBox={{ display: 'block', margin: '20px 0px 20px 5px' }} label={{ textTransform: 'uppercase', fontWeight: 'bold', marginLeft: '15px' }} />
        {this.isValid() ? <FormButton className={styles.active_button} text="Submit Application" onClick={this.handleOnClick} /> : <FormButton className={styles.grey_button} text="Submit Application" disabled />}
        <div className={styles.red}>{this.state.error}</div>
      </div>
    );
  }
}

Body.propTypes = {
  scholarship_id: PropTypes.string.isRequired,
  scholarship_terms: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired
};

export default Body;
