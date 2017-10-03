import React from 'react';
import { storiesOf } from '@storybook/react';

import FormButton from 'shared/components/form/formButton/formButton';


storiesOf('shared/components/form/formButton', module)
  .add('Default button', () => (
    <FormButton
      text="Button"
    />
  ))
  .add('Red button', () => (
    <FormButton
      text="Button"
      theme="red"
    />
  ))
  .add('Gray button', () => (
    <FormButton
      text="Button"
      theme="grey"
    />
  ));