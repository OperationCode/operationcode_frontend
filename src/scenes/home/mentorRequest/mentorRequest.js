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

  render() {
    return (
      <div>
        <h1>Mentor Service Request</h1>
        <Form>
          <FormInput id="slackName" onChange={this.onSlackNameChange} />
          <FormInput id="additionalDetails" onChange={this.onDetailsChange} />
        </Form>
      </div>
    );
  }
}
