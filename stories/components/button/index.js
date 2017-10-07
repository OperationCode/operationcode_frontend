import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from 'shared/components/button/button';

storiesOf('shared/components/button', module)
  .add('Default', () => (
    <Button handleClick={action('action')}>Click</Button>
  ));