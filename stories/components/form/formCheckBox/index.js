import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FormCheckBox from 'shared/components/form/formCheckBox/formCheckBox';


storiesOf('shared/components/form/formCheckBox', module)
  .add('Default', () => (
    <FormCheckBox
      name="check"
      value="checked"
      onChange={action('clicked')}
    />
  ))
  .add('With custom checkob div style', () => (
    <FormCheckBox
      name="check"
      value="checked"
      onChange={action('clicked')}
      checkBox={{
        display: 'inline',
        margin: '14px'
      }}
    />
  ))
  .add('With custom label styles', () => (
    <FormCheckBox
      name="check"
      value="checked"
      onChange={action('clicked')}
      label={{
        fontWeight: '16px',
        margin: '16px'
      }}
    />
  ));