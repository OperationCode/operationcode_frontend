import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FormTextArea from 'shared/components/form/formTextArea/formTextArea';


storiesOf('shared/components/form/formTextArea', module)
  .add('Default', () => (
    <FormTextArea
      placeholder="Place holder"
      onChange={action('changed')}
    />
  ));
