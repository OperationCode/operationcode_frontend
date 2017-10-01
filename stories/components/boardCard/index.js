import React from 'react';
import { storiesOf } from '@storybook/react';

import BoardCard from 'shared/components/boardCard/boardCard';

import jamesBondJpg from './james-bond.jpg';

storiesOf('shared/components/boardCard', module)
  .add('Default', () => (
    <BoardCard
      name="James Bond"
      src={jamesBondJpg}
      alt="james-bond"
      role="developer"
    />
  ));
