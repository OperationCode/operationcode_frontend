import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


import Form from 'shared/components/form/form';
import FormInput from 'shared/components/form/formInput/formInput';
import FormButton from 'shared/components/form/formButton/formButton';


class SimpleForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
    };
  }

  updateValue = (fieldName, value, isValid) => {
    if (isValid) {
      this.setState({ [fieldName]: value });
    }
  }

  handleFirstNameChange = (value, isValid) => {
    this.updateValue('firstName', value, isValid);
  }

  handleLastNameChange = (value, isValid) => {
    this.updateValue('lastName', value, isValid);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    action('submit')(this.state);
  }

  render() {
    return (
      <Form>
        <FormInput
          id="firstName"
          label="First Name"
          onChange={this.handleFirstNameChange}
        />
        <FormInput
          id="lastName"
          label="Last Name"
          onChange={this.handleLastNameChange}
        />
        <div style={{ marginTop: '10px' }}>
          <FormButton onClick={this.handleSubmit} text="Submit" />
        </div>
      </Form>
    );
  }
}

storiesOf('shared/components/form', module)
  .add('Simple form', () => (
    <SimpleForm />
  ));