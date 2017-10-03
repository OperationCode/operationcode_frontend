import React from 'react';
import { storiesOf } from '@storybook/react';

import Donate from 'shared/components/donate/donate';


storiesOf('shared/components/donate', module)
  .add('Default', () => (
    <Donate />
  ));
