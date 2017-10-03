import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FormInput from 'shared/components/form/formInput/formInput';

storiesOf('shared/components/form/formInput', module)
  .add('Default input', () => (
    <FormInput
      label="Input"
      id="input"
      placeholder="Placeholder"
      onChange={action('input changed')}
    />
  ))
  .add("With validation regexp", () => (
    <FormInput
      label="Time"
      id="time"
      placeholder="Input type here"
      validationRegex={/^\d\d:[0-5]\d$/}
      validationErrorMessage="Time should have format HH:MM"
      onChange={action('input changed')}
    />
  ))
  .add("With validation func", () => (
    <FormInput
      label="Is hex number"
      id="number"
      placeholder="Input type here"
      validateFunc={value => !!parseInt(value, 16)}
      validationErrorMessage="Value should be hex number"
      onChange={action('input changed')}
    />
  ))
  .add("Change input type", () => (
    <FormInput
      label="Password"
      id="password"
      placeholder="Input password here"
      inputType="password"
      onChange={action('input changed')}
    />
  ));