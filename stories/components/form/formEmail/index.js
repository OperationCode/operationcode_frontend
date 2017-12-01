import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FormEmail from 'shared/components/form/formEmail/formEmail';


storiesOf('shared/components/form/formEmail', module)
  .add('Default', () => (
    <FormEmail
      onChange={action('Changed')}
    />
  ));