import React from 'react';
import { storiesOf } from '@storybook/react';

import TeamCard from 'shared/components/teamCard/teamCard';


storiesOf('shared/components/teamCard', module)
  .add('Default', () => (
    <TeamCard
      name="James Bond"
      role="Developer"
    />
  ));
