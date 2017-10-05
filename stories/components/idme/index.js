import React from 'react';
import { storiesOf } from '@storybook/react';

import Idme from 'shared/components/idme/idme';


storiesOf('shared/components/idme', module)
  .add('Default', () => (
    <Idme />
  ));