import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'shared/components/form/form';
import FormButton from 'shared/components/form/formButton/formButton';
import FormInput from 'shared/components/form/formInput/formInput';
import FormSelect from 'shared/components/form/formSelect/formSelect';
import * as ApiHelpers from 'shared/utils/apiHelper';
import Section from 'shared/components/section/section';
import styles from './mentorRequest.css';


class MentorRequest extends Component {
  state = {
    mentors: [],
    services: [],
    loggedIn: true
  };

  componentDidMount() {
    Promise.all([ApiHelpers.getServices(), ApiHelpers.getMentors()]).then((values) => {
      this.setState({
        services: values[0],
        mentors: values[1]
      });
    }).catch(this.setFetchError);
  }

  onSlackNameChange = (name) => {
    this.setState({
      slackName: name
    });
  }

  onDetailsChange = (details) => {
    this.setState({
      additionalDetails: details
    });
  }

  onUpdateSelect = (name, event) => {
    this.setState({
      [name]: event.target.value
    });
  }

  setFetchError = ({ response }) => {
    if (response.status === 401) {
      this.setState({ loggedIn: false });
    } else {
      this.setState({ error: 'There was an error building the form. Please try again' });
    }
  }

  buildServiceOptions = () =>
    this.state.services.map(service => ({ value: service.id, label: service.name }))

  buildMentorOptions = () =>
    this.state.mentors.map(mentor => ({ value: mentor.id, label: `${mentor.last_name}, ${mentor.first_name}` }))

  buildLanguageOptions = () =>
    [
      { value: 'javascript', label: 'Javascript' },
      { value: 'ruby', label: 'Ruby' },
      { value: 'python', label: 'Python' },
      { value: 'java', label: 'Java' },
      { value: 'dotnet', label: '.NET' },
      { value: 'htmlcss', label: 'HTML/CSS' }
    ]

  handleOnClick = () => {
    ApiHelpers.postRequest({
      language: this.state.languageType,
      additionalDetails: this.state.additionalDetails,
      service: this.state.serviceType,
      mentor: this.state.mentor
    }).then(() => {
      this.setState({ success: true });
    }).catch(() => {
      this.setState({ error: 'There was an error requesting a mentor.' });
    });
  }

  render() {
    const { error, loggedIn, success } = this.state;
    if (!loggedIn) {
      return <Redirect to="/login" />;
    }
    return (
      <Section className={styles.mentorRequest} title="Mentor Service Request">
        { error && <div className={styles.mentorRequestError}>{error}</div> }
        <Form className={styles.mentorRequestForm}>
          <span>
            Please use this form to schedule a mentorship session.
            Each session is 30 minutes. If you think youll need more time
            please let us know in the additional comments field below.
          </span>

          <div className={styles.formBlock}>
            <div className={styles.formElement}>
              <h2>Slack Name</h2>
              <p>If you are on Slack, this will help us better serve you</p>
              <FormInput id="slackName" placeholder="Slack username" onChange={this.onSlackNameChange} />
            </div>

            <div className={styles.formElement}>
              <h2>Service</h2>
              <p>Which one of our services would you like to book?</p>
              <FormSelect
                id="serviceType"
                prompt="Choose service"
                options={this.buildServiceOptions()}
                onChange={e => this.onUpdateSelect('serviceType', e)}
              />
            </div>
          </div>

          <div className={styles.formBlock}>
            <div className={styles.formElement}>
              <h2>Language</h2>
              <p>Do you need a mentor for a specific language?</p>
              <FormSelect
                id="languageType"
                options={this.buildLanguageOptions()}
                onChange={e => this.onUpdateSelect('languageType', e)}
                prompt="Select language"
              />
            </div>

            <div className={styles.formElement}>
              <h2>Mentor</h2>
              <p>Would you like to pick a specific mentor?</p>
              <FormSelect
                id="mentor"
                prompt="Choose mentor"
                options={this.buildMentorOptions()}
                onChange={e => this.onUpdateSelect('mentor', e)}
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <h2>Additional Details</h2>
            <p>Please provide us with any more info that may help in us in assigning a mentor to this request.</p>
            <FormInput id="additionalDetails" onChange={this.onDetailsChange} />
            <FormButton className={styles.joinButton} text="Request Mentor" onSubmit={this.handleOnClick} theme="red" />
            {success && <Redirect to="/thanks" />}
          </div>
        </Form>
      </Section>
    );
  }
}

export default MentorRequest;
