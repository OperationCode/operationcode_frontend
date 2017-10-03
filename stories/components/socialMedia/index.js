import React from 'react';
import { storiesOf } from '@storybook/react';

import SocialMedia from 'shared/components/socialMedia/socialMedia';


storiesOf('shared/components/socialMedia', module)
  .add('Default', () => (
    <SocialMedia />
  ));
