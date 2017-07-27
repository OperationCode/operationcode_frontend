import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import FormInput from '../../src/shared/components/form/formInput/formInput';

storiesOf('formInput', module)
  .add('Basic', () => (
    <FormInput id="basic" />
  ))
  .add('Labeled', () => (
    <FormInput id="labeled" label="Labeled" />
  ))
  .add('Placeholder', () => (
    <FormInput id="placeholder" placeholder="Placeholder" />
  ))
  .add('Alert on change', () => (
    <FormInput id="alert_on_change" onChange={() => {alert("Changed!")} }/>
  ))
