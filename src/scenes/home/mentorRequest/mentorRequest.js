import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import FormInput from 'shared/components/form/formInput/formInput';
import { getServices, getMentors } from 'shared/utils/apiHelper';
import Section from 'shared/components/section/section';
import styles from './mentorRequest.css';

export default class MentorRequest extends Component {
  state = {
    additionalDetails: '',
    mentors: [],
    slackName: '',
    services: []
  };

  componentDidMount() {
    getServices().then((services) => {
      this.setState({
        services
      });
    }).catch(() => {
      alert('there was an error getting services');
    });

    getMentors().then((mentors) => {
      this.setState({
        mentors
      });
    }).catch(() => {
      alert('there was an error getting mentors');
    });
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

  render() {
    return (
      <Section className={styles.mentorRequest} title="Mentor Service Request">
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
          <select id="serviceType" value={this.state.serviceType} onChange={this.onServiceTypeChange}>
            {this.state.services.map(service => <option value={service}>{service}</option>)}
          </select>
          <h2>Language</h2>
          <p>Do you need a mentor for a specific language?</p>
          <select id="languageType" value={this.state.languageType} onChange={this.onLanguageTypeChange}>
            <option value="javascript">Javascript</option>
            <option value="ruby">Ruby</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="dotnet">.NET</option>
            <option value="htmlcss">HTML/CSS</option>
          </select>
          <h2>Mentor</h2>
          <p>Would you like to pick a specific mentor?</p>
          <select id="mentor" value={this.state.mentor} onChange={this.onMentorChange}>
            <option value="namePlaceholder">Mentor Name</option>
          </select>
          <h2>Additional Details</h2>
          <p>Please provide us with any more info that may help in us in assigning a mentor to this request.</p>
          <FormInput id="additionalDetails" onChange={this.onDetailsChange} />

        </Form>
      </Section>
    );
  }
}
