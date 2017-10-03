import React from 'react';
import { storiesOf } from '@storybook/react';

import FormPassword from 'shared/components/form/formPassword/formPassword';

storiesOf('shared/components/form/formPassword', module)
  .add('Default', () => (
    <FormPassword
      label="password"
    />
  ));