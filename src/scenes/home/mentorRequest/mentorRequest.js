import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import FormInput from 'shared/components/form/formInput/formInput';

export default class MentorRequest extends Component {
  state = {
    additionalDetails: '',
    slackName: ''
  };

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

  render() {
    return (
      <div>
        <h1>Mentor Service Request</h1>
        <Form>
          <FormInput id="slackName" onChange={this.onSlackNameChange} />
          <select id="serviceType" value={this.state.serviceType} onChange={this.onServiceTypeChange}>
            <option value="voiceChat">General Guidance - Voice Chat</option>
            <option value="slackChat">General Guidance - Slack Chat</option>
            <option value="pairProgramming">Pair Programming</option>
            <option value="codeReview">Code Review</option>
            <option value="mockInterview">Mock Interview</option>
            <option value="resumeReview">Resume Review</option>
          </select>
          <FormInput id="additionalDetails" onChange={this.onDetailsChange} />

        </Form>
      </div>
    );
  }
}
