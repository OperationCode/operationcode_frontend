import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import FormInput from 'shared/components/form/formInput/formInput';
import FormSelect from 'shared/components/form/formSelect/formSelect';
import { getServices, getMentors } from 'shared/utils/apiHelper';
import Section from 'shared/components/section/section';
import styles from './mentorRequest.css';

export default class MentorRequest extends Component {
  state = {
    mentors: [],
    services: []
  };

  componentDidMount() {
    getServices().then((services) => {
      this.setState({ services });
    }).catch(this.setFetchError);

    getMentors().then((mentors) => {
      this.setState({ mentors });
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

  onServiceTypeChange = (service) => {
    this.setState({
      serviceType: service
    });
  }

  onLanguageTypeChange = (language) => {
    this.setState({
      languageType: language
    });
  }

  setFetchError = () => {
    this.setState({ error: 'There was an error building the form. Please try again' });
  }

  buildServiceOptions = () =>
    this.state.services.map(service => ({ value: service, label: service }))

  buildMentorOptions = () =>
    this.state.mentors.map(mentor => ({ value: mentor.id, label: mentor.email }))

  buildLanguageOptions = () =>
    [
      { value: 'javascript', label: 'Javascript' },
      { value: 'ruby', label: 'Ruby' },
      { value: 'python', label: 'Python' },
      { value: 'java', label: 'Java' },
      { value: 'dotnet', label: '.NET' },
      { value: 'htmlcss', label: 'HTML/CSS' }
    ]

  render() {
    const { error } = this.state;
    return (
      <Section className={styles.mentorRequest} title="Mentor Service Request">
        { error && <div className={styles.mentorRequestError}>{error}</div> }
        <Form className={styles.mentorRequestForm}>
          <span>
            Please use this form to schedule a mentorship session.
            Each session is 30 minutes. If you think youll need more time
            please let us know in the additional comments field below.
          </span>

          <h2>Slack Name</h2>
          <FormInput id="slackName" placeholder="Slack username" onChange={this.onSlackNameChange} />

          <h2>Service</h2>
          <p>Which one of our services would you like to book?</p>
          <FormSelect id="serviceType" prompt="Choose service" options={this.buildServiceOptions()} onChange={this.onServiceTypeChange} />

          <h2>Language</h2>
          <p>Do you need a mentor for a specific language?</p>
          <FormSelect id="languageType" options={this.buildLanguageOptions()} onChange={this.onLanguageTypeChange} prompt="Select language" />

          <h2>Mentor</h2>
          <p>Would you like to pick a specific mentor?</p>
          <FormSelect id="mentor" prompt="Choose mentor" options={this.buildMentorOptions()} onChange={this.onMentorChange} />

          <h2>Additional Details</h2>
          <p>Please provide us with any more info that may help in us in assigning a mentor to this request.</p>
          <FormInput id="additionalDetails" onChange={this.onDetailsChange} />
        </Form>
      </Section>
    );
  }
}
